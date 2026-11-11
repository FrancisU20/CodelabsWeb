import type { Locale } from "@/i18n/locale";
import type { Messages } from "@/i18n/messages/messages";
import { pagePath } from "@/i18n/routing";
import ButtonLink from "@/shared/ui/button/button-link";
import styles from "./hero.module.css";

const HeroCopy = ({ copy, locale }: { copy: Messages["hero"]; locale: Locale }) => (
  <div className={`${styles.copy} scene-motion`}>
    <p className="eyebrow m-0">{copy.eyebrow}</p>
    <h1 id="hero-title" className={styles.title}>
      <span className={`${styles.line} lift-in`}>{copy.titleLead}</span>
      <span className={`${styles.line} text-accent lift-in [animation-delay:0.06s]`}>{copy.titleAccent}</span>
    </h1>
    <p className="lede m-0 rise-in [animation-delay:0.12s]">{copy.subtitle}</p>
    <div className={`${styles.actions} rise-in [animation-delay:0.18s]`}>
      <ButtonLink href={pagePath("contact", locale)}>{copy.ctaPrimary}</ButtonLink>
      <ButtonLink variant="outline" href={pagePath("work", locale)}>
        {copy.ctaSecondary}
      </ButtonLink>
    </div>
    <p className={styles.note}>{copy.note}</p>
  </div>
);

export default HeroCopy;
