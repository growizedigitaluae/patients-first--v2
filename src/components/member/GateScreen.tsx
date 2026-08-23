import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";

import { site } from "@/lib/site";

const messages = {
  "not-ready": {
    title: "Almost ready",
    body: "Your PFW Member Portal access is currently being prepared. Our team will contact you once your membership access is activated.",
  },
  blocked: {
    title: "We're here to help",
    body: "There is a question around your membership that our team needs to resolve with you personally. Please contact PFW and we will gladly assist.",
  },
  expired: {
    title: "Membership expired",
    body: "Your PFW membership has expired. Please contact PFW to renew your membership.",
  },
} as const;

export type GateScreenVariant = keyof typeof messages;

/** Map a portal gate to the friendliest matching gate screen. */
export function gateScreenVariant(
  state: "active" | "expired" | "not-ready",
  reason?: "preparing" | "blocked",
): GateScreenVariant {
  if (state === "not-ready" && reason === "blocked") return "blocked";
  if (state === "expired") return "expired";
  return "not-ready";
}

export function GateScreen({ variant }: { variant: GateScreenVariant }) {
  const copy = messages[variant];

  return (
    <main className="flex flex-1 items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-3xl bg-white border border-slate-100 shadow-sm p-8 text-center space-y-5">
        <p className="text-gold-dark font-semibold tracking-[0.2em] uppercase text-xs">
          PFW Private Health Management
        </p>
        <h1 className="font-serif text-2xl text-midnight">{copy.title}</h1>
        <p className="text-navy leading-relaxed text-[15px]">{copy.body}</p>

        <div className="pt-2 space-y-3">
          <p className="text-sm text-navy font-medium">Contact PFW</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-midnight hover:border-gold transition"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-midnight hover:border-gold transition"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-midnight hover:border-gold transition"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Email
            </a>
          </div>
        </div>

        <Link
          href="/member"
          className="block pt-2 text-sm text-gold-dark font-medium hover:underline"
        >
          Return to the sign-in page
        </Link>
      </div>
    </main>
  );
}
