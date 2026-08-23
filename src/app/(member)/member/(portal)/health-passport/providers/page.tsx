import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { getPayload } from "payload";

import configPromise from "@payload-config";
import { GateScreen } from "@/components/member/GateScreen";
import { getPortalGate } from "@/lib/member-session";
import type { Member, Provider } from "@/payload-types";

export const metadata = { title: "My Providers" };

export default async function ProvidersPage() {
  const result = await getPortalGate();
  if (result.kind === "unauthenticated") {
    return <GateScreen variant="not-ready" />;
  }
  const { gate } = result;
  if (gate.state !== "active") {
    return <GateScreen variant={gate.state} />;
  }

  // Ownership-constrained query — a member can only ever read their own
  // provider records (overrideAccess: false + explicit user context).
  const payload = await getPayload({ config: configPromise });
  const member = gate.member as unknown as Member;
  const providersRes = await payload.find({
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
    user: member,
  });
  const providers = providersRes.docs as Provider[];

  return (
    <div className="space-y-8">
      <section>
        <Link
          href="/member/health-passport"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Health Passport
        </Link>
        <h1 className="mt-3 font-serif text-3xl text-midnight">My Providers</h1>
        <p className="mt-2 max-w-xl leading-relaxed text-navy">
          Your healthcare providers, organised in one place.
        </p>
      </section>

      {providers.length === 0 ? (
        <section className="rounded-3xl border border-slate-100 bg-white p-7 text-center shadow-sm sm:p-8">
          <h2 className="font-serif text-xl text-midnight">
            No providers have been added yet
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-navy/90">
            Your PFW Care Coordinator will add healthcare providers here as
            they are coordinated.
          </p>
        </section>
      ) : (
        <ul className="space-y-4">
          {providers.map((provider) => (
            <li
              key={String(provider.id)}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7"
            >
              <h2 className="font-serif text-xl text-midnight">
                {provider.providerName}
              </h2>
              <div className="mt-1 space-y-0.5">
                {provider.specialty && (
                  <p className="text-[15px] font-medium text-gold-dark">
                    {provider.specialty}
                  </p>
                )}
                {provider.location && (
                  <p className="inline-flex items-center gap-1.5 text-sm text-navy/80">
                    <MapPin className="h-4 w-4 shrink-0 text-gold-dark" aria-hidden />
                    {provider.location}
                  </p>
                )}
              </div>

              {(provider.organisation ||
                provider.phone ||
                provider.email) && (
                <dl className="mt-4 space-y-1.5 border-t border-slate-100 pt-4 text-sm">
                  {provider.organisation && (
                    <div className="flex flex-wrap gap-x-2">
                      <dt className="text-navy/70">Organisation</dt>
                      <dd className="font-medium text-midnight">
                        {provider.organisation}
                      </dd>
                    </div>
                  )}
                  {provider.phone && (
                    <div className="flex flex-wrap items-center gap-x-2">
                      <dt className="inline-flex items-center gap-1.5 text-navy/70">
                        <Phone className="h-3.5 w-3.5" aria-hidden />
                        Phone
                      </dt>
                      <dd>
                        <a
                          href={`tel:${provider.phone.replace(/[^+\d]/g, "")}`}
                          className="font-medium text-midnight hover:text-gold-dark hover:underline"
                        >
                          {provider.phone}
                        </a>
                      </dd>
                    </div>
                  )}
                  {provider.email && (
                    <div className="flex flex-wrap items-center gap-x-2">
                      <dt className="inline-flex items-center gap-1.5 text-navy/70">
                        <Mail className="h-3.5 w-3.5" aria-hidden />
                        Email
                      </dt>
                      <dd>
                        <a
                          href={`mailto:${provider.email}`}
                          className="font-medium text-midnight hover:text-gold-dark hover:underline"
                        >
                          {provider.email}
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
              )}

              {provider.notes && (
                <p className="mt-4 text-sm leading-relaxed text-navy/85">
                  {provider.notes}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}

      <p className="px-2 text-center text-xs leading-relaxed text-navy/70">
        Provider details are organised by your PFW Care Coordinator.
        Appointment availability remains subject to each provider&rsquo;s own
        policies.
      </p>
    </div>
  );
}
