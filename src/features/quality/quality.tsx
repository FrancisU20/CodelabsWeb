import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import WindowFrame from "@/shared/devices/window-frame";
import { cx } from "@/shared/lib/class-names";
import { cssVars } from "@/shared/lib/css-vars";
import Icon from "@/shared/ui/icons/svg-icon";
import Section from "@/shared/ui/section/section";
import SectionHeading from "@/shared/ui/section/section-heading";
import { pinLength } from "@/shared/motion/pin-length";
import styles from "./quality.module.css";

const FIRST_CHECK_AT = 0.12;
const CHECK_STEP = 0.08;

const Quality = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).quality;
  const liveAt = FIRST_CHECK_AT + dict.checks.length * CHECK_STEP;

  return (
    <Section tone="night" aria-label={dict.ariaLabel} data-pin style={pinLength("standard")}>
      <div className={`site-wrap ${styles.stage}`} data-stage>
        <SectionHeading className={styles.head} title={dict.title} />
        <div className={`${styles.window} scene-motion`} role="img" aria-label={`${dict.meterTitle}: ${dict.checks.join(", ")}`}>
          <WindowFrame kind="app" caption={dict.windowLabel}>
            <div className={styles.body}>
              <div className={styles.meterWrap}>
                <div className={styles.meter}>
                  <div className={styles.meterCore}>
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
                <span className={cx(styles.check, styles.live)} style={cssVars({ "--t": liveAt })}>
                  <span className={styles.pulse} />
                  {dict.live}
                </span>
              </div>
            </div>
          </WindowFrame>
        </div>
      </div>
    </Section>
  );
};

export default Quality;
