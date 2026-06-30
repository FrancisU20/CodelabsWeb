import Link from "next/link";
import { caseStudies } from "@/app/data/case-studies";
import { getDictionary } from "@/app/i18n/dictionary";
import { getRoutes } from "@/app/i18n/paths";
import type { Locale } from "@/app/i18n/locale";

const featured = caseStudies.slice(0, 3);

const CaseStudiesTeaser = ({ locale }: { locale: Locale }) => {
  const dict = getDictionary(locale).caseStudiesTeaser;
  const routes = getRoutes(locale);

  return (
    <section
      aria-labelledby="case-studies-teaser-title"
      className="bg-[#EEF0FB] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
              {dict.eyebrow}
            </p>
            <h2
              id="case-studies-teaser-title"
              className="text-3xl font-semibold tracking-tight text-black sm:text-4xl"
            >
              {dict.title}
            </h2>
          </div>
          <Link
            href={routes.casos}
            className="text-sm font-semibold text-[#4F46E5] underline-offset-4 hover:underline"
          >
            {dict.cta}
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-black/5 bg-white px-6 py-6 shadow-sm shadow-indigo-500/5"
            >
              <p className="text-sm font-semibold text-black/70">
                {item.title[locale]}
              </p>
              <p className="mt-2 text-lg font-semibold text-[#4F46E5]">
                {item.result[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesTeaser;
