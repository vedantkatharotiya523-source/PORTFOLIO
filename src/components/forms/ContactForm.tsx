"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/lib/validators";
import type { ContactFormValues, ContactApiResponse } from "@/types";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      projectType: "ATS with AI Calling",
      budget: "$5,000 - $10,000",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    if (status === "submitting") return;
    setStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: ContactApiResponse = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setServerMessage(result.message);
        reset();
      } else {
        setStatus("error");
        setServerMessage(result.message || "Failed to submit. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please check your connection or email directly.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 w-full"
      noValidate
      aria-label="Contact inquiry form"
    >
      {/* Honeypot field (hidden from humans, catches automated bots) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-honeypot">Leave blank</label>
        <input
          id="contact-honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
      </div>

      {/* Success Notification */}
      {status === "success" && (
        <div
          role="status"
          className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm flex items-start gap-3"
        >
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold">Message Delivered</strong>
            <span>{serverMessage}</span>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {status === "error" && (
        <div
          role="alert"
          className="p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-400 text-sm flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold">Submission Failed</strong>
            <span>{serverMessage}</span>
          </div>
        </div>
      )}

      {/* Name Field */}
      <div className="space-y-2">
        <label
          htmlFor="contact-name"
          className="block text-xs font-mono uppercase tracking-wider text-[var(--text)] font-semibold"
        >
          Full Name <span className="text-rose-500">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          placeholder="e.g. Sarah Jenkins"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full h-12 px-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] placeholder-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[#7C5CFF] text-sm transition-all"
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-rose-500 m-0">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label
          htmlFor="contact-email"
          className="block text-xs font-mono uppercase tracking-wider text-[var(--text)] font-semibold"
        >
          Email Address <span className="text-rose-500">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="e.g. sarah@company.com"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full h-12 px-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] placeholder-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[#7C5CFF] text-sm transition-all"
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-rose-500 m-0">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Project Type Select */}
      <div className="space-y-2">
        <label
          htmlFor="contact-project-type"
          className="block text-xs font-mono uppercase tracking-wider text-[var(--text)] font-semibold"
        >
          Project Scope / Type <span className="text-rose-500">*</span>
        </label>
        <select
          id="contact-project-type"
          className="w-full h-12 px-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[#7C5CFF] text-sm transition-all cursor-pointer"
          {...register("projectType")}
        >
          <option value="ATS with AI Calling">ATS with AI Calling</option>
          <option value="Multi-Tenant CRM">Multi-Tenant CRM</option>
          <option value="AI Agent / Chatbot">AI Agent / Chatbot (LangGraph)</option>
          <option value="Email / Campaign Studio">Email / Campaign Studio</option>
          <option value="E-commerce / Scraper">E-commerce / Scraper</option>
          <option value="Custom Web Application">Custom Web Application</option>
          <option value="Other Consultation">Other Consultation</option>
        </select>
      </div>

      {/* Budget Select */}
      <div className="space-y-2">
        <label
          htmlFor="contact-budget"
          className="block text-xs font-mono uppercase tracking-wider text-[var(--text)] font-semibold"
        >
          Estimated Budget Range <span className="text-rose-500">*</span>
        </label>
        <select
          id="contact-budget"
          className="w-full h-12 px-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[#7C5CFF] text-sm transition-all cursor-pointer"
          {...register("budget")}
        >
          <option value="< $2,500">&lt; $2,500</option>
          <option value="$2,500 - $5,000">$2,500 - $5,000</option>
          <option value="$5,000 - $10,000">$5,000 - $10,000</option>
          <option value="$10,000+">$10,000+</option>
          <option value="Hourly / Retainer">Hourly / Retainer</option>
        </select>
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="block text-xs font-mono uppercase tracking-wider text-[var(--text)] font-semibold"
        >
          Project Details / Message <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell me about your goals, current stack, timeline, and key requirements..."
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] placeholder-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[#7C5CFF] text-sm transition-all resize-y"
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-rose-500 m-0">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 rounded-xl text-base font-bold shadow-lg shadow-[#7C5CFF]/20 min-h-[48px]"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending Inquiry...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Project Inquiry</span>
          </>
        )}
      </Button>

      <p className="text-center text-xs text-[var(--text-muted)] font-mono">
        Guaranteed response within 24 business hours. No spam, ever.
      </p>
    </form>
  );
}
