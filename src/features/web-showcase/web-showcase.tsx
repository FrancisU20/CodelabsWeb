import { IMAGES } from "@/content/images";
import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import PhoneFrame from "@/shared/devices/phone-frame";
import FarmaenlaceApp from "@/showcase/farmaenlace-app";
import FarmaenlaceDashboard from "@/showcase/farmaenlace-dashboard";
import FactList from "@/shared/ui/fact-list";
import SectionHeading from "@/shared/ui/section/section-heading";
import { pinLength } from "@/shared/motion/pin-length";
import styles from "./web-showcase.module.css";

const WebShowcase = ({ locale }: { locale: Locale }) => {
  const messages = getMessages(locale);
  const dict = messages.webShowcase;
  const labels = messages.stories.labels;

  return (
    <section aria-labelledby="web-showcase-title" data-pin style={pinLength("standard")}>
      <div className={`site-wrap ${styles.stage}`} data-stage>
        <div className={`${styles.head} scene-motion`}>
          <SectionHeading eyebrow={dict.eyebrow} title={dict.title} titleId="web-showcase-title" />
          <FactList
            className={styles.facts}
            facts={[
              { label: labels.challenge, text: dict.challenge },
              { label: labels.solution, text: dict.solution },
              { label: labels.result, text: dict.result },
            ]}
          />
        </div>
        <div className={`${styles.scene} scene-motion`} aria-hidden="true">
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
