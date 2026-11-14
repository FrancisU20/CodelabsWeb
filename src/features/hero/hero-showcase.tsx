import PhoneFrame from "@/shared/devices/phone-frame";
import { SHOWCASE_APPS } from "@/showcase/showcase-apps";
import styles from "./hero.module.css";

const { aura: AuraScreen, nucleo: NucleoScreen, lexa: LexaScreen } = SHOWCASE_APPS;

const HeroShowcase = ({ label }: { label: string }) => (
  <div className={styles.showcase} role="img" aria-label={label}>
    <div className={`${styles.fan} scene-motion`}>
      <span className={`${styles.floor} scene-motion`} />
      <PhoneFrame className={`${styles.fanPhone} ${styles.left} scene-motion`}>
        <AuraScreen />
      </PhoneFrame>
      <PhoneFrame className={`${styles.fanPhone} ${styles.right} scene-motion`}>
        <LexaScreen />
      </PhoneFrame>
      <PhoneFrame className={`${styles.fanPhone} ${styles.center} scene-motion`}>
        <NucleoScreen />
      </PhoneFrame>
    </div>
  </div>
);

export default HeroShowcase;
