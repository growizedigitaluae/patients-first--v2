"use server";

import { contactSchema, storeLead, type LeadResult } from "@/lib/leads";

export type ContactState = {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<string, string[]>>;
  reference?: string;
  values?: Record<string, string>;
};

export async function submitLead(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    contactMethod: String(formData.get("contactMethod") ?? ""),
    careArea: String(formData.get("careArea") ?? ""),
    message: String(formData.get("message") ?? ""),
    consent: formData.get("consent") === "on",
  };

  const values = {
    name: raw.name,
    email: raw.email,
    phone: raw.phone,
    contactMethod: raw.contactMethod,
    careArea: raw.careArea,
    message: raw.message,
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    return {
      status: "error",
      errors: result.error.flatten().fieldErrors,
      values,
    };
  }

  const leadResult: LeadResult = await storeLead(result.data);

  if (leadResult.status === "error") {
    return { status: "error", values };
  }

  return {
    status: "success",
    reference: leadResult.reference,
    values,
  };
}
