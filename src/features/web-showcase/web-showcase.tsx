import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { cssVars } from "@/shared/lib/css-vars";
import PhoneFrame from "@/shared/devices/phone-frame";
import RutaApp from "@/shared/mockups/ruta-app";
import RutaDashboard from "@/shared/mockups/ruta-dashboard";
import styles from "./web-showcase.module.css";

const WebShowcase = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).webShowcase;

  return (
    <section aria-labelledby="web-showcase-title" data-pin style={cssVars({ "--pin-height": "220vh" })}>
      <div className={`site-wrap ${styles.stage}`} data-stage>
        <div className={styles.head}>
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 id="web-showcase-title" className="section-title m-0">
            {dict.titleLead}
            <br />
            <span className="text-glow">{dict.titleAccent}</span>
          </h2>
          <p className="lede m-0">{dict.body}</p>
        </div>
        <div className={styles.scene} aria-hidden="true">
          <RutaDashboard className={styles.browser} />
          <PhoneFrame className={styles.scenePhone}>
            <RutaApp />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
};

export default WebShowcase;
