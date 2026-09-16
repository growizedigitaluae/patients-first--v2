"use client"

import { PageHero } from "@/components/ui"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function WellnessPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <PageHero
            eyebrow="Patient Support"
            title="Wellness & Membership"
            description="Choose the level of support that fits your healthcare journey needs."
            image="/support-background.webp"
          />
          
          <section className="pt-8 pb-12">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-serif font-bold text-midnight mb-2">Choose the Level of Support That Fits</h2>
              <p className="text-navy text-lg leading-relaxed max-w-md mx-auto">
                Select the membership plan that best matches your healthcare needs and budget.
              </p>
            </div>
          </section>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}