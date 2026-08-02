"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, CheckCircle2, Languages, Globe2, MapPin } from "lucide-react";
import { destinations, type Destination } from "@/data/destinations";
import { hospitals } from "@/data/hospitals";

export function NetworkMap() {
  const [selected, setSelected] = useState<Destination | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div>
      {/* MAP */}
      <div className="relative w-full aspect-[2/1] min-h-[260px] bg-white rounded-3xl shadow-xl border border-slate-100 p-4 overflow-hidden">
        <Image src="/world-map.svg" alt="World map highlighting our healthcare network" fill className="object-contain opacity-60" />
        {destinations.map((dest) => {
          const active = hovered === dest.slug || selected?.slug === dest.slug;
          return (
            <button
              key={dest.slug}
              type="button"
              onClick={() => setSelected(dest)}
              onMouseEnter={() => setHovered(dest.slug)}
              onMouseLeave={() => setHovered(null)}
              className="absolute z-10 group"
              style={{ top: dest.pinTop, left: dest.pinLeft }}
              aria-label={`Explore healthcare options in ${dest.name}`}
            >
              <div className={`relative w-9 h-9 -translate-x-1/2 -translate-y-full transition-transform duration-200 ${active ? "scale-125" : "group-hover:scale-110"}`}>
                <MapPin className="w-9 h-9 brand-gold-icon brand-gold-fill drop-shadow-md" strokeWidth={2} />
              </div>
              <div
                className={`absolute -top-20 left-1/2 -translate-x-1/2 bg-midnight text-white px-4 py-2.5 shadow-2xl border border-white/10 transition-opacity duration-200 flex flex-col items-center min-w-[180px] pointer-events-none ${
                  hovered === dest.slug || selected?.slug === dest.slug ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl leading-none">{dest.emoji}</span>
                  <span className="text-base font-bold whitespace-nowrap">{dest.name}</span>
                </div>
                <span className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-gold">
                  Tap to explore
                </span>
                <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3 h-3 bg-midnight rotate-45" />
              </div>
            </button>
          );
        })}
      </div>

      <p className="text-xs text-navy text-center mt-4">
        Select a country to explore healthcare options in our network.
      </p>

      {/* POPUP MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Healthcare options in ${selected.name}`}
        >
          <div className="absolute inset-0 bg-midnight/70 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center transition"
            >
              <X className="w-4 h-4 brand-gold-icon" />
            </button>

            <div className="bg-royal text-white px-8 pt-8 pb-6 rounded-t-3xl">
              <p className="text-3xl mb-2">{selected.emoji}</p>
              <h2 className="font-serif text-2xl leading-tight">{selected.name}</h2>
              <p className="text-xs text-slate-300 mt-1 uppercase tracking-widest">Our Global Healthcare Network</p>
            </div>

            <div className="px-8 py-7 space-y-7">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gold-dark mb-2">
                  Why patients choose {selected.name}
                </h3>
                <p className="text-sm text-navy leading-relaxed">{selected.whyChoose}</p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gold-dark mb-3">
                  Commonly Sought Healthcare Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selected.services.map((service) => (
                    <span key={service} className="bg-ivory border border-slate-100 rounded-full px-3 py-1.5 text-xs text-navy font-medium">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-navy">
                <Languages className="w-4 h-4 brand-gold-icon shrink-0" />
                <span className="font-semibold text-navy mr-1">Languages:</span>
                {selected.languages.join(" · ")}
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gold-dark mb-3">
                  Healthcare Providers in Our Network
                </h3>
                <div className="flex flex-wrap gap-4">
                  {selected.hospitalIds.map((id) => {
                    const hospital = hospitals.find((h) => h.id === id);
                    if (!hospital) return null;
                    return (
                      <Link
                        key={id}
                        href={`/hospitals/${id}`}
                        title={hospital.name}
                        className="relative w-16 h-12 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 hover:border-gold transition"
                      >
                        <Image src={hospital.image} alt={hospital.name} fill className="object-cover" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gold-dark mb-3">
                  Patients First Worldwide Can Assist With
                </h3>
                <ul className="space-y-2">
                  {selected.assist.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy">
                      <CheckCircle2 className="w-4 h-4 brand-gold-icon shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-6 py-3.5 rounded-full font-semibold transition shadow-lg"
              >
                Speak with Our Team
              </Link>
              <p className="text-[11px] text-navy leading-relaxed">
                <Globe2 className="inline w-3.5 h-3.5 mr-1 brand-gold-icon" />
                Patients First Worldwide is an independent patient support and healthcare
                coordination company. We do not provide medical advice, diagnosis, or treatment.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
