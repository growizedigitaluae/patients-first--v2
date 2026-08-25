"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { PageHero, Disclaimer } from "@/components/ui";
import { faqs } from "@/data/faq";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [openPrivacyIndex, setOpenPrivacyIndex] = useState<number | null>(0);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
      <section className="relative overflow-hidden min-h-[420px] md:min-h-[500px] flex items-center">
  {/* Background Image */}
  <Image
    src="/support-background.webp"
    alt="Patients First Worldwide privacy commitment"
    fill
    priority
    className="object-cover"
  />

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-royal/75" />

  {/* Subtle secondary overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-royal/90 via-royal/70 to-royal/40" />

  <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 md:py-24">
    <div className="max-w-3xl">
      <p className="text-[#fCDA7B] font-semibold tracking-[0.18em] uppercase text-xs mb-5">
        Our Privacy Commitment
      </p>

      <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
        Your Privacy Matters to Us
      </h1>

      <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mb-5">
        Your health information is personal, and we treat it with the care,
        respect and responsibility it deserves. Patients First Worldwide is
        committed to protecting the privacy of the information you choose to
        share with us while supporting your healthcare journey.
      </p>

      <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl">
        We only use information responsibly to provide, coordinate and improve
        the support you have asked us to provide. We respect your choices,
        maintain appropriate safeguards, and never treat your personal
        information casually.
      </p>
    </div>
  </div>
</section>
<section className="pt-10 pb-10 px-6 max-w-3xl mx-auto">

  <div className="space-y-4">
    {[
      {
        q: "How We Protect Your Information",
        a: "We take reasonable and appropriate steps to protect the personal and health information entrusted to us. Access is limited to people who need the information to provide or coordinate the support you have requested, and we expect that information to be handled responsibly and respectfully.",
      },
      {
        q: "Your Choices and Rights",
        a: "You have the right to understand how your information is used and to ask questions about the information you have shared with us. Where applicable, you may request access, correction or clarification regarding your personal information. We will treat such requests with respect and respond appropriately.",
      },
      {
        q: "Responsible Use and Retention",
        a: "We collect and retain information only for legitimate purposes connected with the support and services we provide, or where we are otherwise required to do so. We avoid keeping information longer than reasonably necessary and take care when information is shared with trusted parties involved in supporting your healthcare journey.",
      },
    ].map((item, index) => {
      const open = openPrivacyIndex === index;

      return (
        <div
          key={item.q}
          className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
        >
          <button
            type="button"
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={open}
            onClick={() =>
              setOpenPrivacyIndex(open ? null : index)
            }
          >
            <span className="font-serif font-bold text-midnight leading-snug">
              {item.q}
            </span>

            <ChevronDown
              className={`w-5 h-5 brand-gold-icon shrink-0 transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <div className="px-6 pb-6">
              <p className="text-navy leading-relaxed text-sm md:text-base">
                {item.a}
              </p>
            </div>
          )}
        </div>
      );
    })}
  </div>
</section>


      <section className="pt-8 pb-14 px-6 max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.q} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className="font-serif font-bold text-midnight leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 brand-gold-icon shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && (
                  <div className="px-6 pb-6">
                    <p className="text-navy leading-relaxed text-sm md:text-base">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="relative h-56 md:h-64 rounded-3xl overflow-hidden my-10 shadow-xl">
          <Image src="/appointment.webp" alt="Discuss your healthcare journey" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-royal/85 to-royal/30" />
          <p className="absolute inset-0 flex items-center justify-center text-white font-serif text-2xl md:text-3xl px-8 text-center leading-snug">
            &ldquo;No question is too small when your health is involved.&rdquo;
          </p>
        </div>

        <div className="mt-10 bg-royal rounded-3xl p-10 text-center text-white">
          <h2 className="font-serif text-2xl mb-3">Still Have a Question?</h2>
          <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto mb-6">
            Ask us anything about coordinating your healthcare journey. A real coordinator
            will respond — quickly and honestly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition"
            >
              Ask Our Team
            </Link>
            <a
              href="https://wa.me/971566960486"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-10">
          <Disclaimer />
        </div>
      </section>
    </main>
  );
}
