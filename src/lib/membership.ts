import type { Membership, MembershipPlan } from "@/payload-types";

/**
 * Shared, pure membership-state logic.
 *
 * - A stored status of "active" is only honoured while today is within
 *   startDate..endDate. Expired memberships stay in the database as
 *   history — they are simply treated as inactive at read time.
 * - A member may hold many memberships over time (history); at most one
 *   counts as the current one.
 */

export type AccountStatus = "invited" | "active" | "suspended";

export type MembershipStatus =
  | "pending"
  | "active"
  | "expired"
  | "suspended"
  | "cancelled";

/** Friendly portal states — deliberately free of technical terminology. */
export type PortalAccessState =
  | "active" // full member access
  | "expired" // friendly renewal prompt
  | "not-ready"; // being prepared / contact PFW (no membership, pending,
  // suspended, cancelled, invited or suspended account)

export type PortalGate =
  | {
      state: "active";
      member: MemberLike;
      membership: Membership;
      plan: MembershipPlan | null;
    }
  | { state: "expired"; membership: Membership | null }
  | {
      state: "not-ready";
      /**
       * Presentation hint only (does not affect access):
       * - "preparing": access is being set up (invited account, pending
       *   membership or no membership yet)
       * - "blocked": PFW needs to be contacted (suspended account or a
       *   suspended/cancelled membership)
       */
      reason?: "preparing" | "blocked";
    };

export type MemberLike = {
  id: number | string;
  email: string;
  firstName: string;
  lastName: string;
  accountStatus?: AccountStatus;
};

function toTime(value: Date | string | null | undefined): number | null {
  if (!value) return null;
  const t = new Date(value).getTime();
  return Number.isNaN(t) ? null : t;
}

export type CurrentMembership = {
  membership: Membership | null;
  /** Effective status after applying the date-window rules. */
  effectiveStatus: MembershipStatus | "none";
};

/**
 * Decide which membership is "current" for a member and what its
 * effective status is today. `memberships` may contain the member's full
 * history in any order.
 */
export function resolveCurrentMembership(
  memberships: Membership[],
  now: Date = new Date(),
): CurrentMembership {
  const nowT = now.getTime();

  const storedActive = memberships.filter((m) => m.status === "active");
  const startedAndOngoing = storedActive.filter((m) => {
    const start = toTime(m.startDate);
    const end = toTime(m.endDate);
    return (start === null || start <= nowT) && (end === null || end >= nowT);
  });
  if (startedAndOngoing.length > 0) {
    // Newest window wins if data ever overlaps.
    const current = [...startedAndOngoing].sort(
      (a, b) => (toTime(b.startDate) ?? 0) - (toTime(a.startDate) ?? 0),
    )[0];
    return { membership: current, effectiveStatus: "active" };
  }

  const ended = storedActive.filter((m) => {
    const end = toTime(m.endDate);
    return end !== null && end < nowT;
  });
  if (ended.length > 0) {
    const mostRecent = [...ended].sort(
      (a, b) => (toTime(b.endDate) ?? 0) - (toTime(a.endDate) ?? 0),
    )[0];
    return { membership: mostRecent, effectiveStatus: "expired" };
  }

  // Future-dated activations behave like pending until the start date.
  const futureDated = storedActive.filter((m) => {
    const start = toTime(m.startDate);
    return start !== null && start > nowT;
  });

  const precedence: MembershipStatus[] = [
    "suspended",
    "pending",
    "expired",
    "cancelled",
  ];
  for (const status of precedence) {
    const match = memberships.find((m) => m.status === status);
    if (match) return { membership: match, effectiveStatus: status };
  }

  if (futureDated.length > 0) {
    return { membership: futureDated[0], effectiveStatus: "pending" };
  }

  return { membership: null, effectiveStatus: "none" };
}

/**
 * Full server-side gate for the Member Portal.
 * Combines account status + membership status + date window.
 */
export function evaluatePortalAccess(
  member: MemberLike,
  memberships: Membership[],
  planOf: (membership: Membership) => MembershipPlan | null,
  now: Date = new Date(),
): PortalGate {
  // Account must be activated by PFW staff.
  if ((member.accountStatus ?? "invited") !== "active") {
    return {
      state: "not-ready",
      reason: member.accountStatus === "suspended" ? "blocked" : "preparing",
    };
  }

  const { membership, effectiveStatus } = resolveCurrentMembership(
    memberships,
    now,
  );

  if (effectiveStatus === "active" && membership) {
    return {
      state: "active",
      member,
      membership,
      plan: planOf(membership),
    };
  }

  if (effectiveStatus === "expired") {
    return { state: "expired", membership };
  }

  return {
    state: "not-ready",
    reason:
      effectiveStatus === "suspended" || effectiveStatus === "cancelled"
        ? "blocked"
        : "preparing",
  };
}
