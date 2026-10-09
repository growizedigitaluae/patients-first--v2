import type { Metadata } from "next";
import { Suspense } from "react";
import { ArrowLeft, CheckCircle2, ClipboardList, MessageCircle, Plane, ShieldCheck } from "lucide-react";
import { ArabicInboundContactForm } from "@/components/ArabicInboundContactForm";

export const metadata: Metadata = {
  title: "العلاج في الإمارات | تنسيق رحلة المريض",
  description:
    "هل تفكر في تلقي العلاج في الإمارات؟ تعرّف على خدمات تنسيق رحلة المريض والدعم العملي غير الطبي من Patients First Worldwide.",
  alternates: { canonical: "/ar/treatment-in-uae" },
  robots: { index: true, follow: true },
};

const steps = [
  { n: "٠١", title: "أرسل استفسارك", text: "أخبرنا بنوع الدعم الذي تبحث عنه والطريقة المناسبة للتواصل معك." },
  { n: "٠٢", title: "ناقش احتياجاتك", text: "يراجع فريقنا استفسارك ويوضح خدمات التنسيق التي قد تكون متاحة." },
  { n: "٠٣", title: "تعرّف على الخطوات التالية", text: "إذا رغبت في المتابعة، نوضح نطاق الدعم والرسوم المطبقة قبل البدء." },
];

const support = [
  { icon: ClipboardList, title: "تنسيق الاستفسارات والمواعيد", text: "المساعدة في إيصال استفسارك وتنسيق الخطوات المتعلقة بالمواعيد مع مقدمي الرعاية الصحية، حسب التوافر." },
  { icon: MessageCircle, title: "دعم التواصل", text: "المساعدة في تنظيم المعلومات والتواصل لفهم الإجراءات الإدارية بصورة أوضح." },
  { icon: Plane, title: "تنسيق ترتيبات السفر", text: "عند الطلب وحسب التوافر، يمكن مناقشة الدعم اللوجستي غير الطبي المرتبط برحلتك العلاجية." },
];

const faqs = [
  { q: "هل تقدم Patients First Worldwide العلاج الطبي؟", a: "لا. تقدم الشركة خدمات تنسيق ودعم غير طبي للمرضى. التشخيص والقرارات العلاجية والرعاية الطبية من اختصاص المهنيين الصحيين المرخصين." },
  { q: "هل تضمنون موعداً أو نتيجة علاجية؟", a: "لا. يحدد مقدمو الرعاية الصحية مدى توفر المواعيد والقرارات والخطط والنتائج الطبية. يمكن لفريقنا مناقشة خدمات التنسيق المتعلقة باستفسارك." },
  { q: "ما تكلفة خدمات التنسيق؟", a: "تعتمد الرسوم على نوع الدعم المطلوب. بعد مراجعة استفسارك، يوضح الفريق الخدمات والرسوم المطبقة قبل اتخاذ قرار المتابعة." },
  { q: "هل يجب إرسال التقارير الطبية عبر هذا النموذج؟", a: "لا. يرجى عدم إرسال التقارير الطبية التفصيلية أو المعلومات شديدة الحساسية عبر النموذج الأولي. يمكن للفريق توضيح الخطوات المناسبة عند التواصل معك." },
];

