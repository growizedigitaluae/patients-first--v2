"use client";

import { useActionState, useEffect, useRef } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import { submitLead, type ContactState } from "@/app/(site)/contact/actions";
import { countries, defaultCountryCode } from "@/data/countries";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "w-full border border-[#082237]/20 rounded-xl px-3.5 py-3 text-[16px] text-[#082237] bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#C88A2B] transition";

const selectClass =
  "w-full border border-[#082237]/20 rounded-xl px-3.5 py-3 text-[15px] text-[#082237] bg-white focus:outline-none focus:border-[#C88A2B] transition cursor-pointer";

const labelClass = "block text-sm text-[#082237] tracking-[0.02em] mb-1.5";

export function InboundContactForm() {
  const [state, formAction, isPending] = useActionState(submitLead, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status !== "success") return;

    formRef.current?.reset();

    // Send conversion event only; never send form values or personal/health data to analytics.
    sendGTMEvent({
      event: "pfw_generate_lead",
      form_name: "pfw_inbound_english",
    });
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className="bg-white border border-[#082237]/10 rounded-3xl p-8 text-center space-y-4">
        <CheckCircle2 className="mx-auto h-10 w-10 text-[#C88A2B]" aria-hidden="true" />
        <h3 className="text-2xl font-serif text-[#082237]">
          Thank You — We’ve Received Your Enquiry
        </h3>
        <p className="text-[#082237] text-sm leading-relaxed">
          Our coordination team will contact you, usually within one business day, to understand
          your enquiry and explain the next steps.
        </p>
        <p className="text-xs text-[#082237]">Reference: {state.reference}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-[18px]">
      <input type="hidden" name="careArea" value="Inbound Treatment UAE - English" />

      <div>
        <label htmlFor="inbound-name" className={labelClass}>Full Name *</label>
        <input
          id="inbound-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={120}
          placeholder="Your full name"
          className={inputClass}
          defaultValue={state.values?.name}
        />
        {state.errors?.name && <p className="mt-1.5 text-xs text-red-600">{state.errors.name[0]}</p>}
      </div>

      <div>
        <label htmlFor="inbound-country-code" className={labelClass}>Phone Number *</label>
        <div className="flex gap-2">
          <select
            id="inbound-country-code"
            name="countryCode"
            aria-label="Phone country code"
            className="w-[135px] shrink-0 rounded-xl border border-[#082237]/20 bg-white px-2.5 py-3 text-sm text-[#082237] focus:outline-none focus:border-[#C88A2B] sm:w-[175px]"
            defaultValue={state.values?.countryCode ?? defaultCountryCode}
            required
          >
            {countries.map((country) => (
              <option key={country.iso} value={country.code}>
                {country.flag} {country.name} ({country.code})
              </option>
            ))}
          </select>
          <input
            id="inbound-phone"
            name="phone"
            type="tel"
            autoComplete="tel-national"
            inputMode="tel"
            required
            maxLength={40}
            placeholder="Your phone number"
            className={`${inputClass} min-w-0 flex-1`}
            defaultValue={state.values?.phone}
          />
        </div>
        {state.errors?.phone && <p className="mt-1.5 text-xs text-red-600">{state.errors.phone[0]}</p>}
      </div>

      <div>
        <label htmlFor="inbound-email" className={labelClass}>Email Address *</label>
        <input
          id="inbound-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          placeholder="you@example.com"
          className={inputClass}
          defaultValue={state.values?.email}
        />
        {state.errors?.email && <p className="mt-1.5 text-xs text-red-600">{state.errors.email[0]}</p>}
      </div>

      <div>
        <label htmlFor="inbound-interest" className={labelClass}>What would you like help with? *</label>
        <select
          id="inbound-interest"
          name="interest"
          required
          className={selectClass}
          defaultValue=""
        >
          <option value="" disabled>Select an option</option>
          <option value="Understanding care coordination in the UAE">Understanding care coordination in the UAE</option>
          <option value="Finding a suitable hospital or specialist">Finding a suitable hospital or specialist</option>
          <option value="Planning a medical visit to the UAE">Planning a medical visit to the UAE</option>
          <option value="Second opinion coordination">Second opinion coordination</option>
          <option value="Travel and appointment coordination">Travel and appointment coordination</option>
          <option value="Other enquiry">Other</option>
        </select>
        <p className="mt-1 text-xs leading-relaxed text-[#082237]/70">
          This helps us understand the type of coordination information you’re looking for.
        </p>
      </div>

      <div>
        <label htmlFor="inbound-contact-method" className={labelClass}>Preferred Contact Method *</label>
        <select
          id="inbound-contact-method"
          name="contactMethod"
          required
          className={selectClass}
          defaultValue={state.values?.contactMethod ?? "WhatsApp"}
        >
          <option value="WhatsApp">WhatsApp</option>
          <option value="Phone">Phone call</option>
          <option value="Email">Email</option>
        </select>
      </div>

      <div>
        <label htmlFor="inbound-message" className={labelClass}>Message (Optional)</label>
        <textarea
          id="inbound-message"
          name="message"
          rows={3}
          maxLength={1000}
          placeholder="Tell us briefly how we can assist with coordination."
          className={`${inputClass} resize-y`}
          defaultValue={state.values?.message}
        />
        <p className="mt-1 text-xs leading-relaxed text-[#082237]/70">
          Please do not include diagnoses, detailed medical information, medical reports, passport
          details, or payment information in this initial enquiry.
        </p>
        {state.errors?.message && <p className="mt-1.5 text-xs text-red-600">{state.errors.message[0]}</p>}
      </div>

      {state.status === "error" && !Object.keys(state.errors ?? {}).length && (
        <p role="alert" className="text-sm text-red-600">
          We couldn’t submit your enquiry. Please try again or contact our team directly.
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C88A2B] via-[#E6B94F] to-[#F8DF8B] px-5 py-4 font-semibold text-[#082237] shadow-lg transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Sending…" : <>Send My Enquiry <Send className="h-4 w-4" aria-hidden="true" /></>}
      </button>

      <p className="text-xs leading-relaxed text-[#082237]/75">
        Patients First Worldwide provides non-clinical coordination, not medical advice or
        treatment. Submitting this form does not create a doctor-patient relationship. Your details
        will be used to respond to your enquiry in accordance with our{" "}
        <a href="/privacy-policy" className="underline underline-offset-2 hover:text-[#C88A2B]">
          Privacy Policy
        </a>.
      </p>
    </form>
  );
}
