import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import WindowFrame from "@/shared/devices/window-frame";
import Section from "@/shared/ui/section/section";
import SectionHeading from "@/shared/ui/section/section-heading";
import { pinLength } from "@/shared/motion/pin-length";
import QualityChecks from "./quality-checks";
import QualityMeter from "./quality-meter";
import styles from "./quality.module.css";

const Quality = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).quality;

  return (
    <Section tone="night" aria-label={dict.ariaLabel} data-pin style={pinLength("standard")}>
      <div className={`site-wrap ${styles.stage}`} data-stage>
        <SectionHeading className={styles.head} title={dict.title} />
        <div className={`${styles.window} scene-motion`} role="img" aria-label={`${dict.meterTitle}: ${dict.checks.join(", ")}`}>
          <WindowFrame kind="app" caption={dict.windowLabel}>
            <div className={styles.body}>
              <QualityMeter title={dict.meterTitle} caption={dict.meterCaption} />
              <QualityChecks copy={dict} />
            </div>
          </WindowFrame>
        </div>
      </div>
    </Section>
  );
};

export default Quality;
