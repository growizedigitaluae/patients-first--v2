import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  Users,
  Building2,
  Plane,
  MapPin,
  Stethoscope,
} from "lucide-react";

import { ArabicInboundContactForm } from "@/components/ArabicInboundContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "السياحة العلاجية في الإمارات | Patients First Worldwide",
  description:
    "هل تخطط للسفر إلى الإمارات للعلاج؟ تساعدك Patients First Worldwide في التواصل مع مقدمي الرعاية الصحية وتنسيق المواعيد واحتياجات السفر والإقامة.",
  alternates: {
    canonical: `${site.url}/ar/treatment-in-uae`,
  },
  openGraph: {
    title: "رحلتك العلاجية إلى الإمارات تبدأ معنا | Patients First Worldwide",
    description:
      "دعم غير طبي وتنسيق عملي لرحلتك العلاجية إلى الإمارات.",
    url: `${site.url}/ar/treatment-in-uae`,
    siteName: site.name,
    type: "website",
  },
};

const specialties = [
  [
    "رعاية الأورام والسرطان",
    "استفسارات تنسيق الرعاية المتعلقة بالأورام والسرطان والتشخيص والرعاية متعددة التخصصات.",
  ],
  [
    "أمراض القلب وعلوم القلب",
    "استفسارات تتعلق بتقييم القلب والإجراءات القلبية وخيارات الرعاية المتخصصة.",
  ],
  [
    "زراعة الأعضاء",
    "استفسارات تتعلق بتنسيق التواصل والتقييمات مع برامج زراعة الأعضاء المتاحة.",
  ],
  [
    "الأعصاب وجراحة الأعصاب",
    "استفسارات الرعاية المتعلقة بالأعصاب والدماغ والعمود الفقري وجراحة الأعصاب.",
  ],
  [
    "جراحة العظام واستبدال المفاصل",
    "استفسارات العظام والمفاصل واستبدال المفاصل والحركة وإعادة التأهيل.",
  ],
  [
    "الخصوبة وأطفال الأنابيب",
    "استفسارات تتعلق بتقييم الخصوبة وأطفال الأنابيب والرعاية الإنجابية.",
  ],
  [
    "جراحة السمنة والتمثيل الغذائي",
    "استفسارات تتعلق بجراحات إنقاص الوزن والرعاية المرتبطة بصحة التمثيل الغذائي.",
  ],
  [
    "أمراض الجهاز الهضمي والكبد",
    "استفسارات تتعلق بالجهاز الهضمي والكبد والتواصل مع مقدمي الرعاية المتخصصين.",
  ],
  [
    "أمراض الكلى والمسالك البولية",
    "استفسارات الرعاية المتعلقة بأمراض الكلى والمسالك البولية والفرق المتخصصة.",
  ],
  [
    "الجراحة التجميلية والترميمية",
    "استفسارات تنسيق الاستشارات المتعلقة بالإجراءات التجميلية والترميمية.",
  ],
  [
    "جراحة العمود الفقري",
    "استفسارات تتعلق بتنسيق التواصل مع المتخصصين في حالات العمود الفقري المعقدة.",
  ],
  [
    "الجراحة بمساعدة الروبوت",
    "استفسارات تتعلق بالوصول إلى الخبرات والمرافق التي توفر الجراحة بمساعدة الروبوت.",
  ],
  [
    "طب العيون",
    "استفسارات الفحوصات المتخصصة وإجراءات رعاية العين والبصر.",
  ],
  [
    "طب الأسنان وجراحة الوجه والفكين",
    "استفسارات تتعلق برعاية الأسنان وجراحة الوجه والفكين والتواصل مع المتخصصين.",
  ],
  [
    "رعاية الأطفال",
    "استفسارات تنسيق الرعاية الطبية المتخصصة للأطفال في مجموعة متنوعة من الحالات.",
  ],
  [
    "الفحوصات الصحية الوقائية والفحوصات التنفيذية",
    "استفسارات تنسيق الفحوصات الصحية الشاملة وبرامج الفحوصات التنفيذية والوقائية.",
  ],
];

