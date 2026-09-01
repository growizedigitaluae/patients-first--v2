"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Disclaimer } from "@/components/ui";
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
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* PRIVACY HERO */}
      <section className="relative overflow-hidden min-h-[420px] md:min-h-[500px] flex items-center">
        {/* Background Image */}
        <Image
          src="/support-background.webp"
          alt="Patients First Worldwide privacy commitment"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-royal/75" />

        {/* Secondary overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-royal/90 via-royal/70 to-royal/40" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#fCDA7B] font-semibold tracking-[0.18em] uppercase text-xs mb-5">
              Our Privacy Commitment
            </p>

            <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Your Privacy Matters to Us
            </h1>

            <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-5">
              At <em>Patients First Worldwide </em>, we understand that
              the information you share with us may be personal and sensitive,
              particularly when it relates to your health.
            </p>

            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              We are committed to handling personal information responsibly,
              respectfully and in accordance with applicable data protection
              requirements.
            </p>

            <p className="mt-4 text-white/80 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              <em>
                Privacy is not an afterthought at Patients First Worldwide. It is part of how we
                work.
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* PRIVACY INFORMATION */}
<section className="pt-10 pb-10 px-6 max-w-3xl mx-auto">
  <div className="space-y-4">
    {[
      {
        q: "Privacy by Default",
        content: (
          <div className="space-y-4">
            <p>
              Patients First Worldwide aims to collect and use personal information that is
              reasonably necessary to provide the services you request,
              communicate with you and coordinate relevant healthcare and
              support services.
            </p>

            <p>
              Depending on your request, this may include contact details,
              identification information, medical records, insurance
              information and other information you choose to provide.
            </p>
          </div>
        ),
      },
      {
        q: "How Your Information May Be Used",
        content: (
          <div className="space-y-4">
            <p>Your information may be used to:</p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Understand and respond to your request</li>
              <li>
                Coordinate with healthcare providers and relevant service
                partners
              </li>
              <li>Arrange appointments and requested support services</li>
              <li>
                Facilitate the transfer of relevant documents and information
              </li>
              <li>
                Communicate with you or an authorised representative
              </li>
              <li>
                Meet applicable legal, regulatory and operational requirements
              </li>
            </ul>

            <p>
              Where appropriate, information may be shared with relevant
              healthcare providers or service partners involved in fulfilling
              your request, subject to applicable requirements.
            </p>
          </div>
        ),
      },
      {
        q: "International Coordination",
        content: (
          <div className="space-y-4">
            <p>
              Because Patients First Worldwide supports healthcare coordination internationally,
              your information may need to be shared with healthcare providers
              or relevant service partners located outside your country.
            </p>

            <p>
              Where this is required, Patients First Worldwide aims to handle such information
              responsibly and in accordance with applicable data protection
              requirements.
            </p>
          </div>
        ),
      },
      {
        q: "Your Choices",
        content: (
          <div className="space-y-4">
            <p>
              Subject to applicable laws and requirements, you may contact Patients First Worldwide
              to ask about the personal information we hold about you, request
              corrections, update your preferences or raise a privacy concern.
            </p>

            <p>
              Certain information may need to be retained where required or
              permitted by applicable law or for legitimate operational,
              compliance or record-keeping purposes.
            </p>
          </div>
        ),
      },
      {
        q: "Our Commitment",
        content: (
          <div className="space-y-4">
            <p>
              We recognise that sharing personal and medical information
              requires trust.
            </p>

            <p>
              Patients First Worldwide takes reasonable organisational and technical measures
              designed to protect the information entrusted to us and to limit
              access to those who reasonably require it for legitimate
              purposes.
            </p>

            <p className="font-semibold text-midnight">
              Your information deserves care, discretion and respect.
            </p>
          </div>
        ),
      },
      {
        q: "Privacy Questions",
        content: (
          <div className="space-y-4">
            <p>
              For questions regarding privacy or the handling of your personal
              information, please contact:
            </p>

            <div className="space-y-1">
              <p className="font-semibold text-midnight">
                Patients First Worldwide
              </p>

              <a
                href="mailto:info@patientsfirstworldwide.com"
                className="text-gold-dark font-semibold hover:underline break-all"
              >
                info@patientsfirstworldwide.com
              </a>
            </div>
          </div>
        ),
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
              <div className="text-navy leading-relaxed text-sm md:text-base">
                {item.content}
              </div>
            </div>
          )}
        </div>
      );
    })}
  </div>

  {/* IMPORTANT NOTICE */}
  <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-6">
    <h3 className="font-serif font-bold text-midnight text-base mb-3">
      Important Notice
    </h3>

    <div className="text-navy text-sm leading-relaxed space-y-3">
      <p>
        This Privacy Commitment provides a general overview of Patients First Worldwide&apos;s
        approach to personal information. It does not constitute the complete
        Privacy Policy and does not create rights or obligations beyond those
        provided under applicable law.
      </p>

      <p>
        Please refer to the{" "}
        <Link
          href="/privacy"
          className="text-gold-dark font-semibold hover:underline"
        >
          Patients First Worldwide Privacy Policy
        </Link>{" "}
        for detailed information regarding data processing, legal bases,
        retention, international transfers, cookies and applicable data
        protection rights.
      </p>
    </div>
  </div>
</section>

      {/* FAQ */}
      <section className="pt-8 pb-14 px-6 max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className="font-serif font-bold text-midnight leading-snug">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 brand-gold-icon shrink-0 transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open && (
                  <div className="px-6 pb-6">
                    {faq.q === "What about my privacy?" ? (
                      <p className="text-navy leading-relaxed text-sm md:text-base">
                        {faq.a}{" "}
                        Please also review our{" "}
                        <Link
                          href="/privacy"
                          className="text-gold-dark font-semibold hover:underline"
                        >
                          Privacy Statement
                        </Link>{" "}
                        for more information about how we handle your personal
                        information.
                      </p>
                    ) : (
                      <p className="text-navy leading-relaxed text-sm md:text-base">
                        {faq.a}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ IMAGE */}
        <div className="relative h-56 md:h-64 rounded-3xl overflow-hidden my-10 shadow-xl">
          <Image
            src="/appointment.webp"
            alt="Discuss your healthcare journey"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-royal/85 to-royal/30" />

          <p className="absolute inset-0 flex items-center justify-center text-white font-serif text-2xl md:text-3xl px-8 text-center leading-snug">
            &ldquo;No question is too small when your health is involved.&rdquo;
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 bg-royal rounded-3xl p-10 text-center text-white">
          <h2 className="font-serif text-2xl mb-3">
            Still Have a Question?
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto mb-6">
            Ask us anything about coordinating your healthcare journey. A real
            coordinator will respond — quickly and honestly.
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

        {/* DISCLAIMER */}
        <div className="mt-10">
          <Disclaimer />
        </div>
      </section>
    </main>
  );
}