import Link from "next/link";
import type { Guide } from "@/content/guides/guide";
import { readingMinutes } from "@/content/guides/guide-reading-time";
import type { Messages } from "@/i18n/messages/messages";
import { guidePath } from "@/i18n/routing";
import Card from "@/shared/ui/card/card";
import styles from "./guides.module.css";

type GuideCardProps = {
  guide: Guide;
  copy: Messages["guides"];
  heading?: "h2" | "h3";
};

const GuideCard = ({ guide, copy, heading: Heading = "h3" }: GuideCardProps) => (
  <Card as="article" padding="sm" className={styles.card} reveal>
    <p className={styles.cardMeta}>
      {copy.label} · {readingMinutes(guide)} {copy.readingTime}
    </p>
    <Heading className={styles.cardTitle}>
      <Link href={guidePath(guide.slug)}>{guide.title}</Link>
    </Heading>
    <p className={styles.cardSummary}>{guide.summary}</p>
    <span className={styles.cardMore} aria-hidden="true">
      {copy.read}
    </span>
  </Card>
);

export default GuideCard;