const uaeLocations = [
  {
    title: "دبي",
    text: "خيارات متنوعة من المستشفيات والمراكز التخصصية ومقدمي الرعاية الصحية، حسب التخصص والتوافر.",
  },
  {
    title: "أبوظبي",
    text: "منظومة متقدمة من المستشفيات والخدمات الطبية التخصصية، حسب احتياجات المريض والتوافر.",
  },
  {
    title: "الشارقة",
    text: "يمكن مناقشة خيارات الرعاية الصحية المتاحة في الشارقة وفقًا للتخصص والتوافر.",
  },
  {
    title: "عجمان",
    text: "يمكن لفريقنا مناقشة خيارات الرعاية المتاحة في عجمان حسب احتياجات الاستفسار.",
  },
  {
    title: "رأس الخيمة",
    text: "يمكن استكشاف خيارات مقدمي الرعاية المتاحة في رأس الخيمة وفقًا للتخصص والتوافر.",
  },
  {
    title: "الفجيرة",
    text: "يمكن مناقشة خيارات الرعاية الصحية المتاحة في الفجيرة حسب الحالة والتخصص والتوافر.",
  },
  {
    title: "أم القيوين",
    text: "يمكن استكشاف الخيارات المتاحة في أم القيوين وفقًا لاحتياجات المريض والتوافر.",
  },
];

const steps = [
  {
    n: "٠١",
    title: "أخبرنا بما تحتاج إليه",
    text: "شاركنا باختصار نوع العلاج أو الدعم الذي تبحث عنه وبلد إقامتك وطريقة التواصل المفضلة لديك.",
  },
  {
    n: "٠٢",
    title: "ناقش معنا خيارات التنسيق المتاحة",
    text: "يراجع فريقنا استفسارك ويوضح خدمات التنسيق ذات الصلة والخطوات التالية الممكنة.",
  },
  {
    n: "٠٣",
    title: "تعرّف على الخيارات",
    text: "عند الاقتضاء، نساعد في تنسيق التواصل مع مقدمي الرعاية الصحية المعنيين. ويحدد مقدمو الرعاية الملاءمة الطبية والتوافر.",
  },
  {
    n: "٠٤",
    title: "خطط للترتيبات العملية",
    text: "إذا قررت المتابعة، نوضح نطاق الخدمة المتفق عليه والتكاليف المطبقة قبل بدء التنسيق. وتخضع خدمات الدعم المتعلقة بالسفر للتوافر.",
  },
];

const nextStepOptions = [
  "استشارات مع أطباء متخصصين",
  "استفسارات الرأي الطبي الثاني",
  "استفسارات الجراحات المعقدة",
  "استفسارات رعاية الأورام والقلب",
  "الفحوصات والتشخيصات المتقدمة",
  "الخصوبة وأطفال الأنابيب",
  "استفسارات رعاية الأطفال",
  "إعادة التأهيل والرعاية المعقدة",
];

