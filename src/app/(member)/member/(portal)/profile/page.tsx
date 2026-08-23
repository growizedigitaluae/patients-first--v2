import Link from "next/link";

import { GateScreen } from "@/components/member/GateScreen";
import { getPortalGate } from "@/lib/member-session";
import { PhoneForm } from "@/components/member/PhoneForm";
import type { Member, MembershipPlan } from "@/payload-types";

export const metadata = { title: "Profile" };

export default async function ProfilePage() {
  const result = await getPortalGate();
  if (result.kind === "unauthenticated") {
    return <GateScreen variant="not-ready" />;
  }
  const { gate } = result;
  if (gate.state !== "active") {
    return <GateScreen variant={gate.state} />;
  }

  const member = gate.member as unknown as Member;
  const plan =
    typeof gate.membership.plan === "number"
      ? null
      : (gate.membership.plan as MembershipPlan | null);

  return (
    <div className="space-y-8">
      <section>
        <h1 className="font-serif text-3xl text-midnight">Profile</h1>
        <p className="mt-2 text-navy leading-relaxed">
          Your personal details, kept up to date.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
        <dl className="space-y-5">
          <div>
            <dt className="text-sm text-navy/70">Name</dt>
            <dd className="mt-0.5 font-semibold text-midnight">
              {member.firstName} {member.lastName}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-navy/70">Email</dt>
            <dd className="mt-0.5 font-semibold text-midnight">
              {member.email}
            </dd>
          </div>
          {plan && (
            <div>
              <dt className="text-sm text-navy/70">Membership</dt>
              <dd className="mt-0.5 font-semibold text-midnight">
                {plan.name}
                {" · "}
                <Link
                  href="/member/membership"
                  className="font-medium text-gold-dark hover:underline"
                >
                  view details
                </Link>
              </dd>
            </div>
          )}
        </dl>

        <hr className="my-6 border-slate-100" />

        <PhoneForm currentPhone={member.phone} />
      </section>

      <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="font-serif text-xl text-midnight">Password</h2>
        <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-navy/90">
          To change your password, sign out and choose{" "}
          <span className="font-medium">Forgot Password?</span> on the sign-in
          page — we&rsquo;ll email you secure reset instructions.
        </p>
      </section>

      <p className="px-2 text-center text-xs leading-relaxed text-navy/70">
        PFW provides healthcare navigation and coordination. Clinical decisions
        remain with licensed healthcare professionals.
      </p>
    </div>
  );
}
