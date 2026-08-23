"use client";

import { useActionState } from "react";

import {
  updateContactDetails,
  type AuthFormState,
} from "@/app/(member)/member/actions";

const initialState: AuthFormState = { status: "idle" };

export function PhoneForm({ currentPhone }: { currentPhone?: string | null }) {
  const [state, formAction, isPending] = useActionState(
    updateContactDetails,
    initialState,
  );

  return (
    <form action={formAction} className="mt-4 space-y-3">
      <label
        htmlFor="phone"
        className="block text-sm font-medium text-midnight"
      >
        Phone
      </label>
      <input
        id="phone"
        name="phone"
        type="tel"
        autoComplete="tel"
        defaultValue={currentPhone ?? ""}
        placeholder="e.g. 50 123 4567"
        className="w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-[16px] text-navy placeholder:text-slate-400 focus:border-gold focus:outline-none transition sm:max-w-xs"
      />
      {state.status === "success" && state.message && (
        <p role="status" className="text-sm font-medium text-green-700">
          {state.message}
        </p>
      )}
      {state.status === "error" && state.message && (
        <p role="alert" className="text-sm text-red-600">
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="block rounded-full bg-midnight px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {isPending ? "Saving…" : "Save changes"}
      </button>
    </form>
  );
}
