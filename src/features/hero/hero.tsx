import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { pinLength } from "@/shared/motion/pin-length";
import Section from "@/shared/ui/section/section";
import HeroCopy from "./hero-copy";
import HeroShowcase from "./hero-showcase";
import styles from "./hero.module.css";

const Hero = ({ locale }: { locale: Locale }) => {
  const copy = getMessages(locale).hero;

  return (
    <Section tone="deep" id="inicio" className={styles.hero} aria-labelledby="hero-title" data-pin style={pinLength("long")}>
      <div className={`site-wrap ${styles.stage}`} data-stage>
        <HeroCopy copy={copy} locale={locale} />
        <HeroShowcase label={copy.showcaseLabel} />
      </div>
    </Section>
  );
};

export default Hero;
