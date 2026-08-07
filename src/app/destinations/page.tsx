import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui";
import { NetworkMap } from "@/components/NetworkMap";

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
    eyebrow: "Medical Tourism in UAE",
    cta: "Discuss Your Care in the UAE",
    description:
      "The UAE — and Dubai and Abu Dhabi in particular — has grown into one of the leading medical tourism destinations in the Gulf region. The country is home to internationally accredited hospitals that combine advanced medical technology with multilingual, multicultural care teams. For patients across the GCC and beyond, medical tourism in the UAE means internationally recognised specialists, English-speaking coordination, and world-class healthcare close to home — without long-haul travel.",
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
      <PageHero
        eyebrow="Our Global Healthcare Network"
        title="Medical Tourism Destinations We Coordinate"
        description="From the UAE to the USA, we help patients explore trusted healthcare options across five leading medical tourism destinations — with independent, patient-focused coordination and no bias toward any particular country."
        image="/hero-destination.webp"
        compact
      >
        <p className="text-sm text-navy/90 leading-relaxed mt-5 max-w-2xl mx-auto border-l-4 border-gold pl-4 text-left">
          Patients First Worldwide is an independent patient support and healthcare coordination
          company. We do not provide medical advice, diagnosis, or treatment. All clinical
          decisions remain the responsibility of licensed healthcare professionals.
        </p>
      </PageHero>

      {/* INTERACTIVE MAP */}
      <section className="pt-6 pb-12 px-6 max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-8 space-y-3">
          <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">Explore by Country</p>
          <h2 className="text-3xl md:text-4xl font-serif text-midnight">Select a Destination</h2>
          <p className="text-navy leading-relaxed">
            No single country is right for every patient. We present balanced information to help
            you explore your options — without bias toward any particular destination.
          </p>
        </div>
        <NetworkMap />
      </section>

      {/* MEDICAL TOURISM DESTINATIONS */}
      <section className="pt-10 pb-14 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">
            Medical Tourism Destinations
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-midnight">
            Five Destinations. One Trusted Coordinator.
          </h2>
          <p className="text-navy leading-relaxed">
            Whether you’re considering medical tourism in the UAE or exploring treatment options
            further afield, we coordinate access to internationally accredited hospitals and
            specialists across the United Arab Emirates, India, Turkey, Saudi Arabia and the
            United States — helping you find the right pathway for your case.
          </p>
        </div>

        {/* FEATURED: UAE */}
        <div className="bg-royal text-white rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-midnight via-royal to-[#0A2C49]" />
          <div className="relative z-10 p-8 md:p-12 grid lg:grid-cols-[1fr_1fr] gap-8 items-center">
            <div className="space-y-4">
              <Image
                src={featured.flag}
                alt={`Flag of the ${featured.name}`}
                width={96}
                height={64}
                className="w-24 h-16 object-contain drop-shadow-lg"
              />
              <p className="text-gold font-bold uppercase tracking-widest text-xs">{featured.eyebrow}</p>
              <h3 className="font-serif text-3xl md:text-4xl leading-tight">{featured.name}</h3>
              <p className="text-slate-200 leading-relaxed">{featured.description}</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition shadow-lg"
              >
                {featured.cta}
              </Link>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
                Specialties We Help You Access
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.services.map((service) => (
                  <span
                    key={service}
                    className="bg-white/10 border border-white/15 text-white rounded-full px-3.5 py-1.5 text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-400 mt-5 leading-relaxed">
                All medical advice, diagnosis, and treatment are provided exclusively by licensed
                healthcare professionals.
              </p>
            </div>
          </div>
        </div>

        {/* OTHER DESTINATIONS */}
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          {others.map((country) => (
            <div
              key={country.slug}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:border-gold transition-all duration-300 flex flex-col"
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
                  <h3 className="font-serif text-2xl text-midnight">{country.name}</h3>
                </div>
              </div>
              <p className="text-navy text-sm leading-relaxed flex-1">{country.description}</p>
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
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-gold-dark font-semibold text-sm hover:underline"
              >
                {country.cta}
                <ArrowRight className="w-4 h-4" />
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
