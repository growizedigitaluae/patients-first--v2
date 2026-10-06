import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  MessageCircle,
  FileText,
  Building2,
  CalendarCheck,
  Users,
  Stethoscope,
  MapPin,
  Upload,
} from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Endocrinology & Diabetes Care in UAE | Patients First Worldwide",
  description:
    "Coordinate endocrinology and diabetes consultations, second opinions and healthcare services in the UAE with Patients First Worldwide.",
  keywords: [
    "endocrinologist Dubai",
    "endocrinologist Abu Dhabi",
    "thyroid specialist Dubai",
    "endocrinologist UAE",
    "diabetes treatment UAE",
    "endocrinology care UAE",
    "diabetes specialist UAE",
    "thyroid care UAE",
    "endocrinology second opinion UAE",
    "endocrinology care coordination UAE",
  ],
  alternates: {
    canonical: `${site.url}/specialties/endocrinology`,
  },
  openGraph: {
    title: "Endocrinology & Diabetes Care in UAE | Patients First Worldwide",
    description:
      "Coordinate endocrinology and diabetes consultations, second opinions and healthcare services in the UAE with Patients First Worldwide.",
    url: `${site.url}/specialties/endocrinology`,
    siteName: site.name,
    type: "website",
  },
};

const customIcons: Record<string, string> = {
  "One Point of Contact": "/icons/pfw/14-dedicated-patients-coordinator.svg",
  "Appropriate Provider Options":
    "/icons/pfw/03-trusted-healthcare-connections.svg",
  "Second Opinion Coordination":
    "/icons/pfw/08-transparency.svg",
  "Appointment Coordination": "/icons/pfw/06-partnership.svg",
  "Patient Support": "/icons/pfw/02-patient-always-1st.svg",
  "International Patient Support":
    "/icons/pfw/16-global-healthcare-network.svg",
};

const whyPatientsChoose = [
  {
    title: "One Point of Contact",
    text: "You don't have to navigate multiple hospitals, departments and appointments alone. Our team provides a coordination point for your next steps.",
  },
  {
    title: "Appropriate Provider Options",
    text: "We help coordinate suitable endocrinology provider options based on your case information, requirements and location.",
  },
  {
    title: "Second Opinion Coordination",
    text: "Already diagnosed or considering another medical opinion? We can help organize relevant information and coordinate another specialist review.",
  },
  {
    title: "Appointment Coordination",
    text: "We help coordinate communication and appointments with appropriate healthcare providers.",
  },
  {
    title: "Patient Support",
    text: "Our coordination can continue beyond your initial enquiry, including treatment-related coordination and follow-up support where applicable.",
  },
  {
    title: "International Patient Support",
    text: "For patients travelling for healthcare, we can help coordinate relevant appointments and non-clinical aspects of the journey.",
  },
];

const careAreas = [
  "Endocrinology Consultations",
  "Diabetes Care Coordination",
  "Thyroid Care Coordination",
  "Hormonal & Metabolic Care",
  "Second Opinion Coordination",
  "Diagnostic Coordination",
  "Treatment Pathway Coordination",
  "Hospital & Specialist Coordination",
  "Follow-Up Coordination",
];

const coordinationServices = [
  {
    title: "Endocrinology & Diabetes Consultation",
    text: "Coordinate access to appropriate endocrinology and diabetes specialists based on your case and requirements.",
    icon: Stethoscope,
  },
  {
    title: "Second Opinion",
    text: "Help organize relevant medical information and coordinate another specialist review.",
    icon: Users,
  },
  {
    title: "Diagnostic Coordination",
    text: "Help coordinate relevant diagnostic appointments and communication with healthcare providers.",
    icon: FileText,
  },
  {
    title: "Treatment Pathway Coordination",
    text: "Coordinate appointments and communication related to the care pathway recommended by licensed healthcare professionals.",
    icon: CalendarCheck,
  },
  {
    title: "Hospital & Provider Coordination",
    text: "Help coordinate communication and appointments with appropriate healthcare providers.",
    icon: Building2,
  },
  {
    title: "Diabetes Care Coordination",
    text: "Support coordination of diabetes-related appointments and services with the relevant healthcare provider.",
    icon: CalendarCheck,
  },
  {
    title: "Thyroid Care Coordination",
    text: "Support coordination of thyroid-related consultations and appointments with appropriate healthcare providers.",
    icon: MessageCircle,
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Send Your Information",
    text: "Tell us about your healthcare needs and, where appropriate, share relevant medical reports.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Specialist & Provider Coordination",
    text: "Our team helps coordinate appropriate specialist and healthcare provider options based on the information provided.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Review Your Care Options",
    text: "We help coordinate communication regarding provider options, appointments and relevant treatment-related information.",
    icon: Building2,
  },
  {
    number: "04",
    title: "Continue Your Healthcare Journey",
    text: "Where applicable, we continue supporting coordination around appointments, travel and follow-up.",
    icon: CheckCircle2,
  },
];

