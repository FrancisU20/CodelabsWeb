import Icon from "@/shared/ui/icons/svg-icon";
import styles from "./reviews.module.css";

const ReviewStars = ({ rating, label }: { rating: number; label: string }) => (
  <span className={styles.stars} role="img" aria-label={label}>
    {[...Array(rating).keys()].map((starIndex) => (
      <Icon key={starIndex} name="star" />
    ))}
  </span>
);

export default ReviewStars;
