"use client";

import { useState } from "react";
import Link from "next/link";

type PlanKey = "essential" | "premier" | "prestige";

type Feature = {
  name: string;
  value: string;
};

type Plan = {
  name: string;
  eyebrow: string;
  tagline: string;
  price: string;
  coverage: string;
  serviceLevel: string;
  features: Feature[];
};

const plans: Record<PlanKey, Plan> = {
  essential: {
    name: "Essential",
    eyebrow: "Essential Membership",
    tagline: "Your healthcare, organised.",
    price: "From AED 45,000/year",
    coverage: "Individual",
    serviceLevel: "Personal healthcare coordination",

    features: [
      {
        name: "Dedicated PFW Care Coordinator",
        value: "Included",
      },
      {
        name: "Healthcare Needs Mapping",
        value: "Included",
      },
      {
        name: "PFW Health Passport",
        value: "Not included",
      },
      {
        name: "Personal / Family Healthcare Roadmap",
        value: "Not included",
      },
      {
        name: "Medical Records Organisation",
        value: "Included",
      },
      {
        name: "Preventive Care Calendar",
        value: "Included",
      },
      {
        name: "Provider & Specialist Navigation",
        value: "UAE",
      },
      {
        name: "Appointment Coordination",
        value: "Included",
      },
      {
        name: "Diagnostics & Imaging Coordination",
        value: "Included",
      },
      {
        name: "Second Opinion Coordination",
        value: "1 / year",
      },
      {
        name: "International Second Opinion Coordination",
        value: "Add-on",
      },
      {
        name: "Planned Hospital Admission Coordination",
        value: "Included",
      },
      {
        name: "Procedure / Surgery Journey Coordination",
        value: "Not included",
      },
      {
        name: "Discharge Coordination",
        value: "Not included",
      },
      {
        name: "Post-Treatment Follow-Up Tracking",
        value: "Included",
      },
      {
        name: "Rehabilitation Coordination",
        value: "Included",
      },
      {
        name: "Children's Healthcare Coordination",
        value: "Not included",
      },
      {
        name: "Elderly Parent Healthcare Coordination",
        value: "Not included",
      },
      {
        name: "Family Healthcare Calendar",
        value: "Not included",
      },
      {
        name: "Medication & Prescription Logistics Support",
        value: "Not included",
      },
      {
        name: "Home Healthcare Coordination",
        value: "Add-on",
      },
      {
        name: "Medical Travel Coordination",
        value: "Add-on",
      },
      {
        name: "Travel-Ready Medical Dossier",
        value: "Add-on",
      },
      {
        name: "Cross-Border Care Coordination",
        value: "Add-on",
      },
      {
        name: "Complex Case Coordination",
        value: "Not included",
      },
      {
        name: "Multiple-Specialist Coordination",
        value: "Not included",
      },
      {
        name: "Regular PFW Check-In",
        value: "Quarterly",
      },
      {
        name: "Annual Membership Review",
        value: "Included",
      },
      {
        name: "PFW Service Access",
        value: "Business hours",
      },
    ],
  },

  premier: {
    name: "Premier",
    eyebrow: "Premier Membership",
    tagline: "Healthcare management that stays one step ahead.",
    price: "From AED 85,000/year",
    coverage: "Individual, Couple, Family or Bespoke Household",
    serviceLevel: "Comprehensive health management",

    features: [
      {
        name: "Dedicated PFW Care Coordinator",
        value: "Included",
      },
      {
        name: "Healthcare Needs Mapping",
        value: "Comprehensive",
      },
      {
        name: "PFW Health Passport",
        value: "Included",
      },
      {
        name: "Personal / Family Healthcare Roadmap",
        value: "Comprehensive",
      },
      {
        name: "Medical Records Organisation",
        value: "Included",
      },
      {
        name: "Preventive Care Calendar",
        value: "Included",
      },
      {
        name: "Provider & Specialist Navigation",
        value: "UAE + international",
      },
      {
        name: "Appointment Coordination",
        value: "Priority coordination",
      },
      {
        name: "Diagnostics & Imaging Coordination",
        value: "Included",
      },
      {
        name: "Second Opinion Coordination",
        value: "2 / year",
      },
      {
        name: "International Second Opinion Coordination",
        value: "1 / year",
      },
      {
        name: "Planned Hospital Admission Coordination",
        value: "Included",
      },
      {
        name: "Procedure / Surgery Journey Coordination",
        value: "Included",
      },
      {
        name: "Discharge Coordination",
        value: "Included",
      },
      {
        name: "Post-Treatment Follow-Up Tracking",
        value: "Included",
      },
      {
        name: "Rehabilitation Coordination",
        value: "Included",
      },
      {
        name: "Children's Healthcare Coordination",
        value: "Included",
      },
      {
        name: "Elderly Parent Healthcare Coordination",
        value: "Included",
      },
      {
        name: "Family Healthcare Calendar",
        value: "Included",
      },
      {
        name: "Medication & Prescription Logistics Support",
        value: "Included",
      },
      {
        name: "Home Healthcare Coordination",
        value: "Included",
      },
      {
        name: "Medical Travel Coordination",
        value: "Included",
      },
      {
        name: "Travel-Ready Medical Dossier",
        value: "Included",
      },
      {
        name: "Cross-Border Care Coordination",
        value: "Included",
      },
      {
        name: "Complex Case Coordination",
        value: "Selected needs",
      },
      {
        name: "Multiple-Specialist Coordination",
        value: "As required",
      },
      {
        name: "Regular PFW Check-In",
        value: "Monthly",
      },
      {
        name: "Annual Membership Review",
        value: "Included",
      },
      {
        name: "PFW Service Access",
        value: "Priority business hours",
      },
    ],
  },

  prestige: {
    name: "Prestige",
    eyebrow: "Prestige Membership",
    tagline: "Private health management at its highest level.",
    price: "Tailored private membership",
    coverage: "Individual, Couple, Family or Bespoke Household",
    serviceLevel: "Enhanced private health management",

    features: [
      {
        name: "Dedicated PFW Care Coordinator",
        value: "Senior dedicated coordinator",
      },
      {
        name: "Healthcare Needs Mapping",
        value: "Enhanced",
      },
      {
        name: "PFW Health Passport",
        value: "Enhanced",
      },
      {
        name: "Personal / Family Healthcare Roadmap",
        value: "Continuously maintained",
      },
      {
        name: "Medical Records Organisation",
        value: "Enhanced + travel-ready",
      },
      {
        name: "Preventive Care Calendar",
        value: "Enhanced tracking",
      },
      {
        name: "Provider & Specialist Navigation",
        value: "UAE + worldwide options",
      },
      {
        name: "Appointment Coordination",
        value: "Enhanced priority coordination",
      },
      {
        name: "Diagnostics & Imaging Coordination",
        value: "Included",
      },
      {
        name: "Second Opinion Coordination",
        value: "Up to 4 / year",
      },
      {
        name: "International Second Opinion Coordination",
        value: "Included within agreed scope",
      },
      {
        name: "Planned Hospital Admission Coordination",
        value: "Enhanced",
      },
      {
        name: "Procedure / Surgery Journey Coordination",
        value: "Enhanced",
      },
      {
        name: "Discharge Coordination",
        value: "Enhanced",
      },
      {
        name: "Post-Treatment Follow-Up Tracking",
        value: "Extended",
      },
      {
        name: "Rehabilitation Coordination",
        value: "Enhanced",
      },
      {
        name: "Children's Healthcare Coordination",
        value: "Included",
      },
      {
        name: "Elderly Parent Healthcare Coordination",
        value: "Included",
      },
      {
        name: "Family Healthcare Calendar",
        value: "Included",
      },
      {
        name: "Medication & Prescription Logistics Support",
        value: "Included",
      },
      {
        name: "Home Healthcare Coordination",
        value: "Included",
      },
      {
        name: "Medical Travel Coordination",
        value: "Enhanced",
      },
      {
        name: "Travel-Ready Medical Dossier",
        value: "Included",
      },
      {
        name: "Cross-Border Care Coordination",
        value: "Enhanced",
      },
      {
        name: "Complex Case Coordination",
        value: "Included",
      },
      {
        name: "Multiple-Specialist Coordination",
        value: "Enhanced",
      },
      {
        name: "Regular PFW Check-In",
        value: "Personalised frequency",
      },
      {
        name: "Annual Membership Review",
        value: "Executive review",
      },
      {
        name: "PFW Service Access",
        value: "Extended priority coordination",
      },
    ],
  },
};

