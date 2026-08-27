import Link from "next/link";
import Image from "next/image";
import { PageHero, CtaBand } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description:
    "Meet the founder of Patients First Worldwide — our story, our mission, what we never do, and the patient advocate behind our promise.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Patients First Worldwide"
        title="Putting Patients First, Every Step of the Journey"
        description="We believe exceptional healthcare extends beyond medical treatment — it is about feeling understood, supported, and cared for throughout every stage of your journey."
        image="/about-hero-bg.webp"
        compact
        titleClass="text-2xl lg:text-3xl md:whitespace-nowrap"
      />

      {/* STORY */}
      <section className="pt-8 pb-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">
            Our Story
          </p>

          <h2 className="text-3xl md:text-4xl font-serif text-midnight">
            Because Every Patient Deserves Someone by Their Side
          </h2>

          <p className="text-navy leading-relaxed">
            At Patients First Worldwide, we believe that behind every patient is a life, a
            family, and a future. Accessing healthcare can be complex, whether you’re seeking
            treatment close to home or abroad. No one should have to navigate that journey alone.
          </p>

          <p className="text-navy leading-relaxed">
            We exist to make the healthcare journey more informed, organised, and less
            overwhelming. As your trusted patient support and healthcare coordination partner,
            we help you navigate the process by facilitating communication, coordinating
            logistics, and connecting you with appropriate healthcare providers based on your
            individual needs and preferences. From your first enquiry to the completion of your
            healthcare journey, we are committed to providing compassionate support, clear
            communication, and personalised guidance.
          </p>

          <p className="text-midnight font-semibold italic border-l-4 border-gold pl-4">
            &ldquo;No patient should ever feel alone during their healthcare journey.&rdquo;
          </p>
        </div>

        <div className="space-y-6">
          {/* OUR VISION */}
          <div className="bg-royal p-8 rounded-3xl text-white">
            <h3 className="text-sm font-bold tracking-widest text-gold uppercase mb-3">
              Our Vision
            </h3>

            <p className="font-serif italic leading-snug">
              &ldquo;To become a globally trusted name in healthcare access, connecting
              people to exceptional medical expertise beyond borders.&rdquo;
            </p>
          </div>

          {/* OUR MISSION */}
          <div className="bg-royal p-8 rounded-3xl text-white">
            <h3 className="text-sm font-bold tracking-widest text-gold uppercase mb-3">
              Our Mission
            </h3>

            <p className="font-serif italic leading-snug">
              &ldquo;To make healthcare easier to navigate by connecting each patient
              with carefully selected medical providers and coordinating the non-clinical
              aspects of their care with professionalism, transparency and personal
              attention.&rdquo;
            </p>
          </div>

          {/* WHAT WE NEVER DO */}
          <div className="bg-royal p-8 rounded-3xl text-white">
            <h3 className="text-sm font-bold tracking-widest text-gold uppercase mb-3">
              What We Never Do
            </h3>

            <p className="text-slate-200 text-sm leading-relaxed">
              We are coordinators, not clinicians. {site.legalName} does not provide
              medical advice, medical diagnoses, or medical treatment. All clinical
              decisions, recommendations, and treatments are provided solely by
              licensed healthcare professionals and healthcare providers chosen by
              the patient.
            </p>
          </div>
        </div>
      </section>

{/* FOUNDER */}
<section className="py-16 px-6 max-w-6xl mx-auto bg-white border-y border-slate-100">
  {/* Founder Image + Content */}
  <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-start">
    {/* Founder Image */}
    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl md:mt-8">
      <Image
        src="/ceo-profile.webp"
        alt="Akhdiya Mirzokarimova, Founder of Patients First Worldwide"
        fill
        className="object-cover"
      />
    </div>

    {/* Founder Content */}
    <div className="space-y-7">
      <div>
        <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs mb-2">
          Our Founder
        </p>

        <h2 className="text-4xl font-serif text-midnight">
          Akhdiya Mirzokarimova
        </h2>

        <p className="text-midnight font-medium text-lg mt-1">
          Founder, Patients First Worldwide
        </p>
      </div>

      <div className="space-y-4 text-navy leading-relaxed">
        <p>
          Patients First Worldwide was founded by Akhdiya Mirzokarimova with a clear
          belief: behind every patient there is a life, a family, and a future.
        </p>

        <p>
          Through her experience working closely with patients, physicians and healthcare
          organisations, she saw how difficult healthcare can become when people are left
          to navigate complex systems, multiple providers and important decisions on their
          own.
        </p>

        <p>
          She created Patients First Worldwide to bring something more human to that
          experience — clarity, trusted connections and thoughtful coordination, with the
          individual always at the centre.
        </p>

        <p>
          Her vision extends beyond borders: to build Patients First Worldwide into a
          trusted global healthcare partner for patients and families seeking the right
          care, wherever their journey may take them.
        </p>
      </div>
    </div>
  </div>

  {/* Founder Quote — Full Width */}
<div className="mt-10 bg-royal p-7 md:p-8 rounded-2xl border-l-4 border-gold">
  <p className="font-serif italic text-white text-base md:text-lg leading-relaxed">
    &ldquo;Healthcare will always be about people first. My vision for PFW is to
    make sure that, no matter how complex the journey becomes, we never lose sight
    of the person at the heart of it.&rdquo;
  </p>

  <p className="text-gold text-sm font-semibold mt-4">
    — Akhdiya Mirzokarimova
  </p>
</div>

  {/* Contact CTAs — Full Width */}
  <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
    <Link
      href="/contact"
      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-6 py-3 rounded-full font-semibold transition"
    >
      Speak with Our Team
    </Link>

    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-6 py-3 rounded-full font-semibold transition"
    >
      WhatsApp Us
    </a>
  </div>
</section>

      {/* GLOBAL NETWORK STRIP */}
      <section className="py-14 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">
              OUR GLOBAL NETWORK
            </p>

            <h2 className="text-3xl font-serif text-midnight">
              Connecting Healthcare Across the World
            </h2>

            <p className="text-navy leading-relaxed">
              Patients First Worldwide is developing a carefully selected international
              network of hospitals, medical centres, specialist physicians and healthcare
              partners across leading healthcare destinations. Our featured destinations
              include the United Arab Emirates, India, Saudi Arabia, Türkiye and the United
              States, with access extending beyond these markets through our wider
              international network. From established centres of medical excellence to highly
              specialised expertise across different regions, our network is designed to give
              patients broader access to healthcare across the world — through one global platform.
            </p>

            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-gold-dark font-semibold hover:underline"
            >
              Explore Our Global Healthcare Network →
            </Link>
          </div>

          <Link
            href="/destinations"
            className="group relative h-72 rounded-3xl overflow-hidden shadow-xl block"
          >
            <Image
              src="/hero-destination.webp"
              alt="Global healthcare network"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" />

            <span className="absolute bottom-5 left-5 text-white font-serif text-xl">
              Explore the Network
            </span>
          </Link>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}