import { Check } from "lucide-react";

import { GateScreen, gateScreenVariant } from "@/components/member/GateScreen";
import { getPortalGate } from "@/lib/member-session";
import { site } from "@/lib/site";

export const metadata = { title: "My Membership" };

/** Features shown in the "Your membership" details card instead of the
 * "What's included" list — placement only, values always come from the CMS. */
const DETAIL_FEATURE_SLUGS = new Set([
  "provider-navigation",
  "pfw-service-access",
  "regular-check-in",
  "annual-review",
]);

function formatDate(d: Date | string | null | undefined): string | null {
  if (!d) return null;
  const parsed = new Date(d);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function FeatureValue({ value }: { value: string }) {
  if (!value) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FBF6EC] px-3 py-1 text-sm font-semibold text-gold-dark">
        <Check className="h-4 w-4" aria-hidden />
        Included
      </span>
    );
  }
  return (
    <span className="text-right text-sm font-semibold text-midnight">
      {value}
    </span>
  );
}

export default async function MembershipPage() {
  const result = await getPortalGate();
  if (result.kind === "unauthenticated") {
    return <GateScreen variant="not-ready" />;
  }
  const { gate } = result;
  if (gate.state !== "active") {
    return (
      <GateScreen
        variant={gateScreenVariant(
          gate.state,
          gate.state === "not-ready" ? gate.reason : undefined,
        )}
      />
    );
  }

  const { membership, plan } = gate;

  const start = formatDate(membership.startDate);
  const end = formatDate(membership.endDate);
  const period = [start, end].filter(Boolean).join(" – ");

  // The verified feature matrix lives on the member's own plan in Payload.
  const allRows = (plan?.features ?? []).map((row, index) => ({
    key: String(row.id ?? index),
    name:
      typeof row.feature === "object" && row.feature !== null
        ? row.feature.name
        : null,
    slug:
      typeof row.feature === "object" && row.feature !== null
        ? row.feature.slug
        : null,
    value: row.value ?? "",
  }));

  const detailRows = allRows.filter(
    (row) => !!row.slug && DETAIL_FEATURE_SLUGS.has(row.slug),
  );
  const includedRows = allRows.filter(
    (row) => !row.slug || !DETAIL_FEATURE_SLUGS.has(row.slug),
  );

  const details: Array<{ label: string; value: string }> = [];
  if (plan?.coverageType) {
    details.push({ label: "Coverage", value: plan.coverageType });
  }
  if (plan?.serviceLevel) {
    details.push({ label: "Service Level", value: plan.serviceLevel });
  }
  for (const row of detailRows) {
    if (row.name) {
      details.push({ label: row.name, value: row.value || "Included" });
    }
  }

  return (
    <div className="space-y-8">
      <section>
        <h1 className="font-serif text-3xl text-midnight">My Membership</h1>
      </section>

      {/* MEMBERSHIP SUMMARY */}
      <section
        aria-labelledby="membership-summary"
        className="rounded-3xl border border-slate-100 bg-gradient-to-br from-[#FBF6EC] to-white p-7 shadow-sm sm:p-8"
      >
        <h2 id="membership-summary" className="sr-only">
          Membership summary
        </h2>
        <p className="font-serif text-3xl text-midnight">
          {plan?.name ?? "Your membership"}
        </p>
        {plan?.shortDescription && (
          <p className="mt-2 max-w-md leading-relaxed text-navy/90">
            {plan.shortDescription}
          </p>
        )}

        <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
          <span
            className="inline-block h-2 w-2 rounded-full bg-emerald-600"
            aria-hidden
          />
          <span className="text-sm font-semibold capitalize text-midnight">
            {membership.status}
          </span>
        </p>

        {period && (
          <p className="mt-4 text-sm font-medium text-navy/85">{period}</p>
        )}
      </section>

      {/* WHAT'S INCLUDED — every value comes from the member's plan in Payload */}
      <section className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8">
        <h2 className="font-serif text-xl text-midnight">What&rsquo;s included</h2>
        {includedRows.length === 0 ? (
          <p className="mt-4 leading-relaxed text-navy">
            Your care team is preparing your membership details.
            You&rsquo;ll see everything included here soon.
          </p>
        ) : (
          <ul className="mt-4 divide-y divide-slate-100">
            {includedRows.map((row) => (
              <li
                key={row.key}
                className="flex items-center justify-between gap-6 py-3.5"
              >
                <span className="text-[15px] leading-snug text-midnight">
                  {row.name}
                </span>
                <FeatureValue value={row.value} />
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* YOUR MEMBERSHIP — key plan facts, shown only when present */}
      {details.length > 0 && (
        <section className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8">
          <h2 className="font-serif text-xl text-midnight">
            Your membership details
          </h2>
          <dl className="mt-4 divide-y divide-slate-100">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5"
              >
                <dt className="text-[15px] text-navy/80">{detail.label}</dt>
                <dd className="text-right text-sm font-semibold text-midnight">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {/* SUPPORT */}
      <section
        id="need-assistance"
        className="rounded-3xl border border-slate-100 bg-white p-7 text-center shadow-sm sm:p-8"
      >
        <h2 className="font-serif text-xl text-midnight">Need assistance?</h2>
        <p className="mx-auto mt-2 max-w-md leading-relaxed text-navy/90">
          If you have questions about your membership or need help from PFW,
          our team is here to assist.
        </p>
        <div className="mt-6 space-y-3">
          <a
            href={site.phoneHref}
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-midnight px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto"
          >
            Contact PFW
          </a>
          <p className="text-sm text-navy/75">
            Or reach us on{" "}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold-dark hover:underline"
            >
              WhatsApp
            </a>{" "}
            or{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-gold-dark hover:underline"
            >
              email
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
