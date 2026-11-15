import PhoneFrame from "@/shared/devices/phone-frame";
import { STORY_SCREENS } from "./story-screens";
import styles from "./stories.module.css";

const StoryPhone = () => (
  <div className={styles.phoneWrap} aria-hidden="true">
    <PhoneFrame className={`${styles.storyPhone} scene-motion`}>
      {STORY_SCREENS.map(({ id, screen }, index) => (
        <div key={id} className={styles.layer} data-index={index} data-current={index === 0 || undefined}>
          {screen}
        </div>
      ))}
    </PhoneFrame>
  </div>
);

export default StoryPhone;
