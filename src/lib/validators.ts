import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .email("Please provide a valid email address")
    .max(150, "Email must be under 150 characters"),
  projectType: z.enum([
    "ATS with AI Calling",
    "Multi-Tenant CRM",
    "AI Agent / Chatbot",
    "Email / Campaign Studio",
    "E-commerce / Scraper",
    "Custom Web Application",
    "Other Consultation",
  ]),
  budget: z.enum([
    "< $2,500",
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
    "Hourly / Retainer",
  ]),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(3000, "Message must be under 3000 characters"),
  honeypot: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