const locations = [
  {
    title: "Dubai",
    text: "Coordinate endocrinology and diabetes consultations, second opinions, diagnostics and treatment-related appointments with appropriate healthcare providers.",
  },
  {
    title: "Abu Dhabi",
    text: "Coordinate access to appropriate endocrinologists, diabetes specialists and healthcare providers based on your case requirements.",
  },
  {
    title: "Across the UAE",
    text: "If you are unsure where to seek endocrinology or diabetes care, we can help coordinate suitable provider options based on your information, preferences and location.",
  },
];

const faqs = [
  {
    question: "Can Patients First Worldwide help me find an endocrinologist in Dubai?",
    answer:
      "Patients First Worldwide can help coordinate access to appropriate endocrinology specialists in Dubai based on your case information and requirements.",
  },
  {
    question: "Can you help with diabetes care coordination?",
    answer:
      "Yes. Our team can help coordinate access to appropriate diabetes specialists and healthcare providers based on the information provided.",
  },
  {
    question: "Can I request a second opinion?",
    answer:
      "Yes. Our team can help organize relevant medical information and coordinate a second-opinion consultation with an appropriate healthcare provider.",
  },
  {
    question: "Can I send my medical reports?",
    answer:
      "Yes. You can provide relevant medical information through the enquiry process. Where available, you can also upload medical reports through the enquiry form.",
  },
  {
    question: "Can you help me find thyroid specialists in Dubai?",
    answer:
      "We can help coordinate access to appropriate thyroid and endocrinology specialists based on your case and requirements.",
  },
  {
    question: "Can my family member contact you on my behalf?",
    answer:
      "A family member or representative can contact our team to begin the coordination process where applicable.",
  },
  {
    question: "Does Patients First Worldwide diagnose or treat diabetes or endocrine conditions?",
    answer:
      "No. Patients First Worldwide provides non-clinical healthcare coordination and patient support. Medical diagnosis, treatment recommendations and clinical decisions are provided by licensed healthcare professionals.",
  },
  {
    question: "Can international patients use your service?",
    answer:
      "Patients seeking healthcare in the UAE can contact our team to discuss their coordination requirements.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can speak with our team, contact us through WhatsApp, call our team or submit your case through the enquiry form.",
  },
];

