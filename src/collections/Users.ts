import type { CollectionConfig } from "payload";

import { isAdmin, isAdminOrEditor, isStaff } from "../access";

/**
 * PFW staff accounts. These are the only users who can sign in to the
 * Payload Admin Panel (see `admin.user` in payload.config.ts).
 *
 * - Admin: full CMS and member management.
 * - Editor: manages approved website/content information.
 */
export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    description:
      "PFW staff accounts. Admins manage everything; Editors manage approved website content.",
  },
  access: {
    // Only staff roles may use the Payload Admin Panel.
    admin: isAdminOrEditor,
    create: isAdmin,
    delete: isAdmin,
    read: isStaff,
    update: ({ req, id }) =>
      isAdmin({ req }) ||
      (req.user?.collection === "users" &&
        (req.user as unknown as { role?: string }).role === "editor" &&
        String(req.user.id) === String(id)),
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Full name",
      saveToJWT: true,
    },
    {
      name: "role",
      type: "select",
      label: "Role",
      required: true,
      defaultValue: "editor",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Editor", value: "editor" },
      ],
      saveToJWT: true,
    },
  ],
};
