import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/ui";
import { JourneyTimeline } from "@/components/JourneyTimeline";

export const metadata = {
  title: "Medical Journey",
  description:
    "A clear, structured process for your healthcare journey. From your first conversation to ongoing follow-up, see how Patients First Worldwide coordinates every stage.",
};

export default function MedicalJourneyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Your Healthcare Journey"
        title="Your Journey Starts Here"
        description="Knowing what happens next can make all the difference. Navigating healthcare can involve many decisions, questions, and practical arrangements. At Patients First Worldwide, we’ve created a clear and structured process to help you understand what to expect from the moment you contact us."
        image="/journey.webp"
        compact
        titleClass="text-3xl md:text-4xl lg:text-5xl md:whitespace-nowrap"
      >
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition shadow-lg"
        >
              Start Your Journey
        </Link>
      </PageHero>

      <section className="pt-8 pb-14 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">
            How Your Healthcare Journey Works
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-midnight whitespace-nowrap">
            A Clear Process, Every Step of the Way
          </h2>
          <p className="text-navy leading-relaxed">
            Every patient’s circumstances are different. The journey below outlines the typical
            stages involved when coordinating healthcare through Patients First Worldwide.
          </p>
        </div>

        <JourneyTimeline />
      </section>

      {/* UNDERSTANDING THE PROCESS */}
      <section className="py-14 px-6 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
            <Image src="/during.webp" alt="Coordinating your healthcare journey with patient support" fill className="object-cover" />
          </div>
          <div className="space-y-4">
            <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">
              Understanding the Process
            </p>
            <h2 className="text-3xl font-serif text-midnight">Every Healthcare Journey Is Different</h2>
            <p className="text-navy leading-relaxed">
              The number of steps, timeframes, documentation requirements, and coordination
              activities may vary depending on your medical circumstances, the healthcare provider,
              the country of treatment, and the services requested. Our role is to help coordinate
              the non-clinical aspects of your healthcare journey while keeping you informed
              throughout the process.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 bg-midnight text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif leading-tight">
            Ready to Take the First Step?
          </h2>
          <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Whether you are seeking a consultation, a second opinion, or planning treatment
            locally or internationally, our team is ready to help you understand the next steps.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition shadow-lg"
            >
              Speak With Our Team
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
