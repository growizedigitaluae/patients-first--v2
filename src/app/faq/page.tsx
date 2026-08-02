"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { PageHero, Disclaimer } from "@/components/ui";
import { faqs } from "@/data/faq";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main>
      <PageHero
        eyebrow="Common Inquiries"
        title="Frequently Asked Questions"
        description="Straight answers about what we do, what we don't, and how we handle your information. If your question isn't here, just ask us directly."
        image="/support-background.webp"
      />

      <section className="py-20 px-6 max-w-3xl mx-auto">
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

        <div className="relative h-56 md:h-64 rounded-3xl overflow-hidden my-12 shadow-xl">
          <Image src="/appointment.webp" alt="Discuss your healthcare journey" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-royal/85 to-royal/30" />
          <p className="absolute inset-0 flex items-center justify-center text-white font-serif text-2xl md:text-3xl px-8 text-center leading-snug">
            &ldquo;No question is too small when your health is involved.&rdquo;
          </p>
        </div>

        <div className="mt-12 bg-royal rounded-3xl p-10 text-center text-white">
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

        <div className="mt-12">
          <Disclaimer />
        </div>
      </section>
    </main>
  );
}
