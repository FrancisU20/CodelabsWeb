import type { Messages } from "@/i18n/messages/messages";
import PhoneFrame from "@/shared/devices/phone-frame";
import FactList from "@/shared/ui/fact-list";
import { STORY_SCREENS } from "./story-screens";
import styles from "./stories.module.css";

type StoryItemProps = {
  item: Messages["stories"]["items"][number];
  index: number;
  storeLabel: string;
  labels: Messages["stories"]["labels"];
};

const StoryItem = ({ item, index, storeLabel, labels }: StoryItemProps) => {
  const { screen, storeUrl } = STORY_SCREENS[index];

  return (
    <div className={styles.item} data-index={index} data-current={index === 0 || undefined} data-reveal>
      <span className={styles.tag}>{item.tag}</span>
      <h3 className={styles.itemTitle}>{item.title}</h3>
      <FactList
        facts={[
          { label: labels.challenge, text: item.challenge },
          { label: labels.solution, text: item.solution },
          { label: labels.result, text: item.result },
        ]}
      />
      {storeUrl && (
        <a className={styles.storeLink} href={storeUrl} target="_blank" rel="noopener noreferrer">
          {storeLabel}
        </a>
      )}
      <div className={styles.itemPhone} aria-hidden="true">
        <PhoneFrame className={styles.compactPhone}>
          {screen}
        </PhoneFrame>
      </div>
    </div>
  );
};

export default StoryItem;
