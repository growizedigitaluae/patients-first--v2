import { isAdmin } from "../access";

import type { PayloadRequest } from "payload";
import type { Membership } from "../payload-types";

function json(body: Record<string, unknown>, status: number): Response {
  return Response.json(body, { status });
}

/**
 * POST /api/memberships/:id/activate
 *
 * PFW staff action behind the "Activate Membership" admin button.
 * Validates that the membership is complete and intentional before
 * switching it on:
 *   - staff (Admin role) only
 *   - member + plan must be set
 *   - start date + end date must be set
 *   - end date must be after the start date
 */
export async function activateMembership(
  req: PayloadRequest,
): Promise<Response> {
  // Only PFW Admins may change membership status.
  if (!isAdmin({ req: req as unknown as { user?: unknown } })) {
    return json(
      {
        errors: [
          { message: "Only PFW admins can activate memberships." },
        ],
      },
      403,
    );
  }

  const id = req.routeParams?.id;
  if (!id || typeof id !== "string") {
    return json(
      { errors: [{ message: "Membership record not found." }] },
      404,
    );
  }

  const doc = (await req.payload.findByID({
    collection: "memberships",
    id,
    depth: 1,
    overrideAccess: true, // handler already enforces the admin-only rule above
    user: req.user,
  })) as Membership | null;

  if (!doc) {
    return json(
      { errors: [{ message: "Membership record not found." }] },
      404,
    );
  }

  if (!doc.member) {
    return json(
      {
        errors: [
          { message: "Choose a member for this membership before activating." },
        ],
      },
      422,
    );
  }

  if (!doc.plan) {
    return json(
      {
        errors: [
          {
            message:
              "Choose a membership plan (Essential, Premier or Prestige) before activating.",
          },
        ],
      },
      422,
    );
  }

  if (!doc.startDate) {
    return json(
      { errors: [{ message: "Add a start date before activating." }] },
      422,
    );
  }

  if (!doc.endDate) {
    return json(
      { errors: [{ message: "Add an end date before activating." }] },
      422,
    );
  }

  const start = new Date(doc.startDate).getTime();
  const end = new Date(doc.endDate).getTime();
  if (!(end > start)) {
    return json(
      { errors: [{ message: "The end date must be after the start date." }] },
      422,
    );
  }

  await req.payload.update({
    collection: "memberships",
    id,
    data: { status: "active" },
    overrideAccess: true,
    user: req.user,
  });

  return json(
    { message: "Membership activated. The member now has portal access." },
    200,
  );
}
