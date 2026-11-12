import type { Messages } from "@/i18n/messages/messages";
import { joinClassNames } from "@/shared/lib/class-names";
import { cssVars } from "@/shared/lib/css-vars";
import Icon from "@/shared/ui/icons/svg-icon";
import styles from "./quality.module.css";

const FIRST_CHECK_AT = 0.12;
const CHECK_STEP = 0.08;

const QualityChecks = ({ copy }: { copy: Messages["quality"] }) => (
  <div className={styles.checks}>
    {copy.checks.map((check, index) => (
      <span key={check} className={styles.check} style={cssVars({ "--t": FIRST_CHECK_AT + index * CHECK_STEP })}>
        <span className={styles.tick}>
          <Icon name="check" />
        </span>
        {check}
        <span className={styles.state}>{copy.approved}</span>
      </span>
    ))}
    <span className={joinClassNames(styles.check, styles.live)} style={cssVars({ "--t": FIRST_CHECK_AT + copy.checks.length * CHECK_STEP })}>
      <span className={styles.pulse} />
      {copy.live}
    </span>
  </div>
);

export default QualityChecks;
