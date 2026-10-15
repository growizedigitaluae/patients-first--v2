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
    "هل تخطط للسفر إلى الإمارات للعلاج؟ تساعدك Patients First Worldwide في تنسيق التواصل مع مقدمي الرعاية الصحية والمواعيد واحتياجات السفر العملية.",
  alternates: {
    canonical: `${site.url}/ar/treatment-in-uae`,
  },
  openGraph: {
    title: "السياحة العلاجية في الإمارات | Patients First Worldwide",
    description:
      "دعم غير طبي وتنسيق عملي لرحلتك العلاجية إلى الإمارات.",
    url: `${site.url}/ar/treatment-in-uae`,
    siteName: site.name,
    type: "website",
  },
};

const specialties = [
  "أمراض القلب وجراحة القلب",
  "الأورام وأمراض الدم",
  "جراحة العظام والعمود الفقري",
  "طب الأعصاب وجراحة الأعصاب",
  "صحة المرأة والخصوبة",
  "طب الأطفال وحديثي الولادة",
  "طب العيون",
  "المسالك البولية وأمراض الكلى",
  "أمراض الجهاز الهضمي والكبد",
  "زراعة الأعضاء",
  "إعادة التأهيل والتعافي",
  "طب الأسنان وجراحة الفم",
  "رعاية السمنة والتمثيل الغذائي",
  "الجراحة التجميلية والترميمية",
  "الفحوصات الصحية الشاملة للمديرين التنفيذيين",
  "الحالات النادرة والمعقدة",
];

const faqs = [
  {
    q: "هل تقدم Patients First Worldwide العلاج الطبي؟",
    a: "لا. تقدم Patients First Worldwide خدمات دعم المرضى والتنسيق غير السريري. التشخيص والمشورة الطبية والتوصيات العلاجية والقرارات السريرية هي من مسؤولية المهنيين الصحيين المرخصين.",
  },
  {
    q: "هل يمكنكم ضمان مستشفى أو موعد أو نتيجة علاجية؟",
    a: "لا. يحدد مقدمو الرعاية الصحية الملاءمة الطبية والمواعيد المتاحة والقرارات العلاجية. ولا تضمن Patients First Worldwide المواعيد أو النتائج العلاجية.",
  },
  {
    q: "ما تكلفة خدمات التنسيق؟",
    a: "تختلف الرسوم بحسب الخدمات المطلوبة. بعد مراجعة استفسارك، نوضح نطاق الخدمة والتكاليف المطبقة قبل موافقتك على المتابعة.",
  },
  {
    q: "هل يمكنكم مساعدتي في اختيار المكان المناسب للرعاية داخل الإمارات؟",
    a: "ليس من الضروري أن تحدد مدينة معينة قبل التواصل معنا. يمكنك إخبارنا بما تبحث عنه وموقعك المفضل، وسنناقش خيارات التنسيق المتاحة في مختلف أنحاء الإمارات، حسب توافر مقدمي الرعاية.",
  },
  {
    q: "هل أشارك تقاريري الطبية عبر هذا النموذج؟",
    a: "يرجى عدم إدخال السجلات الطبية التفصيلية أو المعلومات الصحية الحساسة في هذا الاستفسار الأولي. إذا كانت المستندات مطلوبة، يمكن لفريقنا توضيح الطريقة المناسبة لمشاركتها.",
  },
];

const sectionTitle =
  "font-serif text-3xl font-semibold tracking-tight text-[#082237] sm:text-4xl lg:text-[44px]";

