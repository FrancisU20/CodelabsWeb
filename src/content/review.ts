import type { ReviewId } from "./review-id";
import type { ReviewSource } from "./review-source";

export type Review = {
  id: ReviewId;
  author: string;
  organization?: string;
  source: ReviewSource;
  rating: number;
  photo?: string;
  photoFit?: "cover" | "contain";
};
