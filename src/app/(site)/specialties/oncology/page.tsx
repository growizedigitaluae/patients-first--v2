import type { Metadata } from "next";
import { Suspense } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  MessageCircle,
  FileText,
  Building2,
  ListChecks,
  CalendarCheck,
  Users,
} from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Oncology Care Coordination in the UAE",
  description:
    "Get personalized oncology care coordination in the UAE. Patients First Worldwide helps patients coordinate specialist appointments, second opinions, treatment planning and healthcare services.",
  keywords: [
    "oncology care UAE",
    "cancer treatment Dubai",
    "oncologist Dubai",
    "oncology hospital UAE",
    "cancer specialist UAE",
    "cancer treatment Abu Dhabi",
    "oncology second opinion UAE",
    "cancer care coordination UAE",
    "medical tourism oncology UAE",
    "chemotherapy UAE",
    "radiotherapy UAE",
    "immunotherapy UAE",
    "PET CT UAE",
  ],
  alternates: {
    canonical: `${site.url}/specialties/oncology`,
  },
  openGraph: {
    title: "Oncology Care Coordination in the UAE",
    description:
      "Coordinate oncology consultations, specialist appointments, second opinions and treatment-related healthcare services in the UAE.",
    url: `${site.url}/specialties/oncology`,
    siteName: site.name,
    type: "website",
  },
};

const services = [
  "Oncology specialist appointments",
  "Hospital and specialist coordination",
  "Second opinion coordination",
  "Diagnostic appointment coordination",
  "Treatment planning support",
  "Chemotherapy coordination",
  "Radiotherapy coordination",
  "Follow-up care coordination",
];

const locations = ["Dubai", "Abu Dhabi", "UAE"];

const faqs = [
  {
    question: "Does Patients First Worldwide provide cancer treatment?",
    answer:
      "No. Patients First Worldwide is a healthcare coordination service. We do not diagnose, treat, or perform medical procedures. We help patients coordinate with healthcare providers and relevant specialists.",
  },
  {
    question: "Can you help arrange an oncology consultation?",
    answer:
      "Yes. We can help coordinate appointments with appropriate healthcare providers based on the patient's requirements, location, preferred timing and available medical information.",
  },
  {
    question: "Can I request a second opinion?",
    answer:
      "Yes. We can assist with coordinating a second-opinion process with an appropriate specialist or healthcare provider.",
  },
  {
    question: "Can you help with treatment planning?",
    answer:
      "We can help coordinate communication, appointments and healthcare services. Medical decisions and treatment recommendations are made by qualified healthcare professionals.",
  },
];

