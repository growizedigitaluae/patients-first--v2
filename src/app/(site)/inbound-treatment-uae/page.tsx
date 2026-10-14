import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  Users,
  Building2,
  Plane,
  MapPin,
  Stethoscope,
} from "lucide-react";

import { InboundContactForm } from "@/components/InboundContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Medical Tourism in the UAE | Patients First Worldwide",
  description:
    "Planning to travel to the UAE for treatment? Patients First Worldwide helps international patients coordinate hospital communication, appointments and practical travel needs.",
  alternates: {
    canonical: `${site.url}/inbound-treatment-uae`,
  },
  openGraph: {
    title: "Medical Tourism in the UAE | Patients First Worldwide",
    description:
      "Explore non-clinical patient coordination and practical support for your treatment journey to the UAE.",
    url: `${site.url}/inbound-treatment-uae`,
    siteName: site.name,
    type: "website",
  },
};

const specialties = [
  "Cardiology & Cardiac Surgery",
  "Oncology & Haematology",
  "Orthopaedics & Spine",
  "Neurology & Neurosurgery",
  "Women’s Health & Fertility",
  "Paediatrics & Neonatology",
  "Ophthalmology",
  "Urology & Nephrology",
  "Gastroenterology & Hepatology",
  "Transplantation",
  "Rehabilitation & Recovery",
  "Dentistry & Oral Surgery",
  "Bariatric & Metabolic Care",
  "Aesthetic & Reconstructive Surgery",
  "Executive Health Screening",
  "Rare & Complex Conditions",
];

const faqs = [
  {
    q: "Does Patients First Worldwide provide medical treatment?",
    a: "No. Patients First Worldwide provides patient support and non-clinical coordination. Diagnosis, medical advice, treatment recommendations and clinical decisions are the responsibility of licensed healthcare professionals.",
  },
  {
    q: "Can you guarantee a hospital, appointment or treatment outcome?",
    a: "No. Healthcare providers determine clinical suitability, available appointments and treatment decisions. Patients First Worldwide does not guarantee appointments or outcomes.",
  },
  {
    q: "How much do coordination services cost?",
    a: "Fees depend on the services requested. After reviewing your enquiry, we explain the service scope and applicable costs before you agree to proceed.",
  },
  {
    q: "Can you help me choose where in the UAE to receive care?",
    a: "You do not need to decide on a city before contacting us. You can tell us what you are looking for and your preferred location, and we can discuss available coordination options across the UAE, subject to provider availability.",
  },
  {
    q: "Should I upload my medical reports through this form?",
    a: "Please do not include detailed medical records or sensitive health information in this initial enquiry. If documents are needed, our team can explain the appropriate sharing process.",
  },
];

const sectionTitle =
  "font-serif text-3xl font-semibold tracking-tight text-[#082237] sm:text-4xl lg:text-[44px]";

