import Link from "next/link";
import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { pagePath } from "@/i18n/routing";
import PhoneFrame from "@/shared/devices/phone-frame";
import { pinLength } from "@/shared/motion/pin-length";
import { SHOWCASE_APPS } from "@/showcase/showcase-apps";
import styles from "./hero.module.css";

const { aura: AuraScreen, nucleo: NucleoScreen, lexa: LexaScreen } = SHOWCASE_APPS;

const Hero = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).hero;

  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title" data-pin style={pinLength("standard")}>
      <div className={`site-wrap ${styles.stage}`} data-stage>
        <div className={styles.copy}>
          <p className="eyebrow">{dict.eyebrow}</p>
          <h1 id="hero-title" className={styles.title}>
            <span className={`${styles.line} lift-in`}>{dict.titleLead}</span>
            <span className={`${styles.line} text-glow lift-in [animation-delay:0.06s]`}>{dict.titleAccent}</span>
          </h1>
          <p className="lede rise-in [animation-delay:0.12s]">{dict.subtitle}</p>
          <div className={`${styles.actions} rise-in [animation-delay:0.18s]`}>
            <Link className="btn btn-primary" href={pagePath("contact", locale)}>
              {dict.ctaPrimary}
            </Link>
            <Link className="btn btn-ghost" href={pagePath("work", locale)}>
              {dict.ctaSecondary}
            </Link>
          </div>
        </div>
        <div className={styles.fan} aria-hidden="true">
          <PhoneFrame className={`${styles.fanPhone} ${styles.side} ${styles.left}`}>
            <AuraScreen />
          </PhoneFrame>
          <PhoneFrame className={`${styles.fanPhone} ${styles.center}`}>
            <NucleoScreen />
          </PhoneFrame>
          <PhoneFrame className={`${styles.fanPhone} ${styles.side} ${styles.right}`}>
            <LexaScreen />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
};

export default Hero;
