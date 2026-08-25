"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/medical-specialties", label: "Department" },
  { href: "/membership", label: "Wellness" },
  { href: "/destinations", label: "Destination" },
  { href: "/medical-journey", label: "Medical Journey" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-midnight shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center" aria-label="Patient First Worldwide home">
            <Image
              src="/logo.png"
              alt="Patient First Worldwide logo"
              width={150}
              height={50}
              className="h-9 sm:h-10 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-gold ${
                  pathname === link.href ? "text-gold" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-5 py-2.5 rounded-full font-semibold transition"
            >
              Speak with Our Team
            </Link>
          </nav>

          <button
            type="button"
            className="lg:hidden shrink-0 flex items-center justify-center text-[#fCDA7B] bg-white/10 border border-white/15 rounded-xl p-2.5 hover:bg-white/15 transition"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-midnight border-t border-white/10">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-3 rounded-lg text-sm font-medium transition ${
                  pathname === link.href
                    ? "bg-white/10 text-gold"
                    : "text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block mt-3 text-center bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-5 py-3 rounded-full font-semibold transition"
            >
              Speak with Our Team
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
