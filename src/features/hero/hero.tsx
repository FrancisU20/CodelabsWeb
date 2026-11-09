import Link from "next/link";
import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { pagePath } from "@/i18n/routing";
import PhoneFrame from "@/shared/devices/phone-frame";
import AuraApp from "@/shared/mockups/aura-app";
import LexaApp from "@/shared/mockups/lexa-app";
import NucleoApp from "@/shared/mockups/nucleo-app";
import { pinLength } from "@/shared/motion/pin-length";
import styles from "./hero.module.css";

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
            <AuraApp />
          </PhoneFrame>
          <PhoneFrame className={`${styles.fanPhone} ${styles.center}`}>
            <NucleoApp />
          </PhoneFrame>
          <PhoneFrame className={`${styles.fanPhone} ${styles.side} ${styles.right}`}>
            <LexaApp />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
};

export default Hero;
