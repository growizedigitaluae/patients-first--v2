import Link from "next/link"
import { PageHero } from "@/components/ui"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const supportAreas = [
  {
    title: "Patient Coordination",
    text: "A dedicated point of contact to help coordinate communication, appointments, medical information, and next steps.",
  },
  {
    title: "Medical Records & Documents",
    text: "Practical help organising the information healthcare providers need so your journey can move forward clearly and efficiently.",
  },
  {
    title: "Travel & Accommodation Guidance",
    text: "When treatment requires travel, we can help coordinate practical arrangements around your healthcare schedule.",
  },
  {
    title: "Ongoing Patient Support",
    text: "From the first enquiry through the wider healthcare journey, we help keep communication and coordination organised.",
  },
]

export default function WellnessPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <PageHero
        eyebrow="Patient Support"
        title="Wellness & Patient Support"
        description="Practical, compassionate support that helps you navigate your healthcare journey with greater clarity and confidence."
        image="/support-background.webp"
      />

      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gold-dark font-semibold tracking-[0.18em] uppercase text-xs mb-3">How We Support You</p>
            <h2 className="text-3xl md:text-4xl font-serif text-midnight mb-4">Support Beyond Appointments</h2>
            <p className="text-navy leading-relaxed">
              Patients First Worldwide provides non-clinical coordination and practical support. Medical advice, diagnosis, treatment, and clinical decisions remain with licensed healthcare professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {supportAreas.map((area) => (
              <article key={area.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="font-serif text-2xl text-midnight mb-3">{area.title}</h3>
                <p className="text-navy leading-relaxed">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-royal py-16 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-5">Need Help Planning Your Healthcare Journey?</h2>
          <p className="text-slate-300 leading-relaxed mb-8">
            Speak with our team about your situation and the coordination support you may need.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] px-7 py-3 font-semibold text-royal transition hover:opacity-95"
          >
            Speak with Our Team
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
