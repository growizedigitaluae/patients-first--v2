import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative pt-36 pb-28 px-6 overflow-hidden bg-ivory">
      <div className="absolute inset-x-0 top-16 sm:top-20 bottom-0 z-0">
        <Image src={image} alt="" fill className="object-cover object-top opacity-95" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-ivory/85 to-ivory" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-gold-dark font-semibold tracking-[0.2em] uppercase text-xs mb-4">{eyebrow}</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-midnight">{title}</h1>
        {description && (
          <p className="mt-6 text-lg text-navy leading-relaxed max-w-2xl mx-auto">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center mx-auto" : "text-left"} max-w-2xl mb-12 space-y-3`}>
      {eyebrow && (
        <p className="text-gold font-semibold tracking-[0.18em] uppercase text-xs">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-serif text-midnight leading-tight">{title}</h2>
      {description && <p className="text-navy leading-relaxed">{description}</p>}
    </div>
  );
}

export function CtaBand({
  title = "Every Journey Begins with a Conversation",
  subtitle = "Our team is here to understand your needs, answer your questions, and help you explore the next steps of your healthcare journey.",
  ctaLabel = "Speak with Our Team",
}: {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="py-20 px-6 bg-midnight text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif leading-tight">{title}</h2>
        <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition shadow-lg"
          >
            {ctaLabel}
          </Link>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function Disclaimer({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-slate-50 border-l-4 border-gold border-y border-r border-slate-200 p-6 rounded-2xl ${className}`}>
      <p className="font-serif text-midnight font-bold text-xs uppercase tracking-widest mb-2">
        Important Legal Notice
      </p>
      <p className="text-navy text-sm leading-relaxed">
        Patients First Worldwide is an independent patient support and healthcare coordination
        company. We do not provide medical advice, medical diagnoses, or medical treatment.
        Clinical decisions, treatment recommendations, and medical care remain the sole
        responsibility of licensed healthcare professionals and healthcare providers chosen by
        the patient.
      </p>
    </div>
  );
}
