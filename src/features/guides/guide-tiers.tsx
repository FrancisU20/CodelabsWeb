import type { GuideTier } from "@/content/guides/guide-tier";
import styles from "./guide-blocks.module.css";

const GuideTiers = ({ items }: { items: GuideTier[] }) => (
  <ul className={styles.tiers}>
    {items.map((tier) => (
      <li key={tier.name}>
        <span className={styles.tierName}>{tier.name}</span>
        <b className={styles.tierPrice}>{tier.price}</b>
        <span className={styles.tierDetail}>{tier.detail}</span>
        <p>{tier.text}</p>
      </li>
    ))}
  </ul>
);

export default GuideTiers;
