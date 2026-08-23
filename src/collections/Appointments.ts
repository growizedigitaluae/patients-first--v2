import type { Access, CollectionConfig } from "payload";

import { isStaff, staffOnlyFieldAccess } from "../access";
import type { Member, User } from "../payload-types";

/** Staff see everything; members are constrained to their own appointments. */
const ownerOrStaff: Access = ({ req }) => {
  if (isStaff({ req })) return true;
  const user = req.user as Member | User | null;
  if (user && user.collection === "members") {
    return { member: { equals: user.id } };
  }
  return false;
};

/**
 * An appointment coordinated by PFW for a member.
 * Managed by PFW staff in the Admin Panel; members read their own
 * appointments in the portal. `internalNotes` is never returned to members.
 */
export const Appointments: CollectionConfig = {
  slug: "appointments",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["member", "title", "date", "time", "status"],
    description:
      "Appointments arranged by PFW coordinators. Members see their own appointments in the portal.",
  },
  timestamps: true,
  access: {
    // Only PFW staff coordinate care — members read-only, own records.
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
      name: "provider",
      type: "text",
      label: "Provider",
      admin: {
        description: "e.g. the doctor or clinic name.",
      },
    },
    {
      name: "specialty",
      type: "text",
      label: "Specialty",
    },
    {
      name: "providerRecord",
      type: "relationship",
      relationTo: "providers",
      label: "Provider (directory)",
      admin: {
        description:
          "Optionally link this appointment to the member's Provider Directory entry. The plain-text provider above remains the member-facing source.",
      },
    },
    {
      name: "date",
      type: "date",
      label: "Date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d MMM yyyy",
        },
      },
    },
    {
      name: "time",
      type: "text",
      label: "Time",
      admin: {
        description: "e.g. 10:30 AM — stored as plain text to keep it simple.",
      },
    },
    {
      name: "location",
      type: "text",
      label: "Location",
    },
    {
      name: "status",
      type: "select",
      label: "Status",
      required: true,
      defaultValue: "scheduled",
      options: [
        { label: "Scheduled", value: "scheduled" },
        { label: "Confirmed", value: "confirmed" },
        { label: "Completed", value: "completed" },
        { label: "Cancelled", value: "cancelled" },
      ],
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
