import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Patient First Worldwide is an independent patient support and healthcare coordination company. We connect patients with accredited hospitals and specialists across the UAE, India, Saudi Arabia, Turkey and the USA — coordinating communication, records, appointments, travel and follow-up.",
  keywords: [
    "medical coordination",
    "healthcare navigation",
    "patient support",
    "second opinion coordination",
    "treatment abroad",
    "UAE hospitals",
    "India hospitals",
    "Turkey hospitals",
    "Saudi Arabia hospitals",
    "USA hospitals",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description:
      "We coordinate your healthcare journey across trusted facilities in the UAE, India, Saudi Arabia, Turkey and the USA — so you never navigate alone.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              url: site.url,
              email: site.email,
              telephone: site.phone,
              description:
                "Independent patient support and healthcare coordination company connecting patients with accredited hospitals across the UAE, India, Saudi Arabia, Turkey and the USA.",
              areaServed: ["AE", "IN", "SA", "TR", "US"],
              slogan: site.tagline,
            }),
          }}
        />
        <Navbar />
        <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="brandGoldGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#C88A2B" />
              <stop offset="100%" stopColor="#fCDA7B" />
            </linearGradient>
          </defs>
        </svg>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
