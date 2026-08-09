import Link from "next/link";
import Image from "next/image";
import {
  UserCheck,
  ClipboardList,
  Globe2,
  Users,
  FolderOpen,
  Plane,
  HeartHandshake,
  Compass,
  FileSearch,
  Award,
  Star,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { PageHero } from "@/components/ui";
import { MemberPortalComingSoon } from "@/components/MemberPortalComingSoon";

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

export const metadata = {
  title: "Membership",
  description:
    "Patients First Membership provides ongoing patient support and healthcare coordination for individuals and families — without replacing your medical care.",
};

const membershipIncludes = [
  {
    icon: UserCheck,
    title: "Dedicated Patient Coordinator",
    text: "One point of contact for your healthcare journey.",
  },
  {
    icon: ClipboardList,
    title: "Healthcare Coordination",
    text: "Support with appointments, medical records, and communication.",
  },
  {
    icon: Globe2,
    title: "Global Healthcare Network",
    text: "Helping connect members with trusted healthcare providers.",
  },
  {
    icon: Users,
    title: "Family Support",
    text: "Helping coordinate healthcare for loved ones when needed.",
  },
  {
    icon: FolderOpen,
    title: "Medical Record Organisation",
    text: "Secure assistance organising healthcare documentation.",
  },
  {
    icon: Plane,
    title: "Travel Support",
    text: "Coordination for healthcare-related travel where required.",
  },
];

const packages = [
  {
    name: "Silver",
    tagline: "Ongoing patient support and coordination, when you need it.",
    features: [
      "Annual Healthcare Review Meeting",
      "Secure Digital Record Archiving",
      "Support with teleconsultation coordination",
      "Priority support during business hours",
    ],
  },
  {
    name: "Gold",
    tagline: "Enhanced coordination with a dedicated patient journey coordinator.",
    featured: true,
    features: [
      "Everything in Silver",
      "Coordination of executive health screening programmes offered by participating healthcare providers",
      "Support coordinating additional specialist opinions when requested",
      "Dedicated Patient Journey Coordinator",
    ],
  },
  {
    name: "Platinum",
    tagline: "Premium, personalised support for members and their families.",
    features: [
      "Everything in Gold",
      "Dedicated Relationship Manager",
      "Priority healthcare coordination",
      "International travel coordination",
      "Hospital admission coordination",
      "Family support",
      "VIP non-clinical assistance",
    ],
  },
];

const faqs = [
  {
    q: "What is Patients First Membership?",
    a: "Membership provides ongoing patient support and healthcare coordination. It does not replace health insurance or medical care provided by licensed healthcare professionals.",
  },
  {
    q: "How is membership different from one-off coordination?",
    a: "One-off coordination supports a specific healthcare journey. Membership is designed for individuals and families who would like ongoing support — a dedicated point of contact and coordinated access to our healthcare network whenever healthcare needs arise.",
  },
  {
    q: "Who is membership for?",
    a: "Membership is for individuals and families — including those coordinating healthcare for children, parents, or loved ones — who value having organised, ongoing support for navigating their healthcare journey.",
  },
  {
    q: "What about my privacy?",
    a: "We handle personal information in accordance with applicable privacy and data protection requirements. Your details are only shared with the facilities and professionals needed to coordinate your care, and only with your consent.",
  },
];

export default function MembershipPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
      <PageHero
        eyebrow="Patients First Membership"
        title="Personalised Healthcare Support Membership"
        description="Stay connected with ongoing healthcare coordination, personalised support, and easier access to trusted healthcare services whenever you need them."
        image="/support-background.webp"
        compact
        titleClass="text-2xl lg:text-3xl md:whitespace-nowrap"
      >
        <p className="text-xs text-navy mt-4 max-w-xl mx-auto">
          Receive ongoing healthcare coordination and patient support — not medical care.
        </p>
        <a
          href="#packages"
          className="mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition shadow-lg"
        >
          View Membership Options
        </a>
      </PageHero>

      {/* MEMBERSHIP BENEFITS */}
      <section className="pt-8 pb-16 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative h-[300px] lg:h-[440px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://images.pexels.com/photos/7551677/pexels-photo-7551677.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Close-up of a young person's hand gently holding an elderly person's hand"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-royal/25 to-transparent" />
          </div>
          <div className="space-y-6">
            <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">
              Membership Benefits
            </p>
            <h2 className="text-2xl lg:text-3xl font-serif text-midnight md:whitespace-nowrap">
              Supporting Your Healthcare Journey
            </h2>
            <p className="text-navy leading-relaxed">
              Our membership programme is designed for individuals and families who would like
              ongoing support navigating their healthcare journey. Members benefit from dedicated
              coordination, personalised assistance, and access to a trusted healthcare network
              whenever healthcare needs arise.
            </p>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-7 py-3.5 rounded-full font-semibold transition shadow-lg"
            >
              Explore Membership Options
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <HeartHandshake className="w-7 h-7 brand-gold-icon mb-5" />
            <h3 className="font-serif text-lg text-midnight font-bold mb-2">Ongoing Healthcare Support</h3>
            <p className="text-sm text-navy leading-relaxed">
              Continuous patient support and coordination, helping you stay organised across
              every stage of your healthcare journey.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <FileSearch className="w-7 h-7 brand-gold-icon mb-5" />
            <h3 className="font-serif text-lg text-midnight font-bold mb-2">Second Opinion Coordination</h3>
            <p className="text-sm text-navy leading-relaxed">
              Support coordinating additional specialist opinions when you or your healthcare
              provider request them.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <Compass className="w-7 h-7 brand-gold-icon mb-5" />
            <h3 className="font-serif text-lg text-midnight font-bold mb-2">Healthcare Navigation</h3>
            <p className="text-sm text-navy leading-relaxed">
              Personalised patient support to help you understand your options and coordinate
              the next steps with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP INCLUDES */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-3">
            <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">
              Membership Includes
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-midnight">
              What Every Member Receives
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {membershipIncludes.map((item) => (
              <div key={item.title} className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-royal rounded-2xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 brand-gold-icon" />
                </div>
                <h3 className="font-serif text-lg text-midnight font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-navy leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE BAND */}
      <section className="relative h-[320px] lg:h-[420px] overflow-hidden">
        <Image
          src={px(8413217)}
          alt="Member consulting with a healthcare professional"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal/90 via-royal/60 to-royal/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs mb-3">
              Personal, Ongoing Coordination
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-white max-w-2xl leading-tight">
              A dedicated coordinator beside you at every step of your healthcare journey.
            </h2>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-3">
          <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">
            Membership Packages
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-midnight">
            Choose the Level of Support That Fits
          </h2>
          <p className="text-navy leading-relaxed">
            Membership tiers are designed around different levels of coordination and support.
            Speak with our membership team to understand which is right for you and your family.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-white rounded-3xl p-8 border flex flex-col ${
                pkg.featured ? "border-gold shadow-2xl md:-mt-4 md:mb-[-1rem]" : "border-slate-100 shadow-sm"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-royal text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="flex items-center gap-2 mb-3">
                {pkg.featured ? (
                  <Star className="w-6 h-6 brand-gold-icon" />
                ) : (
                  <Award className="w-6 h-6 brand-gold-icon" />
                )}
                <h3 className="font-serif text-2xl text-midnight">{pkg.name}</h3>
              </div>
              <p className="text-sm text-navy leading-relaxed mb-6">{pkg.tagline}</p>
              <ul className="space-y-3 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-navy">
                    <CheckCircle2 className="w-4 h-4 brand-gold-icon shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold transition ${
                  pkg.featured
                    ? "bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal shadow-lg"
                    : "bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal"
                }`}
              >
                Speak with Our Membership Team
              </Link>
            </div>
          ))}
        </div>
      </section>

      <MemberPortalComingSoon />

      {/* FAQ */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs">
            Membership Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-midnight">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-serif font-bold text-midnight leading-snug">
                {faq.q}
                <ChevronDown className="w-5 h-5 brand-gold-icon shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-6 pb-6 text-navy leading-relaxed text-sm">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 bg-midnight text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif leading-tight">
            Let’s Build a Better Healthcare Experience Together
          </h2>
          <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Ready to become a member? Speak with our membership team and we’ll help you understand
            how ongoing patient support and healthcare coordination can help you and your family.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition shadow-lg"
            >
              Speak with Our Membership Team
            </Link>
            <Link
              href="/medical-journey"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition"
            >
              Explore the Healthcare Journey
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
