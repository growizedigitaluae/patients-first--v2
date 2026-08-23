"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button, toast } from "@payloadcms/ui";
import { requests } from "@payloadcms/ui/shared";

export function ActivateMembershipButton({ id }: { id: number | string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  const activate = async () => {
    if (
      !window.confirm(
        "Activate this membership? The member will immediately gain portal access.",
      )
    ) {
      return;
    }
    setBusy(true);
    try {
      const res = await requests.post(
        `/api/memberships/${String(id)}/activate`,
      );
      let message = "Something went wrong. Please try again.";
      try {
        const body = await res.json();
        if (res.ok) {
          toast.success(body.message ?? "Membership activated.");
          router.refresh();
          return;
        }
        message =
          body.errors?.[0]?.message ?? body.message ?? message;
      } catch {
        /* keep default message */
      }
      toast.error(message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Button onClick={() => void activate()} disabled={busy} size="medium">
      Activate Membership
    </Button>
  );
}

export default ActivateMembershipButton;