const tabs: { key: PlanKey; label: string }[] = [
  {
    key: "essential",
    label: "Essential",
  },
  {
    key: "premier",
    label: "Premier",
  },
  {
    key: "prestige",
    label: "Prestige",
  },
];

export default function MembershipPackagesTabs() {
  const [activeTab, setActiveTab] = useState<PlanKey>("essential");

  const plan = plans[activeTab];

  return (
    <section
      id="packages"
      className="bg-[#f8f6f1] px-6 py-20"
      aria-labelledby="membership-packages-heading"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            Membership Packages
          </p>

          <h2
            id="membership-packages-heading"
            className="font-serif text-3xl leading-tight text-midnight md:text-4xl"
          >
            Choose the Level of Support That Fits
          </h2>

          <p className="mt-4 leading-relaxed text-navy">
            Membership tiers are designed around different levels of
            coordination and support. Speak with our membership team to
            understand which is right for you and your family.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="mx-auto mb-8 flex max-w-2xl rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm"
          role="tablist"
          aria-label="Membership packages"
        >
          {tabs.map((tab) => {
            const active = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                id={`${tab.key}-tab`}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls={`${tab.key}-panel`}
                tabIndex={active ? 0 : -1}
                onClick={() => setActiveTab(tab.key)}
                className={[
                  "flex-1 rounded-xl px-4 py-3 text-sm font-semibold",
                  "capitalize transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2",
                  active
                    ? "bg-midnight text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-50 hover:text-midnight",
                ].join(" ")}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active Plan */}
        <div
          id={`${activeTab}-panel`}
          role="tabpanel"
          aria-labelledby={`${activeTab}-tab`}
          tabIndex={0}
          className="mx-auto max-w-4xl"
        >
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* Gold Accent */}
            <div className="h-1.5 bg-gradient-to-r from-[#C88A2B] to-[#FCDA7B]" />

            <div className="p-7 sm:p-9 md:p-10">
              {/* Plan Header */}
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                  {plan.eyebrow}
                </p>

                <h3 className="mt-3 font-serif text-3xl text-midnight md:text-4xl">
                  {plan.name}
                </h3>

                <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-slate-600">
                  {plan.tagline}
                </p>
              </div>

              {/* Coverage / Service Level */}
              <div className="mx-auto mt-8 grid max-w-2xl gap-4 border-y border-slate-100 py-6 sm:grid-cols-2">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Coverage
                  </p>

                  <p className="mt-1 text-sm font-medium text-navy">
                    {plan.coverage}
                  </p>
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Service Level
                  </p>

                  <p className="mt-1 text-sm font-medium text-navy">
                    {plan.serviceLevel}
                  </p>
                </div>
              </div>

              {/* Feature Matrix */}
              <div className="mt-8">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="font-serif text-xl text-midnight">
                    Membership Features
                  </h4>

                  <span className="text-xs text-slate-500">
                    {plan.features.length} benefits
                  </span>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="divide-y divide-slate-100">
                    {plan.features.map((feature) => (
                      <div
                        key={feature.name}
                        className="grid gap-2 px-5 py-4 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
                      >
                        <p className="text-sm leading-relaxed text-navy">
                          {feature.name}
                        </p>

                        <p
                          className={`text-sm font-medium sm:text-right ${
                            feature.value === "Not included"
                              ? "text-slate-400"
                              : feature.value === "Add-on"
                                ? "text-amber-700"
                                : "text-gold-dark"
                          }`}
                        >
                          {feature.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price / CTA */}
              <div className="mt-9 flex flex-col items-center gap-5 border-t border-slate-100 pt-8 sm:flex-row sm:justify-between">
                <div className="text-center sm:text-left">
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                    Annual Membership
                  </p>

                  <p className="mt-1 text-lg font-semibold text-gold-dark">
                    {plan.price}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#C88A2B] to-[#FCDA7B] px-6 py-3.5 font-semibold text-royal shadow-sm transition hover:opacity-95"
                >
                  Speak with Our Membership Team
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Membership Positioning */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          {activeTab === "essential" && (
            <p className="text-sm leading-relaxed text-slate-600">
              A strong foundation for members who want an established PFW
              relationship for healthcare navigation, records, appointments,
              hospital journeys and follow-up.
            </p>
          )}

          {activeTab === "premier" && (
            <p className="text-sm leading-relaxed text-slate-600">
              A more continuous level of support with monthly check-ins,
              broader family coordination, international navigation, medical
              travel support and enhanced continuity.
            </p>
          )}

          {activeTab === "prestige" && (
            <p className="text-sm leading-relaxed text-slate-600">
              PFW's most comprehensive level for members who want enhanced
              oversight across multiple providers, specialties, complex
              journeys or international care.
            </p>
          )}
        </div>

        {/* Membership Terms */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white/70 p-6">
          <h4 className="font-serif text-lg text-midnight">
            Important Membership Terms
          </h4>

          <ul className="mt-4 space-y-2 text-xs leading-relaxed text-slate-600">
            <li>
              Membership fees cover PFW healthcare navigation, coordination and
              administrative support within the agreed membership scope.
            </li>

            <li>
              Physician consultations, hospital services, diagnostics,
              procedures, medications, home healthcare, travel, accommodation
              and other third-party services are charged separately unless
              expressly stated otherwise.
            </li>

            <li>
              Appointment availability and service timelines remain subject to
              independent healthcare-provider availability and policies.
            </li>

            <li>
              PFW does not provide diagnosis or treatment. Clinical decisions
              remain with appropriately licensed healthcare professionals.
            </li>

            <li>
              Extended Prestige access refers to coordination support and does
              not constitute an emergency medical service.
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-slate-500">
          Membership provides healthcare coordination and patient support. It
          does not replace medical advice, diagnosis, treatment, health
          insurance, or emergency care.
        </p>
      </div>
    </section>
  );
}