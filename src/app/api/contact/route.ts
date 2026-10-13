import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validators";
import { profileData } from "@/data/profile";
import type { ContactApiResponse } from "@/types";

// In-memory rate limiting map: IP -> last submission timestamp
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window

export async function POST(request: Request) {
  try {
    // 1. IP extraction and Rate Limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "anonymous";
    const now = Date.now();
    const lastRequestTime = rateLimitMap.get(ip);

    if (lastRequestTime && now - lastRequestTime < RATE_LIMIT_WINDOW_MS) {
      const waitSeconds = Math.ceil(
        (RATE_LIMIT_WINDOW_MS - (now - lastRequestTime)) / 1000
      );
      return NextResponse.json<ContactApiResponse>(
        {
          success: false,
          message: `Please wait ${waitSeconds} seconds before submitting again.`,
          error: "Rate limit exceeded",
        },
        { status: 429 }
      );
    }

    // 2. Body parsing and Zod Validation
    const body = await request.json();
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const firstError = validationResult.error.issues[0]?.message || "Validation failed";
      return NextResponse.json<ContactApiResponse>(
        {
          success: false,
          message: firstError,
          error: "Invalid form data",
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 3. Honeypot check (silent drop if bot)
    if (data.honeypot && data.honeypot.trim() !== "") {
      // Return fake success to bots
      return NextResponse.json<ContactApiResponse>(
        {
          success: true,
          message: "Thank you for your message.",
        },
        { status: 200 }
      );
    }

    // Update rate limit timestamp for valid requests
    rateLimitMap.set(ip, now);

    // 4. Resend Delivery
    const resendApiKey = process.env.RESEND_API_KEY?.trim();
    const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || profileData.email;

    console.log("[Contact API] Processing submission from:", data.email, "for project:", data.projectType);
    console.log("[Contact API] Target recipient (toEmail):", toEmail);
    console.log("[Contact API] RESEND_API_KEY exists:", !!resendApiKey, "Key prefix:", resendApiKey ? resendApiKey.slice(0, 7) + "..." : "none");

    if (resendApiKey && resendApiKey.startsWith("re_") && resendApiKey !== "re_123456789") {
      try {
        const resend = new Resend(resendApiKey);
        console.log("[Contact API] Dispatching email via Resend SDK...");

        const result = await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: toEmail,
          replyTo: data.email,
          subject: `[Portfolio Inquiry] ${data.projectType} from ${data.name}`,
          text: `Name: ${data.name}\nEmail: ${data.email}\nProject Type: ${data.projectType}\nBudget: ${data.budget}\n\nMessage:\n${data.message}`,
        });

        console.log("[Contact API] Resend dispatch result:", JSON.stringify(result, null, 2));

        if (result.error) {
          console.error("[Contact API] Resend returned error:", result.error);
          return NextResponse.json<ContactApiResponse>(
            {
              success: false,
              message: `Email delivery issue: ${result.error.message}`,
              error: result.error.message,
            },
            { status: 502 }
          );
        }

        console.log("[Contact API] Email successfully sent! ID:", result.data?.id);
      } catch (sendErr) {
        console.error("[Contact API] Exception during resend.emails.send:", sendErr);
        throw sendErr;
      }
    } else {
      console.warn(
        "[Contact API] Resend key is missing or placeholder. Message logged to console only:",
        data
      );
    }

    return NextResponse.json<ContactApiResponse>(
      {
        success: true,
        message: "Your message has been sent successfully. I will get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[Contact API Error]:", err);
    return NextResponse.json<ContactApiResponse>(
      {
        success: false,
        message: "An unexpected error occurred while sending your message. Please try again.",
        error: err instanceof Error ? err.message : "Internal server error",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const resendApiKey = process.env.RESEND_API_KEY?.trim();

    if (!id) {
      return NextResponse.json({ error: "Missing ?id= parameter" }, { status: 400 });
    }

    if (!resendApiKey) {
      return NextResponse.json({ error: "RESEND_API_KEY not configured" }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);
    const result = await resend.emails.get(id);

    console.log("[Contact API] Status check for email ID", id, ":", JSON.stringify(result, null, 2));

    return NextResponse.json(result, { status: 200 });
  } catch (err: unknown) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to fetch status" },
      { status: 500 }
    );
  }
}

