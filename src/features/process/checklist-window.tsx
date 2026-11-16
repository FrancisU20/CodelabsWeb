import { fillTerms } from "@/i18n/fill-terms";
import type { ChecklistCopy } from "@/i18n/messages/checklist-copy";
import { cssVars } from "@/shared/lib/css-vars";
import WindowFrame from "@/shared/devices/window-frame";
import Icon from "@/shared/ui/icons/svg-icon";
import styles from "./process.module.css";

const ChecklistWindow = ({ copy }: { copy: ChecklistCopy }) => (
  <WindowFrame kind="app" caption={copy.caption} className={styles.window}>
    <div className={styles.checklist}>
      {copy.meter && (
        <div className={styles.meter}>
          <div className={styles.meterCore}>
            <b>{copy.meter.title}</b>
            <span>{copy.meter.caption}</span>
          </div>
        </div>
      )}
      <div className={styles.checkBody}>
        <ul className={styles.checks}>
          {copy.items.map((item, index) => (
            <li key={item} style={cssVars({ "--i": index })}>
              <Icon name="check" />
              {fillTerms(item)}
            </li>
          ))}
        </ul>
        <p className={styles.summary}>
          <span className={styles.dot} />
          {copy.summary}
        </p>
      </div>
    </div>
  </WindowFrame>
);

export default ChecklistWindow;
