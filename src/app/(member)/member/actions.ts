"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getPayload } from "payload";

import configPromise from "@payload-config";
import type { Member } from "@/payload-types";
import { MEMBER_COOKIE_NAME, getMemberSession } from "@/lib/member-session";

export type AuthFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}

async function setMemberSessionCookie(token: string, exp?: number) {
  const cookieStore = await cookies();
  cookieStore.set({
    name: MEMBER_COOKIE_NAME,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: isProduction(),
    path: "/",
    ...(exp ? { expires: new Date(exp * 1000) } : {}),
  });
}

export async function signIn(
  _prev: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "");

  if (!email || !password) {
    return {
      status: "error",
      message: "Please enter your email address and password.",
    };
  }

  const payload = await getPayload({ config: configPromise });

  let token: string | undefined;
  let exp: number | undefined;
  try {
    const result = await payload.login({
      collection: "members",
      data: { email, password },
    });
    token = result.token;
    exp = result.exp;
  } catch {
    return {
      status: "error",
      message: "That email or password didn't match our records. Please try again.",
    };
  }

  if (!token) {
    return {
      status: "error",
      message: "That email or password didn't match our records. Please try again.",
    };
  }

  await setMemberSessionCookie(token, exp);

  const safeNext =
    next.startsWith("/member/") && !next.startsWith("/member/login")
      ? next
      : "/member/dashboard";
  redirect(safeNext);
}

export async function signOut(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(MEMBER_COOKIE_NAME);
  redirect("/member");
}

export async function requestPasswordReset(
  _prev: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const email = String(formData.get("email") ?? "").trim();

  if (!email) {
    return {
      status: "error",
      message: "Please enter the email address on your membership.",
    };
  }

  const payload = await getPayload({ config: configPromise });

  try {
    await payload.forgotPassword({
      collection: "members",
      data: { email },
      // Never reveal whether an account exists.
    });
  } catch {
    // Swallowed deliberately — see the success message below.
  }

  return {
    status: "success",
    message:
      "If that email is on file, we've sent reset instructions. Please check your inbox (and spam folder).",
  };
}

export async function resetMemberPassword(
  _prev: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const token = String(formData.get("token") ?? "");
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirmPassword") ?? "");

  if (!token) {
    return {
      status: "error",
      message: "This reset link isn't valid anymore. Please request a new one.",
    };
  }
  if (password.length < 8) {
    return {
      status: "error",
      message: "Please choose a password with at least 8 characters.",
    };
  }
  if (password !== confirm) {
    return {
      status: "error",
      message: "The two passwords don't match. Please try again.",
    };
  }

  const payload = await getPayload({ config: configPromise });

  try {
    await payload.resetPassword({
      collection: "members",
      data: { token, password },
      overrideAccess: false,
    });
  } catch {
    return {
      status: "error",
      message:
        "This reset link isn't valid anymore. Please request a new one from the sign-in page.",
    };
  }

  return {
    status: "success",
    message: "Your password has been updated. You can sign in now.",
  };
}

export async function updateContactDetails(
  _prev: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const phone = String(formData.get("phone") ?? "").trim();

  const member: Member | null = await getMemberSession();
  if (!member) {
    return { status: "error", message: "Please sign in again to continue." };
  }

  const payload = await getPayload({ config: configPromise });

  try {
    // overrideAccess: false + user → members may only update their own record.
    await payload.update({
      collection: "members",
      id: member.id,
      data: { phone: phone || undefined },
      overrideAccess: false,
      user: member,
    });
  } catch {
    return {
      status: "error",
      message: "We couldn't save your changes. Please try again.",
    };
  }

  revalidatePath("/member/profile");
  revalidatePath("/member/dashboard");

  return { status: "success", message: "Your contact details have been saved." };
}
