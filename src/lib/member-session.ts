import { headers } from "next/headers";
import { createPayloadRequest, getPayload } from "payload";

import configPromise from "@payload-config";

import type { Member, MembershipPlan } from "@/payload-types";
import {
  evaluatePortalAccess,
  type MemberLike,
  type PortalGate,
} from "@/lib/membership";

export const MEMBER_COOKIE_NAME = "payload-token"; // Payload's default session cookie

/**
 * Resolve the signed-in member from the HTTP-only session cookie.
 *
 * Uses Payload's own auth strategies (createPayloadRequest) so session
 * handling stays in one place. Returns null for staff sessions and
 * visitors — only portal members are relevant here.
 */
export async function getMemberSession(): Promise<Member | null> {
  const h = await headers();
  const host = h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? "http";
  const request = new Request(`${proto}://${host}/member-session`, {
    headers: h,
  });

  try {
    const req = await createPayloadRequest({
      config: configPromise,
      request,
    });
    const user = req.user;
    if (user && (user as { collection?: string }).collection === "members") {
      return user as unknown as Member;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Full server-side gate used by every protected /member page.
 *
 * The membership query runs with overrideAccess: false and an explicit
 * user context, so Payload's ownership-based access rules always apply —
 * the Local API would otherwise bypass access control.
 */
export async function getPortalGate(): Promise<
  { kind: "unauthenticated" } | { kind: "gate"; gate: PortalGate }
> {
  const member = await getMemberSession();
  if (!member) return { kind: "unauthenticated" };

  const payload = await getPayload({ config: configPromise });

  // overrideAccess: false + user → collection-level constraints enforced.
  const membershipsRes = await payload.find({
    collection: "memberships",
    where: { member: { equals: member.id } },
    depth: 1,
    limit: 100,
    sort: "-startDate",
    overrideAccess: false,
    user: member,
  });

  const memberLike: MemberLike = {
    id: member.id,
    email: member.email,
    firstName: member.firstName,
    lastName: member.lastName,
    accountStatus: member.accountStatus as MemberLike["accountStatus"],
  };

  const gate = evaluatePortalAccess(
    memberLike,
    membershipsRes.docs,
    (membership) =>
      typeof membership.plan === "string"
        ? null
        : (membership.plan as MembershipPlan | null),
  );

  return { kind: "gate", gate };
}
