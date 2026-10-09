import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, CheckCircle2, ClipboardList, MessageCircle, Plane, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Medical Treatment in the UAE | Patient Coordination",
  description:
    "Considering medical treatment in the UAE? Patients First Worldwide offers non-clinical patient coordination and practical guidance. Submit an enquiry.",
  robots: { index: true, follow: true },
};

const steps = [
  { n: "01", title: "Share your enquiry", text: "Tell us what kind of support you are looking for and how we can contact you." },
  { n: "02", title: "Discuss your needs", text: "Our team will review your enquiry and explain the coordination support that may be available." },
  { n: "03", title: "Understand the next steps", text: "If you choose to proceed, we can discuss practical coordination and applicable fees before moving forward." },
];

const support = [
  { icon: ClipboardList, title: "Enquiry and appointment coordination", text: "Support with communicating your enquiry and coordinating appointment-related next steps with healthcare providers, where available." },
  { icon: MessageCircle, title: "Communication support", text: "Help organising information and communication so you can better understand the administrative process." },
  { icon: Plane, title: "Practical travel coordination", text: "Where requested and available, guidance with non-clinical travel and logistics connected to your healthcare journey." },
];

const faqs = [
  { q: "Does Patients First Worldwide provide medical treatment?", a: "No. PFW provides non-clinical patient coordination and practical support. Diagnosis, treatment recommendations and medical care are provided by licensed healthcare professionals." },
  { q: "Can you guarantee an appointment or treatment outcome?", a: "No. Availability, clinical decisions, treatment plans and outcomes are determined by healthcare providers. PFW can discuss coordination support for your enquiry." },
  { q: "How much does coordination cost?", a: "Fees depend on the support requested. After reviewing your enquiry, the team can explain the applicable services and fees before you decide whether to proceed." },
  { q: "Do I need to send medical records in this form?", a: "No. Please do not submit detailed medical records or highly sensitive information through this initial form. The team can explain any appropriate next steps after you make contact." },
];

export default function InboundTreatmentUAEPage() {
  return (
    <main className="bg-ivory text-navy">
      <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,178,107,0.22),transparent_42%),linear-gradient(145deg,#f8f8f5_0%,#ffffff_55%,#f4f0e6_100%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.85fr] lg:gap-14">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">
              Patients First Worldwide <span className="h-1 w-1 rounded-full bg-gold" /> Inbound patient support
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-midnight sm:text-5xl lg:text-[3.65rem]">
              Planning Medical Treatment in the UAE?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              Get practical guidance and non-clinical coordination support as you explore healthcare options in the UAE.
            </p>
            <ul className="mt-7 space-y-3 text-base text-slate-700">
              {["A clear first step for your enquiry", "Support with communication and appointment coordination", "Understand the process and applicable fees before proceeding"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#lead-form" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-midnight px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-[#0d3555]">
                Submit an Enquiry <ArrowRight className="h-4 w-4" />
              </a>
              <a href="https://wa.me/971566960486" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-midnight/20 bg-white px-7 py-3 font-semibold text-midnight transition hover:border-gold hover:bg-white">
                <MessageCircle className="h-4 w-4" /> WhatsApp Our Team
              </a>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">PFW provides coordination support, not medical advice or treatment. Clinical decisions remain with licensed healthcare professionals.</p>
          </div>

          <div id="lead-form" className="scroll-mt-24 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(5,33,56,0.12)] sm:p-8">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">Start here</p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight text-midnight sm:text-3xl">Tell us how we can help</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">Share a few details and our team can follow up to discuss your enquiry and possible coordination support.</p>
            </div>
            <Suspense fallback={<div className="h-80 animate-pulse rounded-xl bg-ivory" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-midnight sm:text-4xl">A clearer way to begin your healthcare journey</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Start with a conversation. You can decide what to do next after understanding the available coordination support.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.n} className="rounded-2xl border border-slate-200 bg-white p-7">
                <span className="text-sm font-bold tracking-widest text-gold-dark">{step.n}</span>
                <h3 className="mt-4 text-xl font-semibold text-midnight">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-5 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">How we support</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-midnight sm:text-4xl">Practical support, centred on you</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600">Every enquiry is different. The support available depends on your needs, provider availability and the scope agreed with you.</p>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {support.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-ivory/70 p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-midnight text-gold"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-5 text-lg font-semibold text-midnight">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <ShieldCheck className="mx-auto h-8 w-8 text-gold-dark" />
            <h2 className="mt-3 text-3xl font-semibold text-midnight">Questions you may have</h2>
          </div>
          <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="cursor-pointer list-none pr-6 font-semibold text-midnight marker:hidden">{faq.q}<span className="float-right text-gold-dark transition group-open:rotate-45">+</span></summary>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-9 rounded-2xl bg-midnight px-6 py-8 text-center text-white sm:px-10">
            <h2 className="text-2xl font-semibold">Ready to discuss your enquiry?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300">Contact Patients First Worldwide to learn about non-clinical coordination support for your healthcare journey in the UAE.</p>
            <a href="#lead-form" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C88A2B] to-[#FCDA7B] px-7 py-3 font-semibold text-midnight">Submit an Enquiry <ArrowRight className="h-4 w-4" /></a>
          </div>
          <p className="mt-6 text-center text-xs leading-5 text-slate-500">This service does not provide diagnosis, medical advice or treatment and does not guarantee appointment availability or clinical outcomes. In an emergency, contact local emergency services.</p>
        </div>
      </section>
    </main>
  );
}
