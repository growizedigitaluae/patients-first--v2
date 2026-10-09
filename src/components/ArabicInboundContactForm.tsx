"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { Send } from "lucide-react";
import { submitLead, type ContactState } from "@/app/(site)/contact/actions";
import { countries, defaultCountryCode } from "@/data/countries";

const initialState: ContactState = { status: "idle" };
const inputClass = "w-full rounded-xl border border-navy/20 bg-white px-3.5 py-3 text-[16px] text-navy placeholder:text-slate-400 focus:border-gold focus:outline-none transition";
const labelClass = "mb-1.5 block text-sm text-navy";

export function ArabicInboundContactForm() {
  const [state, formAction, isPending] = useActionState(submitLead, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status !== "success") return;
    formRef.current?.reset();
    sendGTMEvent({ event: "pfw_generate_lead", form_name: "pfw_inbound_arabic" });
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div dir="rtl" className="space-y-4 rounded-3xl border border-navy/10 bg-white p-8 text-center">
        <h3 className="text-2xl font-semibold text-midnight">شكراً لك، لقد استلمنا استفسارك</h3>
        <p className="text-sm leading-relaxed text-navy">سيتواصل معك أحد منسقي المرضى عادةً خلال يوم عمل واحد لمناقشة احتياجاتك وشرح كيفية تقديم الدعم. لا يوجد أي التزام بالمتابعة.</p>
        <p className="text-xs text-navy">المرجع: {state.reference}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} dir="rtl" className="space-y-[18px]">
      <input type="hidden" name="careArea" value="Inbound UAE - Arabic" />
      <div>
        <label htmlFor="ar-name" className={labelClass}>الاسم الكامل *</label>
        <input id="ar-name" name="name" type="text" required placeholder="اكتب اسمك" className={inputClass} defaultValue={state.values?.name} />
        {state.errors?.name && <p className="mt-1.5 text-xs text-red-600">{state.errors.name[0]}</p>}
      </div>
      <div>
        <label htmlFor="ar-phone" className={labelClass}>رقم الهاتف *</label>
        <div className="flex gap-2">
          <input id="ar-phone" name="phone" type="tel" required placeholder="رقم الهاتف" className={`${inputClass} min-w-0 flex-1`} defaultValue={state.values?.phone} />
          <select id="ar-countryCode" name="countryCode" aria-label="رمز الدولة" className="w-[125px] shrink-0 rounded-xl border border-navy/20 bg-white px-2 py-3 text-sm text-navy focus:border-gold focus:outline-none" defaultValue={state.values?.countryCode ?? defaultCountryCode}>
            {countries.map((country) => <option key={country.iso} value={country.code}>{country.flag} {country.code}</option>)}
          </select>
        </div>
        {state.errors?.phone && <p className="mt-1.5 text-xs text-red-600">{state.errors.phone[0]}</p>}
      </div>
      <div>
        <label htmlFor="ar-email" className={labelClass}>البريد الإلكتروني *</label>
        <input id="ar-email" name="email" type="email" required placeholder="name@example.com" className={inputClass} defaultValue={state.values?.email} dir="ltr" />
        {state.errors?.email && <p className="mt-1.5 text-xs text-red-600">{state.errors.email[0]}</p>}
      </div>
      <div>
        <label htmlFor="ar-contactMethod" className={labelClass}>طريقة التواصل المفضلة</label>
        <select id="ar-contactMethod" name="contactMethod" className={inputClass} defaultValue={state.values?.contactMethod ?? ""}>
          <option value="">اختر طريقة التواصل</option>
          <option value="WhatsApp">واتساب</option>
          <option value="Phone">الهاتف</option>
          <option value="Email">البريد الإلكتروني</option>
        </select>
      </div>
      <div>
        <label htmlFor="ar-message" className={labelClass}>كيف يمكننا مساعدتك؟ *</label>
        <textarea id="ar-message" name="message" rows={4} required placeholder="اكتب نبذة مختصرة عن استفسارك، دون إرفاق تقارير طبية أو معلومات شديدة الحساسية." className={`${inputClass} resize-y`} defaultValue={state.values?.message} />
        <p className="mt-1 text-xs leading-5 text-slate-500">يرجى عدم إدخال معلومات طبية شديدة الحساسية في هذا النموذج الأولي.</p>
        {state.errors?.message && <p className="mt-1.5 text-xs text-red-600">{state.errors.message[0]}</p>}
      </div>
      {state.status === "error" && !Object.keys(state.errors ?? {}).length && <p className="text-sm text-red-600">تعذر إرسال الاستفسار. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب.</p>}
      <button type="submit" disabled={isPending} className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C88A2B] to-[#FCDA7B] py-4 font-semibold text-royal shadow-lg transition hover:opacity-95 disabled:opacity-60">
        {isPending ? "جارٍ الإرسال…" : "إرسال الاستفسار"} <Send className="h-4 w-4" />
      </button>
      <p className="text-xs leading-5 text-slate-500">إرسال هذا النموذج لا ينشئ علاقة بين الطبيب والمريض ولا يُعد طلباً للحصول على نصيحة طبية أو علاج. تُستخدم بياناتك للرد على استفسارك وفقاً لسياسة الخصوصية.</p>
    </form>
  );
}
