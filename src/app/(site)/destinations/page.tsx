import Link from "next/link";
import Image from "next/image";
import { NetworkMap } from "@/components/NetworkMap";
import { PageHero } from "@/components/ui";

export const metadata = {
  title: "Medical Tourism Destinations | UAE, India, Turkey, Saudi Arabia, USA",
  description:
    "Explore the medical tourism destinations coordinated by Patients First Worldwide — internationally accredited hospitals in the UAE (Dubai & Abu Dhabi), India, Turkey, Saudi Arabia and the USA. Independent healthcare coordination for treatment abroad, second opinions, and specialist care.",
  keywords: [
    "medical tourism UAE",
    "medical tourism Dubai",
    "treatment in Dubai",
    "healthcare coordination UAE",
    "treatment abroad",
    "internationally accredited hospitals",
    "second opinion Dubai",
    "medical travel coordination",
  ],
};

const medicalTourismCountries = [
  {
    slug: "united-arab-emirates",
    name: "United Arab Emirates",
    short: "the UAE",
    flag: "/flags/uae.png",
    eyebrow: "MEDICAL TOURISM IN THE UAE",
    cta: "Discuss Your Care in the UAE",
    languageSupport: "Language support available",
    description:
      "The United Arab Emirates is a leading international destination for advanced and specialised healthcare, combining world-class medical infrastructure, internationally accredited healthcare facilities, highly qualified medical professionals and cutting-edge technology within one sophisticated healthcare ecosystem. Patients can access a broad spectrum of medical expertise — from oncology, cardiology and cardiac surgery, neurology and neurosurgery, orthopaedics, women’s health and fertility, paediatrics and ophthalmology to complex surgery, transplantation, rehabilitation, precision medicine and advanced diagnostics. With multidisciplinary expertise, internationally recognised standards of quality and patient safety, innovative treatments and a highly multicultural healthcare environment, the UAE is equipped to support both routine medical needs and highly complex cases. For international patients seeking advanced medicine, exceptional healthcare facilities and a seamless experience in one destination, the United Arab Emirates represents healthcare at a global standard.",
    services: [
      "Orthopaedics & Spine",
      "Cardiology",
      "Oncology",
      "Women's Health & Fertility",
      "Neurology",
      "Paediatrics",
    ],
    featured: true,
  },
  {
    slug: "india",
    name: "India",
    short: "India",
    flag: "/flags/india.png",
    eyebrow: "Complex & High-Acuity Care",
    cta: "Plan Your Care in India",
    description:
      "India is one of the world's most established medical tourism destinations, known for complex and high-acuity treatment at internationally accredited hospitals. Patients travel to India for cardiac surgery, oncology, organ transplantation, neurosurgery and orthopaedic procedures — supported by experienced specialists and mature international patient services across Chennai, Mumbai, Delhi and Bengaluru.",
    services: [
      "Cardiology",
      "Oncology",
      "Organ Transplantation",
      "Neurology & Neurosurgery",
      "Orthopaedics",
      "Gastroenterology",
    ],
  },
  {
    slug: "turkey",
    name: "Turkey",
    short: "Turkey",
    flag: "/flags/turkey.png",
    eyebrow: "Elective & Specialty Treatments",
    cta: "Plan Your Care in Turkey",
    languageSupport: "Language support available",
    description:
      "Turkey is a preferred medical tourism destination for aesthetic surgery, dentistry, ophthalmology, bariatric and fertility programmes. Its internationally accredited hospitals in Istanbul and Ankara are well connected from the GCC, Europe and Central Asia — offering modern facilities, experienced specialists, and structured treatment packages with strong value.",
    services: [
      "Aesthetic & Reconstructive",
      "Dentistry",
      "Bariatrics",
      "Ophthalmology",
      "Fertility",
      "Cardiology",
    ],
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    short: "Saudi Arabia",
    flag: "/flags/saudi-arabia.png",
    eyebrow: "Regional Specialist Care",
    cta: "Plan Your Care in Saudi Arabia",
    languageSupport: "Language support available",
    description:
      "Saudi Arabia is rapidly expanding specialist tertiary and quaternary healthcare across the Kingdom. For patients seeking regional proximity and cultural alignment, Saudi Arabia offers recognised public and private institutions in Riyadh and Jeddah for oncology, cardiovascular care, neurosciences, fertility and paediatric medicine.",
    services: [
      "Oncology",
      "Organ Transplantation",
      "Cardiovascular",
      "Neurosciences",
      "Fertility",
      "Paediatrics",
    ],
  },
  {
    slug: "united-states",
    name: "United States",
    short: "the USA",
    flag: "/flags/united-states.png",
    eyebrow: "Rare & Complex Conditions",
    cta: "Explore Treatment in the USA",
    languageSupport: "Language support available",
    description:
      "The United States is a destination of choice for rare and complex conditions that are not readily treatable elsewhere. Leading academic medical centres and clinical research institutions offer precision medicine, clinical trials, complex surgery and comprehensive second opinions — often with multidisciplinary care teams.",
    services: [
      "Rare & Complex Conditions",
      "Oncology",
      "Precision Medicine",
      "Clinical Trials",
      "Complex Surgery",
      "Second Opinions",
    ],
  },
];

