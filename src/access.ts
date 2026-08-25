import type { Access, FieldAccess } from "payload";

type ReqLike = { req?: { user?: unknown } };

type SafeUser = {
  id?: number | string;
  collection?: string;
  role?: string;
};

function asSafeUser(user: unknown): SafeUser | null {
  if (!user || typeof user !== "object") return null;
  const u = user as Record<string, unknown>;
  return {
    id: typeof u.id === "number" || typeof u.id === "string" ? u.id : undefined,
    collection: typeof u.collection === "string" ? u.collection : undefined,
    role: typeof u.role === "string" ? u.role : undefined,
  };
}

/** Any authenticated PFW staff user (Payload Admin, `users` collection). */
export const isStaff = ({ req }: ReqLike): boolean =>
  asSafeUser(req?.user)?.collection === "users";

/** Staff user with the Admin role. */
export const isAdmin = ({ req }: ReqLike): boolean => {
  const user = asSafeUser(req?.user);
  return user?.collection === "users" && user.role === "admin";
};

/** Staff user with the Admin or Editor role — manages website/content data. */
export const isAdminOrEditor = ({ req }: ReqLike): boolean => {
  const user = asSafeUser(req?.user);
  return (
    user?.collection === "users" &&
    (user.role === "admin" || user.role === "editor")
  );
};

/** Any authenticated user — used for shared catalogue data (plans, features). */
export const isAnyAuthenticatedUser: Access = ({ req }) => Boolean(req.user);

/** Field access: only PFW staff may read/write a field. */
export const staffOnlyFieldAccess: FieldAccess = ({ req }) => isStaff({ req });

/**
 * True when the requesting user is the given member document's owner.
 * Used inside access functions that receive an already-fetched doc.
 */