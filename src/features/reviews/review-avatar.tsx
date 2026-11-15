import Image from "next/image";
import type { Review } from "@/content/review";
import { joinClassNames } from "@/shared/lib/class-names";
import styles from "./reviews.module.css";

const AVATAR_SIZE = 192;

const initialsOf = (name: string): string =>
  name
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("");

const ReviewAvatar = ({ review }: { review: Review }) =>
  review.photo ? (
    <Image
      src={review.photo}
      alt=""
      width={AVATAR_SIZE}
      height={AVATAR_SIZE}
      className={joinClassNames(styles.avatar, review.photoFit === "contain" && styles.avatarContain)}
    />
  ) : (
    <span className={joinClassNames(styles.avatar, styles.initials)} aria-hidden="true">
      {initialsOf(review.author)}
    </span>
  );

export default ReviewAvatar;
