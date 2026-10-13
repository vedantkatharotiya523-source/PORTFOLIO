import type { ContactFormSchemaType } from "@/lib/validators";

export type ContactFormValues = ContactFormSchemaType;

export interface ContactApiResponse {
  success: boolean;
  message: string;
  error?: string;
}
