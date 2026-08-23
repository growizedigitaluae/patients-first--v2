import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";

import "../../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PFW Private Health Management | Member Portal",
    template: "%s | PFW Member Portal",
  },
  description: "Secure access for PFW Private Health Management members.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#052138",
};

export default function MemberRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ivory">
        <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="brandGoldGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#C88A2B" />
              <stop offset="100%" stopColor="#fCDA7B" />
            </linearGradient>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  );
}
