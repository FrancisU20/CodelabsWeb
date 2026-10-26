import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { cssVars } from "@/shared/lib/css-vars";
import Icon from "@/shared/ui/icons/svg-icon";
import styles from "./quality.module.css";

const FIRST_CHECK_AT = 0.12;
const CHECK_STEP = 0.08;

const Quality = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).quality;
  const liveAt = FIRST_CHECK_AT + dict.checks.length * CHECK_STEP;

  return (
    <section aria-label={dict.ariaLabel} data-pin data-pin-mobile="off" style={cssVars({ "--pin-height": "220vh" })}>
      <div className={`site-wrap ${styles.stage}`} data-stage>
        <div className={styles.head}>
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className="section-title m-0">
            {dict.titleLead}
            <br />
            <span className="text-glow">{dict.titleAccent}</span>
          </h2>
          <p className="lede m-0">{dict.body}</p>
        </div>
        <div className={styles.window} role="img" aria-label={`${dict.meterTitle}: ${dict.checks.join(", ")}`}>
          <div className={styles.bar}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.barLabel}>{dict.windowLabel}</span>
          </div>
          <div className={styles.body}>
            <div className={styles.meterWrap}>
              <div className={styles.meter}>
                <div className={styles.meterCore}>
                  <Icon name="shield-check" />
                  <b>{dict.meterTitle}</b>
                  <span>{dict.meterCaption}</span>
                </div>
              </div>
            </div>
            <div className={styles.checks}>
              {dict.checks.map((check, index) => (
                <span key={check} className={styles.check} style={cssVars({ "--t": FIRST_CHECK_AT + index * CHECK_STEP })}>
                  <span className={styles.tick}>
                    <Icon name="check" />
                  </span>
                  {check}
                  <span className={styles.state}>{dict.approved}</span>
                </span>
              ))}
              <span className={`${styles.check} ${styles.live}`} style={cssVars({ "--t": liveAt })}>
                <span className={styles.pulse} />
                {dict.live}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
