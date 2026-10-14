"use client";

import { useActionState, useEffect, useRef } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import {
  submitLead,
  type ContactState,
} from "@/app/(site)/contact/actions";
import { countries, defaultCountryCode } from "@/data/countries";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "w-full border border-[#082237]/20 rounded-xl px-3.5 py-3 text-[16px] text-[#082237] bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#C88A2B] transition";

const selectClass =
  "w-full border border-[#082237]/20 rounded-xl px-3.5 py-3 text-[15px] text-[#082237] bg-white focus:outline-none focus:border-[#C88A2B] transition cursor-pointer";

const labelClass =
  "block text-sm text-[#082237] tracking-[0.02em] mb-1.5";

export function ArabicInboundContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitLead,
    initialState
  );

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status !== "success") return;

    formRef.current?.reset();

    // Send conversion event only; never send form values or personal/health data to analytics.
    sendGTMEvent({
      event: "pfw_generate_lead",
      form_name: "pfw_inbound_arabic",
    });
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div
        dir="rtl"
        className="bg-white border border-[#082237]/10 rounded-3xl p-8 text-center space-y-4"
      >
        <CheckCircle2
          className="mx-auto h-10 w-10 text-[#C88A2B]"
          aria-hidden="true"
        />

        <h3 className="text-2xl font-serif text-[#082237]">
          شكرًا لك — لقد استلمنا استفسارك
        </h3>

        <p className="text-[#082237] text-sm leading-relaxed">
          سيتواصل معك فريق التنسيق لدينا، عادةً خلال يوم عمل واحد، لفهم
          استفسارك وشرح الخطوات التالية.
        </p>

        <p className="text-xs text-[#082237]">
          المرجع: {state.reference}
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      dir="rtl"
      className="space-y-[18px]"
    >
      <input
        type="hidden"
        name="careArea"
        value="Inbound Treatment UAE - Arabic"
      />

      {/* Introduction */}
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C88A2B]">
          نحن هنا من أجلك
        </p>

        <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#082237] sm:text-4xl">
          لِنَخُطْ الخطوة التالية معًا
        </h2>

        <p className="text-base leading-7 text-[#082237]/90">
          سواء كنت تبحث عن الرعاية لنفسك أو لشخص تحبه، فإن معرفة من أين تبدأ
          قد تكون أمرًا مربكًا. لست مضطرًا لخوض هذه الرحلة بمفردك.
        </p>

        <p className="text-base leading-7 text-[#082237]/90">
          اترك بيانات الاتصال الخاصة بك، وسيتواصل معك منسق رعاية من PFW
          للاستماع إليك وفهم ما يهمك، ومساعدتك في استكشاف خطواتك التالية.
        </p>
      </div>

      {/* Full name */}
      <div>
        <label htmlFor="ar-name" className={labelClass}>
          الاسم الكامل *
        </label>

        <input
          id="ar-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={120}
          placeholder="اكتب اسمك الكامل"
          className={inputClass}
          defaultValue={state.values?.name}
        />

        {state.errors?.name && (
          <p className="mt-1.5 text-xs text-red-600">
            {state.errors.name[0]}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="ar-country-code" className={labelClass}>
          رقم الهاتف *
        </label>

        <div className="flex gap-2">
          <select
            id="ar-country-code"
            name="countryCode"
            aria-label="رمز الدولة"
            className="w-[135px] shrink-0 rounded-xl border border-[#082237]/20 bg-white px-2.5 py-3 text-sm text-[#082237] focus:outline-none focus:border-[#C88A2B] sm:w-[175px]"
            defaultValue={
              state.values?.countryCode ?? defaultCountryCode
            }
            required
          >
            {countries.map((country) => (
              <option key={country.iso} value={country.code}>
                {country.flag} {country.name} ({country.code})
              </option>
            ))}
          </select>

          <input
            id="ar-phone"
            name="phone"
            type="tel"
            autoComplete="tel-national"
            inputMode="tel"
            required
            maxLength={40}
            placeholder="رقم الهاتف"
            className={`${inputClass} min-w-0 flex-1`}
            defaultValue={state.values?.phone}
            dir="ltr"
          />
        </div>

        {state.errors?.phone && (
          <p className="mt-1.5 text-xs text-red-600">
            {state.errors.phone[0]}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="ar-email" className={labelClass}>
          البريد الإلكتروني *
        </label>

        <input
          id="ar-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          placeholder="you@example.com"
          className={inputClass}
          defaultValue={state.values?.email}
          dir="ltr"
        />

        {state.errors?.email && (
          <p className="mt-1.5 text-xs text-red-600">
            {state.errors.email[0]}
          </p>
        )}
      </div>

      {/* Interest */}
      <div>
        <label htmlFor="ar-interest" className={labelClass}>
          ما الذي تود الحصول على المساعدة بشأنه؟ *
        </label>

        <select
          id="ar-interest"
          name="interest"
          required
          className={selectClass}
          defaultValue=""
        >
          <option value="" disabled>
            اختر خيارًا
          </option>

          <option value="Understanding care coordination in the UAE">
            فهم تنسيق الرعاية في الإمارات
          </option>

          <option value="Finding a suitable hospital or specialist">
            العثور على مستشفى أو أخصائي مناسب
          </option>

          <option value="Planning a medical visit to the UAE">
            التخطيط لزيارة طبية إلى الإمارات
          </option>

          <option value="Second opinion coordination">
            تنسيق رأي طبي ثانٍ
          </option>

          <option value="Travel and appointment coordination">
            تنسيق السفر والمواعيد
          </option>

          <option value="Other enquiry">
            استفسار آخر
          </option>
        </select>

        <p className="mt-1 text-xs leading-relaxed text-[#082237]/70">
          يساعدنا ذلك على فهم نوع معلومات التنسيق التي تبحث عنها.
        </p>
      </div>

      {/* Preferred contact method */}
      <div>
        <label htmlFor="ar-contact-method" className={labelClass}>
          طريقة التواصل المفضلة *
        </label>

        <select
          id="ar-contact-method"
          name="contactMethod"
          required
          className={selectClass}
          defaultValue={
            state.values?.contactMethod ?? "WhatsApp"
          }
        >
          <option value="WhatsApp">واتساب</option>
          <option value="Phone">مكالمة هاتفية</option>
          <option value="Email">البريد الإلكتروني</option>
        </select>
      </div>

      {/* Optional message */}
      <div>
        <label htmlFor="ar-message" className={labelClass}>
          الرسالة (اختياري)
        </label>

        <textarea
          id="ar-message"
          name="message"
          rows={3}
          maxLength={1000}
          placeholder="أخبرنا باختصار كيف يمكننا مساعدتك في التنسيق."
          className={`${inputClass} resize-y`}
          defaultValue={state.values?.message}
        />

        <p className="mt-1 text-xs leading-relaxed text-[#082237]/70">
          يرجى عدم إدخال التشخيصات أو المعلومات الطبية التفصيلية أو التقارير
          الطبية أو بيانات جواز السفر أو معلومات الدفع في هذا الاستفسار الأولي.
        </p>

        {state.errors?.message && (
          <p className="mt-1.5 text-xs text-red-600">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      {/* General error */}
      {state.status === "error" &&
        !Object.keys(state.errors ?? {}).length && (
          <p role="alert" className="text-sm text-red-600">
            تعذر إرسال استفسارك. يرجى المحاولة مرة أخرى أو التواصل مع فريقنا
            مباشرةً.
          </p>
        )}

      {/* CTA */}
      <button
        type="submit"
        disabled={isPending}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C88A2B] via-[#E6B94F] to-[#F8DF8B] px-5 py-4 font-semibold text-[#082237] shadow-lg transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? (
          "جارٍ الإرسال…"
        ) : (
          <>
            تواصل مع منسق رعاية من PFW
            <Send
              className="h-4 w-4"
              aria-hidden="true"
            />
          </>
        )}
      </button>

      {/* Privacy / disclaimer */}
      <p className="text-xs leading-relaxed text-[#082237]/75">
        تقدم Patients First Worldwide خدمات تنسيق غير سريرية، ولا تقدم
        استشارات أو علاجًا طبيًا. لا يؤدي إرسال هذا النموذج إلى إنشاء علاقة
        بين الطبيب والمريض. ستُستخدم بياناتك للرد على استفسارك وفقًا لـ{" "}
        <a
          href="/privacy-policy"
          className="underline underline-offset-2 hover:text-[#C88A2B]"
        >
          سياسة الخصوصية
        </a>
        .
      </p>
    </form>
  );
}