export default function ArabicInboundTreatmentPage() {
  return (
    <main dir="rtl" lang="ar" className="bg-ivory text-navy">
      <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,178,107,0.22),transparent_42%),linear-gradient(145deg,#f8f8f5_0%,#ffffff_55%,#f4f0e6_100%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.85fr] lg:gap-14">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/75 px-4 py-2 text-xs font-bold text-gold-dark">
              Patients First Worldwide <span className="h-1 w-1 rounded-full bg-gold" /> دعم المرضى الدوليين
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.2] tracking-tight text-midnight sm:text-5xl lg:text-[3.65rem]">
              هل تخطط لتلقي العلاج في الإمارات؟
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              احصل على إرشاد عملي ودعم غير طبي لتنسيق رحلتك أثناء استكشاف خيارات الرعاية الصحية في الإمارات.
            </p>
            <ul className="mt-7 space-y-3 text-base text-slate-700">
              {["خطوة أولى واضحة لبدء استفسارك", "دعم في التواصل وتنسيق المواعيد", "معرفة الإجراءات والرسوم المطبقة قبل المتابعة"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold-dark" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#lead-form" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-midnight px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-[#0d3555]">
                أرسل استفسارك <ArrowLeft className="h-4 w-4" />
              </a>
              <a href="https://wa.me/971566960486" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-midnight/20 bg-white px-7 py-3 font-semibold text-midnight transition hover:border-gold">
                <MessageCircle className="h-4 w-4" /> تواصل عبر واتساب
              </a>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">تقدم الشركة خدمات تنسيق غير طبية فقط، ولا تقدم المشورة الطبية أو العلاج. تبقى القرارات الطبية من اختصاص المهنيين الصحيين المرخصين.</p>
          </div>

          <div id="lead-form" className="scroll-mt-24 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(5,33,56,0.12)] sm:p-8">
            <div className="mb-6">
              <p className="text-xs font-bold text-gold-dark">ابدأ من هنا</p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight text-midnight sm:text-3xl">أخبرنا كيف يمكننا مساعدتك</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">أرسل بعض التفاصيل ليتمكن فريقنا من التواصل معك ومناقشة استفسارك وخدمات التنسيق الممكنة.</p>
            </div>
            <Suspense fallback={<div className="h-80 animate-pulse rounded-xl bg-ivory" />}>
              <ArabicInboundContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold text-gold-dark">كيف نعمل</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-midnight sm:text-4xl">خطوات أوضح لبدء رحلتك العلاجية</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">ابدأ بالتواصل معنا، ثم قرر الخطوة التالية بعد فهم خدمات التنسيق المتاحة.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.n} className="rounded-2xl border border-slate-200 bg-white p-7">
                <span className="text-sm font-bold tracking-widest text-gold-dark">{step.n}</span>
                <h3 className="mt-4 text-xl font-semibold text-midnight">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold text-gold-dark">كيف ندعمك</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-midnight sm:text-4xl">دعم عملي يضع احتياجاتك أولاً</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">تختلف احتياجات كل شخص. وتعتمد الخدمات المتاحة على احتياجاتك وتوفر مقدمي الرعاية ونطاق الخدمة المتفق عليه.</p>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {support.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-ivory/70 p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-midnight text-gold"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-5 text-lg font-semibold text-midnight">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <ShieldCheck className="mx-auto h-8 w-8 text-gold-dark" />
            <h2 className="mt-3 text-3xl font-semibold text-midnight">أسئلة قد تهمك</h2>
          </div>
          <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="cursor-pointer list-none pr-6 font-semibold text-midnight">{faq.q}<span className="float-left text-gold-dark transition group-open:rotate-45">+</span></summary>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-9 rounded-2xl bg-midnight px-6 py-8 text-center text-white sm:px-10">
            <h2 className="text-2xl font-semibold">هل ترغب في مناقشة استفسارك؟</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300">تواصل مع Patients First Worldwide للتعرف على خدمات التنسيق غير الطبية لرحلتك العلاجية في الإمارات.</p>
            <a href="#lead-form" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C88A2B] to-[#FCDA7B] px-7 py-3 font-semibold text-midnight">أرسل استفسارك <ArrowLeft className="h-4 w-4" /></a>
          </div>
          <p className="mt-6 text-center text-xs leading-5 text-slate-500">لا تقدم هذه الخدمة التشخيص أو المشورة الطبية أو العلاج، ولا تضمن توفر المواعيد أو النتائج الطبية. في حالات الطوارئ، اتصل بخدمات الطوارئ المحلية.</p>
        </div>
      </section>
    </main>
  );
}
