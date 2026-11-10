import { HEALTH_APPS_SPEED_GAIN_PERCENT } from "@/content/impact";
import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { pinLength } from "@/shared/motion/pin-length";
import styles from "./impact.module.css";

const Impact = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).impact;

  return (
    <>
      <section aria-labelledby="impact-title" className={styles.band} data-pin style={pinLength("short")}>
        <div className={`site-wrap ${styles.stage}`} data-stage>
          <p className="eyebrow">{dict.eyebrow}</p>
          <div className={`${styles.stat} scene-motion`} data-count={HEALTH_APPS_SPEED_GAIN_PERCENT} data-prefix="+" data-suffix="%">
            +{HEALTH_APPS_SPEED_GAIN_PERCENT}%
          </div>
          <p id="impact-title" className={`${styles.caption} scene-motion`}>
            {dict.captionStrong} <span>{dict.captionMuted}</span>
          </p>
        </div>
      </section>
      <section className={styles.results} aria-label={dict.resultsAriaLabel}>
        <div className="site-wrap">
          <div className={styles.grid} data-reveal>
            {dict.results.map((result) => (
              <div key={result.title} className={styles.result}>
                <strong>{result.title}</strong>
                <span>{result.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