const faqs = [
  {
    q: "هل تقدم Patients First Worldwide العلاج الطبي؟",
    a: "لا. تقدم PFW خدمات دعم المرضى والتنسيق غير السريري. التشخيص والمشورة الطبية والتوصيات العلاجية والقرارات السريرية هي من مسؤولية المهنيين الصحيين المرخصين.",
  },
  {
    q: "هل يمكنكم ضمان مستشفى أو موعد أو نتيجة علاجية؟",
    a: "لا. يحدد مقدمو الرعاية الصحية الملاءمة الطبية والمواعيد المتاحة والقرارات العلاجية. ولا تضمن PFW المواعيد أو النتائج.",
  },
  {
    q: "ما تكلفة خدمات التنسيق؟",
    a: "تختلف الرسوم بحسب الخدمات المطلوبة. بعد مراجعة استفسارك، نوضح نطاق الخدمة والتكاليف المطبقة قبل موافقتك على المتابعة.",
  },
  {
    q: "هل يمكنكم مساعدتي في اختيار الإمارة المناسبة؟",
    a: "ليس من الضروري أن تختار إمارة معينة قبل التواصل معنا. أخبرنا بما تبحث عنه، ويمكننا مناقشة خطوات التنسيق الممكنة والتواصل مع مقدمي الرعاية المعنيين حسب التوافر. وتبقى القرارات الطبية من اختصاص المهنيين المرخصين.",
  },
  {
    q: "هل أرسل تقاريري الطبية عبر هذا النموذج؟",
    a: "يرجى عدم إدخال السجلات الطبية التفصيلية أو المعلومات الصحية الحساسة في هذا الاستفسار الأولي. إذا كانت المستندات مطلوبة، يمكن لفريقنا توضيح الطريقة المناسبة لمشاركتها.",
  },
];

const sectionTitle =
  "font-serif text-3xl font-semibold tracking-tight text-[#082237] sm:text-4xl lg:text-[44px]";

const cardClass =
  "rounded-[26px] border border-[#082237]/10 bg-[#FAF8F2] p-7";

