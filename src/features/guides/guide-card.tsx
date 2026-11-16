import Link from "next/link";
import type { Guide } from "@/content/guides/guide";
import { readingMinutes } from "@/content/guides/guide-reading-time";
import type { Messages } from "@/i18n/messages/messages";
import { guidePath } from "@/i18n/routing";
import Card from "@/shared/ui/card/card";
import styles from "./guides.module.css";

const GuideCard = ({ guide, copy }: { guide: Guide; copy: Messages["guides"] }) => (
  <Card as="article" padding="sm" className={styles.card} reveal>
    <p className={styles.cardMeta}>
      {copy.label} · {readingMinutes(guide)} {copy.readingTime}
    </p>
    <h3 className={styles.cardTitle}>
      <Link href={guidePath(guide.slug)}>{guide.title}</Link>
    </h3>
    <p className={styles.cardSummary}>{guide.summary}</p>
    <span className={styles.cardMore} aria-hidden="true">
      {copy.read}
    </span>
  </Card>
);

export default GuideCard;
