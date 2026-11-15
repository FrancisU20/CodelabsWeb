import { IMAGES } from "@/content/images";
import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import PhoneFrame from "@/shared/devices/phone-frame";
import FarmaenlaceApp from "@/showcase/farmaenlace-app";
import FarmaenlaceDashboard from "@/showcase/farmaenlace-dashboard";
import SectionHeading from "@/shared/ui/section/section-heading";
import { pinLength } from "@/shared/motion/pin-length";
import styles from "./web-showcase.module.css";

const WebShowcase = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).webShowcase;

  return (
    <section aria-labelledby="web-showcase-title" data-pin style={pinLength("standard")}>
      <div className={`site-wrap ${styles.stage}`} data-stage>
        <SectionHeading className={styles.head} eyebrow={dict.eyebrow} title={dict.title} titleId="web-showcase-title" body={dict.body} />
        <div className={styles.scene} aria-hidden="true">
          <FarmaenlaceDashboard logoSrc={IMAGES.brands.farmaenlace} className={`${styles.browser} scene-motion`} />
          <PhoneFrame className={`${styles.scenePhone} scene-motion`}>
            <FarmaenlaceApp logoSrc={IMAGES.brands.farmaenlace} />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
};

export default WebShowcase;
