import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { cssVars } from "@/shared/lib/css-vars";
import PhoneFrame from "@/shared/devices/phone-frame";
import AuraApp from "@/shared/mockups/aura-app";
import LexaApp from "@/shared/mockups/lexa-app";
import NucleoApp from "@/shared/mockups/nucleo-app";
import styles from "./stories.module.css";

const SCREENS = [
  { id: "nucleo", Screen: NucleoApp },
  { id: "aura", Screen: AuraApp },
  { id: "lexa", Screen: LexaApp },
];

const Stories = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).stories;

  return (
    <section className={styles.story} data-pin data-story data-active="0" style={cssVars({ "--pin-height": "340vh" })}>
      <div className={`site-wrap ${styles.stage}`} data-stage>
        <div className={styles.texts}>
          {dict.items.map((item, index) => (
            <div key={item.title} className={styles.item} data-index={index}>
              <span className={styles.tag}>{item.tag}</span>
              <h2 className={styles.itemTitle}>{item.title}</h2>
              <p className={styles.itemBody}>{item.body}</p>
            </div>
          ))}
          <div className={styles.dots} aria-hidden="true">
            {dict.items.map((item, index) => (
              <i key={item.title} className={styles.dot} data-index={index} />
            ))}
          </div>
          <p className={styles.note}>{dict.note}</p>
        </div>
        <div className={styles.phoneWrap} aria-hidden="true">
          <PhoneFrame className={styles.storyPhone}>
            {SCREENS.map(({ id, Screen }, index) => (
              <div key={id} className={styles.layer} data-index={index}>
                <Screen />
              </div>
            ))}
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
};

export default Stories;
