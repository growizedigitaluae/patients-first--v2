import type { CollectionConfig } from "payload";

import { isAdmin, isAdminOrEditor, isAnyAuthenticatedUser } from "../access";

/** A PFW Private Health Management membership plan (Essential / Premier / Prestige). */
export const MembershipPlans: CollectionConfig = {
  slug: "membership-plans",
  admin: {
    useAsTitle: "name",
    description:
      "PFW membership packages shown in the Member Portal. Values for each feature row support quantities and descriptions (e.g. '2/year', 'Add-on').",
  },
  defaultSort: "displayOrder",
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
      label: "Plan name",
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
      name: "shortDescription",
      type: "textarea",
      label: "Short description",
    },
    {
      name: "longDescription",
      type: "textarea",
      label: "Long description",
    },
    {
      name: "annualStartingPrice",
      type: "number",
      label: "Annual starting price",
      required: true,
      min: 0,
    },
    {
      name: "currency",
      type: "select",
      label: "Currency",
      defaultValue: "AED",
      options: [{ label: "AED", value: "AED" }],
    },
    {
      name: "serviceLevel",
      type: "text",
      label: "Service level",
      admin: {
        description: "e.g. 'Dedicated PFW Care Coordinator'.",
      },
    },
    {
      name: "coverageType",
      type: "text",
      label: "Coverage type",
      admin: {
        description: "e.g. 'UAE', 'UAE + international', 'UAE + worldwide options'.",
      },
    },
    {
      name: "active",
      type: "checkbox",
      label: "Active",
      defaultValue: true,
    },
    {
      name: "displayOrder",
      type: "number",
      label: "Display order",
      defaultValue: 0,
    },
    {
      name: "features",
      type: "array",
      label: "Features",
      fields: [
        {
          name: "feature",
          type: "relationship",
          relationTo: "membership-features",
          required: true,
        },
        {
          name: "value",
          type: "text",
          label: "Value",
          admin: {
            description:
              "Plan-specific value, e.g. 'Included', '1/year', 'Up to 4/year', 'Quarterly', 'Personalised frequency', 'Add-on'. Leave empty when not included.",
          },
        },
      ],
    },
  ],
};
