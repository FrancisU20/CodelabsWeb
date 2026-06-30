import Link from "next/link";
import { getDictionary } from "@/app/i18n/dictionary";
import { getRoutes } from "@/app/i18n/paths";
import type { Locale } from "@/app/i18n/locale";

const CtaBanner = ({ locale }: { locale: Locale }) => {
  const dict = getDictionary(locale).ctaBanner;
  const routes = getRoutes(locale);

  return (
    <section className="bg-[#0E0E10] py-16 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            {dict.eyebrow}
          </p>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {dict.title}
          </h2>
        </div>
        <Link
          href={routes.contacto}
          className="gradient-pill soft-shadow inline-flex shrink-0 rounded-full px-6 py-3 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-[2px]"
        >
          {dict.cta}
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
