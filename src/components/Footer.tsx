import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { site } from "@/lib/site";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/medical-journey", label: "Medical Journey" },
  { href: "/guides", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const trustLinks = [
  { href: "/faq", label: "Privacy Commitment" },
  { href: "/destinations", label: "Partner Hospitals" },
  { href: "/medical-specialties", label: "Departments" },
  { href: "/membership", label: "Membership" },
];

export default function Footer() {
  return (
    <footer className="bg-midnight text-slate-300">
      {/* MAIN FOOTER */}
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.85fr_1.15fr_0.85fr] lg:gap-x-14">

          {/* BRAND COLUMN */}
          <div className="min-w-0">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/logo-gold.png"
                alt="Patients First Worldwide logo"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="max-w-[290px] text-justify text-xs leading-relaxed text-slate-500">
              {site.legalName} is an independent patient support and healthcare
              coordination company. We help patients navigate their healthcare
              journey by facilitating communication and coordinating
              non-clinical services with healthcare providers. Medical advice,
              diagnosis, treatment, and clinical decisions are provided
              exclusively by licensed healthcare professionals.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="min-w-0">
            <h3 className="mb-5 font-serif text-lg font-medium text-white">
              Navigation
            </h3>

            <ul className="space-y-2.5 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="min-w-0">
            <h3 className="mb-5 font-serif text-lg font-medium text-white">
              Support
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-gold"
                >
                  Patient Support Team
                </Link>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="brand-gold-icon mt-0.5 h-4 w-4 shrink-0" />

                <a
                  href={`mailto:${site.email}`}
                  className="break-words transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="brand-gold-icon mt-0.5 h-4 w-4 shrink-0" />

                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="brand-gold-icon mt-0.5 h-4 w-4 shrink-0" />

                <span className="break-words">
                  {site.office}
                </span>
              </li>
            </ul>
          </div>

          {/* TRUST */}
          <div className="min-w-0">
            <h3 className="mb-5 font-serif text-lg font-medium text-white">
              Trust
            </h3>

            <ul className="space-y-2.5 text-sm">
              {trustLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] px-5 py-2.5 text-sm font-semibold text-royal transition hover:opacity-95"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>

      {/* FLOATING WHATSAPP */}
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-[60] h-14 w-14 shadow-xl transition-transform hover:scale-110"
      >
        <Image
          src="/whatsapp.png"
          alt=""
          width={60}
          height={60}
          className="h-full w-full object-contain"
        />
      </a>
    </footer>
  );
}