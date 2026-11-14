import type { Messages } from "@/i18n/messages/messages";
import styles from "./clients.module.css";

const ClientReviews = ({ copy }: { copy: Messages["clients"] }) => (
  <ul className={`site-wrap ${styles.reviews}`} aria-label={copy.reviewsLabel} data-reveal>
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
);

export default ClientReviews;
