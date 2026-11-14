import Link from "next/link";
import { joinClassNames } from "@/shared/lib/class-names";
import Card from "@/shared/ui/card/card";
import ServiceVignette from "@/showcase/service-vignette";
import type { VignetteKind } from "@/showcase/vignette-kind";
import styles from "./service-card.module.css";

type ServiceCardProps = {
  href: string;
  title: string;
  label?: string;
  summary?: string;
  more: string;
  vignette: { kind: VignetteKind; lines: string[]; state?: string };
  layout: "stacked" | "row";
  headingLevel?: "h2" | "h3";
  className?: string;
};

const ServiceCard = ({ href, title, label, summary, more, vignette, layout, headingLevel: Heading = "h3", className }: ServiceCardProps) => (
  <Card as="article" padding="sm" className={joinClassNames(styles.card, styles[layout], className)} reveal={layout === "row"}>
    <ServiceVignette {...vignette} className={styles.vignette} />
    {label && <p className={styles.label}>{label}</p>}
    <Heading className={styles.name}>
      <Link href={href}>{title}</Link>
    </Heading>
    {summary && <p className={styles.summary}>{summary}</p>}
    <span className={styles.more} aria-hidden="true">
      {more}
    </span>
  </Card>
);

export default ServiceCard;
