import type { Access, CollectionConfig } from "payload";

import { isStaff, staffOnlyFieldAccess } from "../access";
import type { Member, User } from "../payload-types";

/** Staff see everything; members are constrained to their own roadmap. */
const ownerOrStaff: Access = ({ req }) => {
  if (isStaff({ req })) return true;
  const user = req.user as Member | User | null;
  if (user && user.collection === "members") {
    return { member: { equals: user.id } };
  }
  return false;
};

/**
 * A member's healthcare roadmap — the coordination journey PFW is managing
 * for them, expressed as simple ordered steps. This represents PFW
 * coordination activities only; it is not clinical advice.
 */
export const HealthcareRoadmaps: CollectionConfig = {
  slug: "healthcare-roadmaps",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["member", "title", "status", "updatedAt"],
    description:
      "A member's personal healthcare roadmap. One roadmap per member keeps the portal view simple.",
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
        description: "Optional member-friendly context for the whole journey.",
      },
    },
    {
      name: "status",
      type: "select",
      label: "Status",
      defaultValue: "active",
      options: [
        { label: "Active", value: "active" },
        { label: "Archived", value: "archived" },
      ],
      admin: {
        description:
          "Archived roadmaps are kept as history but no longer highlighted.",
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
    {
      name: "steps",
      type: "array",
      label: "Steps",
      labels: { plural: "Steps", singular: "Step" },
      admin: {
        description:
          "Shown top-to-bottom in the portal exactly as ordered here (drag to reorder).",
      },
      fields: [
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
        },
        {
          name: "status",
          type: "select",
          label: "Status",
          required: true,
          defaultValue: "upcoming",
          options: [
            { label: "Upcoming", value: "upcoming" },
            { label: "Current", value: "current" },
            { label: "Completed", value: "completed" },
          ],
        },
        {
          name: "targetDate",
          type: "date",
          label: "Target date",
          admin: {
            date: {
              pickerAppearance: "dayOnly",
              displayFormat: "d MMM yyyy",
            },
          },
        },
      ],
    },
  ],
};
