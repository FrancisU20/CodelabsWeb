import { IMAGES } from "@/content/images";
import PhoneFrame from "@/shared/devices/phone-frame";
import ConfiamedApp from "@/showcase/confiamed-app";
import FarmaenlaceApp from "@/showcase/farmaenlace-app";
import SupermaxiApp from "@/showcase/supermaxi-app";
import styles from "./hero.module.css";

type HeroShowcaseProps = {
  label: string;
  note: string;
};

const HeroShowcase = ({ label, note }: HeroShowcaseProps) => (
  <figure className={styles.showcase} role="img" aria-label={label}>
    <div className={`${styles.fan} scene-motion`}>
      <span className={`${styles.floor} scene-motion`} />
      <PhoneFrame className={`${styles.fanPhone} ${styles.left} scene-motion`}>
        <SupermaxiApp />
      </PhoneFrame>
      <PhoneFrame className={`${styles.fanPhone} ${styles.right} scene-motion`}>
        <FarmaenlaceApp logoSrc={IMAGES.brands.farmaenlace} />
      </PhoneFrame>
      <PhoneFrame className={`${styles.fanPhone} ${styles.center} scene-motion`}>
        <ConfiamedApp logoSrc={IMAGES.brands.confiamed} />
      </PhoneFrame>
      <figcaption className={styles.showcaseNote}>{note}</figcaption>
    </div>
  </figure>
);

export default HeroShowcase;