export default function ArabicInboundTreatmentUAEPage() {
  return (
    <main
      dir="rtl"
      lang="ar"
      className="overflow-hidden bg-[#FAF8F2] text-[#082237]"
    >
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#F8F6EF]">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/about-us-2a.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-[#FAF8F2]/95 to-[#FAF8F2]" />
        </div>

        <div className="absolute -left-32 -top-32 -z-10 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#C88A2B]/20 via-[#F7D77D]/15 to-transparent blur-3xl" />

        <div className="absolute -right-40 bottom-[-240px] -z-10 h-[520px] w-[520px] rounded-full bg-[#082237]/[0.04] blur-3xl" />

        <div className="mx-auto max-w-[1500px] px-6 pb-14 pt-28 sm:px-8 sm:pb-20 lg:px-12 lg:pt-32 xl:px-16">
          <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] xl:gap-14">
            <div className="flex flex-col justify-start">
              <p className="text-xs font-semibold tracking-[0.08em] text-[#E6B94F] sm:text-sm">
                Patients First Worldwide | دعم المرضى الدوليين
              </p>

              <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.2] tracking-tight text-[#082237] sm:text-5xl lg:text-[58px]">
                رحلتك العلاجية إلى الإمارات تبدأ معنا
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#082237]/85 sm:text-lg">
                نساعد المرضى القادمين من مختلف أنحاء العالم على تنسيق رحلتهم
                العلاجية إلى دولة الإمارات العربية المتحدة، من التواصل مع
                المستشفيات ومقدمي الرعاية الصحية إلى تنسيق المواعيد واحتياجات
                السفر والإقامة، وفقًا للخدمات المتاحة.
              </p>

              <div className="mt-6 space-y-3 text-sm leading-7 text-[#082237]/80">
                <p className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#E6B94F]" />
                  التواصل مع المستشفيات ومقدمي الرعاية الصحية
                </p>

                <p className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#E6B94F]" />
                  تنسيق المواعيد والخطوات التالية
                </p>

                <p className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#E6B94F]" />
                  توضيح نطاق الخدمات والتكاليف قبل البدء
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#case-enquiry"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C88A2B] via-[#E6B94F] to-[#F8DF8B] px-7 py-3 text-sm font-bold text-[#082237] shadow-[0_10px_24px_rgba(200,138,43,0.24)] transition hover:-translate-y-0.5"
                >
                  ابدأ رحلتك العلاجية
                  <ArrowLeft className="h-4 w-4" />
                </a>

                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#082237]/15 bg-white/90 px-7 py-3 text-sm font-bold text-[#082237] shadow-sm transition hover:border-[#C88A2B]/60"
                >
                  <MessageCircle className="h-4 w-4" />
                  تواصل معنا عبر واتساب
                </a>
              </div>

              <div className="mt-6 max-w-xl border-r-2 border-[#C88A2B]/60 pr-4 text-xs leading-6 text-[#082237]/70">
                تقدم Patients First Worldwide خدمات دعم وتنسيق غير سريرية، ولا
                تقدم التشخيص أو العلاج أو المشورة الطبية. تبقى القرارات الطبية
                من مسؤولية مقدمي الرعاية الصحية المرخصين.
              </div>
            </div>

            {/* Contact Form */}
            <div
              id="case-enquiry"
              className="scroll-mt-24 rounded-[30px] border border-white/80 bg-white/95 p-7 shadow-[0_25px_80px_rgba(8,34,55,0.14)] backdrop-blur sm:p-9 lg:p-10"
            >
              <Suspense
                fallback={
                  <div className="min-h-[420px] animate-pulse rounded-2xl bg-[#FAF8F2]" />
                }
              >
                <ArabicInboundContactForm />
              </Suspense>

              <div className="mt-5 flex items-start gap-2 rounded-2xl bg-[#FAF8F2] p-4 text-xs leading-6 text-[#082237]/70">
                <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#E6B94F]" />
                <span>
                  يرجى عدم إدخال تقارير طبية مفصلة أو معلومات صحية حساسة في
                  هذا النموذج الأولي.
                </span>
              </div>
            </div>
          </div>

          {/* Hero support cards */}
          <div className="mt-12 grid overflow-hidden rounded-[26px] bg-[#082237] shadow-[0_18px_50px_rgba(8,34,55,0.16)] sm:grid-cols-3">
            {[
              {
                title: "خبرات طبية متنوعة",
                text: "استكشاف خيارات الرعاية عبر مجموعة واسعة من التخصصات الطبية.",
              },
              {
                title: "تنسيق التواصل والمواعيد",
                text: "المساعدة في التواصل والخطوات المتعلقة بالمواعيد حسب التوافر.",
              },
              {
                title: "دعم عملي للرحلة",
                text: "مناقشة التنسيق الإداري واحتياجات السفر عند توفر الخدمة.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`p-6 text-center sm:p-7 ${
                  i < 2
                    ? "border-b border-white/10 sm:border-b-0 sm:border-l"
                    : ""
                }`}
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#C88A2B] to-[#F8DF8B]">
                  {i === 0 ? (
                    <Stethoscope className="h-5 w-5 text-[#082237]" />
                  ) : i === 1 ? (
                    <Users className="h-5 w-5 text-[#082237]" />
                  ) : (
                    <Plane className="h-5 w-5 text-[#082237]" />
                  )}
                </div>

                <h3 className="mt-4 font-serif text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why UAE */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#E6B94F]">
              وجهة رعاية صحية عالمية
            </p>

            <h2 className={`mt-4 ${sectionTitle}`}>
              لماذا يستكشف المرضى الدوليون خيارات العلاج في الإمارات؟
            </h2>

            <p className="mt-5 text-base leading-8 text-[#082237]/80 sm:text-lg">
              تضم دولة الإمارات العربية المتحدة مجموعة متنوعة من مقدمي
              الرعاية الصحية والخدمات الطبية ضمن بيئة متصلة بالعالم. وتعتمد
              الخيارات المناسبة على احتياجات كل مريض وتقييم المهنيين الصحيين
              المرخصين.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Stethoscope className="h-6 w-6 text-[#E6B94F]" />,
                title: "خبرات طبية",
                text: "مهنيون صحيون بخبرات وتدريبات سريرية متنوعة.",
              },
              {
                icon: <Building2 className="h-6 w-6 text-[#E6B94F]" />,
                title: "مستشفيات وتقنيات",
                text: "استثمار في المرافق الطبية والتشخيص وتقنيات العلاج.",
              },
              {
                icon: <Users className="h-6 w-6 text-[#E6B94F]" />,
                title: "رعاية متعددة التخصصات",
                text: "قد تتطلب بعض الحالات تنسيق التواصل بين عدة تخصصات.",
              },
              {
                icon: <Plane className="h-6 w-6 text-[#E6B94F]" />,
                title: "اتصال عالمي",
                text: "ترتبط دولة الإمارات بوجهات عديدة حول العالم.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] bg-[#082237] p-6 text-white"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  {item.icon}
                </div>

                <h3 className="font-serif text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16 Specialties */}
      <section className="bg-[#FAF8F2] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#E6B94F]">
              التخصصات الطبية
            </p>

            <h2 className={`mt-4 ${sectionTitle}`}>
              استكشف مجالات الرعاية الصحية في الإمارات
            </h2>

            <p className="mt-5 text-base leading-8 text-[#082237]/80">
              يمكن لفريق PFW مناقشة استفسارك والمساعدة في تنسيق التواصل مع
              مقدمي الرعاية الصحية المعنيين حسب التوافر. ويحدد مقدم الرعاية
              الملاءمة الطبية.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map(([title, text]) => (
              <div key={title} className={cardClass}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#082237]">
                  <CheckCircle2 className="h-6 w-6 text-[#E6B94F]" />
                </div>

                <h3 className="font-serif text-xl font-bold text-[#082237]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#082237]/80">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs leading-6 text-[#082237]/70">
            لا تمثل هذه القائمة توصية طبية أو تأكيدًا على توافر خدمة أو
            ملاءمتها لحالة معينة.
          </p>
        </div>
      </section>

      {/* Healthcare Across the UAE */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#E6B94F]">
              الرعاية الصحية في جميع أنحاء الإمارات
            </p>

            <h2 className={`mt-4 ${sectionTitle}`}>
              استكشف خيارات الرعاية الصحية في دولة الإمارات
            </h2>

            <p className="mt-5 text-base leading-8 text-[#082237]/80">
              لست بحاجة إلى اختيار إمارة معينة قبل إرسال استفسارك. أخبرنا
              باحتياجاتك، وسنناقش خيارات التنسيق الممكنة مع مقدمي الرعاية
              الصحية في مختلف أنحاء دولة الإمارات، حسب التخصص والتوافر.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {uaeLocations.map((location) => (
              <div
                key={location.title}
                className="rounded-[28px] border border-[#082237]/10 bg-[#FAF8F2] p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#082237]">
                  <MapPin className="h-5 w-5 text-[#E6B94F]" />
                </div>

                <h3 className="mt-5 font-serif text-2xl font-bold text-[#082237]">
                  {location.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#082237]/80">
                  {location.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[26px] border border-[#C88A2B]/20 bg-[#FAF8F2] p-6 text-center">
            <p className="text-sm leading-7 text-[#082237]/80">
              تشمل دولة الإمارات سبع إمارات: دبي، أبوظبي، الشارقة، عجمان،
              أم القيوين، رأس الخيمة والفجيرة. يعتمد توفر مقدمي الرعاية
              والخدمات على التخصص والاحتياجات والتوافر في وقت الاستفسار.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-[#FAF8F2] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#E6B94F]">
              كيف نعمل
            </p>

            <h2 className={`mt-4 ${sectionTitle}`}>
              أربع خطوات لبدء رحلتك العلاجية
            </h2>

            <p className="mt-5 text-base leading-8 text-[#082237]/80">
              من الاستفسار الأول إلى فهم الخطوات العملية التالية، توفر PFW
              نقطة تنسيق واحدة لرحلتك العلاجية.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.n}
                className="rounded-[26px] border border-[#082237]/10 bg-white p-7"
              >
                <p className="text-sm font-bold tracking-[0.2em] text-[#E6B94F]">
                  {step.n}
                </p>

                <h3 className="mt-4 font-serif text-xl font-bold text-[#082237]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#082237]/80">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Already Have a Diagnosis */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#E6B94F]">
                هل لديك تشخيص بالفعل؟
              </p>

              <h2 className={`mt-4 ${sectionTitle}`}>
                استكشف خطواتك التالية في الإمارات
              </h2>

              <p className="mt-5 text-base leading-8 text-[#082237]/80">
                إذا كان لديك تشخيص أو خطة علاج مقترحة بالفعل، يمكنك إخبارنا
                بنوع الدعم الذي تبحث عنه. يمكن لفريقنا شرح خيارات التنسيق
                المتاحة وكيف يمكن ترتيب التواصل مع مقدمي الرعاية المعنيين.
              </p>

              <a
                href="#case-enquiry"
                className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-[#C88A2B] via-[#E6B94F] to-[#F8DF8B] px-7 py-3 text-sm font-bold text-[#082237]"
              >
                أرسل استفسارك
                <ArrowLeft className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {nextStepOptions.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[#082237]/10 bg-[#FAF8F2] p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E6B94F]" />

                  <span className="text-sm leading-6 text-[#082237]/85">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#FAF8F2] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#E6B94F]">
              الأسئلة الشائعة
            </p>

            <h2 className={`mt-4 ${sectionTitle}`}>
              إجابات عن أسئلتك
            </h2>
          </div>

          <div className="mt-10 divide-y divide-[#082237]/10 rounded-[26px] border border-[#082237]/10 bg-white px-6 sm:px-8">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="cursor-pointer list-none pr-6 font-semibold text-[#082237]">
                  {faq.q}

                  <span className="float-right text-[#E6B94F] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-3 text-sm leading-7 text-[#082237]/80">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#082237] py-14 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-6 sm:px-8 md:flex-row md:items-center lg:px-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#F0C45B]">
              بوابتك إلى الرعاية الصحية في الإمارات
            </p>

            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-semibold text-white sm:text-4xl">
              قد تبدأ رحلتك بمحادثة واحدة
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
              أخبرنا ببلد إقامتك ونوع الدعم الذي تبحث عنه، وسنوضح الخطوات
              المتاحة لاستفسارك.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-64">
            <a
              href="#case-enquiry"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C88A2B] via-[#E6B94F] to-[#F8DF8B] px-7 py-3 text-sm font-bold text-[#082237]"
            >
              تواصل مع منسق رعاية من PFW
              <ArrowLeft className="h-4 w-4" />
            </a>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        dir="rtl"
        className="bg-[#082237] px-6 pb-10 pt-8 sm:px-8 sm:pb-12"
      >
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 text-center sm:px-8 sm:py-6">
          <p className="mx-auto max-w-4xl text-xs leading-7 text-white/70 sm:text-sm sm:leading-8">
            تقدم Patients First Worldwide خدمات دعم المرضى والتنسيق غير
            الطبي. لا تقدم PFW التشخيص أو العلاج أو المشورة الطبية، ولا تضمن
            توافر المواعيد أو النتائج العلاجية. وتبقى القرارات الطبية من
            مسؤولية مقدمي الرعاية الصحية المرخصين. في حالات الطوارئ الطبية،
            يرجى الاتصال بخدمات الطوارئ المحلية فورًا.
          </p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-[#082237]/95 p-2 backdrop-blur sm:hidden">
        <a
          href="#case-enquiry"
          className="rounded-full bg-gradient-to-r from-[#C88A2B] to-[#F8DF8B] px-3 py-3 text-center text-sm font-bold text-[#082237]"
        >
          ابدأ الاستفسار
        </a>

        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-3 py-3 text-center text-sm font-bold text-white"
        >
          واتساب
        </a>
      </div>
    </main>
  );
}