export default function DestinationsPage() {
  const featured = medicalTourismCountries.find((c) => c.featured)!;
  const others = medicalTourismCountries.filter((c) => !c.featured);

  return (
    <main>
      {/* HERO */}
      <PageHero
        eyebrow="Our Global Healthcare Network"
        title="Medical Tourism Destination We Coordinate"
        description={
          <>
            <span className="block md:whitespace-nowrap">
              Medical Tourism, Connected Worldwide.
            </span>

            <span className="block md:whitespace-nowrap">
              Wherever you are and wherever your healthcare journey takes you,
            </span>

            <span className="block md:whitespace-nowrap">
              Patients First Worldwide helps you explore trusted medical options
              across the world
            </span>

            <span className="block md:whitespace-nowrap">
              with independent, patient-focused coordination and no bias toward
              any particular country.
            </span>
          </>
        }
        image="/hero-destination.webp"
        compact
        descriptionClass="md:max-w-4xl"
      >
        <p className="text-sm text-navy/90 leading-relaxed mt-5 max-w-2xl mx-auto border-l-4 border-gold pl-4 text-left">
          Patients First Worldwide is an independent patient support and healthcare
          coordination company. We do not provide medical advice, diagnosis, or treatment.
          All clinical decisions remain the responsibility of licensed healthcare professionals.
        </p>
      </PageHero>

      {/* INTERACTIVE MAP */}
      <section className="pt-6 pb-12 px-6 max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-8 space-y-3">
          <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">
            Explore by Country
          </p>

          <h2 className="text-3xl md:text-4xl font-serif text-midnight">
            Select a Destination
          </h2>

          <p className="text-navy leading-relaxed">
            Patients First Worldwide helps you explore carefully selected healthcare
            destinations based on your medical needs, preferences, and treatment requirements.
            With the UAE as our primary healthcare destination, we also coordinate access to
            trusted international options when appropriate.
          </p>
        </div>

        <NetworkMap />
      </section>

      {/* MEDICAL TOURISM DESTINATIONS */}
      <section className="pt-10 pb-14 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">
            OUR GLOBAL STANDARD
          </p>

          <h2 className="text-3xl md:text-4xl font-serif text-midnight">
            Healthcare Without Borders. Quality Without Compromise.
          </h2>

          <p className="text-navy leading-relaxed">
            For Patients First Worldwide, global access does not mean unlimited choice — it
            means carefully selected choice. We build our network around trusted healthcare
            institutions and specialists that meet the standards we believe our patients
            deserve. Every potential collaboration is considered with one principle in mind:
            quality comes first.
            <br />
            <br />
            Because wherever in the world your medical journey takes you, our commitment
            remains the same: trusted care, responsible coordination, and patients first.
          </p>
        </div>

        {/* FEATURED: UAE */}
        <div className="bg-royal text-white rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-midnight via-royal to-[#0A2C49]" />

          <div className="relative z-10 p-6 sm:p-8 md:p-12 grid lg:grid-cols-[minmax(0,1.55fr)_minmax(280px,0.75fr)] gap-8 lg:gap-12 items-start">
            {/* UAE CONTENT */}
            <div className="space-y-4 min-w-0">
              <Image
                src={featured.flag}
                alt={`Flag of ${featured.name}`}
                width={96}
                height={64}
                className="w-24 h-16 object-contain drop-shadow-lg"
              />

              <p className="text-gold font-bold uppercase tracking-widest text-xs">
                {featured.eyebrow}
              </p>

              <h3 className="font-serif text-3xl md:text-4xl leading-tight">
                {featured.name}
              </h3>

              <p className="text-slate-200 leading-relaxed text-left md:text-justify">
                {featured.description}
              </p>

              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-7 sm:px-8 py-4 rounded-full font-semibold transition shadow-lg"
              >
                {featured.cta}
              </Link>
            </div>

            {/* UAE SPECIALTIES */}
            <div className="w-full lg:max-w-[320px] lg:justify-self-end bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
                Specialties We Help You Access
              </p>

              <div className="flex flex-wrap gap-1.5">
                {featured.services.map((service) => (
                  <span
                    key={service}
                    className="bg-white/10 border border-white/15 text-white rounded-full px-3 py-1.5 text-xs sm:text-sm leading-snug"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-white/10">
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1.5">
                  Language Support
                </p>

                <p className="text-slate-200 text-sm">
                  {featured.languageSupport}
                </p>
              </div>

              <p className="text-sm text-slate-400 mt-5 leading-relaxed">
                All medical advice, diagnosis, and treatment are provided exclusively by
                licensed healthcare professionals.
              </p>
            </div>
          </div>
        </div>

        {/* OTHER DESTINATIONS */}
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          {others.map((country) => (
            <div
              key={country.slug}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:border-gold transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={country.flag}
                  alt={`Flag of ${country.name}`}
                  width={72}
                  height={48}
                  className="w-[72px] h-12 object-contain rounded-md border border-slate-200"
                />

                <div>
                  <p className="text-gold-dark font-bold uppercase tracking-widest text-xs">
                    {country.eyebrow}
                  </p>

                  <h3 className="font-serif text-2xl text-midnight">
                    {country.name}
                  </h3>
                </div>
              </div>

              <p className="text-navy text-sm leading-relaxed flex-1">
                {country.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {country.services.map((service) => (
                  <span
                    key={service}
                    className="bg-ivory border border-slate-100 text-navy rounded-full px-3.5 py-1.5 text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <p className="text-gold-dark text-xs font-bold uppercase tracking-widest mb-1.5">
                  Language Support
                </p>

                <p className="text-navy text-sm">
                  {country.languageSupport}
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-gold-dark font-semibold text-sm hover:underline"
              >
                {country.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 bg-midnight text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif leading-tight">
            Not Sure Which Destination Fits Your Case?
          </h2>

          <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
            That’s exactly what our coordinators are for. Tell us about your situation and we’ll
            help you explore your options across our medical tourism network honestly and without
            pressure.
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