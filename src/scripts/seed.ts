/**
 * PFW seed script — run with: npm run seed
 *
 * Idempotent: safe to re-run. Creates staff users, the three PFW plans
 * (Essential / Premier / Prestige) with their feature matrices.
 *
 * NOTE: Feature values below are sensible defaults — confirm them against
 * the official PFW membership document before go-live.
 */
import { getPayload } from "payload";

import config from "../payload.config";
import type { MembershipPlan } from "../payload-types";

const DEMO_PASSWORD = "PfwDemo#2026";

async function upsert(
  collection: string,
  where: Record<string, unknown>,
  data: Record<string, unknown>,
): Promise<{ id: number | string }> {
  const payload = await getPayload({ config });
  const existing = await payload.find({
    collection: collection as never,
    where: where as never,
    depth: 0,
    limit: 1,
  });
  if (existing.docs.length > 0) {
    const doc = existing.docs[0] as { id: number | string };
    await payload.update({
      collection: collection as never,
      id: doc.id,
      data: data as never,
      overrideAccess: true,
    });
    return doc;
  }
  return (await payload.create({
    collection: collection as never,
    data: data as never,
    overrideAccess: true,
  })) as { id: number | string };
}

async function ensureUser(email: string, name: string, role: "admin" | "editor") {
  const payload = await getPayload({ config });
  const existing = await payload.find({
    collection: "users",
    where: { email: { equals: email } },
    depth: 0,
    limit: 1,
  });
  if (existing.docs.length > 0) return;
  await payload.create({
    collection: "users",
    data: { email, password: DEMO_PASSWORD, name, role },
    overrideAccess: true,
  });
}

// Membership feature definitions (29 rows)
const featureDefs: Array<[string, string, string]> = [
  ["dedicated-coordinator", "Dedicated PFW Care Coordinator", "Coordination"],
  ["healthcare-needs-mapping", "Healthcare Needs Mapping", "Planning"],
  ["health-passport", "PFW Health Passport", "Planning"],
  ["family-roadmap", "Personal / Family Healthcare Roadmap", "Planning"],
  ["records-organisation", "Medical Records Organisation", "Planning"],
  ["preventive-calendar", "Preventive Care Calendar", "Planning"],
  ["provider-navigation", "Provider & Specialist Navigation", "Coordination"],
  ["appointment-coordination", "Appointment Coordination", "Coordination"],
  ["diagnostics-imaging", "Diagnostics & Imaging Coordination", "Coordination"],
  ["second-opinion", "Second Opinion Coordination", "Coordination"],
  ["intl-second-opinion", "International Second Opinion Coordination", "Coordination"],
  ["hospital-admission", "Planned Hospital Admission Coordination", "Coordination"],
  ["surgery-journey", "Procedure / Surgery Journey Coordination", "Coordination"],
  ["discharge-coordination", "Discharge Coordination", "Coordination"],
  ["follow-up-tracking", "Post-Treatment Follow-Up Tracking", "Coordination"],
  ["rehabilitation", "Rehabilitation Coordination", "Coordination"],
  ["children-healthcare", "Children's Healthcare Coordination", "Family"],
  ["elderly-parents", "Elderly Parent Healthcare Coordination", "Family"],
  ["family-calendar", "Family Healthcare Calendar", "Family"],
  ["medication-logistics", "Medication & Prescription Logistics Support", "Support"],
  ["home-healthcare", "Home Healthcare Coordination", "Support"],
  ["medical-travel", "Medical Travel Coordination", "Travel"],
  ["travel-dossier", "Travel-Ready Medical Dossier", "Travel"],
  ["cross-border-care", "Cross-Border Care Coordination", "Travel"],
  ["complex-case", "Complex Case Coordination", "Coordination"],
  ["multi-specialist", "Multiple-Specialist Coordination", "Coordination"],
  ["regular-check-in", "Regular PFW Check-In", "Support"],
  ["annual-review", "Annual Membership Review", "Support"],
  ["pfw-service-access", "PFW Service Access", "Access"],
];

async function ensureUsers() {
  await ensureUser("admin@pfw.test", "PFW Admin", "admin");
  await ensureUser("editor@pfw.test", "PFW Editor", "editor");
}

async function ensureFeatures(): Promise<Record<string, number>> {
  const payload = await getPayload({ config });
  const features: Record<string, number> = {};
  for (let i = 0; i < featureDefs.length; i++) {
    const [slug, name, category] = featureDefs[i];
    const doc = await upsert(
      "membership-features",
      { slug: { equals: slug } },
      { slug, name, category, displayOrder: i + 1 },
    );
    features[slug] = Number(doc.id);
  }
  return features;
}

