import Link from "next/link";
import { Lock } from "lucide-react";

const portalFeatures = [
  {
    num: 1,
    title: "Secure Document Vault",
    text: "Upload and encrypt diagnostic reports, scans, and past lab results.",
  },
  {
    num: 2,
    title: "Real-Time Activity Monitor",
    text: "Track milestones, upcoming specialist reviews, and travel logistics in one view.",
  },
  {
    num: 3,
    title: "Direct Coordinator Chat",
    text: "Direct encrypted line to your personal medical advocate 24/7.",
  },
];

export function MemberPortalComingSoon() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto bg-[#FAF8F5] rounded-3xl border border-slate-200/60 shadow-sm p-8 md:p-14">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-slate-900 text-[#C5A059] text-xs font-semibold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full">
              Coming Soon
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-midnight leading-tight">
              The Member Portal & Healthcare Activity Hub
            </h2>
            <p className="text-navy leading-relaxed">
              We are building a state-of-the-art secure member portal. Soon, active members will
              be able to log in directly to upload medical histories, monitor upcoming
              consultations, track diagnostic results, and communicate securely with their
              dedicated care team.
            </p>
            <ol className="space-y-5">
              {portalFeatures.map((feature) => (
                <li key={feature.num} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F3ECE2] flex items-center justify-center text-sm font-semibold text-navy">
                    {feature.num}
                  </span>
                  <div>
                    <h3 className="font-serif font-bold text-midnight">{feature.title}</h3>
                    <p className="text-sm text-navy mt-1 leading-relaxed">{feature.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="w-14 h-14 bg-[#0B132B] rounded-2xl flex items-center justify-center ring-1 ring-[#C5A059]/40 shadow-md">
              <Lock className="w-6 h-6 text-[#C5A059]" />
            </div>
            <h3 className="font-serif text-xl text-midnight mt-6">Member Portal Access</h3>
            <p className="text-navy text-sm mt-3 leading-relaxed">
              Portal login and registration features are currently under development for founding
              members.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center bg-[#0B132B] hover:bg-black text-white rounded-xl py-3 px-6 text-sm font-medium transition-all shadow-md"
            >
              Request Early Portal Access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
