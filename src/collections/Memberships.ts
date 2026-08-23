import type { CollectionConfig } from "payload";

import {
  isAdmin,
  isStaff,
  staffOnlyFieldAccess,
} from "../access";
import { activateMembership } from "../endpoints/activateMembership";
import type { Member, User } from "../payload-types";

/** A member's subscription to a plan. Payment is handled offline for now —
 * the model intentionally carries no payment data so a provider can be
 * added later without restructuring. */
export const Memberships: CollectionConfig = {
  slug: "memberships",
  admin: {
    useAsTitle: "id",
    defaultColumns: ["member", "plan", "status", "startDate", "endDate"],
    description:
      "A member's subscription to a PFW plan. Use “Activate Membership” once the dates are correct.",
    components: {
      edit: {
        beforeDocumentControls: [
          "@/components/admin/ActivateMembershipButton",
        ],
      },
    },
  },
  timestamps: true,
  endpoints: [
    // Staff action behind the "Activate Membership" button.
    // Mounted at POST /api/memberships/:id/activate
    {
      path: "/:id/activate",
      method: "post",
      handler: activateMembership,
    },
  ],
  access: {
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
    read: ({ req }) => {
      if (isStaff({ req })) return true;
      const user = req.user as Member | User | null;
      if (user && user.collection === "members") {
        // Members may only see their own membership.
        return { member: { equals: user.id } };
      }
      return false;
    },
  },
  fields: [
    {
      name: "member",
      type: "relationship",
      relationTo: "members",
      label: "Member",
      required: true,
      index: true,
    },
    {
      name: "plan",
      type: "relationship",
      relationTo: "membership-plans",
      label: "Membership Plan",
      required: true,
    },
    {
      name: "status",
      type: "select",
      label: "Membership Status",
      required: true,
      defaultValue: "pending",
      options: [
        { label: "Pending", value: "pending" },
        { label: "Active", value: "active" },
        { label: "Expired", value: "expired" },
        { label: "Suspended", value: "suspended" },
        { label: "Cancelled", value: "cancelled" },
      ],
      admin: {
        description:
          "Past its end date, a membership is treated as inactive automatically — no need to edit it here.",
      },
    },
    {
      name: "startDate",
      type: "date",
      label: "Start Date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d MMM yyyy",
        },
      },
    },
    {
      name: "endDate",
      type: "date",
      label: "End Date",
      required: true,
      validate: (value: unknown, { siblingData }: {
        siblingData?: { startDate?: unknown };
      }) => {
        if (!value) return true;
        const end = new Date(String(value));
        const start = siblingData?.startDate
          ? new Date(String(siblingData.startDate))
          : null;
        if (start && end <= start) {
          return "The end date must be after the start date.";
        }
        return true;
      },
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d MMM yyyy",
        },
      },
    },
    {
      name: "notes",
      type: "textarea",
      label: "Internal notes",
      // Never exposed to members — staff only.
      access: {
        read: staffOnlyFieldAccess,
        update: staffOnlyFieldAccess,
        create: staffOnlyFieldAccess,
      },
      admin: {
        description: "Internal notes. Never shown to members.",
      },
    },
  ],
};
