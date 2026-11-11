import type { Messages } from "@/i18n/messages/messages";
import PhoneFrame from "@/shared/devices/phone-frame";
import { STORY_SCREENS } from "./story-screens";
import styles from "./stories.module.css";

type StoryItemProps = {
  item: Messages["stories"]["items"][number];
  index: number;
};

const StoryItem = ({ item, index }: StoryItemProps) => {
  const { Screen } = STORY_SCREENS[index];

  return (
    <div className={styles.item} data-index={index} data-reveal>
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
};

export default StoryItem;
