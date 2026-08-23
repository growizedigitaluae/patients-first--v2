import Link from "next/link";
import Image from "next/image";
import {
  Eye,
  HeartHandshake,
  Users,
  Globe,
  UserCheck,
  Handshake,
  Network,
  ShieldCheck,
  Award,
} from "lucide-react";
import { site } from "@/lib/site";

const pillars = [
  {
    icon: UserCheck,
    title: "Personalised Guidance",
    text: "Every healthcare journey is different. We listen first, understand your priorities, and help coordinate the next steps with clarity, care, and confidence.",
  },
  {
    icon: HeartHandshake,
    title: "Patients Always Come First",
    text: "Your wellbeing, peace of mind, and informed decision-making are at the heart of everything we do — because every patient deserves to feel heard, supported, and respected.",
  },
  {
    icon: Globe,
    title: "Trusted Healthcare Connections",
    text: "We connect patients with carefully selected healthcare providers and experienced medical professionals, helping you make informed decisions with confidence.",
    href: "/destinations",
  },
  {
    icon: Users,
    title: "Your Dedicated Patient Companion",
    text: "From your first enquiry until your healthcare journey is complete, you’ll have a dedicated coordinator by your side to facilitate communication, organise the process, and support you every step of the way.",
    href: "/medical-journey",
  },
];

const journeySteps = [
  {
    step: "01",
    title: "Tell Us Your Story",
    text: "Every patient is unique. We take the time to listen, understand your situation, and learn what matters most to you.",
  },
  {
    step: "02",
    title: "Together, We Plan the Journey",
    text: "Your dedicated Patient Care Coordinator helps coordinate appointments, medical information, and communication, making the process simpler and less overwhelming.",
  },
  {
    step: "03",
    title: "Support Every Step of the Way",
    text: "We’re here to help you navigate your healthcare journey with confidence, clarity, and compassionate support from beginning to end.",
  },
];

const journeySupport = [
  {
    title: "Before Your Healthcare Journey",
    image: "/before.webp",
    items: [
      "Understanding your healthcare needs and preferences",
      "Connecting you with appropriate healthcare providers",
      "Assistance with appointment coordination",
      "Medical record and document coordination",
      "Teleconsultation coordination (where available)",
      "Travel and accommodation assistance (if required)",
    ],
  },
  {
    title: "During Your Healthcare Journey",
    image: "/during.webp",
    items: [
      "Dedicated Patient Journey Coordinator",
      "Appointment and schedule coordination",
      "Communication support between you and your healthcare provider",
      "Language interpretation coordination (when required)",
      "Support for accompanying family members",
      "Assistance with non-clinical logistics",
    ],
  },
  {
    title: "After Your Healthcare Journey",
    image: "/after.webp",
    items: [
      "Follow-up appointment coordination",
      "Ongoing communication support with your healthcare provider",
      "Medical documentation assistance",
      "Continuity of care coordination",
      "Guidance on the next administrative steps",
      "Continued patient support as needed",
    ],
  },
];

const differences = [
  {
    title: "Patient-Centred Support",
    text: "Every healthcare journey begins with understanding your individual needs, preferences, and priorities.",
  },
  {
    title: "Independent Healthcare Navigation",
    text: "We help you explore appropriate healthcare providers and treatment destinations based on your unique circumstances, empowering you to make informed decisions.",
  },
  {
    title: "Dedicated Patient Journey Coordinator",
    text: "One dedicated point of contact to support communication, coordinate logistics, and guide you throughout your healthcare journey.",
  },
  {
    title: "Global Healthcare Network",
    text: "Access to an international network of healthcare providers and medical institutions across multiple countries.",
  },
  {
    title: "Personalised Coordination",
    text: "Support with appointments, medical records, travel arrangements, and other non-clinical aspects of your healthcare journey.",
  },
  {
    title: "Privacy & Confidentiality",
    text: "We handle your personal information with the highest level of confidentiality and in accordance with applicable data protection requirements.",
  },
  {
    title: "Transparent Communication",
    text: "Clear, timely communication so you and your family remain informed throughout the coordination process.",
  },
  {
    title: "Independent & Patient-Focused",
    text: "Our priority is helping you navigate your healthcare journey with confidence, clarity, and compassion.",
  },
];

const values = [
  { icon: HeartHandshake, title: "Humanity First", text: "Because every patient deserves to be treated with dignity and compassion." },
  { icon: Handshake, title: "Partnership", text: "Working alongside you throughout your healthcare journey." },
  { icon: Network, title: "Accessibility", text: "Helping connect patients with healthcare opportunities across borders." },
  { icon: Eye, title: "Transparency", text: "Clear communication. Honest expectations. No unnecessary complexity." },
  { icon: ShieldCheck, title: "Trust", text: "Protecting your privacy and acting with professionalism and integrity." },
  { icon: Award, title: "Excellence", text: "Striving to deliver an exceptional patient experience in every interaction." },
];

const beyondSupport = [
  "Understanding Your Needs",
  "Helping You Explore Your Options",
  "Coordinating the Journey",
  "Keeping You Informed",
  "Supporting You & Your Family",
  "Respecting Your Privacy",
];

