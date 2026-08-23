import Image from "next/image";
import Link from "next/link";

import { LoginForm } from "@/components/member/LoginForm";

export const metadata = { title: "Sign in" };

export default async function MemberLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;

  return (
    <main className="flex flex-1 items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link
            href="/"
            aria-label="Patient First Worldwide website"
            className="inline-flex flex-col items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="Patient First Worldwide"
              width={150}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>
          <h1 className="mt-6 font-serif text-3xl text-midnight">
            Welcome back
          </h1>
          <p className="mt-2 text-[15px] text-navy leading-relaxed">
            Sign in to your PFW Private Health Management portal.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8">
          <LoginForm next={next} />
        </div>

        <p className="mt-8 text-center text-xs text-navy/80 leading-relaxed">
          Not a member yet, or need help signing in?{" "}
          <Link href="/contact" className="font-medium text-gold-dark hover:underline">
            Contact PFW
          </Link>
          .
        </p>

        <p className="mt-4 text-center text-[11px] uppercase tracking-wide text-navy/50">
          Preview environment — demo portal
        </p>
      </div>
    </main>
  );
}
