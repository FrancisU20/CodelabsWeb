import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import PhoneFrame from "@/shared/devices/phone-frame";
import { pinLength } from "@/shared/motion/pin-length";
import { SHOWCASE_APPS } from "@/showcase/showcase-apps";
import styles from "./stories.module.css";

const Stories = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).stories;

  return (
    <section className={styles.story} data-pin data-story data-active="0" style={pinLength("extended")}>
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
            {Object.entries(SHOWCASE_APPS).map(([id, Screen], index) => (
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
