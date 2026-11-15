import { REVIEWS } from "@/content/reviews";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import Section from "@/shared/ui/section/section";
import RatingCard from "./rating-card";
import ReviewCard from "./review-card";
import styles from "./reviews.module.css";

const Reviews = ({ locale }: { locale: Locale }) => {
  const copy = getMessages(locale).reviews;

  return (
    <Section tone="mist" space="section" aria-labelledby="reviews-title">
      <div className="site-wrap">
        <h2 id="reviews-title" className={`section-title ${styles.title}`}>
          {copy.title}
        </h2>
        <ul className={styles.grid} data-reveal>
          <RatingCard copy={copy} locale={locale} />
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} copy={copy} />
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Reviews;
