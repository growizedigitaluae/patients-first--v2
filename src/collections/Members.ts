import type { CollectionConfig } from "payload";

import { isAdmin, isStaff, staffOnlyFieldAccess } from "@/access";

/**
 * Patient members of PFW Private Health Management.
 *
 * Account status (invited / active / suspended) is separate from
 * Membership status (pending / active / expired / suspended / cancelled).
 *
 * Members authenticate for the Member Portal (/member) only — they can
 * never access the Payload Admin Panel (`access.admin` returns false,
 * and the admin panel authenticates against the `users` collection).
 * Accounts are created by PFW staff; there is no public self-signup.
 */
export const Members: CollectionConfig = {
  slug: "members",
  auth: {
    tokenExpiration: 60 * 60 * 24 * 7, // one week per session
  },
  admin: {
    useAsTitle: "email",
    defaultColumns: ["email", "firstName", "lastName", "accountStatus"],
    description: "Members of the PFW Private Health Management portal.",
  },
  access: {
    // Members must never reach the Payload Admin Panel.
    admin: () => false,
    create: isStaff,
    delete: isAdmin,
    read: ({ req }) => {
      if (isStaff({ req })) return true;
      const user = req.user;
      if (user?.collection === "members") {
        // Members may only ever see their own record.
        return { id: { equals: user.id } };
      }
      return false;
    },
    update: ({ req, id }) => {
      if (isStaff({ req })) return true;
      const user = req.user;
      if (user?.collection === "members" && String(user.id) === String(id)) {
        return true;
      }
      return false;
    },
  },
  fields: [
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
      required: true,
    },
    {
      name: "phone",
      type: "text",
      label: "Phone",
    },
    {
      name: "accountStatus",
      type: "select",
      label: "Account Status",
      required: true,
      defaultValue: "invited",
      options: [
        { label: "Invited", value: "invited" },
        { label: "Active", value: "active" },
        { label: "Suspended", value: "suspended" },
      ],
      access: {
        // Only PFW staff may change account status — never the member.
        update: staffOnlyFieldAccess,
      },
      admin: {
        position: "sidebar",
        description:
          "Invited: account created, portal not activated yet. Active: member may sign in. Suspended: portal access blocked.",
      },
    },
  ],
};