export default function OncologyLandingPage() {
  return (
    <main className="bg-[#faf9f6] text-[#082237]">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#f7f6f2]">

        {/* Very subtle decorative background */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#D9A441]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-[-250px] h-[500px] w-[500px] rounded-full bg-[#082237]/[0.025] blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10 lg:pt-24">

          <div className="mx-auto max-w-5xl text-center">

            {/* Gold eyebrow */}
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B18127] sm:text-sm">
              ONCOLOGY CARE COORDINATION
            </p>

            {/* Previous content — same message, new design */}
            <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-[#082237] sm:text-5xl lg:text-[58px]">
              Coordinating Your Oncology Care Journey in the UAE
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#263c50] sm:text-lg lg:text-xl">
              Get support coordinating oncology consultations, specialist
              appointments, second opinions and healthcare services with
              providers in the UAE.
            </p>

            {/* CTA — same gold style as reference screenshot */}
            <div className="mt-9 flex justify-center">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#D9A441] px-8 py-4 text-sm font-semibold text-[#082237] shadow-[0_8px_20px_rgba(217,164,65,0.25)] transition hover:-translate-y-0.5 hover:bg-[#E3B354]"
              >
                Start Your Oncology Journey
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Disclaimer */}
            <div className="mx-auto mt-7 flex max-w-2xl items-center justify-center gap-2 text-xs leading-5 text-slate-500">
              <ShieldCheck className="h-4 w-4 shrink-0 text-[#D9A441]" />
              <span>
                Patients First Worldwide provides healthcare coordination
                services. We do not diagnose, treat or perform medical
                procedures.
              </span>
            </div>

          </div>
        </div>

        {/* Soft fade into next section */}
        <div className="h-10 bg-gradient-to-b from-transparent to-[#faf9f6]" />
      </section>


      {/* =========================================================
          ROLE / TRUST STRIP
      ========================================================== */}
      <section className="bg-[#faf9f6]">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">

          <div className="grid overflow-hidden rounded-[26px] border border-[#e5e0d6] bg-white shadow-[0_10px_35px_rgba(8,34,55,0.05)] sm:grid-cols-3">

            <div className="border-b border-[#e8e3da] p-6 text-center sm:border-b-0 sm:border-r">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#D9A441]/10">
                <ShieldCheck className="h-5 w-5 text-[#D9A441]" />
              </div>

              <h3 className="mt-4 text-sm font-bold text-[#082237]">
                Healthcare Coordination
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                We help coordinate your healthcare journey with relevant
                providers.
              </p>
            </div>

            <div className="border-b border-[#e8e3da] p-6 text-center sm:border-b-0 sm:border-r">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#D9A441]/10">
                <Users className="h-5 w-5 text-[#D9A441]" />
              </div>

              <h3 className="mt-4 text-sm font-bold text-[#082237]">
                Specialist Access
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Support with appointments, consultations and second opinions.
              </p>
            </div>

            <div className="p-6 text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#D9A441]/10">
                <MessageCircle className="h-5 w-5 text-[#D9A441]" />
              </div>

              <h3 className="mt-4 text-sm font-bold text-[#082237]">
                Patient Support
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Practical coordination before and throughout your healthcare
                journey.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          ONCOLOGY SERVICES
      ========================================================== */}
      <section className="bg-[#faf9f6] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B18127] sm:text-sm">
              HOW WE HELP
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#082237] sm:text-4xl lg:text-[42px]">
              Oncology Coordination Tailored to Your Needs
            </h2>

            <p className="mt-5 text-base leading-8 text-[#405366] sm:text-lg">
              Our role is to simplify the coordination process so you can
              focus on communicating with your healthcare providers and
              understanding your available options.
            </p>

          </div>


          {/* Service cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {services.map((service, index) => (
              <div
                key={service}
                className="rounded-2xl border border-[#e4ded2] bg-white p-6 shadow-[0_8px_28px_rgba(8,34,55,0.045)] transition hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(8,34,55,0.08)]"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#D9A441] bg-[#D9A441]/10">
                  <span className="text-xs font-bold text-[#B18127]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-semibold leading-6 text-[#082237]">
                  {service}
                </h3>

                <div className="mt-5 h-px w-10 bg-[#D9A441]" />

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =========================================================
          YOUR JOURNEY / TIMELINE
      ========================================================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B18127] sm:text-sm">
              YOUR ONCOLOGY JOURNEY
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#082237] sm:text-4xl lg:text-[42px]">
              A Clear Process, Every Step of the Way
            </h2>

            <p className="mt-5 text-base leading-8 text-[#405366] sm:text-lg">
              Every patient's circumstances are different. We help provide a
              clear and structured coordination process from your first
              enquiry through your healthcare journey.
            </p>

          </div>


          {/* Timeline */}
          <div className="relative mt-14">

            {/* Connecting line */}
            <div className="absolute left-[7%] right-[7%] top-7 hidden h-px bg-[#D9A441]/45 lg:block" />

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  icon: MessageCircle,
                  number: "01",
                  title: "Tell Us What You Need",
                  text: "Start by telling us what oncology support you are looking for.",
                },
                {
                  icon: FileText,
                  number: "02",
                  title: "Share Information",
                  text: "Provide relevant information and medical reports where available.",
                },
                {
                  icon: Building2,
                  number: "03",
                  title: "Provider Coordination",
                  text: "We coordinate with relevant healthcare providers and specialists.",
                },
                {
                  icon: ListChecks,
                  number: "04",
                  title: "Review Your Options",
                  text: "Understand the available coordination and healthcare options.",
                },
              ].map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="relative text-center"
                  >

                    <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#D9A441] bg-[#faf9f6] shadow-sm">
                      <Icon className="h-6 w-6 text-[#D9A441]" />
                    </div>

                    <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B18127]">
                      STEP {step.number}
                    </p>

                    <h3 className="mt-2 text-sm font-semibold text-[#082237]">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-[220px] text-sm leading-6 text-slate-500">
                      {step.text}
                    </p>

                  </div>
                );
              })}

            </div>
          </div>


          {/* Coordination card */}
          <div className="mt-14 rounded-[28px] border border-[#e4ded2] bg-[#faf9f6] p-7 shadow-[0_10px_35px_rgba(8,34,55,0.05)] sm:p-10">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#082237]">
                <CheckCircle2 className="h-7 w-7 text-[#D9A441]" />
              </div>

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18127]">
                  OUR ROLE
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#082237]">
                  Coordination, Not Clinical Treatment
                </h3>

                <p className="mt-4 max-w-3xl text-base leading-7 text-[#405366]">
                  Patients First Worldwide helps coordinate appointments,
                  communication and healthcare services. Diagnosis,
                  treatment recommendations and medical decisions remain with
                  qualified healthcare professionals.
                </p>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          UAE LOCATIONS
      ========================================================== */}
      <section className="bg-[#f7f6f2] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B18127] sm:text-sm">
                ACROSS THE UAE
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#082237] sm:text-4xl">
                Coordinate Your Oncology Journey in the UAE
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#405366] sm:text-lg">
                Whether you are based in Dubai, Abu Dhabi or elsewhere in the
                UAE, we can help coordinate the next steps with relevant
                healthcare providers.
              </p>

              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D9A441] px-7 py-3.5 text-sm font-semibold text-[#082237] shadow-sm transition hover:bg-[#E3B354]"
              >
                Speak With Our Team
                <ArrowRight className="h-4 w-4" />
              </a>

            </div>


            <div className="grid gap-4 sm:grid-cols-3">

              {locations.map((location) => (
                <div
                  key={location}
                  className="rounded-2xl border border-[#e4ded2] bg-white p-6 text-center shadow-sm"
                >

                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#D9A441]/10">
                    <Building2 className="h-6 w-6 text-[#D9A441]" />
                  </div>

                  <h3 className="mt-4 font-bold text-[#082237]">
                    {location}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Care coordination
                  </p>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          ENQUIRY
      ========================================================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B18127] sm:text-sm">
                START YOUR ENQUIRY
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#082237] sm:text-4xl">
                Let Us Help Coordinate Your Next Step
              </h2>

              <p className="mt-5 text-base leading-8 text-[#405366] sm:text-lg">
                Tell us a little about what you are looking for. Our team can
                review your enquiry and help coordinate the appropriate next
                step.
              </p>


              <div className="mt-8 space-y-4">

                {[
                  "Oncology consultation coordination",
                  "Second opinion coordination",
                  "Hospital and specialist appointments",
                  "Treatment-related healthcare coordination",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#D9A441]" />

                    <span className="text-sm font-medium text-[#263c50]">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>


            {/* Existing PFW form */}
            <div className="rounded-[28px] border border-[#e4ded2] bg-[#faf9f6] p-6 shadow-[0_12px_40px_rgba(8,34,55,0.06)] sm:p-8">
  <Suspense
    fallback={
      <div className="min-h-[400px] animate-pulse rounded-2xl bg-white/60" />
    }
  >
    <ContactForm />
  </Suspense>
</div>

          </div>
        </div>
      </section>


      {/* =========================================================
          FAQ
      ========================================================== */}
      <section className="bg-[#faf9f6] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B18127] sm:text-sm">
              FAQ
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#082237] sm:text-4xl">
              Frequently Asked Questions
            </h2>

          </div>


          <div className="mt-10 space-y-4">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#e4ded2] bg-white p-6 shadow-sm"
              >

                <summary className="cursor-pointer list-none font-semibold text-[#082237]">
                  <div className="flex items-center justify-between gap-5">

                    <span>{faq.question}</span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D9A441]/10">
                      <ArrowRight className="h-4 w-4 text-[#B18127] transition-transform group-open:rotate-90" />
                    </span>

                  </div>
                </summary>

                <p className="mt-5 border-t border-[#eee9df] pt-5 text-sm leading-7 text-[#405366]">
                  {faq.answer}
                </p>

              </details>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-[#082237] py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D9A441]">
            YOUR NEXT STEP
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[44px]">
            Need Help Coordinating Your Oncology Care?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Contact Patients First Worldwide and tell us what support you need.
          </p>


          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D9A441] px-7 py-3.5 text-sm font-semibold text-[#082237] shadow-lg transition hover:bg-[#E3B354]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>

            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9A441]/70 px-7 py-3.5 text-sm font-semibold text-[#D9A441] transition hover:bg-[#D9A441]/10"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}