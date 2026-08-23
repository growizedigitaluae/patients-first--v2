import Link from "next/link";
import { getPayload } from "payload";

import configPromise from "@payload-config";
import { GateScreen } from "@/components/member/GateScreen";
import { getPortalGate } from "@/lib/member-session";
import { site } from "@/lib/site";
import type { HealthcareRoadmap, Member, MembershipPlan } from "@/payload-types";

export const metadata = { title: "Home" };

function planName(plan: MembershipPlan | null): string {
  return plan?.name ?? "Your membership";
}

export default async function DashboardPage() {
  const result = await getPortalGate();
  if (result.kind === "unauthenticated") {
    return <GateScreen variant="not-ready" />;
  }
  const { gate } = result;
  if (gate.state !== "active") {
    return <GateScreen variant={gate.state} />;
  }

  const { member, membership, plan } = gate;
  const firstName = member.firstName;

  // Small live summaries for the My Care cards — same ownership-constrained
  // query pattern as the portal pages.
  const payload = await getPayload({ config: configPromise });
  const user = member as unknown as Member;
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const [upcomingAppts, activeFollowUps, roadmapRes] = await Promise.all([
    payload.count({
      collection: "appointments",
      where: {
        and: [
          { member: { equals: member.id } },
          { status: { in: ["scheduled", "confirmed"] } },
          { date: { greater_than_equal: todayStart.toISOString() } },
        ],
      },
      overrideAccess: false,
      user,
    }),
    payload.count({
      collection: "follow-ups",
      where: {
        and: [
          { member: { equals: member.id } },
          { status: { in: ["pending", "in_progress"] } },
        ],
      },
      overrideAccess: false,
      user,
    }),
    payload.find({
      collection: "healthcare-roadmaps",
      where: {
        and: [
          { member: { equals: member.id } },
          { status: { equals: "active" } },
        ],
      },
      depth: 0,
      limit: 1,
      overrideAccess: false,
      user,
    }),
  ]);

  const roadmap = roadmapRes.docs[0] as HealthcareRoadmap | undefined;
  const currentStep = (roadmap?.steps ?? []).find(
    (step) => step.status === "current",
  );

  const period = [
    membership.startDate,
    membership.endDate,
  ]
    .filter(Boolean)
    .map((d) =>
      new Date(String(d)).toLocaleDateString("en-GB", {
        month: "short",
        year: "numeric",
      }),
    )
    .join(" – ");

  return (
    <div className="space-y-8">
      {/* WELCOME */}
      <section>
        <h1 className="font-serif text-3xl text-midnight">
          Welcome back, {firstName}
        </h1>
        <p className="mt-1 text-navy/90">
          We&rsquo;re here whenever you need us.
        </p>
      </section>

      {/* MY MEMBERSHIP */}
      <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7">
        <p className="text-gold-dark font-semibold uppercase tracking-[0.18em] text-xs">
          My Membership
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl text-midnight">
              {planName(plan)}
            </h2>
            <p className="mt-1 text-sm text-navy/85">
              {period ? `Membership period: ${period}` : "Membership period to be confirmed"}
              {" · "}
              <span className="capitalize">{membership.status}</span>
            </p>
          </div>
          <Link
            href="/member/membership"
            className="rounded-full bg-midnight px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            View Membership
          </Link>
        </div>
      </section>

      {/* MY CARE */}
      <section className="space-y-4">
        <p className="text-gold-dark font-semibold uppercase tracking-[0.18em] text-xs">
          My Care
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            href="/member/my-care"
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-gold"
          >
            <h3 className="font-serif text-lg text-midnight">Appointments</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-navy/85">
              {upcomingAppts.totalDocs > 0
                ? `${upcomingAppts.totalDocs} upcoming appointment${upcomingAppts.totalDocs === 1 ? "" : "s"}`
                : "Your coordinator arranges every appointment for you."}
            </p>
            <span className="mt-3 inline-block text-xs font-semibold text-gold-dark">
              View My Care →
            </span>
          </Link>
          <Link
            href="/member/my-care"
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-gold"
          >
            <h3 className="font-serif text-lg text-midnight">Follow-ups</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-navy/85">
              {activeFollowUps.totalDocs > 0
                ? `${activeFollowUps.totalDocs} follow-up${activeFollowUps.totalDocs === 1 ? "" : "s"} to keep on track`
                : "We keep track of what comes next after each visit."}
            </p>
            <span className="mt-3 inline-block text-xs font-semibold text-gold-dark">
              View My Care →
            </span>
          </Link>
          <Link
            href="/member/my-care"
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-gold"
          >
            <h3 className="font-serif text-lg text-midnight">Care Roadmap</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-navy/85">
              {currentStep
                ? `Now: ${currentStep.title}`
                : "A clear picture of your healthcare journey ahead."}
            </p>
            <span className="mt-3 inline-block text-xs font-semibold text-gold-dark">
              View My Care →
            </span>
          </Link>
        </div>
      </section>

      {/* HEALTH PASSPORT */}
      <section className="space-y-4">
        <p className="text-gold-dark font-semibold uppercase tracking-[0.18em] text-xs">
          Health Passport
        </p>
        <Link
          href="/member/health-passport"
          className="block rounded-3xl border border-slate-100 bg-gradient-to-br from-[#FBF6EC] to-white p-6 shadow-sm transition hover:border-gold sm:p-7"
        >
          <h3 className="font-serif text-xl text-midnight">
            Your health journey, organised in one place
          </h3>
          <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-navy/85">
            Documents, timeline and follow-ups — kept ready for you and your
            care team.
          </p>
        </Link>
      </section>

      {/* FAMILY + HELP */}
      <section className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/member/family"
          className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-gold"
        >
          <h3 className="font-serif text-lg text-midnight">Family</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-navy/85">
            Profiles for the family members in your care.
          </p>
        </Link>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="font-serif text-lg text-midnight">Help</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-navy/85">
            Questions about your membership?
          </p>
          <a
            href={site.phoneHref}
            className="mt-3 inline-block text-sm font-semibold text-gold-dark hover:underline"
          >
            Contact PFW →
          </a>
        </div>
      </section>
    </div>
  );
}