// Official plan definitions — do not modify these values
type Row = [string, string];
const essentialRows: Row[] = [
  ["dedicated-coordinator", ""],
  ["healthcare-needs-mapping", ""],
  ["records-organisation", ""],
  ["preventive-calendar", ""],
  ["provider-navigation", "UAE"],
  ["appointment-coordination", ""],
  ["diagnostics-imaging", ""],
  ["second-opinion", "1 / year"],
  ["intl-second-opinion", "Add-on"],
  ["hospital-admission", ""],
  ["follow-up-tracking", ""],
  ["rehabilitation", ""],
  ["home-healthcare", "Add-on"],
  ["medical-travel", "Add-on"],
  ["travel-dossier", "Add-on"],
  ["cross-border-care", "Add-on"],
  ["regular-check-in", "Quarterly"],
  ["annual-review", ""],
  ["pfw-service-access", "Business hours"],
];
const premierRows: Row[] = [
  ["dedicated-coordinator", ""],
  ["healthcare-needs-mapping", "Comprehensive"],
  ["health-passport", ""],
  ["family-roadmap", "Comprehensive"],
  ["records-organisation", ""],
  ["preventive-calendar", ""],
  ["provider-navigation", "UAE + international"],
  ["appointment-coordination", "Priority coordination"],
  ["diagnostics-imaging", ""],
  ["second-opinion", "2 / year"],
  ["intl-second-opinion", "1 / year"],
  ["hospital-admission", ""],
  ["surgery-journey", ""],
  ["discharge-coordination", ""],
  ["follow-up-tracking", ""],
  ["rehabilitation", ""],
  ["children-healthcare", ""],
  ["elderly-parents", ""],
  ["family-calendar", ""],
  ["medication-logistics", ""],
  ["home-healthcare", ""],
  ["medical-travel", ""],
  ["travel-dossier", ""],
  ["cross-border-care", ""],
  ["complex-case", "Selected needs"],
  ["multi-specialist", "As required"],
  ["regular-check-in", "Monthly"],
  ["annual-review", ""],
  ["pfw-service-access", "Priority business hours"],
];
const prestigeRows: Row[] = [
  ["dedicated-coordinator", "Senior dedicated coordinator"],
  ["healthcare-needs-mapping", "Enhanced"],
  ["health-passport", "Enhanced"],
  ["family-roadmap", "Continuously maintained"],
  ["records-organisation", "Enhanced + travel-ready"],
  ["preventive-calendar", "Enhanced tracking"],
  ["provider-navigation", "UAE + worldwide options"],
  ["appointment-coordination", "Enhanced priority coordination"],
  ["diagnostics-imaging", ""],
  ["second-opinion", "Up to 4 / year"],
  ["intl-second-opinion", "Included within agreed scope"],
  ["hospital-admission", "Enhanced"],
  ["surgery-journey", "Enhanced"],
  ["discharge-coordination", "Enhanced"],
  ["follow-up-tracking", "Extended"],
  ["rehabilitation", "Enhanced"],
  ["children-healthcare", ""],
  ["elderly-parents", ""],
  ["family-calendar", ""],
  ["medication-logistics", ""],
  ["home-healthcare", ""],
  ["medical-travel", "Enhanced"],
  ["travel-dossier", ""],
  ["cross-border-care", "Enhanced"],
  ["complex-case", ""],
  ["multi-specialist", "Enhanced"],
  ["regular-check-in", "Personalised frequency"],
  ["annual-review", "Executive review"],
  ["pfw-service-access", "Extended priority coordination"],
];

async function buildFeatureArray(features: Record<string, number>, rows: Row[]) {
  return Promise.all(
    rows.map(async ([slug, value]) => ({
      feature: features[slug],
      value,
    })),
  );
}

const planDefs = [
  {
    slug: "essential",
    name: "Essential",
    shortDescription: "Your healthcare, organised.",
    longDescription:
      "A strong foundation for members who want an established PFW relationship for healthcare navigation, records, appointments, hospital journeys and follow-up.",
    price: 45000,
    serviceLevel: "Personal healthcare coordination",
    coverageType: "Individual",
    order: 1,
    rows: essentialRows,
  },
  {
    slug: "premier",
    name: "Premier",
    shortDescription: "Healthcare management that stays one step ahead.",
    longDescription:
      "A more continuous level of support with monthly check-ins, broader family coordination, international navigation, medical travel support and enhanced continuity.",
    price: 85000,
    serviceLevel: "Comprehensive health management",
    coverageType: "Individual, Couple, Family or Bespoke Household",
    order: 2,
    rows: premierRows,
  },
  {
    slug: "prestige",
    name: "Prestige",
    shortDescription: "Private health management at its highest level.",
    longDescription:
      "PFW's most comprehensive level for members who want enhanced oversight across multiple providers, specialties, complex journeys or international care.",
    price: 120000,
    serviceLevel: "Enhanced private health management",
    coverageType: "Individual, Couple, Family or Bespoke Household",
    order: 3,
    rows: prestigeRows,
  },
];

async function main() {
  console.log("Seeding PFW…");

  await ensureUsers();
  const features = await ensureFeatures();

  const plans: Record<string, number> = {};
  for (const def of planDefs) {
    const doc = (await upsert("membership-plans", { slug: { equals: def.slug } }, {
      slug: def.slug,
      name: def.name,
      shortDescription: def.shortDescription,
      longDescription: def.longDescription,
      annualStartingPrice: def.price,
      currency: "AED",
      serviceLevel: def.serviceLevel,
      coverageType: def.coverageType,
      active: true,
      displayOrder: def.order,
      features: await buildFeatureArray(features, def.rows),
    })) as unknown as MembershipPlan;
    plans[def.slug] = Number(doc.id);
  }

  console.log("Seed complete.");
  console.log("Staff (Payload Admin at /admin):");
  console.log("  admin@pfw.test   / " + DEMO_PASSWORD + "   (Admin)");
  console.log("  editor@pfw.test  / " + DEMO_PASSWORD + "   (Editor)");
  console.log("Plans: Essential, Premier, Prestige (official 29-row feature matrix intact).");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
