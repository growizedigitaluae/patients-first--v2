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
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <Link href="/" className="inline-block mb-5">
            <Image
              src="/logo-gold.png"
              alt="Patient First Worldwide logo"
              width={180}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="text-xs text-slate-500 leading-relaxed max-w-md">
            {site.legalName} is an independent patient support and healthcare coordination
            company. We help patients navigate their healthcare journey by facilitating
            communication and coordinating non-clinical services with healthcare providers.
            Medical advice, diagnosis, treatment, and clinical decisions are provided
            exclusively by licensed healthcare professionals.
          </p>
        </div>

        <div>
          <h3 className="text-white font-serif text-lg mb-4">Navigation</h3>
          <ul className="space-y-2.5 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-400 hover:text-gold transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-serif text-lg mb-4">Support</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <Link href="/contact" className="hover:text-gold transition">
                Patient Support Team
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 brand-gold-icon mt-0.5 shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:text-white transition">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 brand-gold-icon mt-0.5 shrink-0" />
              <a href={site.phoneHref} className="hover:text-white transition">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 brand-gold-icon mt-0.5 shrink-0" />
              <span>{site.office}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-serif text-lg mb-4">Trust</h3>
          <ul className="space-y-2.5 text-sm">
            {trustLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-400 hover:text-gold transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-5 py-2.5 rounded-full text-sm font-semibold transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.responsePromise}</p>
        </div>
      </div>

      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 w-14 h-14 z-[60] hover:scale-110 transition-transform shadow-xl"
      >
        <Image
          src="/whatsapp.png"
          alt=""
          width={60}
          height={60}
          className="w-full h-full object-contain"
        />
      </a>
    </footer>
  );
}
