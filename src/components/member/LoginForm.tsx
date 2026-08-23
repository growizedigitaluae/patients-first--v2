"use client";

import { useActionState } from "react";
import Link from "next/link";

import {
  signIn,
  type AuthFormState,
} from "@/app/(member)/member/actions";

const initialState: AuthFormState = { status: "idle" };

export function LoginForm({ next }: { next?: string }) {
  const [state, formAction, isPending] = useActionState(signIn, initialState);

  return (
    <form action={formAction} className="space-y-5" noValidate={false}>
      <input type="hidden" name="next" value={next ?? ""} />

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-midnight"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-xl border border-navy/20 bg-white px-4 py-3.5 text-[16px] text-navy placeholder:text-slate-400 focus:border-gold focus:outline-none transition"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-1.5 block text-sm font-medium text-midnight"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          placeholder="Your password"
          className="w-full rounded-xl border border-navy/20 bg-white px-4 py-3.5 text-[16px] text-navy placeholder:text-slate-400 focus:border-gold focus:outline-none transition"
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
        {isPending ? "Signing you in…" : "Sign In"}
      </button>

      <p className="text-center text-sm">
        <Link
          href="/member/forgot-password"
          className="font-medium text-gold-dark hover:underline"
        >
          Forgot Password?
        </Link>
      </p>
    </form>
  );
}