export default function ArabicInboundTreatmentUAEPage() {
  return (
    <main
      dir="rtl"
      lang="ar"
      className="overflow-hidden bg-[#FAF8F2] text-[#082237]"
    >
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#F8F6EF]">
        <div className="absolute -left-32 -top-32 -z-0 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#C88A2B]/15 via-[#F7D77D]/10 to-transparent blur-3xl" />

        <div className="absolute -right-40 bottom-[-240px] -z-0 h-[520px] w-[520px] rounded-full bg-[#082237]/[0.035] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-12 pt-28 sm:px-8 sm:pb-16 lg:px-12 lg:pt-32 xl:px-16">
          <div className="grid items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr] xl:gap-12">
            {/* HERO CONTENT */}
            <div className="flex flex-col">
              <div>
                <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#082237] sm:text-5xl lg:text-[58px]">
                  عندما تكون الصحة هي الأهم، اختر وجهة صُممت للتميز.
                </h1>

                {/* Royal Navy Blue for readability */}
                <h2 className="mt-5 text-xl font-semibold leading-8 text-[#082237] sm:text-2xl">
                  رعاية صحية متقدمة في الإمارات. اشعر بالتفهم والاهتمام بعيدًا
                  عن وطنك.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-[#082237]/85 sm:text-lg">
                  تجمع دولة الإمارات بين مستشفيات حاصلة على اعتماد JCI ومراكز
                  تميز وتقنيات طبية متقدمة، إلى جانب فرق متعددة اللغات وبيئة
                  متنوعة ثقافيًا، حيث يمكن للمرضى من مختلف أنحاء العالم أن
                  يشعروا بالتفهم والاحترام والترحيب.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-8 text-[#082237]/80">
                  تستمع Patients First Worldwide إلى ما يهمك وتساعد في تنسيق
                  مواعيد الأطباء المتخصصين، والمساعدة اللغوية، ودعم السفر
                  والإقامة، حتى تشعر أنت وعائلتك بالدعم في كل خطوة.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#case-enquiry"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C88A2B] via-[#E6B94F] to-[#F8DF8B] px-7 py-3 text-sm font-bold text-[#082237] shadow-[0_10px_24px_rgba(200,138,43,0.24)] transition duration-300 hover:-translate-y-0.5"
                  >
                    تحدث مع Patients First Worldwide
                    <ArrowLeft className="h-4 w-4" />
                  </a>

                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#082237]/15 bg-white/90 px-7 py-3 text-sm font-bold text-[#082237] shadow-sm transition duration-300 hover:border-[#C88A2B]/60 hover:bg-white"
                  >
                    <MessageCircle className="h-4 w-4" />
                    تواصل معنا عبر واتساب
                  </a>
                </div>

                <div className="mt-5 max-w-xl border-r-2 border-[#C88A2B]/60 pr-4 text-xs leading-5 text-[#082237]/70">
                  تقدم Patients First Worldwide خدمات تنسيق غير سريرية. ويقدم
                  المهنيون الصحيون المرخصون التقييم الطبي والمشورة والعلاج.
                </div>
              </div>

              {/* HERO IMAGE */}
              <div className="mt-8 overflow-hidden rounded-[28px] border border-white/80 bg-white p-2 shadow-[0_18px_50px_rgba(8,34,55,0.12)]">
                <div className="relative h-[220px] overflow-hidden rounded-[22px] sm:h-[260px]">
                  <Image
                    src="/about-us-2a.webp"
                    alt="Patients First Worldwide دعم المرضى"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition duration-700 hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#082237]/55 via-transparent to-transparent" />

                  <div className="absolute bottom-0 right-0 left-0 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F8DF8B]">
                      Patients First Worldwide
                    </p>

                    <p className="mt-1 max-w-md text-sm font-medium leading-6 text-white">
                      نساعد المرضى الدوليين على التنقل في رحلتهم العلاجية
                      بوضوح ودعم واهتمام.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div
              id="case-enquiry"
              className="scroll-mt-24 flex h-full flex-col rounded-[30px] border border-white/80 bg-white/95 p-7 shadow-[0_25px_80px_rgba(8,34,55,0.14)] backdrop-blur sm:p-9 lg:p-10"
            >
              <Suspense
                fallback={
                  <div className="min-h-[420px] animate-pulse rounded-2xl bg-[#FAF8F2]" />
                }
              >
                <ArabicInboundContactForm />
              </Suspense>

              <div className="mt-5 flex items-start gap-2 rounded-2xl bg-[#FAF8F2] p-4 text-xs leading-5 text-[#082237]/70">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#E6B94F]" />

                <span>
                  يرجى عدم إدخال تقارير طبية مفصلة أو معلومات صحية حساسة في
                  هذا النموذج الأولي. يمكن لفريقنا توضيح خطوات مشاركة المستندات
                  المناسبة عند الحاجة.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NEXT STEPS
      ========================================================= */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#082237]">
                هل لديك تشخيص بالفعل؟
              </p>

              <h2 className={`mt-3 ${sectionTitle}`}>
                استكشف خطواتك التالية في الإمارات
              </h2>

              <p className="mt-4 text-base leading-8 text-[#082237]/80">
                إذا كان لديك تشخيص أو خطة علاج مقترحة بالفعل، يمكنك إخبارنا
                بنوع الدعم الذي تبحث عنه. يمكن لفريقنا شرح خيارات التنسيق
                المتاحة وكيف يمكن ترتيب التواصل مع مقدمي الرعاية المعنيين.
              </p>

              <a
                href="#case-enquiry"
                className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-[#C88A2B] via-[#E6B94F] to-[#F8DF8B] px-7 py-3 text-sm font-bold text-[#082237]"
              >
                أرسل استفسارك
                <ArrowLeft className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "استشارات مع أطباء متخصصين",
                "استفسارات الرأي الطبي الثاني",
                "استفسارات الجراحات المعقدة",
                "استفسارات رعاية الأورام والقلب",
                "الفحوصات والتشخيصات المتقدمة",
                "الخصوبة وأطفال الأنابيب",
                "استفسارات رعاية الأطفال",
                "إعادة التأهيل والرعاية المعقدة",
              ].map((item) => (
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

      {/* =========================================================
          WHY UAE
      ========================================================= */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#082237]">
              وجهة عالمية للرعاية الصحية
            </p>

            <h2 className={`mt-3 ${sectionTitle}`}>
              لماذا تختار الإمارات للعلاج؟
            </h2>

            <p className="mt-4 text-base leading-8 text-[#082237]/80 sm:text-lg">
              تجمع دولة الإمارات بين مستشفيات حاصلة على اعتماد JCI وأطباء
              متخصصين مدربين دوليًا وخيارات علاجية متقدمة. ومع Patients First
              Worldwide، يمكنك استكشاف هذه الخبرات بدعم مصمم خصيصًا لتلبية
              احتياجاتك.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Building2 className="h-6 w-6 text-[#E6B94F]" />,
                title: "مستشفيات معتمدة دوليًا",
                text: "يعكس اعتماد JCI معايير تم تقييمها بشكل مستقل للجودة وسلامة المرضى.",
              },
              {
                icon: <Stethoscope className="h-6 w-6 text-[#E6B94F]" />,
                title: "خيارات علاجية متقدمة",
                text: "الجراحة الروبوتية والتصوير المتقدم والإجراءات طفيفة التوغل في المراكز المتخصصة.",
              },
              {
                icon: <Users className="h-6 w-6 text-[#E6B94F]" />,
                title: "خبرات عبر مختلف التخصصات",
                text: "فرق متخصصة في الأورام ورعاية القلب وجراحة العظام وغيرها، مع التعاون في الحالات المعقدة.",
              },
              {
                icon: <Plane className="h-6 w-6 text-[#E6B94F]" />,
                title: "ترحيب بالمرضى من مختلف أنحاء العالم",
                text: "خدمات للمرضى الدوليين ومساعدة لغوية واحترام للاحتياجات الثقافية والعائلية.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] bg-[#082237] p-6 text-white"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  {item.icon}
                </div>

                <h3 className="font-serif text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SPECIALTIES
      ========================================================= */}
      <section className="bg-[#FAF8F2] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#082237]">
              الرعاية عبر مختلف التخصصات
            </p>

            <h2 className={`mt-3 ${sectionTitle}`}>
              استكشف التخصصات الطبية في الإمارات
            </h2>

            <p className="mt-4 text-base leading-8 text-[#082237]/80">
              سواء كنت تبحث عن علاج للسرطان أو رعاية للقلب أو جراحة العظام أو
              دعم الخصوبة أو أي تخصص آخر، تساعدك Patients First Worldwide على
              التواصل مع فرق الرعاية الصحية المتخصصة في الإمارات وتنسيق
              خطواتك التالية باهتمام شخصي.
            </p>
          </div>

          {/* 16 SPECIALTY COMPACT GRID */}
          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((title) => (
              <div
                key={title}
                className="group flex min-h-[72px] items-center gap-3 rounded-[18px] border border-[#082237]/10 bg-white px-4 py-3.5 shadow-[0_2px_10px_rgba(8,34,55,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E6B94F]/60 hover:bg-[#FFFDF7] hover:shadow-[0_10px_24px_rgba(8,34,55,0.08)]"
              >
                {/* SIMPLE GOLD CHECK */}
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center text-[18px] font-bold leading-none text-[#E6B94F] transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  ✓
                </span>

                {/* Keep text Royal Navy Blue even on hover */}
                <h3 className="font-serif text-[15px] font-semibold leading-5 text-[#082237]">
                  {title}
                </h3>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-4xl text-center text-xs leading-6 text-[#082237]/70 sm:text-sm">
            لا تمثل هذه القائمة توصية طبية أو تأكيدًا على توافر خدمة أو
            ملاءمتها لحالة معينة.
          </p>
        </div>
      </section>

      {/* =========================================================
          HEALTHCARE ACROSS UAE
      ========================================================= */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#082237]">
              الرعاية الصحية في جميع أنحاء الإمارات
            </p>

            <h2 className={`mt-3 ${sectionTitle}`}>
              خيارات الرعاية الصحية في جميع أنحاء الإمارات
            </h2>

            <p className="mt-4 text-base leading-8 text-[#082237]/80">
              لست بحاجة إلى اختيار إمارة قبل بدء الاستفسار. أخبرنا بما تبحث
              عنه، وموقعك المفضل إن وجد، ونوع دعم التنسيق الذي تحتاج إليه.
              يمكننا مناقشة الخيارات المتاحة في جميع أنحاء دولة الإمارات،
              حسب توافر مقدمي الرعاية.
            </p>
          </div>

          <div className="mt-8 rounded-[30px] border border-[#082237]/10 bg-[#FAF8F2] p-7 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082237]">
                  <MapPin className="h-7 w-7 text-[#E6B94F]" />
                </div>

                <h3 className="mt-4 font-serif text-2xl font-bold text-[#082237] sm:text-3xl">
                  وجهتك المفضلة في الإمارات
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#082237]/80">
                  سواء كنت تفضل دبي أو أبوظبي أو الشارقة أو أي إمارة أخرى،
                  يمكنك إخبارنا بالمكان الذي ترغب في استكشاف خيارات الرعاية
                  الصحية فيه.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "دبي",
                  "أبوظبي",
                  "الشارقة",
                  "عجمان",
                  "رأس الخيمة",
                  "الفجيرة",
                  "أم القيوين",
                  "لم تحدد وجهتك بعد",
                ].map((location) => (
                  <div
                    key={location}
                    className="flex items-center gap-3 rounded-2xl border border-[#082237]/10 bg-white px-5 py-3.5"
                  >
                    <MapPin className="h-5 w-5 shrink-0 text-[#E6B94F]" />

                    <span className="text-sm font-semibold text-[#082237]">
                      {location}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-[#082237]/10 pt-5 text-center">
              <p className="text-sm leading-7 text-[#082237]/75">
                لست متأكدًا من الموقع الأنسب لاحتياجاتك؟ لا بأس. ابدأ
                باستفسارك، وسيساعدك فريق تنسيق الرعاية لدينا على فهم الخيارات
                المتاحة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE WORK
      ========================================================= */}
      <section className="bg-[#FAF8F2] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#082237]">
              كيف نعمل
            </p>

            <h2 className={`mt-3 ${sectionTitle}`}>
              رحلتك العلاجية، بدعم منا
            </h2>

            <p className="mt-4 text-base leading-8 text-[#082237]/80 sm:text-lg">
              قد يبدو البحث عن العلاج بعيدًا عن الوطن أمرًا مرهقًا. في
              Patients First Worldwide، نبدأ بالاستماع إليك، ثم نساعد في
              تنسيق التفاصيل حتى تشعر أنت وعائلتك بالدعم طوال رحلتكم.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "٠١",
                title: "نبدأ بالاستماع إليك",
                text: "ساعدنا على فهم ما دفعك إلى التواصل معنا وما يهمك أكثر. سواء كان لديك علاج محدد في ذهنك أو لم تكن متأكدًا من أين تبدأ، نحن هنا للاستماع.",
              },
              {
                n: "٠٢",
                title: "دعم مصمم خصيصًا لتلبية احتياجاتك",
                text: "توجه احتياجاتك وتفضيلاتك ومخاوفك نوع الدعم الذي نقدمه. سيتحدث معك منسق Patients First Worldwide ويوضح كيف يمكننا مساعدتك، بالوتيرة التي تناسبك.",
              },
              {
                n: "٠٣",
                title: "نساعدك على استكشاف خياراتك",
                text: "نتواصل مع فرق الرعاية الصحية المعنية لمساعدتك في الوصول إلى المراجعات المتخصصة وفهم خيارات العلاج المقترحة. وتأتي المشورة الطبية والتوصيات العلاجية مباشرة من مقدمي الرعاية الصحية.",
              },
              {
                n: "٠٤",
                title: "ننسق التفاصيل",
                text: "عندما تكون مستعدًا، نساعد في تنسيق المواعيد ودعم السفر المتاح. ونوضح الترتيبات والتكاليف بوضوح قبل التزامك، ونبقى جهة تواصلك طوال الرحلة.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="rounded-[26px] border border-[#082237]/10 bg-white p-6"
              >
                <p className="text-sm font-bold tracking-[0.2em] text-[#082237]">
                  {step.n}
                </p>

                <h3 className="mt-3 font-serif text-xl font-bold text-[#082237]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#082237]/80">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <h3 className="font-serif text-2xl font-semibold text-[#082237] sm:text-3xl">
              لنخطُ الخطوة التالية معًا.
            </h3>

            <p className="mt-3 text-base leading-8 text-[#082237]/80">
              لا تحتاج إلى معرفة كل شيء الآن. ساعدنا على فهم احتياجاتك،
              وسنرشدك خلال الخطوات التالية.
            </p>

            <a
              href="#case-enquiry"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C88A2B] via-[#E6B94F] to-[#F8DF8B] px-7 py-3 text-sm font-bold text-[#082237]"
            >
              تحدث مع فريق Patients First Worldwide
              <ArrowLeft className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-[#FAF8F2] py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#082237]">
              الأسئلة الشائعة
            </p>

            <h2 className={`mt-3 ${sectionTitle}`}>
              قبل أن تبدأ
            </h2>
          </div>

          <div className="mt-8 divide-y divide-[#082237]/10 rounded-[26px] border border-[#082237]/10 bg-white px-6 sm:px-8">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="cursor-pointer list-none pr-6 font-semibold text-[#082237]">
                  {f.q}

                  <span className="float-left text-[#E6B94F] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-2 text-sm leading-7 text-[#082237]/80">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#082237] py-12 sm:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:px-8 md:flex-row md:items-center lg:px-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#F0C45B]">
              بوابتك إلى الرعاية الصحية في الإمارات
            </p>

            <h2 className="mt-2 max-w-3xl font-serif text-3xl font-semibold text-white sm:text-4xl">
              قد تبدأ رحلتك بمحادثة واحدة.
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
              أخبرنا ببلد إقامتك ونوع الدعم الذي تبحث عنه، وسنوضح الخطوات
              المتاحة لاستفسارك.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-64">
            <a
              href="#case-enquiry"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C88A2B] via-[#E6B94F] to-[#F8DF8B] px-7 py-3 text-sm font-bold text-[#082237]"
            >
              اطلب مكالمة من منسق رعاية لدى Patients First Worldwide
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

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer
        dir="rtl"
        className="bg-[#082237] px-6 pb-10 pt-8 sm:px-8 sm:pb-12"
      >
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 text-center sm:px-8 sm:py-6">
          <p className="mx-auto max-w-4xl text-xs leading-6 text-white/70 sm:text-sm sm:leading-7">
            تقدم Patients First Worldwide خدمات دعم المرضى والتنسيق غير
            الطبي. لا تقدم Patients First Worldwide التشخيص أو العلاج أو
            المشورة الطبية، ولا تضمن توافر المواعيد أو النتائج العلاجية.
            وتبقى القرارات الطبية من مسؤولية مقدمي الرعاية الصحية المرخصين.
            في حالات الطوارئ الطبية، يرجى الاتصال بخدمات الطوارئ المحلية
            فورًا.
          </p>
        </div>
      </footer>

      {/* =========================================================
          MOBILE STICKY CTA
      ========================================================= */}
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