import type { CollectionConfig } from "payload";

import { isAdminOrEditor, isAdmin, isAnyAuthenticatedUser } from "../access";

/** One benefit row of the membership comparison (e.g. "Second Opinion Coordination"). */
export const MembershipFeatures: CollectionConfig = {
  slug: "membership-features",
  admin: {
    useAsTitle: "name",
    description: "Individual benefits shown in the membership comparison.",
  },
  access: {
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdmin,
    read: isAnyAuthenticatedUser, // visible to signed-in members in the portal
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Feature name",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "category",
      type: "text",
      label: "Category",
      admin: {
        description:
          "Optional grouping, e.g. Coordination, Planning, Family, Travel.",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "displayOrder",
      type: "number",
      label: "Display order",
      defaultValue: 0,
    },
  ],
};
