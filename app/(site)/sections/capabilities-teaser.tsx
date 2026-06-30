import Link from "next/link";
import { capabilities } from "@/app/data/capabilities";
import { getDictionary } from "@/app/i18n/dictionary";
import { getRoutes } from "@/app/i18n/paths";
import type { Locale } from "@/app/i18n/locale";

const featured = capabilities.slice(0, 4);

const CapabilitiesTeaser = ({ locale }: { locale: Locale }) => {
  const dict = getDictionary(locale).capabilitiesTeaser;
  const routes = getRoutes(locale);

  return (
    <section
      id="servicios"
      aria-labelledby="capabilities-teaser-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
              {dict.eyebrow}
            </p>
            <h2
              id="capabilities-teaser-title"
              className="text-3xl font-semibold tracking-tight text-black sm:text-4xl"
            >
              {dict.title}
            </h2>
          </div>
          <Link
            href={routes.servicios}
            className="text-sm font-semibold text-[#4F46E5] underline-offset-4 hover:underline"
          >
            {dict.cta}
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-black/5 bg-white px-5 py-6 shadow-sm shadow-indigo-500/5 transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="inline-flex h-9 items-center rounded-full bg-gradient-to-r from-[#4F46E5] to-[#6D5FEF] px-3 text-xs font-semibold text-white">
                {item.accent[locale]}
              </span>
              <p className="mt-4 text-base font-semibold text-black">
                {item.title[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesTeaser;
