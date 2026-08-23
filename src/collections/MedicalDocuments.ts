import type { Access, CollectionConfig, Where } from "payload";

import { isStaff, staffOnlyFieldAccess } from "../access";
import type { Member, User } from "../payload-types";

/** Staff see everything; members see only their own ACTIVE documents
 * (archived records stay staff-only history, enforced server-side). */
const ownerOrStaff: Access = ({ req }) => {
  if (isStaff({ req })) return true;
  const user = req.user as Member | User | null;
  if (user && user.collection === "members") {
    const where: Where = {
      and: [
        { member: { equals: user.id } },
        { status: { equals: "active" } },
      ],
    };
    return where;
  }
  return false;
};

/**
 * An entry in a member's Medical Document Index (part of their Health
 * Passport). This phase is metadata/index only — physical file storage is
 * designed separately in Phase 2B-2. Managed by PFW staff; members read
 * their own records. `internalNotes` is never returned to members.
 */
export const MedicalDocuments: CollectionConfig = {
  slug: "medical-documents",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["member", "title", "documentType", "date", "status"],
    description:
      "A member's healthcare document index. Members see their own documents in their Health Passport.",
  },
  timestamps: true,
  access: {
    // Only PFW staff manage documents — members read-only, own records.
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
      label: "Document Title",
      required: true,
    },
    {
      name: "documentType",
      type: "select",
      label: "Document Type",
      options: [
        { label: "Laboratory report", value: "laboratory" },
        { label: "Imaging", value: "imaging" },
        { label: "Specialist report", value: "specialist-report" },
        { label: "Consultation", value: "consultation" },
        { label: "Discharge summary", value: "discharge" },
        { label: "Other", value: "other" },
      ],
    },
    {
      name: "date",
      type: "date",
      label: "Document Date",
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d MMM yyyy",
        },
      },
    },
    {
      name: "providerRecord",
      type: "relationship",
      relationTo: "providers",
      label: "Provider",
      admin: {
        description:
          "Optionally link to an entry in the member's Provider Directory.",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      admin: {
        description: "Short, factual summary of what this document covers.",
      },
    },
    {
      name: "memberNotes",
      type: "textarea",
      label: "Member Notes",
      admin: {
        description:
          "Visible to the member in their Health Passport. Keep it patient-friendly.",
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
          "Archived documents are kept as history but hidden from the member's document list.",
      },
    },
  ],
};
