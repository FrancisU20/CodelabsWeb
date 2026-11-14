import { COUNTRIES_SERVED, PROJECTS_DELIVERED } from "@/content/company-figures";
import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { formatCountryList } from "@/shared/lib/country-names";
import { pinLength } from "@/shared/motion/pin-length";
import ImpactFigures from "./impact-figures";
import styles from "./impact.module.css";

const Impact = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).impact;

  return (
    <>
      <section aria-labelledby="impact-title" data-pin style={pinLength("short")}>
        <div className={`site-wrap ${styles.stage}`} data-stage>
          <p className="eyebrow">{dict.eyebrow}</p>
          <div className={`${styles.stat} scene-motion`} data-count={PROJECTS_DELIVERED} data-prefix="+">
            +{PROJECTS_DELIVERED}
          </div>
          <p id="impact-title" className={`${styles.caption} scene-motion`}>
            {dict.captionStrong} <span>{`${dict.captionMuted} ${formatCountryList(COUNTRIES_SERVED, locale)}.`}</span>
          </p>
        </div>
      </section>
      <ImpactFigures copy={dict} />
    </>
  );
};

export default Impact;
