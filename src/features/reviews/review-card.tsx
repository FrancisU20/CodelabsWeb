import type { Review } from "@/content/review";
import type { Messages } from "@/i18n/messages/messages";
import ReviewAvatar from "./review-avatar";
import ReviewStars from "./review-stars";
import styles from "./reviews.module.css";

const ReviewCard = ({ review, copy }: { review: Review; copy: Messages["reviews"] }) => (
  <li className={styles.card}>
    <div className={styles.person}>
      <ReviewAvatar review={review} />
      <div className={styles.identity}>
        <b>{review.author}</b>
        {review.organization && <span className={styles.organization}>{review.organization}</span>}
      </div>
    </div>
    <ReviewStars rating={review.rating} label={copy.ratingLabel.replace("{rating}", String(review.rating))} />
    <blockquote className={styles.quote}>{copy.quotes[review.id]}</blockquote>
    <span className={styles.source} data-source={review.source}>
      {copy.sources[review.source]}
    </span>
  </li>
);

export default ReviewCard;
