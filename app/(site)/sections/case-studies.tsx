import { caseStudies } from "@/app/data/case-studies";
import { getDictionary } from "@/app/i18n/dictionary";
import type { Locale } from "@/app/i18n/locale";

const CaseStudies = ({ locale }: { locale: Locale }) => {
  const teaserDict = getDictionary(locale).caseStudiesTeaser;
  const dict = getDictionary(locale).caseStudies;

  return (
    <section
      id="casos"
      aria-labelledby="case-studies-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
            {teaserDict.eyebrow}
          </p>
          <h2
            id="case-studies-title"
            className="text-3xl font-semibold tracking-tight text-black sm:text-4xl"
          >
            {teaserDict.title}
          </h2>
          <p className="max-w-2xl text-base text-black/70">{dict.description}</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {caseStudies.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white px-6 py-6 shadow-lg shadow-indigo-500/5 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#EEF0FB] via-transparent to-[#E0E4FA] opacity-0 transition duration-200 group-hover:opacity-100" />
              <div className="relative space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-black">
                    {item.title[locale]}
                  </h3>
                  <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/70">
                    {item.focus[locale]}
                  </span>
                </div>
                <p className="text-lg font-semibold text-[#4F46E5]">
                  {item.result[locale]}
                </p>
                <p className="text-sm leading-relaxed text-black/70">
                  {item.impact[locale]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
