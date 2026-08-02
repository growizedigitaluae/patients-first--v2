import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Award, Globe2 } from "lucide-react";
import { CtaBand } from "@/components/ui";
import { hospitals, getHospital } from "@/data/hospitals";

export const dynamicParams = false;

export function generateStaticParams() {
  return hospitals.map((h) => ({ id: h.id }));
}

export async function generateMetadata(props: PageProps<"/hospitals/[id]">) {
  const { id } = await props.params;
  const hospital = getHospital(id);
  return {
    title: hospital ? `${hospital.name} | Healthcare Providers` : "Healthcare Provider",
    description: hospital
      ? `${hospital.name} — a healthcare provider in our network. ${hospital.profile}`
      : "Healthcare provider",
  };
}

export default async function HospitalPage(props: PageProps<"/hospitals/[id]">) {
  const { id } = await props.params;
  const hospital = getHospital(id);
  if (!hospital) notFound();

  return (
    <main>
      <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-ivory">
        <div className="absolute inset-x-0 top-16 sm:top-20 bottom-0 z-0">
          <Image src={hospital.image} alt="" fill className="object-cover object-top opacity-95" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-ivory/85 to-ivory" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-gold-dark uppercase tracking-widest text-xs font-bold mb-3">
            {hospital.country} · Our Healthcare Network
          </p>
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-midnight">{hospital.name}</h1>
          <p className="text-navy flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 brand-gold-icon" />
            {hospital.location}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-10 space-y-9">
          <div>
            <h2 className="text-xl font-serif text-midnight mb-2">Institution Profile</h2>
            <p className="text-navy leading-relaxed">{hospital.profile}</p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-midnight mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 brand-gold-icon" />
              Clinical Strengths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {hospital.strengths.map((strength) => (
                <div key={strength} className="flex items-start gap-2 bg-ivory p-3 rounded-xl border border-slate-100">
                  <span className="bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] bg-clip-text text-transparent font-bold">✓</span>
                  <span className="text-sm text-navy font-medium">{strength}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-serif text-midnight mb-2">Recognition & Accreditation</h2>
            <p className="text-navy leading-relaxed">{hospital.recognition}</p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-midnight mb-2 flex items-center gap-2">
              <Globe2 className="w-5 h-5 brand-gold-icon" />
              International Patient Access
            </h2>
            <p className="text-navy leading-relaxed">{hospital.patientAccess}</p>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <p className="text-sm text-navy leading-relaxed mb-6">
              We coordinate access to this facility as part of your journey. We are an
              independent coordinator — we do not receive clinical direction from, nor
              exclusively represent, any single hospital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <Link href="/destinations" className="text-gold-dark font-semibold text-sm hover:underline">
                ← Back to our network
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal font-medium px-8 py-3.5 rounded-full transition text-center shadow-md"
              >
                Speak with Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="py-12" />
      <CtaBand
        title={`Exploring ${hospital.name}?`}
        subtitle="Our coordinators can help you understand whether this facility fits your case — and present other options across our network. Free and no obligation."
      />
    </main>
  );
}
