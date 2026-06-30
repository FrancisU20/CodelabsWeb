import { getDictionary } from "@/app/i18n/dictionary";
import type { Locale } from "@/app/i18n/locale";

const About = ({ locale }: { locale: Locale }) => {
  const dict = getDictionary(locale).about;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr,0.9fr] md:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
            {dict.eyebrow}
          </p>
          <h2
            id="about-title"
            className="text-3xl font-semibold tracking-tight text-black sm:text-4xl"
          >
            {dict.title}
          </h2>
          <p className="text-base text-black/70">{dict.paragraph1}</p>
          <p className="text-base text-black/70">{dict.paragraph2}</p>
        </div>
        <div className="rounded-3xl border border-black/5 bg-white px-6 py-6 shadow-lg shadow-indigo-500/10">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/50">
                {dict.manifestoLabel}
              </p>
              <p className="text-lg font-semibold text-black">
                {dict.manifestoTitle}
              </p>
            </div>
            <span className="inline-flex h-11 items-center rounded-full bg-gradient-to-r from-[#4F46E5] to-[#6D5FEF] px-4 text-sm font-semibold text-white shadow-md">
              {dict.manifestoBadge}
            </span>
          </div>
          <ul className="space-y-3 text-sm text-black/80">
            {dict.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#818CF8]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
