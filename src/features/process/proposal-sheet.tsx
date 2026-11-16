import { fillTerms } from "@/i18n/fill-terms";
import type { Messages } from "@/i18n/messages/messages";
import WindowFrame from "@/shared/devices/window-frame";
import Icon from "@/shared/ui/icons/svg-icon";
import styles from "./process.module.css";

const ProposalSheet = ({ copy }: { copy: Messages["howWeWork"]["visuals"]["proposal"] }) => (
  <WindowFrame kind="app" caption={copy.caption} className={styles.window}>
    <div className={styles.sheet}>
      <b className={styles.sheetTitle}>{copy.title}</b>
      <span className={styles.sheetClient}>{copy.client}</span>
      <dl className={styles.sheetRows}>
        {copy.rows.map((row) => (
          <div key={row.label}>
            <dt>{row.label}</dt>
            <dd>{fillTerms(row.value)}</dd>
          </div>
        ))}
      </dl>
      <p className={styles.note}>
        <Icon name="check" />
        {copy.signature}
      </p>
    </div>
  </WindowFrame>
);

export default ProposalSheet;
