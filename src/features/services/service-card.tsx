import Link from "next/link";
import { joinClassNames } from "@/shared/lib/class-names";
import Card from "@/shared/ui/card/card";
import ServiceVignette from "@/showcase/service-vignette";
import type { VignetteKind } from "@/showcase/vignette-kind";
import styles from "./service-card.module.css";

type ServiceCardFacts = {
  timelineLabel: string;
  timeline: string;
  priceLabel: string;
  price: string;
};

type ServiceCardProps = {
  href: string;
  title: string;
  summary: string;
  includes: string[];
  facts: ServiceCardFacts;
  more: string;
  vignette: { kind: VignetteKind; lines: string[]; state?: string };
  className?: string;
};

const ServiceCard = ({ href, title, summary, includes, facts, more, vignette, className }: ServiceCardProps) => (
  <Card as="article" padding="sm" className={joinClassNames(styles.card, className)} reveal>
    <ServiceVignette {...vignette} className={styles.vignette} />
    <div className={styles.main}>
      <h2 className={styles.name}>
        <Link href={href}>{title}</Link>
      </h2>
      <p className={styles.summary}>{summary}</p>
      <ul className={styles.includes}>
        {includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
    <div className={styles.facts}>
      <dl>
        <div>
          <dt>{facts.timelineLabel}</dt>
          <dd>{facts.timeline}</dd>
        </div>
        <div>
          <dt>{facts.priceLabel}</dt>
          <dd>{facts.price}</dd>
        </div>
      </dl>
      <span className={styles.more} aria-hidden="true">
        {more} →
      </span>
    </div>
  </Card>
);

export default ServiceCard;
