import Link from "next/link";
import Image from "next/image";
import {
  Bone,
  HeartPulse,
  Activity,
  Brain,
  Flower2,
  Baby,
  Eye,
  Droplets,
  UtensilsCrossed,
  HandHeart,
  Accessibility,
  Smile,
  AirVent,
  Gauge,
  ClipboardCheck,
  Microscope,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/ui";
import { medicalSpecialties } from "@/data/medical-specialties";

export const metadata = {
  title: "Medical Specialties",
  description:
    "Patients First Worldwide helps patients navigate access to healthcare providers across a broad range of medical specialties. We support the non-clinical aspects of the healthcare journey.",
};

const specialtyIcons = [
  Bone,
  HeartPulse,
  Activity,
  Brain,
  Flower2,
  Baby,
  Eye,
  Droplets,
  UtensilsCrossed,
  HandHeart,
  Accessibility,
  Smile,
  AirVent,
  Gauge,
  ClipboardCheck,
  Microscope,
];

const expectations = [
  "Dedicated Patient Journey Coordinator",
  "Clear Communication",
  "Healthcare Coordination",
  "Support for Patients & Families",
  "Privacy & Confidentiality",
  "Independent Patient Support",
];

const specialtyImages: Record<string, string> = {
  "orthopaedics-spine": "/orthopaedics-spine-support.webp",
  "cardiology-cardiac-surgery": "/cardiology-cardiac-care.webp",
  "oncology-haematology": "/oncology-haematology-care.webp",
  "neurology-neurosurgery": "/neurology-neurosurgery-care.webp",
  "womens-health-fertility": "/womens-health-fertility-care.webp",
  paediatrics: "/paediatrics-care.webp",
  ophthalmology: "/ophthalmology-care.webp",
  "urology-nephrology": "/urology-nephrology-care.webp",
  gastroenterology: "/gastroenterology-care.webp",
  transplantation: "/transplantation-care.webp",
  rehabilitation: "/rehabilitation-care.webp",
  dentistry: "/dentistry-care.webp",
  pulmonology: "/pulmonology-care.webp",
  "endocrinology-diabetes": "/endocrinology-diabetes-care.webp",
  "executive-health-screening": "/executive-health-screening-care.webp",
  "rare-diseases": "/rare-diseases-care.webp",
};

export default function MedicalSpecialtiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Global Healthcare Network"
        title="Medical Specialties We Support"
        description="Whether you’re seeking a second opinion, specialist care, or treatment closer to home or abroad, Patients First Worldwide helps you navigate your healthcare journey by connecting you with appropriate healthcare providers across a wide range of medical specialties."
        image="/feture-blog.webp"
        compact
      >
        <p className="text-xs text-navy mt-4 max-w-xl mx-auto">
          Medical advice, diagnosis, and treatment are provided exclusively by licensed
          healthcare professionals.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition shadow-lg"
        >
          Speak with Our Team
        </Link>
      </PageHero>

      {/* BRAND SEPARATOR */}
      <div className="h-2 w-1/2 mx-auto rounded-full bg-royal" aria-hidden />

      {/* SPECIALTIES */}
      <section className="pt-8 pb-16 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-3">
          <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">
            Healthcare Coordination Across Multiple Specialties
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-midnight">Medical Specialties</h2>
          <p className="text-navy leading-relaxed">
            Select a specialty to see how we support patients seeking appropriate care — close
            to home or abroad. Our team coordinates the non-clinical side of your journey:
            communication, appointments, medical records, and follow-up.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {medicalSpecialties.map((specialty, index) => {
            const Icon = specialtyIcons[index] ?? HeartHandshake;
            return (
              <Link
                key={specialty.slug}
                href={`/contact?careArea=${encodeURIComponent(specialty.title)}`}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden">
                  <Image
                    src={specialtyImages[specialty.slug] ?? specialtyImages["rare-diseases"]}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal/80 via-royal/25 to-transparent" />
                  <div className="absolute bottom-4 left-5 w-12 h-12 bg-white/95 rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-midnight" />
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-serif text-xl text-midnight font-bold mb-3 leading-snug group-hover:text-gold-dark transition">
                    {specialty.title}
                  </h3>
                  <p className="text-sm text-navy leading-relaxed flex-1">{specialty.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-gold-dark text-sm font-semibold group-hover:underline">
                    Discuss your case <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* OUR ROLE */}
      <section className="relative py-14 px-6 bg-royal text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/care.webp" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-royal via-royal/90 to-royal" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <p className="text-gold font-semibold tracking-[0.18em] uppercase text-xs">Our Role</p>
          <h2 className="text-3xl md:text-4xl font-serif">Coordinating Your Journey, Never Your Care</h2>
          <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Patients First Worldwide is an independent patient support and healthcare
            coordination company. We help patients navigate the healthcare journey by
            facilitating communication and coordinating non-clinical services. Medical advice,
            diagnosis, treatment recommendations, and clinical care are provided exclusively by
            licensed healthcare professionals.
          </p>
        </div>
      </section>

      {/* WHAT YOU CAN EXPECT */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-[400px] lg:h-[440px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/about-us-2.webp"
              alt="Dedicated patient support team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">
                What You Can Expect
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-midnight">
                How We Support You
              </h2>
              <p className="text-navy leading-relaxed">
                Throughout your healthcare journey, you’ll always know who is coordinating your
                next steps — and who to turn to when questions come up.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {expectations.map((item) => (
                <div
                  key={item}
                  className="bg-ivory rounded-2xl px-5 py-4 border border-slate-100 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 brand-gold-icon shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-midnight">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 bg-midnight text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif leading-tight">
            Let’s Start with a Conversation
          </h2>
          <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Tell us about your healthcare needs, and our team will help you understand the next
            steps — no obligation, and no pressure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition shadow-lg"
            >
              Speak with Our Team
            </Link>
            <Link
              href="/medical-journey"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition"
            >
              See How the Journey Works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
