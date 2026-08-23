import Image from "next/image";
import Link from "next/link";

import { signOut } from "@/app/(member)/member/actions";
import { GateScreen, gateScreenVariant } from "@/components/member/GateScreen";
import { PortalNav } from "@/components/member/PortalNav";
import { getPortalGate } from "@/lib/member-session";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "My Membership" };

export default async function PortalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const result = await getPortalGate();

  // The /member index handles friendly gating; protected pages require a
  // fully active membership. Unauthenticated visitors go to sign-in.
  if (result.kind === "unauthenticated") {
    return <GateScreen variant="not-ready" />;
  }
  const { gate } = result;
  if (gate.state !== "active") {
    return (
      <GateScreen
        variant={gateScreenVariant(
          gate.state,
          gate.state === "not-ready" ? gate.reason : undefined,
        )}
      />
    );
  }

  return (
    <>
      <header className="bg-midnight shadow-lg shadow-black/10">
        <div className="mx-auto max-w-3xl px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link
              href="/member/dashboard"
              aria-label="PFW Member Portal home"
              className="flex items-center"
            >
              <Image
                src="/logo.png"
                alt="Patient First Worldwide"
                width={150}
                height={50}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>
            <form action={signOut}>
              <button
                type="submit"
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-gold hover:text-gold"
              >
                Sign out
              </button>
            </form>
          </div>
          <div className="pb-3 pt-1">
            <PortalNav />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:py-10">
        {children}
      </main>

      <footer className="border-t border-navy/10 bg-ivory">
        <div className="mx-auto max-w-3xl px-4 py-6 text-center text-xs leading-relaxed text-navy/80">
          PFW Private Health Management · Care coordination, not medical
          treatment. Clinical decisions remain with licensed healthcare
          professionals.
          <br />
          Need help?{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-gold-dark hover:underline">
            Contact PFW
          </a>
        </div>
      </footer>
    </>
  );
}
