import { z } from "zod";
import { careAreas } from "@/data/care-areas";
import { destinations } from "@/data/destinations";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().trim().min(6, "Please enter your phone number so we can reach you."),
  contactMethod: z.string().optional().or(z.literal("")),
  careArea: z.string().optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || value.length >= 10, "Please tell us a little more about your situation."),
});

export type ContactLead = z.infer<typeof contactSchema>;

export const careAreaOptions = careAreas.map((a) => a.title);
export const destinationOptions = destinations.map((d) => d.name);

export type LeadResult =
  | { status: "success"; reference: string }
  | { status: "error"; errors: Partial<Record<keyof ContactLead, string[]>> };

export async function storeLead(lead: ContactLead): Promise<LeadResult> {
  // The lead is validated before reaching this function.
  // Integration point: send the lead to your email service (e.g. Resend, SendGrid)
  // or CRM (e.g. HubSpot), and notify your coordination team.
  // For now we simply record the reference so the submission round-trips.
  const reference = `PFW-${Date.now().toString(36).toUpperCase()}`;
  console.info(`[lead] ${reference} — ${lead.name} (${lead.email}) careArea=${lead.careArea} contactMethod=${lead.contactMethod}`);
  return { status: "success", reference };
}
