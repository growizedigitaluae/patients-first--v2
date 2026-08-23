import { getPayload } from "payload";

import configPromise from "@payload-config";
import { GateScreen } from "@/components/member/GateScreen";
import { getPortalGate } from "@/lib/member-session";
import type { FamilyMember, Member } from "@/payload-types";

export const metadata = { title: "Family" };

export default async function FamilyPage() {
  const result = await getPortalGate();
  if (result.kind === "unauthenticated") {
    return <GateScreen variant="not-ready" />;
  }
  const { gate } = result;
  if (gate.state !== "active") {
    return <GateScreen variant={gate.state} />;
  }

  const member = gate.member as unknown as Member;

  // Ownership-constrained: access rules apply (overrideAccess: false).
  const payload = await getPayload({ config: configPromise });
  const familyRes = await payload.find({
    collection: "family-members",
    where: { member: { equals: member.id } },
    depth: 0,
    limit: 50,
    sort: "firstName",
    overrideAccess: false,
    user: member,
  });
  const familyMembers: FamilyMember[] = familyRes.docs;

  return (
    <div className="space-y-8">
      <section>
        <h1 className="font-serif text-3xl text-midnight">Family</h1>
        <p className="mt-2 max-w-xl text-navy leading-relaxed">
          The people you care about can have their own profile in your
          membership — so their appointments and follow-ups stay organised too.
        </p>
      </section>

      {familyMembers.length === 0 ? (
        <section className="rounded-3xl border border-slate-100 bg-white p-7 text-center shadow-sm sm:p-8">
          <h2 className="font-serif text-xl text-midnight">
            No family profiles yet
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-navy/90">
            Your PFW care team will happily add profiles for your spouse,
            children or parents. Just ask at any time.
          </p>
        </section>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {familyMembers.map((fm) => (
            <li
              key={String(fm.id)}
              className="flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <span
                aria-hidden
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-midnight font-serif text-lg text-gold"
              >
                {fm.firstName.charAt(0).toUpperCase()}
              </span>
              <div className="min-w-0">
                <p className="truncate font-semibold text-midnight">
                  {fm.firstName} {fm.lastName ?? ""}
                </p>
                <p className="text-sm capitalize text-navy/75">
                  {fm.relationship ?? "Family member"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