export default function InboundTreatmentUAEPage() {
  return (
    <main className="overflow-hidden bg-[#FAF8F2] text-[#082237]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#F8F6EF]">
        {/* Decorative background shapes only */}
        <div className="absolute -right-32 -top-32 -z-0 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#C88A2B]/15 via-[#F7D77D]/10 to-transparent blur-3xl" />

        <div className="absolute -left-40 bottom-[-240px] -z-0 h-[520px] w-[520px] rounded-full bg-[#082237]/[0.035] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-12 pt-28 sm:px-8 sm:pb-16 lg:px-12 lg:pt-32 xl:px-16">
          <div className="grid items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr] xl:gap-12">
            {/* =====================================================
                LEFT HERO COLUMN
            ===================================================== */}
            <div className="flex flex-col">
              {/* Main content */}
              <div>
                <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#082237] sm:text-5xl lg:text-[58px]">
                  When Health Matters Most, Choose a Destination Built for
                  Excellence.
                </h1>

                <h2 className="mt-5 text-xl font-semibold leading-8 text-[#E6B94F] sm:text-2xl">
                  Advanced UAE Healthcare. Feel Understood, Away from Home.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-[#082237]/85 sm:text-lg">
                  The UAE combines JCI-accredited hospitals, centres of
                  excellence and advanced medical technology with multilingual
                  teams and a culturally diverse environment—where patients
                  from around the world can feel understood, respected and
                  welcomed.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-8 text-[#082237]/80">
                  Patients First Worldwide listens to what matters to you and
                  helps coordinate specialist appointments, language
                  assistance, travel and accommodation support—so you and your
                  family feel supported at every step.
                </p>

                {/* CTA BUTTONS */}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#case-enquiry"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C88A2B] via-[#E6B94F] to-[#F8DF8B] px-7 py-3 text-sm font-bold text-[#082237] shadow-[0_10px_24px_rgba(200,138,43,0.24)] transition duration-300 hover:-translate-y-0.5"
                  >
                    Speak with Patients First Worldwide
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#082237]/15 bg-white/90 px-7 py-3 text-sm font-bold text-[#082237] shadow-sm transition duration-300 hover:border-[#C88A2B]/60 hover:bg-white"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Connect on WhatsApp
                  </a>
                </div>

                {/* Disclaimer */}
                <div className="mt-5 max-w-xl border-l-2 border-[#C88A2B]/60 pl-4 text-xs leading-5 text-[#082237]/70">
                  Patients First Worldwide provides non-clinical
                  coordination. Licensed healthcare professionals provide
                  medical assessment, advice and treatment.
                </div>
              </div>

              {/* =====================================================
                  HERO IMAGE
                  Explicit image instead of background image
              ===================================================== */}
              <div className="mt-8 overflow-hidden rounded-[28px] border border-white/80 bg-white p-2 shadow-[0_18px_50px_rgba(8,34,55,0.12)]">
                <div className="relative h-[220px] overflow-hidden rounded-[22px] sm:h-[260px]">
                  <Image
                    src="/about-us-2a.webp"
                    alt="Patients First Worldwide healthcare support"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition duration-700 hover:scale-[1.02]"
                  />

                  {/* Soft overlay for premium appearance */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082237]/55 via-transparent to-transparent" />

                  {/* Small image caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F8DF8B]">
                      Patients First Worldwide
                    </p>

                    <p className="mt-1 max-w-md text-sm font-medium leading-6 text-white">
                      Helping international patients navigate their healthcare
                      journey with clarity and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                RIGHT CONTACT FORM
            ===================================================== */}
            <div
              id="case-enquiry"
              className="scroll-mt-24 flex h-full flex-col rounded-[30px] border border-white/80 bg-white/95 p-7 shadow-[0_25px_80px_rgba(8,34,55,0.14)] backdrop-blur sm:p-9 lg:p-10"
            >
              <Suspense
                fallback={
                  <div className="min-h-[420px] animate-pulse rounded-2xl bg-[#FAF8F2]" />
                }
              >
                <InboundContactForm />
              </Suspense>

              <div className="mt-5 flex items-start gap-2 rounded-2xl bg-[#FAF8F2] p-4 text-xs leading-5 text-[#082237]/70">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#E6B94F]" />

                <span>
                  Please do not enter detailed medical records or sensitive
                  health information in this initial form. Our team can
                  explain appropriate document-sharing steps if needed.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NEXT STEPS
      ========================================================= */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E6B94F]">
                Already Have a Diagnosis?
              </p>

              <h2 className={`mt-3 ${sectionTitle}`}>
                Explore Your Next Steps in the UAE
              </h2>

              <p className="mt-4 text-base leading-8 text-[#082237]/80">
                If you already have a diagnosis or proposed treatment plan,
                you can tell us what support you are seeking. Our team can
                explain available coordination options and how communication
                with relevant providers may be arranged.
              </p>

              <a
                href="#case-enquiry"
                className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-[#C88A2B] via-[#E6B94F] to-[#F8DF8B] px-7 py-3 text-sm font-bold text-[#082237]"
              >
                Submit an Enquiry
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Specialist consultations",
                "Second-opinion enquiries",
                "Complex surgery enquiries",
                "Cancer and cardiac care enquiries",
                "Advanced diagnostics",
                "IVF and reproductive medicine",
                "Paediatric care enquiries",
                "Rehabilitation and complex care",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[#082237]/10 bg-[#FAF8F2] p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E6B94F]" />

                  <span className="text-sm leading-6 text-[#082237]/85">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY UAE
      ========================================================= */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E6B94F]">
              A GLOBAL HEALTHCARE DESTINATION
            </p>

            <h2 className={`mt-3 ${sectionTitle}`}>
              Why Choose the UAE for Treatment
            </h2>

            <p className="mt-4 text-base leading-8 text-[#082237]/80 sm:text-lg">
              The UAE brings together JCI-accredited hospitals,
              internationally trained specialists and advanced treatment
              options. With Patients First Worldwide, you can explore this
              expertise with support tailored to your needs.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Building2 className="h-6 w-6 text-[#E6B94F]" />,
                title: "Internationally Accredited Hospitals",
                text: "JCI accreditation reflects independently assessed standards for quality and patient safety.",
              },
              {
                icon: <Stethoscope className="h-6 w-6 text-[#E6B94F]" />,
                title: "Advanced Treatment Options",
                text: "Robotic surgery, advanced imaging and minimally invasive procedures at specialist centres.",
              },
              {
                icon: <Users className="h-6 w-6 text-[#E6B94F]" />,
                title: "Expertise Across Specialties",
                text: "Specialist teams in cancer, heart care, orthopaedics and more, collaborating on complex conditions.",
              },
              {
                icon: <Plane className="h-6 w-6 text-[#E6B94F]" />,
                title: "Welcoming Patients Worldwide",
                text: "International patient services, language assistance and respect for cultural and family needs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] bg-[#082237] p-6 text-white"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  {item.icon}
                </div>

                <h3 className="font-serif text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SPECIALTIES
      ========================================================= */}
      <section className="bg-[#FAF8F2] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E6B94F]">
              Care Across Specialties
            </p>

            <h2 className={`mt-3 ${sectionTitle}`}>
              Explore Healthcare Areas Across the UAE
            </h2>

            <p className="mt-4 text-base leading-8 text-[#082237]/80">
              Whether you’re seeking cancer treatment, heart care,
              orthopaedics, fertility support or another specialty, Patients
              First Worldwide helps you connect with UAE specialist teams and
              coordinates your next steps with personal attention.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((title) => (
              <div
                key={title}
                className="group flex min-h-[72px] items-center gap-3 rounded-[18px] border border-[#082237]/10 bg-white px-4 py-3.5 shadow-[0_2px_10px_rgba(8,34,55,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E6B94F]/60 hover:bg-[#FFFDF7] hover:shadow-[0_10px_24px_rgba(8,34,55,0.08)]"
              >
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center text-[18px] font-bold leading-none text-[#E6B94F] transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  ✓
                </span>

                <h3 className="font-serif text-[15px] font-semibold leading-5 text-[#082237] transition-colors duration-300 group-hover:text-[#9A681B]">
                  {title}
                </h3>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-4xl text-center text-xs leading-6 text-[#082237]/70 sm:text-sm">
            This overview is not a recommendation or confirmation that a
            specific treatment or provider is suitable or available.
          </p>
        </div>
      </section>

      {/* =========================================================
          HEALTHCARE ACROSS UAE
      ========================================================= */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E6B94F]">
              Healthcare Across the UAE
            </p>

            <h2 className={`mt-3 ${sectionTitle}`}>
              Care Options Across the Emirates
            </h2>

            <p className="mt-4 text-base leading-8 text-[#082237]/80">
              You do not need to choose a city before starting an enquiry.
              Tell us what you are looking for, your preferred location if you
              have one, and what kind of coordination support you need. We can
              discuss available options across the United Arab Emirates,
              subject to provider availability.
            </p>
          </div>

          <div className="mt-8 rounded-[30px] border border-[#082237]/10 bg-[#FAF8F2] p-7 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082237]">
                  <MapPin className="h-7 w-7 text-[#E6B94F]" />
                </div>

                <h3 className="mt-4 font-serif text-2xl font-bold text-[#082237] sm:text-3xl">
                  Your Preferred UAE Destination
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#082237]/80">
                  Whether your preference is Dubai, Abu Dhabi, Sharjah or
                  another Emirate, you can tell us where you would like to
                  explore care.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Dubai",
                  "Abu Dhabi",
                  "Sharjah",
                  "Ajman",
                  "Ras Al Khaimah",
                  "Fujairah",
                  "Umm Al Quwain",
                  "Not sure yet",
                ].map((location) => (
                  <div
                    key={location}
                    className="flex items-center gap-3 rounded-2xl border border-[#082237]/10 bg-white px-5 py-3.5"
                  >
                    <MapPin className="h-5 w-5 shrink-0 text-[#E6B94F]" />

                    <span className="text-sm font-semibold text-[#082237]">
                      {location}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-[#082237]/10 pt-5 text-center">
              <p className="text-sm leading-7 text-[#082237]/75">
                Not sure which location is right for your needs? That is okay.
                Start with your enquiry and let our care coordination team
                explain the available options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE WORK
      ========================================================= */}
      <section className="bg-[#FAF8F2] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E6B94F]">
              How We Work
            </p>

            <h2 className={`mt-3 ${sectionTitle}`}>
              Your Care Journey, Supported by Us
            </h2>

            <p className="mt-4 text-base leading-8 text-[#082237]/80 sm:text-lg">
              Seeking treatment away from home can feel overwhelming. At
              Patients First Worldwide, we begin by listening, then help
              coordinate the details so you and your family feel supported
              throughout your journey.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                title: "We Begin by Listening",
                text: "Help us understand what brings you here and what matters most to you. Whether you have a treatment in mind or are unsure where to begin, we’re here to listen.",
              },
              {
                n: "02",
                title: "Support Shaped Around You",
                text: "Your needs, preferences and concerns guide our support. Your Patients First Worldwide coordinator will talk things through with you and explain how we can help, at your pace.",
              },
              {
                n: "03",
                title: "We Help You Explore Your Options",
                text: "We connect with relevant healthcare teams to help you access specialist reviews and understand the proposed treatment options. Medical advice and treatment recommendations come directly from your healthcare providers.",
              },
              {
                n: "04",
                title: "We Coordinate the Details",
                text: "When you feel ready, we help coordinate appointments and available travel support. We explain arrangements and costs clearly before you commit, and remain your point of contact along the way.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="rounded-[26px] border border-[#082237]/10 bg-white p-6"
              >
                <p className="text-sm font-bold tracking-[0.2em] text-[#E6B94F]">
                  {step.n}
                </p>

                <h3 className="mt-3 font-serif text-xl font-bold text-[#082237]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#082237]/80">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <h3 className="font-serif text-2xl font-semibold text-[#082237] sm:text-3xl">
              Let’s start with what matters to you.
            </h3>

            <p className="mt-3 text-base leading-8 text-[#082237]/80">
              You don’t need to have everything figured out. Help us understand
              your needs, and we’ll guide you through the next steps.
            </p>

            <a
              href="#case-enquiry"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C88A2B] via-[#E6B94F] to-[#F8DF8B] px-7 py-3 text-sm font-bold text-[#082237]"
            >
              Speak with our team
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-[#FAF8F2] py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E6B94F]">
              Frequently Asked Questions
            </p>

            <h2 className={`mt-3 ${sectionTitle}`}>Before You Begin</h2>
          </div>

          <div className="mt-8 divide-y divide-[#082237]/10 rounded-[26px] border border-[#082237]/10 bg-white px-6 sm:px-8">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="cursor-pointer list-none pr-6 font-semibold text-[#082237]">
                  {f.q}

                  <span className="float-right text-[#E6B94F] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-2 text-sm leading-7 text-[#082237]/80">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#082237] py-12 sm:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:px-8 md:flex-row md:items-center lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F0C45B]">
              Your Gateway to Healthcare in the UAE
            </p>

            <h2 className="mt-2 max-w-3xl font-serif text-3xl font-semibold text-white sm:text-4xl">
              Your Journey Can Begin with One Conversation.
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
              Tell us where you are travelling from and what kind of
              coordination support you are looking for. We will explain the
              next steps available for your enquiry.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-64">
            <a
              href="#case-enquiry"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C88A2B] via-[#E6B94F] to-[#F8DF8B] px-7 py-3 text-sm font-bold text-[#082237]"
            >
              Request a Coordinator Call
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Our Team
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="bg-[#082237] px-6 pb-10 pt-8 sm:px-8 sm:pb-12">
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 text-center sm:px-8 sm:py-6">
          <p className="mx-auto max-w-4xl text-xs leading-6 text-white/70 sm:text-sm sm:leading-7">
            Patients First Worldwide provides international patient support
            and non-clinical coordination. Patients First Worldwide does not diagnose conditions,
            prescribe treatment or provide medical advice, and does not
            guarantee appointment availability or outcomes. Medical decisions
            are made by licensed healthcare professionals. In a medical
            emergency, contact local emergency services.
          </p>
        </div>
      </footer>

      {/* =========================================================
          MOBILE STICKY CTA
      ========================================================= */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-[#082237]/95 p-2 backdrop-blur sm:hidden">
        <a
          href="#case-enquiry"
          className="rounded-full bg-gradient-to-r from-[#C88A2B] to-[#F8DF8B] px-3 py-3 text-center text-sm font-bold text-[#082237]"
        >
          Start Enquiry
        </a>

        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-3 py-3 text-center text-sm font-bold text-white"
        >
          WhatsApp
        </a>
      </div>
    </main>
  );
}