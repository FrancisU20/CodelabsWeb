import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { pinLength } from "@/shared/motion/pin-length";
import HeroCopy from "./hero-copy";
import HeroShowcase from "./hero-showcase";
import styles from "./hero.module.css";

const Hero = ({ locale }: { locale: Locale }) => {
  const copy = getMessages(locale).hero;

  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title" data-pin style={pinLength("standard")}>
      <div className={`site-wrap ${styles.stage}`} data-stage>
        <HeroCopy copy={copy} locale={locale} />
        <HeroShowcase copy={copy} />
      </div>
    </section>
  );
};

export default Hero;
