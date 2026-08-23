import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaBand, Disclaimer } from "@/components/ui";
import { guides, getGuide } from "@/data/guides";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata(props: PageProps<"/guides/[slug]">) {
  const { slug } = await props.params;
  const guide = getGuide(slug);
  return {
    title: guide ? guide.title : "Guide",
    description: guide?.excerpt,
  };
}

export default async function GuidePage(props: PageProps<"/guides/[slug]">) {
  const { slug } = await props.params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <main>
      <section className="relative pt-40 pb-4 px-6 overflow-hidden bg-ivory">
        <div className="absolute inset-x-0 top-16 sm:top-20 bottom-0 z-0">
          <Image src={guide.image} alt="" fill className="object-cover object-top opacity-95" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-ivory/85 to-ivory" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-gold-dark uppercase tracking-widest text-sm md:text-base font-bold mb-4">
            {guide.category} · {guide.readTime}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight text-midnight">{guide.title}</h1>
          <p className="text-navy mt-5 text-lg leading-relaxed">{guide.excerpt}</p>
        </div>
      </section>

      <article className="pt-8 pb-14 px-6 max-w-3xl mx-auto">
        <div className="space-y-12">
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-serif text-midnight mb-4">{section.heading}</h2>
              <div className="space-y-4">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-navy leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 bg-royal rounded-3xl p-8 text-white text-center">
          <h2 className="font-serif text-2xl mb-3">Need a Hand with the Practical Side?</h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-lg mx-auto">
            This is exactly the kind of thing our coordinators handle every day. Start a
            conversation and let us take care of the details.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition shadow-lg"
          >
            Talk to Our Team
          </Link>
        </div>

        <div className="mt-10">
          <Link href="/guides" className="text-gold-dark font-semibold text-sm hover:underline">
            ← Back to all guides
          </Link>
        </div>

        <div className="mt-12">
          <Disclaimer />
        </div>
      </article>

      <CtaBand />
    </main>
  );
}
