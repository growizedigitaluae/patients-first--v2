/**
 * PFW seed script — run with: npm run seed
 *
 * Idempotent: safe to re-run. Creates staff users, the three PFW plans
 * (Essential / Premier / Prestige) with their feature matrices, and demo
 * member accounts covering every portal access scenario.
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

async function ensureMember(input: {
  email: string;
  firstName: string;
  lastName: string;
  accountStatus: "invited" | "active" | "suspended";
}): Promise<number> {
  const payload = await getPayload({ config });
  const existing = await payload.find({
    collection: "members",
    where: { email: { equals: input.email } },
    depth: 0,
    limit: 1,
  });
  if (existing.docs.length > 0) {
    const doc = existing.docs[0] as unknown as {
      id: number | string;
      accountStatus?: string;
    };
    if (doc.accountStatus !== input.accountStatus) {
      await payload.update({
        collection: "members",
        id: doc.id,
        data: { accountStatus: input.accountStatus },
        overrideAccess: true,
      });
    }
    return Number(doc.id);
  }
  const created = (await payload.create({
    collection: "members",
    data: {
      ...input,
      password: DEMO_PASSWORD,
      phone: "+971 50 000 0000",
    },
    overrideAccess: true,
  })) as unknown as { id: number | string };
  return Number(created.id);
}

async function yearWindow(offsetYears: number) {
  const now = new Date();
  const start = new Date(now.getFullYear() + offsetYears, now.getMonth(), now.getDate());
  const end = new Date(start);
  end.setFullYear(end.getFullYear() + 1);
  end.setDate(end.getDate() - 1);
  return { start: start.toISOString().slice(0, 10), end: end.toISOString().slice(0, 10) };
}

async function ensureMembership(input: {
  memberId: number;
  planId: number;
  status: "pending" | "active" | "expired" | "suspended" | "cancelled";
  yearsAgoStart: number;
}) {
  const payload = await getPayload({ config });
  const window = await yearWindow(-input.yearsAgoStart);
  const existing = await payload.find({
    collection: "memberships",
    where: {
      and: [
        { member: { equals: input.memberId } },
        { plan: { equals: input.planId } },
      ],
    },
    depth: 0,
    limit: 1,
  });
  if (existing.docs.length > 0) {
    await payload.update({
      collection: "memberships",
      id: (existing.docs[0] as { id: number | string }).id,
      data: { status: input.status, startDate: window.start, endDate: window.end },
      overrideAccess: true,
    });
    return;
  }
  await payload.create({
    collection: "memberships",
    data: {
      member: input.memberId,
      plan: input.planId,
      status: input.status,
      startDate: window.start,
      endDate: window.end,
    },
    overrideAccess: true,
  });
}

async function main() {
  console.log("Seeding PFW…");

  // Staff accounts
  await ensureUser("admin@pfw.test", "PFW Admin", "admin");
  await ensureUser("editor@pfw.test", "PFW Editor", "editor");

  // Membership features catalogue
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

  const features: Record<string, number | string> = {};
  for (let i = 0; i < featureDefs.length; i++) {
    const [slug, name, category] = featureDefs[i];
    const doc = await upsert(
      "membership-features",
      { slug: { equals: slug } },
      { slug, name, category, displayOrder: i + 1 },
    );
    features[slug] = doc.id;
  }

  // Plan feature values — transcribed from the official PFW Private Health
  // Management Membership Packages document.
  // Convention: "" (empty) = "✓" in the document → the portal shows
  // "Included". Features marked "–"/"—" in the document are intentionally
  // OMITTED from that plan's matrix. All other values are verbatim.
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

  const buildFeatureArray = async (rows: Row[]) =>
    Promise.all(
      rows.map(async ([slug, value]) => ({
        feature: features[slug],
        value,
      })),
    );

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
        "PFW’s most comprehensive level for members who want enhanced oversight across multiple providers, specialties, complex journeys or international care.",
      price: 120000,
      serviceLevel: "Enhanced private health management",
      coverageType: "Individual, Couple, Family or Bespoke Household",
      order: 3,
      rows: prestigeRows,
    },
  ];

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
      features: await buildFeatureArray(def.rows),
    })) as unknown as MembershipPlan;
    plans[def.slug] = Number(doc.id);
  }

  // Demo members covering every portal scenario
  const amira = await ensureMember({ email: "amira@example.com", firstName: "Amira", lastName: "Haddad", accountStatus: "active" });
  const john = await ensureMember({ email: "john@example.com", firstName: "John", lastName: "Whitfield", accountStatus: "active" });
  const layla = await ensureMember({ email: "layla@example.com", firstName: "Layla", lastName: "Karim", accountStatus: "invited" });
  const omar = await ensureMember({ email: "omar@example.com", firstName: "Omar", lastName: "Rahman", accountStatus: "suspended" });
  const sara = await ensureMember({ email: "sara@example.com", firstName: "Sara", lastName: "Nasser", accountStatus: "active" });
  const noor = await ensureMember({ email: "noor@example.com", firstName: "Noor", lastName: "Ali", accountStatus: "active" });
  const yusuf = await ensureMember({ email: "yusuf@example.com", firstName: "Yusuf", lastName: "Sheikh", accountStatus: "active" });

  await ensureMembership({ memberId: amira, planId: plans.essential!, status: "active", yearsAgoStart: 0 });
  // John demonstrates history: last year's Essential is past its end date
  // (still stored "active" on purpose — the system treats it as inactive),
  // plus this year's Premier.
  await ensureMembership({ memberId: john, planId: plans.essential!, status: "active", yearsAgoStart: 1 });
  await ensureMembership({ memberId: john, planId: plans.premier!, status: "active", yearsAgoStart: 0 });
  await ensureMembership({ memberId: layla, planId: plans.essential!, status: "pending", yearsAgoStart: 0 });
  await ensureMembership({ memberId: omar, planId: plans.prestige!, status: "active", yearsAgoStart: 0 });
  await ensureMembership({ memberId: sara, planId: plans.premier!, status: "cancelled", yearsAgoStart: 0 });
  await ensureMembership({ memberId: noor, planId: plans.essential!, status: "expired", yearsAgoStart: 1 });
  await ensureMembership({ memberId: yusuf, planId: plans.prestige!, status: "active", yearsAgoStart: 0 });

  // ---- Demo care coordination records (appointments / follow-ups / roadmap)
  const day = (offset: number) => {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    return d.toISOString();
  };

  // Amira — full care picture (also exercises the staff-only notes split).
  await upsert("appointments", { title: { equals: "Specialist Consultation" }, member: { equals: amira } }, {
    member: amira,
    title: "Specialist Consultation",
    provider: "Dr. Farah Al Suwaidi",
    specialty: "Cardiology",
    date: day(12),
    time: "10:30 AM",
    location: "Emirates Towers Medical Centre, Dubai",
    status: "confirmed",
    memberNotes: "Please arrive 15 minutes early and bring your ID.",
    internalNotes: "Coordinator note: prefers morning appointments.",
    overrideAccess: true,
  });
  await upsert("appointments", { title: { equals: "Preventive Health Screening" }, member: { equals: amira } }, {
    member: amira,
    title: "Preventive Health Screening",
    provider: "Wellness Check Clinic",
    date: day(-24),
    time: "08:00 AM",
    location: "Dubai",
    status: "completed",
    internalNotes: "Results filed in Health Passport.",
    overrideAccess: true,
  });
  await upsert("follow-ups", { title: { equals: "MRI Review" }, member: { equals: amira } }, {
    member: amira,
    title: "MRI Review",
    description:
      "We are arranging the review of your recent MRI and will confirm the appointment details with you.",
    dueDate: day(6),
    status: "in_progress",
    memberNotes: "No preparation needed — we will call you once it is confirmed.",
    internalNotes: "Awaiting radiologist report from provider.",
    overrideAccess: true,
  });
  await upsert("healthcare-roadmaps", { title: { equals: "Your Healthcare Journey" }, member: { equals: amira } }, {
    member: amira,
    title: "Your Healthcare Journey",
    description: "The steps PFW is coordinating for you this year.",
    status: "active",
    internalNotes: "Reviewed at last quarterly check-in.",
    overrideAccess: true,
    steps: [
      { title: "Preventive screening", description: "Annual health screening arranged and completed.", status: "completed", targetDate: day(-24) },
      { title: "Specialist consultation", description: "Cardiology consultation coordinated with your chosen provider.", status: "current", targetDate: day(12) },
      { title: "Diagnostic review", description: "We will coordinate the review of any test results.", status: "upcoming", targetDate: day(26) },
      { title: "Follow-up planning", description: "Agree next steps and schedule any follow-ups.", status: "upcoming", targetDate: day(40) },
    ],
  });

  // John — appointments only (follow-ups & roadmap stay empty for him).
  await upsert("appointments", { title: { equals: "Follow-up Consultation" }, member: { equals: john } }, {
    member: john,
    title: "Follow-up Consultation",
    provider: "Dr. Omar Bin Zayed",
    specialty: "Orthopaedics",
    date: day(20),
    time: "02:00 PM",
    location: "Al Wasl Medical Center, Dubai",
    status: "scheduled",
    memberNotes: "We will confirm this appointment by phone.",
    overrideAccess: true,
  });

  // Provider Directory (Health Passport Phase 2A).
  const drFarah = await upsert("providers", { providerName: { equals: "Dr. Farah Al Suwaidi" }, member: { equals: amira } }, {
    member: amira,
    providerName: "Dr. Farah Al Suwaidi",
    specialty: "Cardiology",
    organisation: "Emirates Towers Medical Centre",
    location: "Dubai",
    phone: "+971 4 000 0000",
    email: "clinic@example.com",
    notes: "Your cardiologist for the annual heart health review.",
    status: "active",
  });
  await upsert("providers", { providerName: { equals: "Dr. Layla Haddad" }, member: { equals: amira } }, {
    member: amira,
    providerName: "Dr. Layla Haddad",
    specialty: "Family Medicine",
    organisation: "Wellness Check Clinic",
    location: "Dubai",
    phone: "+971 4 111 1111",
    status: "active",
  });
  const dubaiRadiology = await upsert("providers", { providerName: { equals: "Dubai Radiology Centre" }, member: { equals: amira } }, {
    member: amira,
    providerName: "Dubai Radiology Centre",
    specialty: "Diagnostic Imaging",
    location: "Dubai",
    status: "archived", // demonstrates archived records stay hidden
  });
  await upsert("providers", { providerName: { equals: "Dr. Omar Bin Zayed" }, member: { equals: john } }, {
    member: john,
    providerName: "Dr. Omar Bin Zayed",
    specialty: "Orthopaedics",
    organisation: "Al Wasl Medical Center",
    location: "Dubai",
    status: "active",
  });

  // Medical Document Index (Health Passport Phase 2B-1) — metadata only,
  // no physical files exist at this stage. Amira has documents; John and
  // Yusuf intentionally stay empty for empty-state testing.
  await upsert("medical-documents", { title: { equals: "Cardiology Review Report" }, member: { equals: amira } }, {
    member: amira,
    title: "Cardiology Review Report",
    documentType: "specialist-report",
    date: day(-14),
    providerRecord: drFarah.id,
    description: "Summary of your annual cardiology review with Dr. Farah Al Suwaidi.",
    memberNotes: "Your next heart health check will be arranged around your membership anniversary.",
    status: "active",
  });
  await upsert("medical-documents", { title: { equals: "Full Blood Panel" }, member: { equals: amira } }, {
    member: amira,
    title: "Full Blood Panel",
    documentType: "laboratory",
    date: day(-30),
    description: "Routine laboratory results from your annual health screening.",
    status: "active",
  });
  await upsert("medical-documents", { title: { equals: "MRI Report" }, member: { equals: amira } }, {
    member: amira,
    title: "MRI Report",
    documentType: "imaging",
    date: day(-19),
    providerRecord: dubaiRadiology.id,
    description: "Imaging report prepared by Dubai Radiology Centre.",
    status: "active",
  });
  await upsert("medical-documents", { title: { equals: "Previous Health Screening Summary" }, member: { equals: amira } }, {
    member: amira,
    title: "Previous Health Screening Summary",
    documentType: "consultation",
    date: day(-400),
    description: "Screening summary from the previous membership year, kept for reference.",
    status: "archived", // demonstrates archived documents stay hidden
  });

  console.log(`
Seed complete.

Staff (Payload Admin at /admin):
  admin@pfw.test   / ${DEMO_PASSWORD}   (Admin)
  editor@pfw.test  / ${DEMO_PASSWORD}   (Editor)

Members (Member Portal at /member):
  amira@example.com   Active Essential            → dashboard OK
  john@example.com    Active Premier (+history)   → dashboard OK
  layla@example.com   Invited, pending            → “being prepared”
  omar@example.com    Suspended account           → “being prepared”
   sara@example.com    Cancelled membership        → “being prepared”
   noor@example.com    Expired membership          → renewal prompt
   yusuf@example.com   Active Prestige             → dashboard OK
All member passwords: ${DEMO_PASSWORD}
`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
