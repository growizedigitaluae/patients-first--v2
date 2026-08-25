import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { buildConfig } from "payload";

import { MembershipFeatures } from "./collections/MembershipFeatures";
import { MembershipPlans } from "./collections/MembershipPlans";
import { Users } from "./collections/Users";

export default buildConfig({
  admin: {
    // Only the `users` collection can sign in to the Admin Panel.
    // Members (patients) authenticate for the Member Portal only.
    user: Users.slug,
    meta: {
      titleSuffix: " — PFW Staff Admin",
      description: "PFW Private Health Management staff administration",
    },
  },
  collections: [
    Users,
    MembershipPlans,
    MembershipFeatures,
  ],
  endpoints: [],
  db: sqliteAdapter({
    push: true, // dev-friendly schema sync; no destructive migrations
    client: {
      url: process.env.DATABASE_URI ?? "file:./pfw-members.db",
    },
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  telemetry: false,
  typescript: {
    outputFile: "src/payload-types.ts",
  },
});