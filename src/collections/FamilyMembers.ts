import type { Access, CollectionConfig } from "payload";

import { isStaff } from "../access";
import type { Member, User } from "../payload-types";

/** Staff see everything; members are constrained to their own family profiles. */
const ownerOrStaff: Access = ({ req }) => {
  if (isStaff({ req })) return true;
  const user = req.user as Member | User | null;
  if (user && user.collection === "members") {
    return { member: { equals: user.id } };
  }
  return false;
};

/** A family member profile belonging to a member (individual profiles per family member). */
export const FamilyMembers: CollectionConfig = {
  slug: "family-members",
  admin: {
    useAsTitle: "firstName",
    description: "Family member profiles added by PFW staff on a member's behalf.",
  },
  timestamps: true,
  access: {
    create: ({ req }) => {
      if (isStaff({ req })) return true;
      const user = req.user as Member | User | null;
      // Members may only add family members to their own profile.
      return Boolean(
        user &&
          user.collection === "members" &&
          String((req.data as { member?: unknown })?.member ?? "") === String(user.id),
      );
    },
    delete: ownerOrStaff,
    read: ownerOrStaff,
    update: ownerOrStaff,
  },
  fields: [
    {
      name: "member",
      type: "relationship",
      relationTo: "members",
      label: "Belongs to member",
      required: true,
      index: true,
    },
    {
      name: "firstName",
      type: "text",
      label: "First name",
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      label: "Last name",
    },
    {
      name: "relationship",
      type: "select",
      label: "Relationship",
      options: [
        { label: "Spouse", value: "spouse" },
        { label: "Partner", value: "partner" },
        { label: "Son", value: "son" },
        { label: "Daughter", value: "daughter" },
        { label: "Mother", value: "mother" },
        { label: "Father", value: "father" },
        { label: "Other", value: "other" },
      ],
    },
    {
      name: "dateOfBirth",
      type: "date",
      label: "Date of birth",
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
      label: "Notes",
      admin: {
        description: "Optional context shared with the PFW care team.",
      },
    },
  ],
};
