import { Check, Clock, MapPin } from "lucide-react";
import { getPayload } from "payload";

import configPromise from "@payload-config";
import { GateScreen } from "@/components/member/GateScreen";
import { getPortalGate } from "@/lib/member-session";
import type { Appointment, FollowUp, HealthcareRoadmap, Member } from "@/payload-types";

export const metadata = { title: "My Care" };

const APPOINTMENT_STATUS_LABELS: Record<string, string> = {
  scheduled: "Scheduled",
  confirmed: "Confirmed",
  completed: "Completed",
  cancelled: "Cancelled",
};

const FOLLOW_UP_STATUS_LABELS: Record<string, string> = {
  pending: "Pending",
  in_progress: "In progress",
  completed: "Completed",
  cancelled: "Cancelled",
};

const STEP_STATUS_LABELS: Record<string, string> = {
  upcoming: "Upcoming",
  current: "Current",
  completed: "Completed",
};

function toDate(d: Date | string | null | undefined): Date | null {
  if (!d) return null;
  const parsed = new Date(d);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatDateLong(d: Date | string | null | undefined): string | null {
  const parsed = toDate(d);
  return parsed
    ? parsed.toLocaleDateString("en-GB", { day: "numeric", month: "long" })
    : null;
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

function startOfToday(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function StatusPill({ label }: { label: string }) {
  return (
    <span className="inline-flex shrink-0 items-center rounded-full bg-[#FBF6EC] px-3 py-1 text-xs font-semibold text-gold-dark">
      {label}
    </span>
  );
}

export default async function MyCarePage() {
  const result = await getPortalGate();
  if (result.kind === "unauthenticated") {
    return <GateScreen variant="not-ready" />;
  }
  const { gate } = result;
  if (gate.state !== "active") {
    return <GateScreen variant={gate.state} />;
  }

  // Ownership-constrained queries: overrideAccess:false + explicit user
  // context keeps Payload's access rules active (Local API would otherwise
  // bypass them). A member can only ever read their own care records.
  const payload = await getPayload({ config: configPromise });
  const member = gate.member as unknown as Member;
  const user = member;

  const [appointmentsRes, followUpsRes, roadmapRes] = await Promise.all([
    payload.find({
      collection: "appointments",
      where: { member: { equals: member.id } },
      depth: 0,
      limit: 100,
      sort: "date",
      overrideAccess: false,
      user,
    }),
    payload.find({
      collection: "follow-ups",
      where: {
        and: [
          { member: { equals: member.id } },
          { status: { in: ["pending", "in_progress"] } },
        ],
      },
      depth: 0,
      limit: 50,
      sort: "dueDate",
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

  // Split appointments into upcoming vs past. Past-dated records that were
  // never marked completed are treated as past — staff update statuses.
  const todayStart = startOfToday();
  const appointments = appointmentsRes.docs as Appointment[];
  const upcomingAppointments = appointments
    .filter((a) => {
      if (a.status !== "scheduled" && a.status !== "confirmed") return false;
      const d = toDate(a.date);
      return d !== null && d.getTime() >= todayStart.getTime();
    })
    .sort(
      (a, b) => (toDate(a.date)?.getTime() ?? 0) - (toDate(b.date)?.getTime() ?? 0),
    );
  const pastAppointments = appointments
    .filter((a) => !upcomingAppointments.includes(a))
    .sort(
      (a, b) => (toDate(b.date)?.getTime() ?? 0) - (toDate(a.date)?.getTime() ?? 0),
    );

  const followUps = followUpsRes.docs as FollowUp[];
  const roadmapDoc =
    (roadmapRes.docs[0] as HealthcareRoadmap | undefined) ?? null;
  const roadmap = roadmapDoc ? { ...roadmapDoc, steps: roadmapDoc.steps ?? [] } : null;

  return (
    <div className="space-y-10">
      {/* INTRO */}
      <section>
        <h1 className="font-serif text-3xl text-midnight">My Care</h1>
        <p className="mt-2 text-navy leading-relaxed">
          Your care, coordinated in one place.
        </p>
      </section>

      {/* APPOINTMENTS */}
      <section aria-labelledby="appointments-heading" className="space-y-4">
        <h2
          id="appointments-heading"
          className="text-gold-dark font-semibold uppercase tracking-[0.18em] text-xs"
        >
          Appointments
        </h2>

        {upcomingAppointments.length === 0 ? (
          <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8">
            <h3 className="font-serif text-xl text-midnight">
              No upcoming appointments
            </h3>
            <p className="mt-2 max-w-md text-[15px] leading-relaxed text-navy/90">
              Your PFW Care Coordinator will add appointments here when they
              are arranged.
            </p>
          </div>
        ) : (
          <ul className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <AppointmentCard key={String(appointment.id)} appointment={appointment} />
            ))}
          </ul>
        )}

        {pastAppointments.length > 0 && (
          <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8">
            <h3 className="font-serif text-lg text-midnight">
              Past appointments
            </h3>
            <ul className="mt-3 divide-y divide-slate-100">
              {pastAppointments.slice(0, 8).map((appointment) => (
                <li
                  key={String(appointment.id)}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3"
                >
                  <span className="text-[15px] text-midnight">
                    {appointment.title}
                    <span className="text-navy/70">
                      {formatDateLong(appointment.date)
                        ? ` · ${formatDateLong(appointment.date)}`
                        : ""}
                    </span>
                  </span>
                  <StatusPill
                    label={
                      APPOINTMENT_STATUS_LABELS[appointment.status] ??
                      appointment.status
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* FOLLOW-UPS */}
      <section aria-labelledby="follow-ups-heading" className="space-y-4">
        <h2
          id="follow-ups-heading"
          className="text-gold-dark font-semibold uppercase tracking-[0.18em] text-xs"
        >
          Follow-ups
        </h2>

        {followUps.length === 0 ? (
          <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8">
            <h3 className="font-serif text-xl text-midnight">
              Nothing needs your attention right now
            </h3>
            <p className="mt-2 max-w-md text-[15px] leading-relaxed text-navy/90">
              We keep track of what comes next after each visit — you&rsquo;ll
              see any follow-ups here.
            </p>
          </div>
        ) : (
          <ul className="space-y-4">
            {followUps.map((followUp) => (
              <li
                key={String(followUp.id)}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-gold-dark font-semibold uppercase tracking-[0.14em] text-xs">
                      Follow-up
                    </p>
                    <h3 className="mt-1 font-serif text-xl text-midnight">
                      {followUp.title}
                    </h3>
                    {followUp.description && (
                      <p className="mt-1.5 max-w-lg text-[15px] leading-relaxed text-navy/85">
                        {followUp.description}
                      </p>
                    )}
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    {followUp.dueDate && (
                      <p className="text-sm font-medium text-navy/80">
                        Due {formatDateFull(followUp.dueDate)}
                      </p>
                    )}
                    <StatusPill
                      label={
                        FOLLOW_UP_STATUS_LABELS[followUp.status] ??
                        followUp.status
                      }
                    />
                  </div>
                </div>
                {followUp.memberNotes && (
                  <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-relaxed text-navy/85">
                    {followUp.memberNotes}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* HEALTHCARE ROADMAP */}
      <section aria-labelledby="roadmap-heading" className="space-y-4">
        <h2
          id="roadmap-heading"
          className="text-gold-dark font-semibold uppercase tracking-[0.18em] text-xs"
        >
          Healthcare Roadmap
        </h2>

        {!roadmap || roadmap.steps.length === 0 ? (
          <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8">
            <h3 className="font-serif text-xl text-midnight">
              Your healthcare roadmap
            </h3>
            <p className="mt-2 max-w-md text-[15px] leading-relaxed text-navy/90">
              Your healthcare roadmap will appear here as your care journey is
              coordinated by PFW.
            </p>
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8">
            <h3 className="font-serif text-xl text-midnight">{roadmap.title}</h3>
            {roadmap.description && (
              <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-navy/90">
                {roadmap.description}
              </p>
            )}
            <ol className="mt-6 space-y-0">
              {roadmap.steps.map((step, index) => {
                const label = STEP_STATUS_LABELS[step.status] ?? step.status;
                const isCompleted = step.status === "completed";
                const isCurrent = step.status === "current";
                return (
                  <li key={step.id ?? index} className="relative flex gap-4 pb-6 last:pb-0">
                    {/* connector line */}
                    {index < roadmap.steps.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute top-10 bottom-0 left-[19px] w-px bg-slate-200"
                      />
                    )}
                    <span
                      aria-hidden
                      className={
                        isCompleted
                          ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-midnight text-gold"
                          : isCurrent
                            ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-white font-serif text-[15px] font-semibold text-midnight"
                            : "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white font-serif text-[15px] text-navy/70"
                      }
                    >
                      {isCompleted ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        index + 1
                      )}
                    </span>
                    <div className="min-w-0 pt-1">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h4 className="text-[15px] font-semibold text-midnight">
                          {step.title}
                        </h4>
                        <span
                          className={
                            isCurrent
                              ? "rounded-full bg-[#FBF6EC] px-2.5 py-0.5 text-xs font-semibold text-gold-dark"
                              : "text-xs font-medium text-navy/70"
                          }
                        >
                          {label}
                        </span>
                      </div>
                      {step.targetDate && (
                        <p className="mt-0.5 text-sm text-navy/75">
                          Target: {formatDateFull(step.targetDate)}
                        </p>
                      )}
                      {step.description && (
                        <p className="mt-1 max-w-lg text-sm leading-relaxed text-navy/85">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
            <p className="mt-6 border-t border-slate-100 pt-4 text-xs leading-relaxed text-navy/70">
              Your roadmap shows how PFW coordinates your care journey. It is
              not medical advice — clinical decisions remain with your
              healthcare professionals.
            </p>
          </div>
        )}
      </section>

      {/* SUPPORT */}
      <section className="rounded-3xl border border-slate-100 bg-white p-7 text-center shadow-sm sm:p-8">
        <h2 className="font-serif text-xl text-midnight">Need assistance?</h2>
        <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-navy/90">
          If anything here doesn&rsquo;t look right, or your plans change,
          contact your PFW Care Coordinator — we&rsquo;ll take care of it.
        </p>
        <a
          href="/member/membership#need-assistance"
          className="mt-5 inline-block text-sm font-semibold text-gold-dark hover:underline"
        >
          Contact PFW →
        </a>
      </section>
    </div>
  );
}

function AppointmentCard({ appointment }: { appointment: Appointment }) {
  return (
    <li className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7">
      <div className="flex gap-5">
        {/* DATE BADGE */}
        <div className="flex h-fit w-16 shrink-0 flex-col items-center rounded-2xl bg-gradient-to-br from-[#FBF6EC] to-white px-2 py-3 shadow-sm">
          <span className="font-serif text-2xl leading-none text-midnight">
            {toDate(appointment.date)?.getDate() ?? "—"}
          </span>
          <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">
            {toDate(appointment.date)?.toLocaleDateString("en-GB", {
              month: "short",
            }) ?? ""}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
            <div className="min-w-0">
              <h3 className="font-serif text-xl text-midnight">
                {appointment.title}
              </h3>
              {appointment.provider && (
                <p className="mt-0.5 text-[15px] text-navy/85">
                  {appointment.provider}
                </p>
              )}
              {appointment.specialty && (
                <p className="text-sm text-navy/70">{appointment.specialty}</p>
              )}
            </div>
            <StatusPill
              label={
                APPOINTMENT_STATUS_LABELS[appointment.status] ??
                appointment.status
              }
            />
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-navy/80">
            {appointment.time && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-gold-dark" aria-hidden />
                {appointment.time}
              </span>
            )}
            {appointment.location && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-gold-dark" aria-hidden />
                {appointment.location}
              </span>
            )}
          </div>

          {appointment.memberNotes && (
            <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-relaxed text-navy/85">
              {appointment.memberNotes}
            </p>
          )}
        </div>
      </div>
    </li>
  );
}
