import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Reach Patient First Worldwide however feels easiest — call, WhatsApp, or our consultation form. A real member of your care team will get back to you personally, usually within one business day.",
};

const infoItems = [
  {
    icon: MapPin,
    title: "Office Location",
    body: <p>{site.office}</p>,
    fine: null,
  },
  {
    icon: Phone,
    title: "Phone",
    body: <a href={site.phoneHref}>{site.phone}</a>,
    fine: "Business hours below. Outside these hours, leave a message and we'll return your call the next business day.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    body: <p>Speak directly with a coordinator for quick, general questions.</p>,
    fine: null,
  },
  {
    icon: Mail,
    title: "Email",
    body: <a href={`mailto:${site.email}`}>{site.email}</a>,
    fine: null,
  },
  {
    icon: Clock,
    title: "Working Hours",
    body: <p>{site.hours}</p>,
    fine: null,
  },
];

export default function ContactPage() {
  return (
    <main className="bg-ivory pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-[1180px] mx-auto">
        {/* HEADING */}
        <div className="max-w-[640px] mb-5">
          <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
            <span className="inline-block w-[22px] h-px bg-gold" />
            We&rsquo;re here for you
          </p>
          <h1 className="font-serif text-[32px] md:text-[44px] leading-tight text-midnight mt-4 mb-3.5">
            How Can We Help You?
          </h1>
          <p className="text-navy text-base leading-relaxed max-w-[560px]">
            Reach us however feels easiest — a call, a message, or a form. A real member of your
            care team will get back to you personally, usually within one business day.
          </p>
        </div>

        {/* EMERGENCY NOTE */}
        <div className="my-7 mb-12 py-4 px-5 bg-white border-l-4 border-gold border-y border-r border-slate-200 text-sm text-navy leading-relaxed max-w-[760px] rounded-2xl">
          <b>If this is a medical emergency,</b> please call your local emergency number or go to
          the nearest emergency room right away. This page is for enquiries and consultations only
          and is not monitored for urgent medical situations.
        </div>

        {/* LAYOUT */}
        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-[60px] items-start">
          {/* INFO */}
          <div className="flex flex-col">
            {infoItems.map((item) => (
              <div
                key={item.title}
                className="flex gap-[18px] py-[22px] border-b border-navy/10 first:pt-0"
              >
                <div className="w-[38px] h-[38px] rounded-full border-[1.5px] border-gold flex-none flex items-center justify-center">
                  <item.icon className="w-5 h-5 brand-gold-icon" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-medium text-midnight mb-1">
                    {item.title}
                  </h4>
                  <div className="text-base text-navy [&_a]:text-navy [&_a:hover]:text-gold-dark [&_a:hover]:underline">
                    {item.body}
                  </div>
                  {item.fine && (
                    <p className="text-[15px] text-navy mt-1.5 max-w-[320px] leading-relaxed">
                      {item.fine}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* FORM */}
          <div className="bg-white border border-navy/10 rounded-3xl px-6 py-10 md:px-10 shadow-sm">
            <h2 className="font-serif text-2xl font-medium text-midnight mb-2">
              Request a Personalized Consultation
            </h2>
            <p className="text-navy text-base leading-relaxed mb-7">
              Tell us a little about your situation. There&rsquo;s no obligation — this simply
              starts a conversation with someone who can help.
            </p>
            <Suspense fallback={<div className="h-96 bg-ivory rounded-2xl animate-pulse" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
