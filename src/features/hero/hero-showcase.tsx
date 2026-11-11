import type { Messages } from "@/i18n/messages/messages";
import ChatWindow from "@/shared/devices/chat-window";
import PhoneFrame from "@/shared/devices/phone-frame";
import Icon from "@/shared/ui/icons/svg-icon";
import { SHOWCASE_APPS } from "@/showcase/showcase-apps";
import styles from "./hero.module.css";

const { aura: AuraScreen, nucleo: NucleoScreen, lexa: LexaScreen } = SHOWCASE_APPS;

const HeroShowcase = ({ copy }: { copy: Messages["hero"] }) => (
  <div className={styles.showcase} role="img" aria-label={copy.chatLabel}>
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
        <b>{copy.toast.title}</b>
        <small>{copy.toast.detail}</small>
      </span>
    </div>
    <ChatWindow {...copy.chat} typing className={`${styles.heroChat} scene-motion`} />
  </div>
);

export default HeroShowcase;
