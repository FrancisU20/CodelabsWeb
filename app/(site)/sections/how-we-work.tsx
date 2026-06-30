import { getDictionary } from "@/app/i18n/dictionary";
import type { Locale } from "@/app/i18n/locale";

const HowWeWork = ({ locale }: { locale: Locale }) => {
  const dict = getDictionary(locale).howWeWork;

  return (
    <section
      id="como-trabajamos"
      aria-labelledby="how-we-work-title"
      className="bg-[#EEF0FB] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
            {dict.eyebrow}
          </p>
          <h2
            id="how-we-work-title"
            className="text-3xl font-semibold tracking-tight text-black sm:text-4xl"
          >
            {dict.title}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-black/5 bg-white px-6 py-6 shadow-sm shadow-indigo-500/5"
            >
              <span className="text-sm font-semibold text-[#4F46E5]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-base font-semibold text-black">
                {step.title}
              </p>
              <p className="mt-2 text-sm text-black/70">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
