import { GOOGLE_BUSINESS_URL } from "@/config/site";
import { GOOGLE_AVERAGE_RATING, MAX_RATING } from "@/content/reviews";
import { LANGUAGE_TAGS, type Locale } from "@/i18n/locale";
import type { Messages } from "@/i18n/messages/messages";
import ReviewStars from "./review-stars";
import styles from "./reviews.module.css";

const formatRating = (rating: number, locale: Locale): string =>
  new Intl.NumberFormat(LANGUAGE_TAGS[locale], { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(rating);

const RatingCard = ({ copy, locale }: { copy: Messages["reviews"]; locale: Locale }) => {
  const rating = formatRating(GOOGLE_AVERAGE_RATING, locale);

  return (
    <li className={`${styles.card} ${styles.ratingCard}`}>
      <ReviewStars rating={MAX_RATING} label={copy.ratingLabel.replace("{rating}", rating)} />
      <p className={styles.average}>{rating}</p>
      <p className={styles.averageLabel}>{copy.averageLabel}</p>
      <a className={styles.seeAll} href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer">
        {copy.seeAll}
      </a>
    </li>
  );
};

export default RatingCard;
