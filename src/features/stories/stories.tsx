import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import PhoneFrame from "@/shared/devices/phone-frame";
import { pinLength } from "@/shared/motion/pin-length";
import { SHOWCASE_APPS } from "@/showcase/showcase-apps";
import styles from "./stories.module.css";

const STORY_SCREENS = [
  { id: "nucleo", Screen: SHOWCASE_APPS.nucleo },
  { id: "lexa", Screen: SHOWCASE_APPS.lexa },
];

const Stories = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).stories;

  return (
    <section
      className={styles.story}
      aria-labelledby="stories-title"
      data-pin
      data-story
      data-story-count={dict.items.length}
      data-active="0"
      style={pinLength("long")}
    >
      <div className={`site-wrap ${styles.stage}`} data-stage>
        <div className={styles.texts}>
          <h2 id="stories-title" className={styles.label}>
            {dict.label}
          </h2>
          {dict.items.map((item, index) => {
            const { Screen } = STORY_SCREENS[index];

            return (
              <div key={item.title} className={styles.item} data-index={index} data-reveal>
                <span className={styles.tag}>{item.tag}</span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemBody}>{item.body}</p>
                <div className={styles.itemPhone} aria-hidden="true">
                  <PhoneFrame className={styles.compactPhone}>
                    <Screen />
                  </PhoneFrame>
                </div>
              </div>
            );
          })}
          <div className={styles.dots} aria-hidden="true">
            {dict.items.map((item, index) => (
              <i key={item.title} className={styles.dot} data-index={index} />
            ))}
          </div>
        </div>
        <div className={styles.phoneWrap} aria-hidden="true">
          <PhoneFrame className={`${styles.storyPhone} scene-motion`}>
            {STORY_SCREENS.map(({ id, Screen }, index) => (
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
