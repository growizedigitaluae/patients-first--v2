import Link from "next/link";
import Image from "next/image";
import { PageHero, CtaBand } from "@/components/ui";
import { guides } from "@/data/guides";

export const metadata = {
  title: "Guides",
  description:
    "Practical, non-clinical guides from Patient First Worldwide — preparing records, travel logistics, second opinions, and supporting a family member through treatment abroad.",
};

export default function GuidesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Guidance Centre"
        title="Practical Guides for Your Healthcare Journey"
        description="Honest, plain-language guides about the coordination side of receiving care — records, travel, second opinions and family support. We don't provide medical advice, only practical guidance."
        image="/bg-01.webp"
        compact
        titleClass="text-2xl lg:text-3xl md:whitespace-nowrap"
      />

      <section className="pt-8 pb-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-52 w-full bg-slate-100">
                <Image src={guide.image} alt={guide.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-royal text-gold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full font-bold">
                  {guide.category}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-xs text-navy mb-2">
                  {guide.date} · {guide.readTime}
                </p>
                <h2 className="font-serif font-bold text-midnight text-xl mb-3 leading-snug">{guide.title}</h2>
                <p className="text-sm text-navy leading-relaxed mb-6 flex-1">{guide.excerpt}</p>
                <span className="text-gold-dark font-semibold text-sm inline-flex items-center gap-1 group-hover:underline">
                  Read guide →
                </span>
              </div>
            </Link>
          ))}

          <div className="bg-royal rounded-3xl p-8 text-white flex flex-col justify-center">
            <h3 className="font-serif text-2xl mb-3">Looking for Something Specific?</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Every patient journey is different. Ask us anything about coordinating your
              care — a real coordinator will answer.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-6 py-3 rounded-full font-semibold text-sm transition"
            >
              Ask Our Team
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
