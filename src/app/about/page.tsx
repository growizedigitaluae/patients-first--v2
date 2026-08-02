import Link from "next/link";
import Image from "next/image";
import {
  HeartHandshake,
  ShieldCheck,
  Award,
  Handshake,
  Accessibility,
  MessageCircle,
  UserCheck,
  Globe2,
} from "lucide-react";
import { PageHero, CtaBand } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description:
    "Patients First Worldwide is an independent patient support and healthcare coordination company. Our story, our mission, our values and the people behind the promise.",
};

const values = [
  { icon: HeartHandshake, title: "Humanity First", text: "Because every patient deserves to be treated with dignity and compassion." },
  { icon: Handshake, title: "Partnership", text: "Working alongside you throughout your healthcare journey." },
  { icon: Accessibility, title: "Accessibility", text: "Helping connect patients with healthcare opportunities across borders." },
  { icon: MessageCircle, title: "Transparency", text: "Clear communication. Honest expectations. No unnecessary complexity." },
  { icon: ShieldCheck, title: "Trust", text: "Protecting your privacy and acting with professionalism and integrity." },
  { icon: Award, title: "Excellence", text: "Striving to deliver an exceptional patient experience in every interaction." },
];

const differences = [
  { title: "Patient-Centred Support", text: "Every healthcare journey begins with understanding your individual needs, preferences, and priorities." },
  { title: "Independent Healthcare Navigation", text: "We help you explore appropriate healthcare providers and treatment destinations based on your unique circumstances, empowering you to make informed decisions." },
  { title: "Dedicated Patient Journey Coordinator", text: "One dedicated point of contact to support communication, coordinate logistics, and guide you throughout your healthcare journey." },
  { title: "Global Healthcare Network", text: "Access to an international network of healthcare providers and medical institutions across multiple countries." },
  { title: "Personalised Coordination", text: "Support with appointments, medical records, travel arrangements, and other non-clinical aspects of your healthcare journey." },
  { title: "Privacy & Confidentiality", text: "We handle your personal information with the highest level of confidentiality and in accordance with applicable data protection requirements." },
  { title: "Transparent Communication", text: "Clear, timely communication so you and your family remain informed throughout the coordination process." },
  { title: "Independent & Patient-Focused", text: "Our priority is helping you navigate your healthcare journey with confidence, clarity, and compassion." },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Patients First Worldwide"
        title="Putting Patients First, Every Step of the Journey"
        description="We believe exceptional healthcare extends beyond medical treatment — it is about feeling understood, supported, and cared for throughout every stage of your journey."
        image="/about-hero-bg.webp"
      />

      {/* STORY */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-5">
          <p className="text-gold font-semibold tracking-[0.18em] uppercase text-xs">Our Story</p>
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
          <div className="bg-royal p-8 rounded-3xl text-white">
            <h3 className="text-sm font-bold tracking-widest text-gold uppercase mb-3">Our Mission</h3>
            <p className="font-serif italic leading-snug">
              &ldquo;To make the healthcare journey more informed, organised, and less
              overwhelming — so every patient and their family can focus on what matters
              most.&rdquo;
            </p>
          </div>
          <div className="bg-royal p-8 rounded-3xl text-white">
            <h3 className="text-sm font-bold tracking-widest text-gold uppercase mb-3">What We Never Do</h3>
            <p className="text-slate-200 text-sm leading-relaxed">
              We are coordinators, not clinicians. {site.legalName} does not provide medical
              advice, medical diagnoses, or medical treatment. All clinical decisions,
              recommendations, and treatments are provided solely by licensed healthcare
              professionals and healthcare providers chosen by the patient.
            </p>
          </div>
        </div>
      </section>

      {/* OUR DIFFERENCE */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <p className="text-gold font-semibold tracking-[0.18em] uppercase text-xs">Our Difference</p>
            <h2 className="text-3xl md:text-4xl font-serif text-midnight">Our Approach</h2>
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
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <p className="text-gold font-semibold tracking-[0.18em] uppercase text-xs">Our Values</p>
          <h2 className="text-3xl md:text-4xl font-serif text-midnight">The Principles That Guide Us</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {values.map((value) => (
            <div key={value.title} className="bg-ivory rounded-3xl p-8 border border-slate-100 text-center flex flex-col items-center hover:shadow-lg transition">
              <value.icon className="w-9 h-9 brand-gold-icon mb-5" />
              <h4 className="text-midnight font-bold mb-3">{value.title}</h4>
              <p className="text-navy text-sm leading-relaxed">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-24 px-6 max-w-6xl mx-auto bg-white border-y border-slate-100">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-14 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/ceo-profile.webp" alt="Akhdiya Mirzokarimova, founder of Patient First Worldwide" fill className="object-cover" />
          </div>
          <div className="space-y-7">
            <div>
              <p className="text-gold font-semibold tracking-[0.18em] uppercase text-xs mb-2">Our Founder</p>
              <h2 className="text-4xl font-serif text-midnight">Akhdiya Mirzokarimova</h2>
              <p className="text-midnight font-medium text-lg mt-1">Founder & Patient Advocate</p>
            </div>
            <div className="space-y-4 text-navy leading-relaxed">
              <p>
                Akhdiya founded Patient First Worldwide on a deep-seated belief in human
                connection. Her mission is to bridge the gap between complex medical systems and
                the individuals who need them most — ensuring that no patient ever feels like
                &ldquo;just another case.&rdquo;
              </p>
              <p>
                She built this company around a simple idea: healthcare is not just a service, it
                is a promise of dignity, comfort and unwavering support.
              </p>
            </div>
            <div className="bg-royal p-8 rounded-2xl border-l-4 border-gold">
              <p className="font-serif italic text-white text-xl leading-relaxed">
                &ldquo;My commitment is to ensure that when you are at your most vulnerable, you
                have a partner who truly cares.&rdquo;
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-6 py-3 rounded-full font-semibold transition"
              >
                <UserCheck className="w-4 h-4" />
                Speak with Our Team
              </Link>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-6 py-3 rounded-full font-semibold transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL NETWORK STRIP */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gold font-semibold tracking-[0.18em] uppercase text-xs">Our Network</p>
            <h2 className="text-3xl font-serif text-midnight">
              A Global Healthcare Network at Your Fingertips
            </h2>
            <p className="text-navy leading-relaxed">
              We coordinate access to selected healthcare providers across the United Arab
              Emirates, India, Saudi Arabia, Turkey and the United States — helping you explore
              options that fit your needs, with independent, patient-focused guidance.
            </p>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-gold-dark font-semibold hover:underline"
            >
              <Globe2 className="w-5 h-5" />
              Explore Our Global Healthcare Network →
            </Link>
          </div>
          <Link
            href="/destinations"
            className="group relative h-72 rounded-3xl overflow-hidden shadow-xl block"
          >
            <Image src="/hero-destination.webp" alt="Global healthcare network" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" />
            <span className="absolute bottom-5 left-5 text-white font-serif text-xl">Explore the Network</span>
          </Link>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
