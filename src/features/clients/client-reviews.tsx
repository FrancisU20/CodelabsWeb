import { GOOGLE_BUSINESS_URL } from "@/config/site";
import type { Messages } from "@/i18n/messages/messages";
import styles from "./clients.module.css";

const ClientReviews = ({ copy }: { copy: Messages["clients"] }) => (
  <div className={`site-wrap ${styles.reviewsBlock}`} data-reveal>
    <ul className={styles.reviews} aria-label={copy.reviewsLabel}>
      {copy.reviews.map((review) => (
        <li key={review.author} className={styles.review}>
          <blockquote className={styles.quote}>{review.quote}</blockquote>
          <p className={styles.author}>
            <strong>{review.author}</strong>
            <span>{copy.reviewSource}</span>
          </p>
        </li>
      ))}
    </ul>
    <a className={styles.reviewsLink} href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer">
      {copy.reviewsLink}
    </a>
  </div>
);

export default ClientReviews;
