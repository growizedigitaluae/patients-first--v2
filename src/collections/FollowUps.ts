import type { Access, CollectionConfig } from "payload";

import { isStaff, staffOnlyFieldAccess } from "../access";
import type { Member, User } from "../payload-types";

/** Staff see everything; members are constrained to their own follow-ups. */
const ownerOrStaff: Access = ({ req }) => {
  if (isStaff({ req })) return true;
  const user = req.user as Member | User | null;
  if (user && user.collection === "members") {
    return { member: { equals: user.id } };
  }
  return false;
};

/**
 * A follow-up task PFW is tracking on a member's behalf
 * (e.g. reviewing results, booking the next step after a visit).
 * `internalNotes` is staff-only; `memberNotes` is what the member sees.
 */
export const FollowUps: CollectionConfig = {
  slug: "follow-ups",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["member", "title", "dueDate", "status"],
    description:
      "Follow-ups tracked by PFW coordinators. Members see their own follow-ups in the portal.",
  },
  timestamps: true,
  access: {
    create: isStaff,
    update: isStaff,
    delete: isStaff,
    read: ownerOrStaff,
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
      name: "title",
      type: "text",
      label: "Title",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      admin: {
        description: "Short, member-friendly summary of this follow-up.",
      },
    },
    {
      name: "dueDate",
      type: "date",
      label: "Due date",
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d MMM yyyy",
        },
      },
    },
    {
      name: "status",
      type: "select",
      label: "Status",
      required: true,
      defaultValue: "pending",
      options: [
        { label: "Pending", value: "pending" },
        { label: "In progress", value: "in_progress" },
        { label: "Completed", value: "completed" },
        { label: "Cancelled", value: "cancelled" },
      ],
    },
    {
      name: "relatedAppointment",
      type: "relationship",
      relationTo: "appointments",
      label: "Related appointment",
    },
    {
      name: "memberNotes",
      type: "textarea",
      label: "Notes for member",
      admin: {
        description:
          "Visible to the member in the portal. Keep it patient-friendly.",
      },
    },
    {
      name: "internalNotes",
      type: "textarea",
      label: "Internal notes",
      access: {
        read: staffOnlyFieldAccess,
        update: staffOnlyFieldAccess,
        create: staffOnlyFieldAccess,
      },
      admin: {
        description:
          "Internal PFW notes. Never shown to members or returned by member requests.",
      },
    },
  ],
};
