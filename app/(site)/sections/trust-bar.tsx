import { getDictionary } from "@/app/i18n/dictionary";
import type { Locale } from "@/app/i18n/locale";

const TrustBar = ({ locale }: { locale: Locale }) => {
  const dict = getDictionary(locale).trustBar;

  return (
    <section
      aria-label={dict.badge}
      className="border-y border-black/5 bg-[#EEF0FB] py-4"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-6 text-sm font-medium text-black/70">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4F46E5]" />
          {dict.badge}
        </span>
        <span>{dict.text}</span>
      </div>
    </section>
  );
};

export default TrustBar;
