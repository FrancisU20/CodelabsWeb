import Link from "next/link";
import { ENGAGEMENT_MODELS } from "@/content/engagement-terms";
import { engagementModelsGuide } from "@/content/guides/engagement-models-guide";
import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { GUIDES_LOCALE, guidePath } from "@/i18n/routing";
import Section from "@/shared/ui/section/section";
import SectionHeading from "@/shared/ui/section/section-heading";
import EngagementModelCard from "./engagement-model-card";
import styles from "./engagement-models.module.css";

const EngagementModels = ({ locale }: { locale: Locale }) => {
  const copy = getMessages(locale).services.engagement;

  return (
    <Section id="engagement" space="section" aria-labelledby="engagement-title">
      <div className="site-wrap">
        <SectionHeading title={copy.title} titleId="engagement-title" className={styles.head} />
        <ul className={styles.models} data-reveal>
          {ENGAGEMENT_MODELS.map((modelId) => (
            <EngagementModelCard key={modelId} modelId={modelId} locale={locale} />
          ))}
        </ul>
        <ul className={styles.chooser}>
          {copy.chooser.map((entry) => (
            <li key={entry.question}>
              <b>{entry.question}</b> {entry.answer}
            </li>
          ))}
        </ul>
        {locale === GUIDES_LOCALE && (
          <Link className={styles.guide} href={guidePath(engagementModelsGuide.slug)}>
            {copy.guideLink}
          </Link>
        )}
      </div>
    </Section>
  );
};

export default EngagementModels;
