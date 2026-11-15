import { IMAGES } from "./images";
import type { Review } from "./review";

export const GOOGLE_AVERAGE_RATING = 5;

export const MAX_RATING = 5;

export const REVIEWS: readonly Review[] = [
  { id: "mishell", author: "Mishell Reinoso", source: "google", rating: 5 },
  { id: "cesar", author: "César Rovalino", source: "google", rating: 5, photo: IMAGES.reviews.cesar },
  {
    id: "inec",
    author: "INEC",
    organization: "Instituto Nacional de Educación y Capacitación",
    source: "google",
    rating: 5,
    photo: IMAGES.reviews.inec,
    photoFit: "contain",
  },
];
