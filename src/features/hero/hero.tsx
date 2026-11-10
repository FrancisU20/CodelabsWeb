import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { pagePath } from "@/i18n/routing";
import ChatWindow from "@/shared/devices/chat-window";
import ButtonLink from "@/shared/ui/button/button-link";
import Icon from "@/shared/ui/icons/svg-icon";
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
        <div className={`${styles.copy} scene-motion`}>
          <p className="eyebrow m-0">{dict.eyebrow}</p>
          <h1 id="hero-title" className={styles.title}>
            <span className={`${styles.line} lift-in`}>{dict.titleLead}</span>
            <span className={`${styles.line} text-accent lift-in [animation-delay:0.06s]`}>{dict.titleAccent}</span>
          </h1>
          <p className="lede m-0 rise-in [animation-delay:0.12s]">{dict.subtitle}</p>
          <div className={`${styles.actions} rise-in [animation-delay:0.18s]`}>
            <ButtonLink href={pagePath("contact", locale)}>
              {dict.ctaPrimary}
            </ButtonLink>
            <ButtonLink variant="outline" href={pagePath("work", locale)}>
              {dict.ctaSecondary}
            </ButtonLink>
          </div>
          <p className={styles.note}>{dict.note}</p>
        </div>
        <div className={styles.showcase} role="img" aria-label={dict.chatLabel}>
          <div className={`${styles.panel} scene-motion`} />
          <div className={`${styles.fan} scene-motion`}>
            <PhoneFrame className={`${styles.fanPhone} ${styles.side} ${styles.left} scene-motion`}>
              <AuraScreen />
            </PhoneFrame>
            <PhoneFrame className={`${styles.fanPhone} ${styles.center}`}>
              <NucleoScreen />
            </PhoneFrame>
            <PhoneFrame className={`${styles.fanPhone} ${styles.side} ${styles.right} scene-motion`}>
              <LexaScreen />
            </PhoneFrame>
          </div>
          <div className={`${styles.toast} scene-motion`}>
            <Icon name="check" className={styles.toastIcon} />
            <span>
              <b>{dict.toast.title}</b>
              <small>{dict.toast.detail}</small>
            </span>
          </div>
          <ChatWindow {...dict.chat} typing className={`${styles.heroChat} scene-motion`} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
