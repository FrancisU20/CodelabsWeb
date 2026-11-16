import type { GuideBlock } from "@/content/guides/guide-block";
import GuidePoints from "./guide-points";
import GuideTable from "./guide-table";
import GuideTiers from "./guide-tiers";
import styles from "./guide-blocks.module.css";

const LIST_CLASSES = { list: styles.list, alerts: styles.alerts };

const GuideBlockView = ({ block }: { block: GuideBlock }) => {
  switch (block.kind) {
    case "paragraph":
      return <p>{block.text}</p>;
    case "answer":
      return <p className={styles.answer}>{block.text}</p>;
    case "list":
    case "alerts":
      return (
        <ul className={LIST_CLASSES[block.kind]}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "points":
    case "steps":
    case "checklist":
      return <GuidePoints variant={block.kind} items={block.items} />;
    case "tiers":
      return <GuideTiers items={block.items} />;
    case "table":
      return <GuideTable head={block.head} rows={block.rows} />;
  }
};

export default GuideBlockView;