const testimonials = [
  {
    quote:
      "Having a dedicated coordinator made all the difference when traveling abroad for specialised treatment. We never felt lost or alone.",
    name: "A. Al-Mansoor",
    location: "Dubai, UAE",
    rating: 5,
  },
  {
    quote:
      "The level of professionalism, discretion, and medical insight provided is truly unmatched. They handled every detail from start to finish.",
    name: "Elena Rostova",
    location: "Moscow, Russia",
    rating: 5,
  },
  {
    quote:
      "From the first evaluation to post-treatment recovery support, Patients First Worldwide gave us absolute peace of mind during a stressful time.",
    name: "David & Sarah Miller",
    location: "London, UK",
    rating: 5,
  },
];

const googleReviews = [
  {
    quote:
      "Excellent support throughout my entire treatment journey. The team kept me informed at every stage and made everything so simple.",
    name: "Sara H.",
    date: "2 weeks ago",
    rating: 5,
  },
  {
    quote:
      "Professional, responsive, and genuinely caring. They coordinated everything perfectly and I always felt in safe hands.",
    name: "Mohammed A.",
    date: "1 month ago",
    rating: 5,
  },
  {
    quote:
      "They made coordinating international treatment for my father completely stress-free. Truly patient-first in every sense.",
    name: "Priya K.",
    date: "1 month ago",
    rating: 5,
  },
  {
    quote:
      "Clear communication and constant support from start to finish. I highly recommend their services to anyone seeking care abroad.",
    name: "James T.",
    date: "2 months ago",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-ivory">
        <div className="absolute inset-x-0 top-16 sm:top-20 bottom-0 z-0">
          <Image src="/hero-01.webp" alt="" fill className="object-cover object-top opacity-95" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-ivory/85 to-ivory" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <p className="text-gold-dark font-semibold tracking-[0.24em] uppercase text-sm md:text-base mb-6">
            Compassionate Care
          </p>
          <h1 className="text-3xl md:text-4xl font-serif leading-[1.15] max-w-6xl mx-auto text-midnight md:whitespace-nowrap">
            Because Every Patient Deserves Someone by Their Side.
          </h1>
          <p className="mt-7 text-lg text-navy leading-relaxed max-w-5xl mx-auto">
            <span className="block md:whitespace-nowrap">
              A medical journey can feel overwhelming, but you should never have to face it alone.
            </span>
            <span className="block md:whitespace-nowrap">
              From your very first conversation with us, we stand beside you,
            </span>
            <span className="block md:whitespace-nowrap">
              helping you understand your options, coordinating every step of your care,
            </span>
            <span className="block md:whitespace-nowrap">
              and supporting both you and your loved ones throughout the journey.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-9">
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

      {/* FOUR PILLARS */}
      <section className="relative z-10 -mt-10 px-6 max-w-7xl mx-auto">
        <div className="bg-midnight rounded-3xl shadow-2xl p-8 md:p-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 brand-gold-icon" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-lg text-white font-bold mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed flex-1">{pillar.text}</p>
                {pillar.href && (
                  <Link
                    href={pillar.href}
                    className="mt-4 text-gold text-xs font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    Learn more <span aria-hidden>→</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/about-us-2a.webp" alt="Compassionate patient support" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">About Us</p>
            <h2 className="text-3xl md:text-4xl font-serif text-midnight leading-tight">
              Putting Patients First, Every Step of the Journey
            </h2>
            <p className="text-navy leading-relaxed">
              Patients First Worldwide is an independent patient support and healthcare
              coordination company based in the UAE. We help patients access appropriate
              healthcare providers — close to home or abroad — by facilitating communication,
              coordinating logistics, and offering compassionate guidance, so no one navigates
              their healthcare journey alone.
            </p>
            <p className="text-xs text-navy leading-relaxed border-l-4 border-gold pl-4">
              {site.legalName} does not provide medical advice, medical diagnoses, or medical
              treatment. All clinical decisions, recommendations, and treatments are provided
              solely by licensed healthcare professionals and healthcare providers.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-7 py-3.5 rounded-full font-semibold transition shadow-lg"
            >
              More About Us <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* THREE STEPS */}
      <section className="py-14 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">How We Begin</p>
            <h2 className="text-3xl md:text-4xl font-serif text-midnight">Three Simple Steps to Start</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {journeySteps.map((item) => (
              <div key={item.step} className="relative bg-ivory rounded-3xl p-8 border border-slate-100">
                <span className="text-gold font-serif text-5xl">{item.step}</span>
                <h3 className="font-serif text-xl text-midnight mt-4 mb-2">{item.title}</h3>
                <p className="text-sm text-navy leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORTING YOU THROUGHOUT */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">
            Our Role
          </p>
          <h2 className="text-2xl lg:text-3xl font-serif text-midnight md:whitespace-nowrap">
            Supporting You Throughout Your Healthcare Journey
          </h2>
          <p className="text-navy leading-relaxed">
            From your first enquiry to the completion of your healthcare journey, we’re here to
            provide personalised support, coordination, and clear communication — helping make
            every step more organised and less overwhelming.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {journeySupport.map((phase) => (
            <div key={phase.title} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-40 w-full">
                <Image src={phase.image} alt={phase.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-royal/70 to-transparent" />
                <h3 className="absolute bottom-4 left-5 right-5 text-white font-serif text-lg leading-snug">
                  {phase.title}
                </h3>
              </div>
              <ul className="p-7 space-y-2.5 text-sm text-navy flex-1">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] bg-clip-text text-transparent font-bold shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* OUR DIFFERENCE */}
      <section className="py-16 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">Our Difference</p>
            <h2 className="text-3xl md:text-4xl font-serif text-midnight">Our Approach</h2>
            <p className="text-navy leading-relaxed">
              Patients First Worldwide is an independent patient support and healthcare
              coordination company — here’s how we approach every journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differences.map((diff) => (
              <div key={diff.title} className="bg-ivory rounded-3xl p-7 border border-slate-100">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-royal rounded-full font-bold text-sm mb-5">✓</span>
                <h3 className="font-serif text-midnight font-bold text-lg mb-2 leading-snug">{diff.title}</h3>
                <p className="text-sm text-navy leading-relaxed">{diff.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 px-6 bg-midnight">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <p className="text-gold font-semibold tracking-[0.18em] uppercase text-xs">Our Values</p>
            <h2 className="text-2xl md:text-3xl font-serif text-white md:whitespace-nowrap">The Principles Behind Everything We Do</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white/5 rounded-3xl p-8 border border-white/10 text-center flex flex-col items-center hover:bg-white/10 transition">
                <value.icon className="w-8 h-8 brand-gold-icon mb-5" />
                <h4 className="text-white font-bold mb-3">{value.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE OUR SERVICES */}
      <section className="py-14 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">Explore</p>
            <h2 className="text-3xl md:text-4xl font-serif text-midnight">How We Can Support You</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/medical-specialties"
              className="group bg-royal rounded-3xl p-8 text-white hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-serif text-xl mb-2">Medical Specialties</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Explore the wide range of medical specialties we help patients navigate access to.
              </p>
              <span className="text-gold text-sm font-semibold group-hover:underline">Learn more →</span>
            </Link>
            <Link
              href="/destinations"
              className="group bg-royal rounded-3xl p-8 text-white hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-serif text-xl mb-2">Our Global Healthcare Network</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Explore healthcare options across our international network of trusted healthcare providers.
              </p>
              <span className="text-gold text-sm font-semibold group-hover:underline">Learn more →</span>
            </Link>
            <Link
              href="/membership"
              className="group bg-royal rounded-3xl p-8 text-white hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-serif text-xl mb-2">Patients First Membership</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Ongoing healthcare coordination and personalised patient support, whenever you need it.
              </p>
              <span className="text-gold text-sm font-semibold group-hover:underline">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SUPPORTING YOU BEYOND HEALTHCARE */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">
              Beyond Healthcare
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-midnight">
              Supporting You Beyond Healthcare
            </h2>
            <p className="text-navy leading-relaxed">
              Because your journey is about more than appointments and documents. We’re here to
              help you feel informed, supported and understood — at every step.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {beyondSupport.map((item) => (
                <div key={item} className="flex items-start gap-2 bg-ivory rounded-2xl px-4 py-3 border border-slate-100">
                  <span className="bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] bg-clip-text text-transparent font-bold shrink-0">✓</span>
                  <span className="text-sm text-navy">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/care.webp" alt="Personalised patient support" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">
              Patient Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-midnight">
              Trusted by Families Worldwide
            </h2>
            <p className="text-navy leading-relaxed">
              Read what our patients and their families have to say about their care journeys,
              managed seamlessly by our dedicated team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-ivory rounded-3xl p-8 border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-gold mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-navy italic leading-relaxed mb-6">
                    “{testimonial.quote}”
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-midnight">{testimonial.name}</h4>
                  <p className="text-xs text-navy">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="py-16 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">
              Google Reviews
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-midnight">
              Rated by Our Patients on Google
            </h2>
            <p className="text-navy leading-relaxed">
              Don’t just take our word for it — hear what patients and families have shared
              about their experience working with our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md border border-slate-200 mb-4">
                <span className="text-3xl font-bold text-[#4285F4]">G</span>
              </div>
              <p className="font-serif text-5xl text-midnight">4.9</p>
              <div className="flex text-gold text-2xl mt-3 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-sm text-navy">Based on verified Google reviews</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {googleReviews.map((review) => (
                <div
                  key={review.name}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex text-gold mb-3">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="text-navy text-sm leading-relaxed mb-4">
                      “{review.quote}”
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy">— {review.name}</p>
                    <p className="text-xs text-navy">{review.date} · Google review</p>
                  </div>
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
            Every Journey Begins with a Conversation
          </h2>
          <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Our team is here to understand your needs, answer your questions, and help you
            explore the next steps of your healthcare journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition shadow-lg"
            >
              Speak with Our Team
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
