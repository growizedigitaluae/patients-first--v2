import type { Access, CollectionConfig } from "payload";

import { isStaff } from "../access";
import type { Member, User } from "../payload-types";

/** Staff see everything; members are constrained to their own providers. */
const ownerOrStaff: Access = ({ req }) => {
  if (isStaff({ req })) return true;
  const user = req.user as Member | User | null;
  if (user && user.collection === "members") {
    return { member: { equals: user.id } };
  }
  return false;
};

/**
 * A healthcare provider in a member's personal Provider Directory
 * (part of their Health Passport). Managed by PFW staff; members read
 * their own records in the portal.
 */
export const Providers: CollectionConfig = {
  slug: "providers",
  admin: {
    useAsTitle: "providerName",
    defaultColumns: ["member", "providerName", "specialty", "organisation", "status"],
    description:
      "Healthcare providers organised for a member. Members see their own providers in their Health Passport.",
  },
  timestamps: true,
  access: {
    // Only PFW staff manage the directory — members read-only, own records.
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
      name: "providerName",
      type: "text",
      label: "Provider name",
      required: true,
    },
    {
      name: "specialty",
      type: "text",
      label: "Specialty",
    },
    {
      name: "organisation",
      type: "text",
      label: "Organisation",
    },
    {
      name: "location",
      type: "text",
      label: "Location",
    },
    {
      name: "phone",
      type: "text",
      label: "Phone",
    },
    {
      name: "email",
      type: "email",
      label: "Email",
    },
    {
      name: "notes",
      type: "textarea",
      label: "Notes",
      admin: {
        description:
          "Visible to the member in their Health Passport. Keep it patient-friendly.",
      },
    },
    {
      name: "status",
      type: "select",
      label: "Status",
      required: true,
      defaultValue: "active",
      options: [
        { label: "Active", value: "active" },
        { label: "Archived", value: "archived" },
      ],
      admin: {
        description:
          "Archived providers are kept as history but hidden from the member's directory.",
      },
    },
  ],
};
