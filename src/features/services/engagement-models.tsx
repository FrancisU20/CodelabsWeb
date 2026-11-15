import Link from "next/link";
import { ENGAGEMENT_MODELS, ENGAGEMENT_TERMS } from "@/content/engagement-terms";
import { engagementModelsGuide } from "@/content/guides/engagement-models-guide";
import { PRICE_LIST } from "@/content/price-list";
import { SERVICE_PRICES } from "@/content/service-prices";
import { fillTemplate } from "@/i18n/fill-template";
import { formatUsd } from "@/i18n/format-usd";
import { getMessages } from "@/i18n/messages/get-messages";
import { LANGUAGE_TAGS, type Locale } from "@/i18n/locale";
import { GUIDES_LOCALE, guidePath } from "@/i18n/routing";
import { joinClassNames } from "@/shared/lib/class-names";
import Section from "@/shared/ui/section/section";
import SectionHeading from "@/shared/ui/section/section-heading";
import styles from "./engagement-models.module.css";

const FEATURED_MODEL = "fixed";

const ENGAGEMENT_PRICES = {
  fixed: Math.min(...Object.values(SERVICE_PRICES).map((price) => price.from)),
  dedicated: PRICE_LIST.team.midLevel,
  extension: PRICE_LIST.team.midLevel,
};

const EngagementModels = ({ locale }: { locale: Locale }) => {
  const messages = getMessages(locale);
  const copy = messages.services.engagement;
  const languageTag = LANGUAGE_TAGS[locale];
  const terms = {
    start: ENGAGEMENT_TERMS.paymentStart,
    midway: ENGAGEMENT_TERMS.paymentMidway,
    delivery: ENGAGEMENT_TERMS.paymentDelivery,
    days: ENGAGEMENT_TERMS.warrantyDays,
    months: ENGAGEMENT_TERMS.minimumMonths,
    weeks: ENGAGEMENT_TERMS.deliveryEveryWeeks,
    senior: formatUsd(PRICE_LIST.team.senior, languageTag),
  };

  return (
    <Section space="section" aria-labelledby="engagement-title">
      <div className="site-wrap">
        <SectionHeading title={copy.title} titleId="engagement-title" className={styles.head} />
        <ul className={styles.models} data-reveal>
          {ENGAGEMENT_MODELS.map((modelId) => {
            const model = copy.items[modelId];
            return (
              <li key={modelId} className={joinClassNames(styles.model, modelId === FEATURED_MODEL && styles.featured)}>
                {modelId === FEATURED_MODEL && <span className={styles.badge}>{copy.featured}</span>}
                <h3>{model.title}</h3>
                <p className={styles.forWho}>{model.forWho}</p>
                <dl className={styles.details}>
                  {model.details.map((detail) => (
                    <div key={detail.label}>
                      <dt>{detail.label}</dt>
                      <dd>{fillTemplate(detail.text, terms)}</dd>
                    </div>
                  ))}
                </dl>
                <p className={styles.price}>
                  {messages.pricing.from} {formatUsd(ENGAGEMENT_PRICES[modelId], languageTag)}
                  <small>{fillTemplate(model.priceNote, terms)}</small>
                </p>
              </li>
            );
          })}
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
