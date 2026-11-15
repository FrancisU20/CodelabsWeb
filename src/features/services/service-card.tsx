import Link from "next/link";
import { joinClassNames } from "@/shared/lib/class-names";
import Card from "@/shared/ui/card/card";
import ServiceVignette from "@/showcase/service-vignette";
import type { VignetteKind } from "@/showcase/vignette-kind";
import styles from "./service-card.module.css";

type ServiceCardProps = {
  href: string;
  title: string;
  summary: string;
  price: string;
  more: string;
  vignette: { kind: VignetteKind; lines: string[]; state?: string };
  className?: string;
};

const ServiceCard = ({ href, title, summary, price, more, vignette, className }: ServiceCardProps) => (
  <Card as="article" padding="sm" className={joinClassNames(styles.card, className)} reveal>
    <ServiceVignette {...vignette} className={styles.vignette} />
    <h2 className={styles.name}>
      <Link href={href}>{title}</Link>
    </h2>
    <p className={styles.summary}>{summary}</p>
    <p className={styles.price}>{price}</p>
    <span className={styles.more} aria-hidden="true">
      {more}
    </span>
  </Card>
);

export default ServiceCard;
