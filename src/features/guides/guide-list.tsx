import Link from "next/link";
import { GUIDES } from "@/content/guides/guides";
import { readingMinutes } from "@/content/guides/guide-reading-time";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { guidePath } from "@/i18n/routing";
import Card from "@/shared/ui/card/card";
import Section from "@/shared/ui/section/section";
import styles from "./guides.module.css";

const GuideList = ({ locale }: { locale: Locale }) => {
  const copy = getMessages(locale).guides;

  return (
    <Section tone="mist" space="section" aria-label={copy.eyebrow}>
      <div className={`site-wrap ${styles.list}`}>
        {GUIDES.map((guide) => (
          <Card key={guide.slug} as="article" padding="sm" className={styles.card} reveal>
            <p className={styles.cardMeta}>
              {copy.label} · {readingMinutes(guide)} {copy.readingTime}
            </p>
            <h2 className={styles.cardTitle}>
              <Link href={guidePath(guide.slug)}>{guide.title}</Link>
            </h2>
            <p className={styles.cardSummary}>{guide.summary}</p>
            <span className={styles.cardMore} aria-hidden="true">
              {copy.read}
            </span>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default GuideList;
