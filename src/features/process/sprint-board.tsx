import type { Messages } from "@/i18n/messages/messages";
import WindowFrame from "@/shared/devices/window-frame";
import styles from "./process.module.css";

const SprintBoard = ({ copy }: { copy: Messages["howWeWork"]["visuals"]["board"] }) => (
  <WindowFrame kind="app" caption={copy.caption} className={styles.window}>
    <div className={styles.board}>
      {copy.columns.map((column) => (
        <div key={column.title} className={styles.column}>
          <span className={styles.columnTitle}>
            {column.title} <small>{column.cards.length}</small>
          </span>
          {column.cards.map((card) => (
            <span key={card} className={styles.ticket}>
              {card}
            </span>
          ))}
        </div>
      ))}
    </div>
  </WindowFrame>
);

export default SprintBoard;
