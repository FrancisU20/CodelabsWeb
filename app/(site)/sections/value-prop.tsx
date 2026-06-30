import Link from "next/link";
import { getDictionary } from "@/app/i18n/dictionary";
import { getRoutes } from "@/app/i18n/paths";
import type { Locale } from "@/app/i18n/locale";

const ValueProp = ({ locale }: { locale: Locale }) => {
  const dict = getDictionary(locale).valueProp;
  const routes = getRoutes(locale);

  return (
    <section
      id="propuesta"
      aria-labelledby="value-prop-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
            {dict.eyebrow}
          </p>
          <h2
            id="value-prop-title"
            className="text-3xl font-semibold tracking-tight text-black sm:text-4xl"
          >
            {dict.title}
          </h2>
          <p className="text-base text-black/70">{dict.description}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {dict.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-black/5 bg-white px-6 py-6 shadow-sm shadow-indigo-500/5"
            >
              <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#4F46E5] to-[#818CF8]" />
              <p className="text-base font-semibold text-black">{pillar.title}</p>
              <p className="mt-2 text-sm text-black/70">{pillar.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href={routes.nosotros}
            className="text-sm font-semibold text-[#4F46E5] underline-offset-4 hover:underline"
          >
            {dict.cta}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
