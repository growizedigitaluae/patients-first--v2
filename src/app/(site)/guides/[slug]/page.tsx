import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaBand, Disclaimer } from "@/components/ui";
import { guides, getGuide } from "@/data/guides";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<"/guides/[slug]">,
) {
  const { slug } = await props.params;
  const guide = getGuide(slug);

  return {
    title: guide ? guide.title : "Guide",
    description: guide?.excerpt,
  };
}

export default async function GuidePage(
  props: PageProps<"/guides/[slug]">,
) {
  const { slug } = await props.params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  /*
   * The imported working document contained internal strategy
   * material before the actual patient-facing article.
   *
   * The first imported section used the article title as its
   * heading, so prevent that internal section from appearing
   * publicly while the source data is being cleaned.
   */
  const visibleSections = guide.sections.filter(
    (section, index) =>
      !(
        index === 0 &&
        section.heading.trim() === guide.title.trim()
      ),
  );

  /*
   * For long editorial titles, a colon is a natural visual
   * breakpoint. Example:
   *
   * Before You Travel Abroad for Medical Treatment:
   * 10 Questions Every Patient Should Ask
   *
   * This gives the long PFW titles a consistent editorial
   * hierarchy without relying on browser text balancing.
   */
  const titleParts = guide.title.split(": ");

  return (
    <main>
      {/* =========================================================
          ARTICLE HERO
          ========================================================= */}
      <section className="relative overflow-hidden bg-ivory px-6 pt-32 pb-12 sm:pt-36 sm:pb-14">
        <div className="absolute inset-x-0 top-16 bottom-0 z-0 sm:top-20">
          <Image
            src={guide.image}
            alt=""
            fill
            priority
            className="object-cover object-top opacity-90"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-ivory/90 to-ivory" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          {/* Category / reading time */}
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark sm:text-sm">
            {guide.category} · {guide.readTime}
          </p>

          {/* Article title */}
          <h1 className="mx-auto max-w-6xl font-serif text-[2rem] font-medium leading-[1.16] tracking-[-0.015em] text-midnight sm:text-[2.2rem] md:text-[2.45rem] lg:text-[2.65rem] xl:text-[2.8rem]">
            {titleParts.length > 1 ? (
              <>
                <span className="block">{titleParts[0]}:</span>
                <span className="mt-1 block">
                  {titleParts.slice(1).join(": ")}
                </span>
              </>
            ) : (
              <span className="block">{guide.title}</span>
            )}
          </h1>

          {/* Article excerpt */}
          <p className="mx-auto mt-7 max-w-3xl text-base leading-[1.75] text-navy md:text-[1.05rem]">
            {guide.excerpt}
          </p>
        </div>
      </section>

      {/* =========================================================
          ARTICLE CONTENT
          ========================================================= */}
      <article className="px-6 pt-10 pb-16 sm:pt-12 sm:pb-20">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-12">
            {visibleSections.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-4 font-serif text-2xl font-medium leading-[1.25] text-midnight md:text-[1.7rem]">
                  {section.heading}
                </h2>

                <div className="space-y-4">
                  {section.body.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-[1rem] leading-[1.8] text-navy md:text-[1.05rem]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* =====================================================
              ARTICLE CTA
              ===================================================== */}
          <div className="mt-14 rounded-3xl bg-royal p-8 text-center text-white md:p-10">
            <h2 className="mb-3 font-serif text-2xl font-medium md:text-3xl">
              Need a Hand with the Practical Side?
            </h2>

            <p className="mx-auto mb-6 max-w-lg text-sm leading-relaxed text-slate-300 md:text-base">
              Our coordinators can help you understand the practical next
              steps, organise your information and navigate the healthcare
              journey.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#C88A2B] to-[#FCDA7B] px-8 py-4 font-semibold text-royal shadow-lg transition hover:opacity-95"
            >
              Talk to Our Team
            </Link>
          </div>

          {/* =====================================================
              BACK TO GUIDES
              ===================================================== */}
          <div className="mt-10">
            <Link
              href="/guides"
              className="text-sm font-semibold text-gold-dark hover:underline"
            >
              ← Back to all guides
            </Link>
          </div>

          {/* =====================================================
              DISCLAIMER
              ===================================================== */}
          <div className="mt-12">
            <Disclaimer />
          </div>
        </div>
      </article>

      {/* =========================================================
          GLOBAL CTA
          ========================================================= */}
      <CtaBand />
    </main>
  );
}