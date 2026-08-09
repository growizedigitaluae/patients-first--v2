"use client";

import { useActionState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Send } from "lucide-react";
import { submitLead, type ContactState } from "@/app/contact/actions";
import { countries, defaultCountryCode } from "@/data/countries";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "w-full border border-navy/20 rounded-xl px-3.5 py-3 text-[16px] text-navy bg-white placeholder:text-slate-400 focus:outline-none focus:border-gold transition";

const selectClass =
  "flex-shrink-0 w-[150px] sm:w-[190px] border border-navy/20 rounded-xl px-3 py-3 text-[15px] text-navy bg-white focus:outline-none focus:border-gold transition cursor-pointer";

const labelClass = "block text-sm text-navy tracking-[0.02em] mb-1.5";

const fieldNoteClass = "block text-xs text-navy mt-1 leading-snug";

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialCareArea = searchParams.get("careArea") ?? "";
  const [state, formAction, isPending] = useActionState(submitLead, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className="bg-white border border-navy/10 rounded-3xl p-8 text-center space-y-4">
        <CheckCircle2 className="w-10 h-10 brand-gold-icon mx-auto" />
        <h3 className="text-2xl font-serif text-midnight">
          Thank You — We’ve Received Your Enquiry
        </h3>
        <p className="text-navy text-sm leading-relaxed">
          A dedicated care coordinator will get back to you personally, usually within one
          business day, to listen, understand your situation and explain how we can help. No
          obligation, and your details remain confidential.
        </p>
        <p className="text-xs text-navy">Reference: {state.reference}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction}>
      <input type="hidden" name="careArea" defaultValue={state.values?.careArea ?? initialCareArea} />

      <div className="mb-[18px]">
        <label htmlFor="name" className={labelClass}>
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className={inputClass}
          defaultValue={state.values?.name}
        />
        {state.errors?.name && <p className="mt-1.5 text-xs text-red-600">{state.errors.name[0]}</p>}
      </div>

      <div className="mb-[18px]">
        <label htmlFor="phone" className={labelClass}>
          Phone Number *
        </label>
        <div className="flex gap-2">
          <select
            id="countryCode"
            name="countryCode"
            aria-label="Country code"
            className={selectClass}
            defaultValue={state.values?.countryCode ?? defaultCountryCode}
          >
            {countries.map((country) => (
              <option key={country.iso} value={country.code}>
                {country.flag} {country.name} ({country.code})
              </option>
            ))}
          </select>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="e.g. 50 123 4567"
            className={`${inputClass} flex-1 min-w-0`}
            defaultValue={state.values?.phone}
          />
        </div>
        {state.errors?.phone && <p className="mt-1.5 text-xs text-red-600">{state.errors.phone[0]}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[18px] gap-y-[18px] mb-[18px]">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
            defaultValue={state.values?.email}
          />
          {state.errors?.email && <p className="mt-1.5 text-xs text-red-600">{state.errors.email[0]}</p>}
        </div>
        <div>
          <label htmlFor="contactMethod" className={labelClass}>
            Preferred Contact Method
          </label>
          <input
            id="contactMethod"
            name="contactMethod"
            type="text"
            placeholder="Phone, WhatsApp, or Email"
            className={inputClass}
            defaultValue={state.values?.contactMethod}
          />
        </div>
      </div>

      <div className="mb-[6px]">
        <label htmlFor="message" className={labelClass}>
          How can we help? (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Share as much or as little as you're comfortable with — no medical detail is required to get started."
          className={`${inputClass} resize-y`}
          defaultValue={state.values?.message}
        />
        <span className={fieldNoteClass}>
          Please don’t include sensitive medical details in this field; a coordinator will ask for
          anything needed through a secure channel.
        </span>
        {state.errors?.message && <p className="mt-1.5 text-xs text-red-600">{state.errors.message[0]}</p>}
      </div>

      <label className="flex gap-3 items-start my-[22px] mb-[26px] py-4 px-4 bg-ivory rounded-2xl cursor-pointer">
        <input type="checkbox" name="consent" required className="mt-1 accent-gold" />
        <span className="text-sm text-navy leading-[1.55]">
          I agree to Patient First Worldwide contacting me about my enquiry using the details
          provided, and I’ve read the <span className="text-gold-dark underline">Privacy Policy</span>,
          which explains how my information is stored and protected. I understand I can withdraw this
          consent at any time by contacting <span className="text-gold-dark underline">info@patientsfirstworldwide.com</span>. *
        </span>
      </label>
      {state.errors?.consent && <p className="text-xs text-red-600 -mt-4 mb-3">{state.errors.consent[0]}</p>}

      {state.status === "error" && !Object.keys(state.errors ?? {}).length && (
        <p className="text-xs text-red-600 mb-4">
          Something went wrong. Please try again, or contact us directly on WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal py-4 rounded-full font-semibold transition shadow-lg disabled:opacity-60"
      >
        <Send className="w-5 h-5" />
        {isPending ? "Sending…" : "Request Consultation"}
      </button>

      <p className="text-[14px] text-navy mt-[18px] leading-relaxed max-w-[460px]">
        Submitting this form does not create a doctor-patient relationship and is not a request for
        medical advice or treatment. Your information is used solely to respond to your enquiry and
        is handled in accordance with applicable data protection law and our Privacy Policy.
        Required fields are marked *.
      </p>
    </form>
  );
}
