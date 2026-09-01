"use client";

import { useState } from "react";
import {
  MessageCircle,
  FileText,
  Building2,
  ListChecks,
  CalendarCheck,
  Users,
  ChevronDown,
  AlertTriangle,
} from "lucide-react";
import { processSteps } from "@/data/process";

const stepIcons = [
  MessageCircle,
  FileText,
  Building2,
  ListChecks,
  CalendarCheck,
  Users,
];

const FallbackIcon = MessageCircle;

export function JourneyTimeline() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(0);

  return (
    <div>
      {/* Desktop horizontal stepper */}
      <div className="hidden md:block">
        <div className="flex items-start justify-between gap-2">
          {processSteps.map((step, index) => {
            const Icon = stepIcons[index] ?? FallbackIcon;
            const isActive = index === active;
            const isPast = index < active;

            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActive(index)}
                className="group flex flex-col items-center gap-3 flex-1 min-w-0"
                aria-pressed={isActive}
              >
                <div className="w-full flex items-center">
                  <div
                    className={`h-0.5 flex-1 transition-colors ${
                      index === 0
                        ? "bg-transparent"
                        : isPast || isActive
                          ? "bg-gold"
                          : "bg-royal/20"
                    }`}
                  />

                  <div
                    className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isActive
                        ? "bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] border-[#C88A2B] text-royal shadow-lg scale-110"
                        : isPast
                          ? "bg-gradient-to-r from-[#C88A2B]/15 to-[#fCDA7B]/15 border-[#C88A2B]/60 text-gold-dark"
                          : "bg-white border-royal/40 text-royal/70 group-hover:border-gold group-hover:text-gold-dark"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        isPast ? "brand-gold-icon" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`h-0.5 flex-1 transition-colors ${
                      index === processSteps.length - 1
                        ? "bg-transparent"
                        : isPast || isActive
                          ? "bg-gold"
                          : "bg-royal/20"
                    }`}
                  />
                </div>

                <div className="text-center px-1">
                  <p
                    className={`text-[11px] uppercase tracking-wider font-bold ${
                      isActive ? "text-gold-dark" : "text-royal/60"
                    }`}
                  >
                    Step {step.id}
                  </p>

                  <p
                    className={`text-xs font-semibold mt-0.5 leading-tight ${
                      isActive ? "text-midnight" : "text-royal/70"
                    }`}
                  >
                    {step.short}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active step details */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-100 shadow-lg p-8 md:p-10">
          {processSteps.map((step, index) => {
            const Icon = stepIcons[index] ?? FallbackIcon;

            return (
              <div
                key={step.id}
                className={index === active ? "block" : "hidden"}
              >
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center justify-center w-11 h-11 bg-royal rounded-2xl">
                    <Icon className="w-5 h-5 brand-gold-icon" />
                  </span>

                  <div>
                    <p className="text-gold-dark text-xs font-bold uppercase tracking-widest">
                      Step {step.id}
                    </p>

                    <h3 className="font-serif text-2xl text-midnight">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-navy leading-relaxed max-w-3xl">
                  {step.desc}
                </p>

                {step.important && (
                  <div className="mt-6 flex items-start gap-3 bg-amber-50 border-l-4 border-gold rounded-xl p-5 max-w-3xl">
                    <AlertTriangle className="w-4 h-4 brand-gold-icon shrink-0 mt-0.5" />

                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gold-dark mb-1">
                        Important
                      </p>

                      <p className="text-sm text-navy leading-relaxed">
                        {step.important}
                      </p>
                    </div>
                  </div>
                )}

                {step.items.length > 0 && (
                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-navy mb-3">
                      This stage may include
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 max-w-3xl">
                      {step.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 bg-ivory rounded-xl px-4 py-3 border border-slate-100"
                        >
                          <span className="text-sm text-navy">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile / tablet accordion */}
      <div className="md:hidden space-y-4">
        {processSteps.map((step, index) => {
          const Icon = stepIcons[index] ?? FallbackIcon;
          const open = mobileOpen === index;

          return (
            <div
              key={step.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setMobileOpen(open ? null : index)}
                className="w-full flex items-center gap-4 px-6 py-5 text-left"
                aria-expanded={open}
              >
                <span
                  className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                    open
                      ? "bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-royal"
                      : "bg-royal text-gold"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      open ? "" : "brand-gold-icon"
                    }`}
                  />
                </span>

                <span className="flex-1">
                  <span className="block text-[11px] uppercase tracking-wider font-bold text-gold-dark">
                    Step {step.id}
                  </span>

                  <span className="block font-serif font-bold text-midnight leading-snug">
                    {step.title}
                  </span>
                </span>

                <ChevronDown
                  className={`w-5 h-5 brand-gold-icon shrink-0 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open && (
                <div className="px-6 pb-6">
                  <p className="text-navy leading-relaxed text-sm">
                    {step.desc}
                  </p>

                  {step.important && (
                    <div className="mt-4 flex items-start gap-3 bg-amber-50 border-l-4 border-gold rounded-xl p-4">
                      <AlertTriangle className="w-4 h-4 brand-gold-icon shrink-0 mt-0.5" />

                      <p className="text-xs text-navy leading-relaxed">
                        {step.important}
                      </p>
                    </div>
                  )}

                  {step.items.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {step.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-navy"
                        >
                          <span className="bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] bg-clip-text text-transparent font-bold shrink-0 mt-0.5">
                            ✓
                          </span>

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}