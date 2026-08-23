"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/member/dashboard", label: "Home" },
  { href: "/member/my-care", label: "My Care" },
  { href: "/member/health-passport", label: "Health Passport" },
  { href: "/member/family", label: "Family" },
  { href: "/member/profile", label: "Profile" },
];

export function PortalNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Member portal"
      className="overflow-x-auto scrollbar-none"
    >
      <ul className="flex min-w-max items-center gap-2 px-4 sm:min-w-0 sm:flex-wrap sm:justify-center">
        {items.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`inline-block whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-white/10 text-gold"
                    : "text-white/85 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
