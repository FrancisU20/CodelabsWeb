import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { pinLength } from "@/shared/motion/pin-length";
import Kicker from "@/shared/ui/kicker";
import StoryItem from "./story-item";
import StoryPhone from "./story-phone";
import styles from "./stories.module.css";

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
          <Kicker as="h2" id="stories-title" className={styles.label}>
            {dict.label}
          </Kicker>
          {dict.items.map((item, index) => (
            <StoryItem key={item.title} item={item} index={index} />
          ))}
          <div className={styles.dots} aria-hidden="true">
            {dict.items.map((item, index) => (
              <i key={item.title} className={styles.dot} data-index={index} />
            ))}
          </div>
        </div>
        <StoryPhone />
      </div>
    </section>
  );
};

export default Stories;
