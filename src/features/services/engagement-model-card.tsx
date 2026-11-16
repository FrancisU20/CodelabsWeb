import type { EngagementModelId } from "@/content/engagement-model-id";
import { PRICE_LIST } from "@/content/price-list";
import { SERVICE_PRICES } from "@/content/service-prices";
import { fillTerms } from "@/i18n/fill-terms";
import { formatUsd } from "@/i18n/format-usd";
import { getMessages } from "@/i18n/messages/get-messages";
import { LANGUAGE_TAGS, type Locale } from "@/i18n/locale";
import { joinClassNames } from "@/shared/lib/class-names";
import styles from "./engagement-models.module.css";

const FEATURED_MODEL: EngagementModelId = "fixed";

const ENGAGEMENT_PRICES: Record<EngagementModelId, number> = {
  fixed: Math.min(...Object.values(SERVICE_PRICES).map((price) => price.from)),
  dedicated: PRICE_LIST.team.midLevel,
  extension: PRICE_LIST.team.midLevel,
};

const EngagementModelCard = ({ modelId, locale }: { modelId: EngagementModelId; locale: Locale }) => {
  const messages = getMessages(locale);
  const copy = messages.services.engagement;
  const model = copy.items[modelId];
  const languageTag = LANGUAGE_TAGS[locale];
  const featured = modelId === FEATURED_MODEL;

  return (
    <li className={joinClassNames(styles.model, featured && styles.featured)}>
      {featured && <span className={styles.badge}>{copy.featured}</span>}
      <h3>{model.title}</h3>
      <p className={styles.forWho}>{model.forWho}</p>
      <dl className={styles.details}>
        {model.details.map((detail) => (
          <div key={detail.label}>
            <dt>{detail.label}</dt>
            <dd>{fillTerms(detail.text)}</dd>
          </div>
        ))}
      </dl>
      <p className={styles.price}>
        {messages.pricing.from} {formatUsd(ENGAGEMENT_PRICES[modelId], languageTag)}
        <small>{fillTerms(model.priceNote, { senior: formatUsd(PRICE_LIST.team.senior, languageTag) })}</small>
      </p>
    </li>
  );
};

export default EngagementModelCard;
