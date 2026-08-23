"use client";

import { useActionState } from "react";
import Link from "next/link";

import {
  requestPasswordReset,
  resetMemberPassword,
  type AuthFormState,
} from "@/app/(member)/member/actions";

const initialState: AuthFormState = { status: "idle" };

const inputClass =
  "w-full rounded-xl border border-navy/20 bg-white px-4 py-3.5 text-[16px] text-navy placeholder:text-slate-400 focus:border-gold focus:outline-none transition";
const labelClass = "mb-1.5 block text-sm font-medium text-midnight";

export function ForgotPasswordForm() {
  const [state, formAction, isPending] = useActionState(
    requestPasswordReset,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="space-y-5 text-center">
        <p className="text-navy leading-relaxed">{state.message}</p>
        <Link
          href="/member/login"
          className="inline-block font-medium text-gold-dark hover:underline"
        >
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="text-sm text-red-600">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] py-4 font-semibold text-royal shadow-lg transition hover:opacity-95 disabled:opacity-60"
      >
        {isPending ? "Sending…" : "Send Reset Instructions"}
      </button>

      <p className="text-center text-sm">
        <Link
          href="/member/login"
          className="font-medium text-gold-dark hover:underline"
        >
          Back to sign in
        </Link>
      </p>
    </form>
  );
}

export function ResetPasswordForm({ token }: { token: string }) {
  const [state, formAction, isPending] = useActionState(
    resetMemberPassword,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="space-y-5 text-center">
        <p className="text-navy leading-relaxed">{state.message}</p>
        <Link
          href="/member/login"
          className="inline-block rounded-full bg-midnight px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
        >
          Go to sign in
        </Link>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="token" value={token} />

      <div>
        <label htmlFor="password" className={labelClass}>
          New password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          placeholder="At least 8 characters"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className={labelClass}>
          Confirm new password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          placeholder="Repeat your new password"
          className={inputClass}
        />
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="text-sm text-red-600">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] py-4 font-semibold text-royal shadow-lg transition hover:opacity-95 disabled:opacity-60"
      >
        {isPending ? "Updating…" : "Update Password"}
      </button>

      <p className="text-center text-sm">
        <Link
          href="/member/login"
          className="font-medium text-gold-dark hover:underline"
        >
          Back to sign in
        </Link>
      </p>
    </form>
  );
}
