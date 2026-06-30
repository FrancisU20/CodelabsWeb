import Link from "next/link";
import { capabilities } from "@/app/data/capabilities";
import { getDictionary } from "@/app/i18n/dictionary";
import { getRoutes } from "@/app/i18n/paths";
import type { Locale } from "@/app/i18n/locale";

const Capabilities = ({ locale }: { locale: Locale }) => {
  const dict = getDictionary(locale).capabilitiesTeaser;
  const capabilitiesDict = getDictionary(locale).capabilities;
  const routes = getRoutes(locale);

  return (
    <section
      id="servicios"
      aria-labelledby="capabilities-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
              {dict.eyebrow}
            </p>
            <h2
              id="capabilities-title"
              className="text-3xl font-semibold tracking-tight text-black sm:text-4xl"
            >
              {dict.title}
            </h2>
          </div>
          <p className="max-w-xl text-base text-black/70">
            {capabilitiesDict.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {capabilities.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white px-6 py-6 shadow-lg shadow-indigo-500/5 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#EEF0FB] via-transparent to-[#E0E4FA] opacity-0 transition duration-200 group-hover:opacity-100" />
              <div className="relative space-y-3">
                <span className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#6D5FEF] px-4 text-sm font-semibold text-white shadow-md shadow-indigo-500/25">
                  {item.accent[locale]}
                </span>
                <h3 className="text-xl font-semibold text-black">
                  {item.title[locale]}
                </h3>
                <p className="text-sm leading-relaxed text-black/70">
                  {item.description[locale]}
                </p>
                <Link
                  href={routes.contacto}
                  className="relative inline-block text-sm font-semibold text-[#4F46E5] underline-offset-4 hover:underline"
                >
                  {capabilitiesDict.cardCta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
