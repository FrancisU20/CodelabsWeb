import type { Messages } from "@/i18n/messages/messages";
import Icon from "@/shared/ui/icons/svg-icon";
import styles from "./process.module.css";

const FOCUS_SCREEN = 1;
const PLACEHOLDER_LINES = ["wide", "medium", "short"];

const DesignScreens = ({ copy }: { copy: Messages["howWeWork"]["visuals"]["design"] }) => (
  <div className={styles.design}>
    <div className={styles.screens}>
      {copy.screens.map((screen, index) => (
        <div key={screen} className={styles.screen} data-focus={index === FOCUS_SCREEN || undefined}>
          <span className={styles.screenTitle}>{screen}</span>
          <span className={styles.screenImage} />
          {PLACEHOLDER_LINES.map((line) => (
            <span key={line} className={styles.screenLine} data-size={line} />
          ))}
          <span className={styles.screenButton} />
        </div>
      ))}
    </div>
    <p className={styles.approved}>
      <Icon name="check" />
      {copy.approved}
    </p>
  </div>
);

export default DesignScreens;
