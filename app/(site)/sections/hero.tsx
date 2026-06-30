import Link from "next/link";
import { getDictionary } from "@/app/i18n/dictionary";
import { getRoutes } from "@/app/i18n/paths";
import type { Locale } from "@/app/i18n/locale";

const Hero = ({ locale }: { locale: Locale }) => {
  const dict = getDictionary(locale).hero;
  const routes = getRoutes(locale);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white pb-20 pt-16 sm:pt-24"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 fade-glow" aria-hidden />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-3 py-1 text-xs font-semibold text-black/70 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#818CF8]" />
            {dict.badge}
          </div>
          <div className="space-y-4">
            <h1
              id="hero-title"
              className="text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl"
            >
              {dict.title}
            </h1>
            <p className="text-lg text-black/70">{dict.subtitle}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={routes.contacto}
              className="gradient-pill soft-shadow rounded-full px-6 py-3 text-center text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-[2px]"
            >
              {dict.ctaPrimary}
            </Link>
            <Link
              href={routes.servicios}
              className="rounded-full border border-black/10 px-6 py-3 text-center text-base font-semibold text-black transition duration-200 hover:border-transparent hover:bg-black/5"
            >
              {dict.ctaSecondary}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-black/70 sm:w-max sm:grid-cols-2">
            {dict.chips.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-sm shadow-indigo-500/5"
              >
                <p className="text-xs uppercase tracking-wide text-black/50">
                  {item.title}
                </p>
                <p className="font-medium text-black">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10">
          <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-[#eef0fb] via-white to-[#f5f6fd] p-6 shadow-xl shadow-indigo-500/10">
            <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-[#818cf8]/20 blur-3xl" />
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[#4f46e5]/20 blur-3xl" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <div className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-black/70 shadow-sm">
                  {dict.panelLabel}
                </div>
                <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/60">
                  {dict.panelTag}
                </span>
              </div>
              <div className="space-y-3">
                {dict.panelItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white/70 px-4 py-3 text-sm text-black shadow-sm"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#818CF8]" />
                    <div>
                      <p className="font-semibold">{item.label}</p>
                      <p className="text-black/70">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
