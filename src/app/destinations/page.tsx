import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/ui";
import { NetworkMap } from "@/components/NetworkMap";
import { hospitals } from "@/data/hospitals";

export const metadata = {
  title: "Our Global Healthcare Network",
  description:
    "Explore healthcare options across our international network of trusted healthcare providers — the UAE, India, Saudi Arabia, Turkey and the United States — with personalised support and coordination.",
};

export default function DestinationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Global Healthcare Network"
        title="Our Global Healthcare Network"
        description="Explore healthcare options across our international network of trusted healthcare providers. Every country offers different strengths, healthcare systems, and patient experiences. Patients First Worldwide helps you navigate these options with personalised support and healthcare coordination."
        image="/hero-destination.webp"
      >
        <p className="text-xs text-navy mt-4 max-w-xl mx-auto">
          Patients First Worldwide is an independent patient support and healthcare coordination
          company. We do not provide medical advice, diagnosis, or treatment. All clinical
          decisions remain the responsibility of licensed healthcare professionals.
        </p>
      </PageHero>

      {/* INTERACTIVE MAP */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-3">
          <p className="text-gold font-semibold tracking-[0.18em] uppercase text-xs">Explore by Country</p>
          <h2 className="text-3xl md:text-4xl font-serif text-midnight">Select a Destination</h2>
          <p className="text-navy leading-relaxed">
            No single country is right for every patient. We present balanced information to help
            you explore your options — without bias toward any particular destination.
          </p>
        </div>
        <NetworkMap />
      </section>

      {/* HEALTHCARE PROVIDERS IN OUR NETWORK */}
      <section className="py-20 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-4 space-y-3">
            <p className="text-gold font-semibold tracking-[0.18em] uppercase text-xs">Our Network</p>
            <h2 className="text-3xl md:text-4xl font-serif text-midnight">
              Healthcare Providers in Our Network
            </h2>
          </div>
          <p className="text-navy leading-relaxed text-center max-w-2xl mx-auto mb-12">
            Patients First Worldwide collaborates with selected healthcare providers across
            multiple countries to support patients in navigating their healthcare journey.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {hospitals.map((h) => (
              <Link
                key={h.id}
                href={`/hospitals/${h.id}`}
                className="group bg-ivory rounded-3xl p-6 border border-slate-100 hover:shadow-lg hover:border-gold transition-all duration-300 flex items-center gap-4"
              >
                <div className="relative w-16 h-12 rounded-xl overflow-hidden bg-white border border-slate-200 shrink-0">
                  <Image src={h.image} alt={h.name} fill sizes="64px" className="object-cover" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-midnight font-bold leading-snug group-hover:text-gold-dark transition">
                    {h.name}
                  </h3>
                  <p className="text-xs text-navy mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 shrink-0 brand-gold-icon" />
                    <span className="truncate">{h.location}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-midnight text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif leading-tight">
            Not Sure Which Option Fits Your Case?
          </h2>
          <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
            That’s exactly what our coordinators are for. Tell us about your situation and we’ll
            help you explore your options honestly and without pressure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition shadow-lg"
            >
              Speak with Our Team
            </Link>
            <Link
              href="/medical-specialties"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition"
            >
              Explore Medical Specialties
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
