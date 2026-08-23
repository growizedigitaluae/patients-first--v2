import { CalendarDays, FileText, FolderOpen, HeartPulse, Stethoscope, User } from "lucide-react";
import Link from "next/link";
import { getPayload } from "payload";

import configPromise from "@payload-config";
import { GateScreen } from "@/components/member/GateScreen";
import { getPortalGate } from "@/lib/member-session";
import type {
  Appointment,
  FollowUp,
  HealthcareRoadmap,
  MedicalDocument,
  Member,
  MembershipPlan,
  Provider,
} from "@/payload-types";

export const metadata = { title: "Health Passport" };

function toDate(d: Date | string | null | undefined): Date | null {
  if (!d) return null;
  const parsed = new Date(d);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatDateFull(d: Date | string | null | undefined): string | null {
  const parsed = toDate(d);
  return parsed
    ? parsed.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;
}

type TimelineEntry = {
  date: Date;
  title: string;
  kind: string;
};

function SectionHeading({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <h2 className="flex items-center gap-2.5 font-serif text-xl text-midnight">
      <span className="text-gold-dark" aria-hidden>
        {icon}
      </span>
      {title}
    </h2>
  );
}

export default async function HealthPassportPage() {
  const result = await getPortalGate();
  if (result.kind === "unauthenticated") {
    return <GateScreen variant="not-ready" />;
  }
  const { gate } = result;
  if (gate.state !== "active") {
    return <GateScreen variant={gate.state} />;
  }

  // Everything below is derived from records this member already owns.
  // Queries run with overrideAccess: false + explicit user context so
  // Payload's ownership rules always apply — no second access system.
  const payload = await getPayload({ config: configPromise });
  const member = gate.member as unknown as Member;
  const user = member;
  const plan =
    typeof gate.membership.plan === "number"
      ? null
      : (gate.membership.plan as MembershipPlan | null);

  const [providersRes, appointmentsRes, followUpsRes, roadmapRes, documentsRes] = await Promise.all([
    payload.find({
      collection: "providers",
      where: {
        and: [
          { member: { equals: member.id } },
          { status: { equals: "active" } },
        ],
      },
      depth: 0,
      limit: 100,
      sort: "providerName",
      overrideAccess: false,
      user,
    }),
    payload.find({
      collection: "appointments",
      where: { member: { equals: member.id } },
      depth: 0,
      limit: 100,
      sort: "-date",
      overrideAccess: false,
      user,
    }),
    payload.find({
      collection: "follow-ups",
      where: { member: { equals: member.id } },
      depth: 0,
      limit: 100,
      sort: "-dueDate",
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
      sort: "createdAt",
      overrideAccess: false,
      user,
    }),
    payload.find({
      collection: "medical-documents",
      where: {
        and: [
          { member: { equals: member.id } },
          { status: { equals: "active" } },
        ],
      },
      depth: 0,
      limit: 100,
      sort: "-date",
      overrideAccess: false,
      user,
    }),
  ]);

  const appointments = appointmentsRes.docs as Appointment[];
  const followUps = followUpsRes.docs as FollowUp[];
  const roadmap = roadmapRes.docs[0] as HealthcareRoadmap | undefined;
  const directoryProviders = providersRes.docs as Provider[];
  const documents = documentsRes.docs as MedicalDocument[];

  // MY PROVIDERS CARD — prefers the member's Provider Directory entries;
  // falls back to a preview derived from their appointments.
  let providerPreview: Array<{ name: string; specialty: string | null }> = [];
  if (directoryProviders.length > 0) {
    providerPreview = directoryProviders.slice(0, 3).map((p) => ({
      name: p.providerName,
      specialty: p.specialty ?? null,
    }));
  } else {
    for (const appointment of appointments) {
      if (!appointment.provider) continue;
      const existing = providerPreview.find(
        (p) => p.name === appointment.provider,
      );
      if (existing) continue;
      providerPreview.push({
        name: appointment.provider,
        specialty: appointment.specialty ?? null,
      });
      if (providerPreview.length >= 3) break;
    }
  }

  // HEALTHCARE TIMELINE — derived from appointments, follow-ups and the
  // roadmap's completed steps. No separate timeline collection is created.
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const timeline: TimelineEntry[] = [];

  for (const appointment of appointments) {
    const d = toDate(appointment.date);
    const isPast =
      appointment.status === "completed" ||
      (d !== null && d.getTime() < todayStart.getTime());
    if (isPast && d) {
      timeline.push({ date: d, title: appointment.title, kind: "Appointment" });
    }
  }
  for (const followUp of followUps) {
    if (followUp.status !== "completed") continue;
    const d = toDate(followUp.dueDate);
    if (d) {
      timeline.push({ date: d, title: followUp.title, kind: "Follow-up" });
    }
  }
  for (const step of roadmap?.steps ?? []) {
    if (step.status !== "completed") continue;
    const d = toDate(step.targetDate);
    if (d) {
      timeline.push({
        date: d,
        title: step.title,
        kind: "Roadmap milestone",
      });
    }
  }
  timeline.sort((a, b) => b.date.getTime() - a.date.getTime());
  const recentTimeline = timeline.slice(0, 8);

  const activeFollowUps = followUps.filter(
    (f) => f.status === "pending" || f.status === "in_progress",
  );

  return (
    <div className="space-y-8">
      {/* INTRO */}
      <section>
        <h1 className="font-serif text-3xl text-midnight">Health Passport</h1>
        <p className="mt-2 max-w-xl leading-relaxed text-navy">
          Your healthcare information, organised in one place.
        </p>
      </section>

      {/* MY HEALTH PROFILE */}
      <section className="rounded-3xl border border-slate-100 bg-gradient-to-br from-[#FBF6EC] to-white p-7 shadow-sm sm:p-8">
        <SectionHeading
          icon={<User className="h-5 w-5" />}
          title="My Health Profile"
        />
        <p className="mt-3 text-[15px] leading-relaxed text-navy/90">
          Your personal details, kept ready for you and your care team.
        </p>
        <dl className="mt-4 flex flex-wrap gap-x-10 gap-y-2 text-sm">
          <div>
            <dt className="text-navy/70">Name</dt>
            <dd className="font-semibold text-midnight">
              {member.firstName} {member.lastName}
            </dd>
          </div>
          <div>
            <dt className="text-navy/70">Membership</dt>
            <dd className="font-semibold text-midnight">
              {plan?.name ?? "PFW"}
            </dd>
          </div>
        </dl>
        <Link
          href="/member/profile"
          className="mt-5 inline-flex min-h-11 items-center rounded-full bg-midnight px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          View my profile
        </Link>
      </section>

      {/* LIGHT CARDS */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* MY PROVIDERS */}
        <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7">
          <SectionHeading
            icon={<Stethoscope className="h-5 w-5" />}
            title="My Providers"
          />
          {providerPreview.length === 0 ? (
            <p className="mt-3 text-sm leading-relaxed text-navy/85">
              Your providers will appear here as PFW arranges appointments
              for you.
            </p>
          ) : (
            <ul className="mt-4 space-y-3">
              {providerPreview.map((provider) => (
                <li key={provider.name} className="text-[15px]">
                  <p className="font-medium text-midnight">{provider.name}</p>
                  {provider.specialty && (
                    <p className="text-sm text-navy/70">{provider.specialty}</p>
                  )}
                </li>
              ))}
            </ul>
          )}
          <Link
            href="/member/health-passport/providers"
            className="mt-4 inline-block text-sm font-semibold text-gold-dark hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-dark"
          >
            View all providers →
          </Link>
        </section>

        {/* MY DOCUMENTS — index preview; physical files arrive in a later phase */}
        <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7">
          <SectionHeading
            icon={<FolderOpen className="h-5 w-5" />}
            title="My Documents"
          />
          {documents.length === 0 ? (
            <p className="mt-3 text-sm leading-relaxed text-navy/85">
              Your healthcare documents will appear here as they are organised
              by PFW.
            </p>
          ) : (
            <>
              <p className="mt-3 text-[15px] font-medium text-midnight">
                {documents.length} document{documents.length === 1 ? "" : "s"}
              </p>
              <ul className="mt-1 space-y-1">
                {documents.slice(0, 3).map((document) => (
                  <li key={String(document.id)} className="text-sm text-navy/75">
                    <span className="truncate">{document.title}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          <Link
            href="/member/health-passport/documents"
            className="mt-4 inline-block text-sm font-semibold text-gold-dark hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-dark"
          >
            View all documents →
          </Link>
        </section>

        {/* FOLLOW-UPS */}
        <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7">
          <SectionHeading
            icon={<HeartPulse className="h-5 w-5" />}
            title="Follow-ups"
          />
          {activeFollowUps.length === 0 ? (
            <p className="mt-3 text-sm leading-relaxed text-navy/85">
              Nothing needs your attention right now.
            </p>
          ) : (
            <>
              <p className="mt-3 text-[15px] font-medium text-midnight">
                {activeFollowUps.length} follow-up
                {activeFollowUps.length === 1 ? "" : "s"} in progress
              </p>
              <p className="mt-1 truncate text-sm text-navy/75">
                {activeFollowUps[0].title}
              </p>
            </>
          )}
          <Link
            href="/member/my-care"
            className="mt-4 inline-block text-sm font-semibold text-gold-dark hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-dark"
          >
            View in My Care →
          </Link>
        </section>

        {/* PREVENTIVE CARE — coordination area only; no medical advice */}
        <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7">
          <SectionHeading
            icon={<CalendarDays className="h-5 w-5" />}
            title="Preventive Care"
          />
          <p className="mt-3 text-sm leading-relaxed text-navy/85">
            Your preventive care information will appear here as it is
            coordinated by PFW.
          </p>
        </section>
      </div>

      {/* HEALTHCARE TIMELINE — derived from existing records */}
      <section className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8">
        <SectionHeading
          icon={<FileText className="h-5 w-5" />}
          title="Healthcare Timeline"
        />
        <p className="mt-2 text-sm leading-relaxed text-navy/85">
          Your recent appointments, follow-ups and milestones — newest first.
        </p>
        {recentTimeline.length === 0 ? (
          <p className="mt-4 text-[15px] leading-relaxed text-navy/85">
            Your healthcare information will appear here as it is organised by
            PFW.
          </p>
        ) : (
          <ol className="mt-5 divide-y divide-slate-100">
            {recentTimeline.map((entry) => (
              <li
                key={`${entry.kind}-${entry.title}-${entry.date.toISOString()}`}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3"
              >
                <span className="min-w-0 text-[15px] text-midnight">
                  <span className="mr-2 rounded-full bg-[#FBF6EC] px-2.5 py-0.5 text-xs font-semibold text-gold-dark">
                    {entry.kind}
                  </span>
                  {entry.title}
                </span>
                <span className="shrink-0 text-sm text-navy/75">
                  {formatDateFull(entry.date)}
                </span>
              </li>
            ))}
          </ol>
        )}
      </section>

      <p className="px-2 text-center text-xs leading-relaxed text-navy/70">
        The Health Passport is an organisational service. It does not provide
        medical advice or treatment, and clinical decisions remain with
        licensed healthcare professionals.
      </p>
    </div>
  );
}