export default function EndocrinologyLandingPage() {
  return (
    <main className="overflow-hidden bg-[#FAF8F2] text-[#082237]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#F8F6EF]">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/endocrinology-hero.webp"
            alt=""
            fill
            priority
            className="object-cover object-top opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#FAF8F2]/90 to-[#FAF8F2]" />
        </div>

        <div className="absolute -right-32 -top-32 -z-10 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#C88A2B]/25 via-[#F7D77D]/15 to-transparent blur-3xl" />
        <div className="absolute -left-40 bottom-[-240px] -z-10 h-[520px] w-[520px] rounded-full bg-[#082237]/[0.04] blur-3xl" />

        <div className="mx-auto max-w-[1500px] px-6 pb-14 pt-28 sm:px-8 sm:pb-20 lg:px-12 lg:pt-32 xl:px-16">
          <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] xl:gap-14">
            <div className="flex flex-col justify-start pt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A56F19] sm:text-sm">
                Endocrinology & Diabetes Care Coordination in the UAE
              </p>

              <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#082237] sm:text-5xl lg:text-[58px]">
                Looking for Endocrinology or Diabetes Care in the UAE?
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#263C50] sm:text-lg">
                We help coordinate your next step with appropriate endocrinology
                specialists and healthcare providers.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-8 text-[#405366]">
                Whether you have recently received a diagnosis, are seeking a
                second opinion, or are exploring your healthcare options,
                Patients First Worldwide helps coordinate access to appropriate
                endocrinology specialists and healthcare providers across the UAE.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#case-enquiry"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#C88A2B] via-[#E6B94F] to-[#F8DF8B] px-6 py-3 text-sm font-bold text-[#082237] shadow-[0_10px_24px_rgba(200,138,43,0.20)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(200,138,43,0.24)]"
                >
                  Speak to Our Team
                </a>

                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#082237]/15 bg-white/80 px-6 py-3 text-sm font-bold text-[#082237] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-[#C88A2B]/60 hover:bg-white"
                >
                  WhatsApp Our Team
                </a>
              </div>

              <div className="mt-6 max-w-xl border-l-2 border-[#C88A2B]/60 pl-4 text-xs leading-5 text-[#536575]">
                <span>
                  Already have medical reports? Share your case with our team
                  to start the coordination process.
                </span>
              </div>
            </div>

            {/* Hero enquiry card */}
            <div
              id="case-enquiry"
              className="scroll-mt-24 rounded-[30px] border border-white/80 bg-white/95 p-7 shadow-[0_25px_80px_rgba(8,34,55,0.12)] backdrop-blur sm:p-9 lg:p-10"
            >
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A56F19]">
                  Start Your Enquiry
                </p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-[#082237] sm:text-3xl">
                  Tell Us About Your Case
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#536575]">
                  Share a few details and our team can help coordinate the
                  next step.
                </p>
              </div>

              <Suspense
                fallback={
                  <div className="min-h-[420px] animate-pulse rounded-2xl bg-[#FAF8F2]" />
                }
              >
                <ContactForm />
              </Suspense>

              <div className="mt-5 flex items-start gap-2 rounded-2xl bg-[#FAF8F2] p-4 text-xs leading-5 text-[#536575]">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#B77B20]" />
                <span>
                  Your information is handled confidentially and used to help
                  coordinate your enquiry.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-[26px] bg-[#082237] shadow-[0_18px_50px_rgba(8,34,55,0.16)] sm:grid-cols-3">
            {[
              ["Healthcare Coordination", "Non-clinical support with your healthcare journey."],
              ["Specialist Access", "Support with consultations, appointments and second opinions."],
              ["Patient Support", "A dedicated coordination point for your next steps."],
            ].map(([title, text], index) => (
              <div
                key={title}
                className={`p-6 text-center sm:p-7 ${
                  index < 2 ? "border-b border-white/10 sm:border-b-0 sm:border-r" : ""
                }`}
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#C88A2B] to-[#F8DF8B]">
                  {index === 0 ? (
                    <ShieldCheck className="h-5 w-5 text-[#082237]" />
                  ) : index === 1 ? (
                    <Users className="h-5 w-5 text-[#082237]" />
                  ) : (
                    <MessageCircle className="h-5 w-5 text-[#082237]" />
                  )}
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PFW */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A56F19]">
              Why Patients First Worldwide
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#082237] sm:text-4xl lg:text-[44px]">
              A Clearer Way to Coordinate Your Endocrinology Journey
            </h2>
            <p className="mt-5 text-base leading-8 text-[#405366] sm:text-lg">
              Our role is to help make communication, appointments and
              healthcare coordination more organized and easier to navigate.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyPatientsChoose.map((item) => {
              const icon = customIcons[item.title];
              return (
                <div
                  key={item.title}
                  className="group rounded-[26px] border border-[#E7E1D5] bg-[#FAF8F2] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D5A442]/50 hover:shadow-[0_18px_45px_rgba(8,34,55,0.08)]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082237]">
                    {icon ? (
                      <Image
                        src={icon}
                        alt=""
                        width={48}
                        height={48}
                        className="h-10 w-10 object-contain"
                      />
                    ) : (
                      <CheckCircle2 className="h-6 w-6 text-[#E6B94F]" />
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#082237]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#405366]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HUMAN / TRUST SECTION */}
      <section className="bg-[#FAF8F2] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div className="relative h-[420px] overflow-hidden rounded-[32px] shadow-[0_25px_65px_rgba(8,34,55,0.12)]">
            <Image
              src="/about-us-2a.webp"
              alt="Patient support and healthcare coordination"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082237]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-[#082237]/80 px-5 py-4 backdrop-blur">
              <p className="font-serif text-lg font-bold text-white">
                Patient-focused coordination
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Clear communication. Practical support.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A56F19]">
              A Human Approach
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#082237] sm:text-4xl">
              Your Case Is More Than a Medical Report
            </h2>
            <p className="mt-6 text-base leading-8 text-[#405366]">
              Behind every endocrinology diagnosis is a person, a family and many
              important decisions.
            </p>
            <p className="mt-4 text-base leading-8 text-[#405366]">
              When you are trying to understand what to do next, coordinating
              medical information, appointments and specialist access can
              become difficult.
            </p>
            <p className="mt-4 text-base font-medium leading-8 text-[#263C50]">
              Patients First Worldwide helps make that coordination more
              organized and easier to navigate.
            </p>

            <div className="mt-7 rounded-2xl border-l-4 border-[#C88A2B] bg-white p-5 shadow-sm">
              <p className="text-sm leading-7 text-[#405366]">
                Our role is to support communication and coordination with
                appropriate healthcare providers. Medical diagnosis and
                treatment decisions remain with licensed healthcare
                professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTY CARE AREAS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A56F19]">
              Endocrinology & Diabetes Areas We Can Help Coordinate
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#082237] sm:text-4xl lg:text-[42px]">
              Endocrinology & Diabetes Services We Can Help Coordinate
            </h2>
            <p className="mt-5 text-base leading-8 text-[#405366]">
              Coordination support can be discussed based on your individual
              case, requirements and available healthcare providers.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {careAreas.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-[#E7E1D5] bg-[#FAF8F2] p-5 transition hover:border-[#D5A442]/60 hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C88A2B] to-[#F8DF8B] text-xs font-bold text-[#082237]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold text-[#082237]">{item}</span>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-[#667685]">
            The appropriate specialist, diagnosis and treatment pathway are
            determined by licensed healthcare professionals.
          </p>
        </div>
      </section>

      {/* COORDINATION SERVICES */}
      <section className="bg-[#FAF8F2] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A56F19]">
              What We Coordinate
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#082237] sm:text-4xl lg:text-[42px]">
              Endocrinology & Diabetes Care Coordination
            </h2>
            <p className="mt-5 text-base leading-8 text-[#405366] sm:text-lg">
              Practical coordination around consultations, providers,
              appointments and healthcare services.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coordinationServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-[25px] border border-[#E3DDD1] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(8,34,55,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082237]">
                      <Icon className="h-5 w-5 text-[#E6B94F]" />
                    </div>
                    <span className="font-serif text-3xl font-bold text-[#D8B05A]/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-lg font-bold leading-6 text-[#082237]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#536575]">
                    {service.text}
                  </p>
                  <div className="mt-5 h-1 w-10 rounded-full bg-gradient-to-r from-[#C88A2B] to-[#F8DF8B]" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A56F19]">
              How It Works
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#082237] sm:text-4xl lg:text-[42px]">
              A Clear Endocrinology Coordination Journey
            </h2>
            <p className="mt-5 text-base leading-8 text-[#405366] sm:text-lg">
              A structured process from your first enquiry through healthcare
              coordination.
            </p>
          </div>

          <div className="relative mt-14">
            <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-gradient-to-r from-[#C88A2B]/10 via-[#C88A2B]/60 to-[#F8DF8B]/10 lg:block" />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {journeySteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="relative text-center">
                    <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[#C88A2B] via-[#E6B94F] to-[#F8DF8B] shadow-[0_8px_25px_rgba(200,138,43,0.25)]">
                      <Icon className="h-6 w-6 text-[#082237]" />
                    </div>
                    <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#A56F19]">
                      STEP {step.number}
                    </p>
                    <h3 className="mt-2 font-serif text-lg font-bold text-[#082237]">
                      {step.title}
                    </h3>
                    <p className="mx-auto mt-3 max-w-[245px] text-sm leading-6 text-[#536575]">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-14 rounded-[28px] bg-[#082237] p-7 shadow-[0_18px_55px_rgba(8,34,55,0.14)] sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C88A2B] to-[#F8DF8B]">
                <ShieldCheck className="h-7 w-7 text-[#082237]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E6B94F]">
                  Our Role
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-white">
                  Coordination, Not Clinical Treatment
                </h3>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">
                  PFW provides non-clinical coordination. Medical advice,
                  diagnosis and treatment are provided only by licensed
                  healthcare professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UAE */}
      <section className="relative overflow-hidden bg-[#F3F1E9] py-20 sm:py-24">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-gradient-to-br from-[#C88A2B]/15 to-[#F8DF8B]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A56F19]">
                Across the UAE
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-[#082237] sm:text-4xl">
                Access Endocrinology & Diabetes Care Across the UAE
              </h2>
              <p className="mt-5 text-base leading-8 text-[#405366] sm:text-lg">
                If you are unsure where to seek endocrinology care, our team can
                help coordinate suitable provider options based on your
                information, preferences and location.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C88A2B] via-[#E6B94F] to-[#F8DF8B] px-6 py-3.5 text-sm font-bold text-[#082237] shadow-lg transition hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Our Team
                </a>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {locations.map((location) => (
                <div
                  key={location.title}
                  className="rounded-[26px] border border-white/80 bg-white p-6 shadow-[0_12px_35px_rgba(8,34,55,0.06)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082237]">
                    <MapPin className="h-5 w-5 text-[#E6B94F]" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-bold text-[#082237]">
                    {location.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#536575]">
                    {location.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-[#082237] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E6B94F]">
              Our Approach
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-white sm:text-4xl">
              A Patient-Focused Approach to Healthcare Coordination
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Clear communication, practical support and defined clinical
              boundaries throughout the coordination process.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Dedicated Patient Support",
                text: "A coordination point to help organize your healthcare journey.",
                icon: "/icons/pfw/04-dedicated-patient-companion.svg",
              },
              {
                title: "Confidential Case Handling",
                text: "Your information is handled with appropriate privacy considerations.",
                icon: "/icons/pfw/09-trust.svg",
              },
              {
                title: "Clear Communication",
                text: "Support coordinating communication between patients and appropriate providers.",
                icon: "/icons/pfw/08-transparency.svg",
              },
              {
                title: "International Patient Support",
                text: "Support for patients who need to coordinate healthcare services in the UAE.",
                icon: "/icons/pfw/16-global-healthcare-network.svg",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[25px] border border-white/10 bg-white/[0.06] p-7 text-center transition hover:bg-white/[0.09]"
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={52}
                  height={52}
                  className="mx-auto h-12 w-12 object-contain"
                />
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FAF8F2] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A56F19]">
              FAQ
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#082237] sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#E4DED2] bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-semibold text-[#082237]">
                  <div className="flex items-center justify-between gap-5">
                    <span>{faq.question}</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C88A2B]/15 to-[#F8DF8B]/35">
                      <ArrowRight className="h-4 w-4 text-[#A56F19] transition-transform group-open:rotate-90" />
                    </span>
                  </div>
                </summary>
                <p className="mt-5 border-t border-[#EEE9DF] pt-5 text-sm leading-7 text-[#405366]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#082237] py-20 sm:py-24">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-[#C88A2B]/25 to-[#F8DF8B]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-[#1B4863]/30 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E6B94F]">
            Your Next Step
          </p>

          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[48px]">
            You Don't Have to Navigate the Next Step Alone
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Whether you are looking for an endocrinology consultation, a second
            opinion or help coordinating your healthcare journey in the UAE,
            our team can help you take the next coordination step.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#case-enquiry"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C88A2B] via-[#E6B94F] to-[#F8DF8B] px-7 py-4 text-sm font-bold text-[#082237] shadow-[0_12px_35px_rgba(200,138,43,0.25)] transition hover:-translate-y-0.5"
            >
              Speak to Our Team
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E6B94F]/60 px-7 py-4 text-sm font-bold text-[#F8DF8B] transition hover:bg-white/5"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Our Team
            </a>

            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="bg-[#F3F1E9] px-6 py-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#A56F19]">
            Medical & Service Disclaimer
          </p>
          <p className="mx-auto mt-3 max-w-4xl text-xs leading-6 text-[#536575]">
            Patients First Worldwide provides non-clinical healthcare
            coordination and patient-support services. We do not diagnose
            medical conditions, provide medical treatment or make clinical
            decisions. Medical advice, diagnosis, treatment recommendations and
            treatment decisions are provided only by appropriately licensed
            healthcare professionals. Provider availability, services and
            treatment options may vary according to individual circumstances
            and healthcare provider availability.
          </p>
        </div>
      </section>

      {/* Mobile fixed conversion bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#082237]/95 p-2 shadow-[0_-10px_30px_rgba(8,34,55,0.18)] backdrop-blur-md sm:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C88A2B] via-[#E6B94F] to-[#F8DF8B] px-3 py-3 text-xs font-bold text-[#082237]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E6B94F]/70 px-3 py-3 text-xs font-bold text-[#F8DF8B]"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
        </div>
      </div>
    </main>
  );
}