import type { ReactNode } from "react";
import { joinClassNames } from "@/shared/lib/class-names";
import { cssVars } from "@/shared/lib/css-vars";
import type { VignetteKind } from "./vignette-kind";
import styles from "./vignettes.module.css";

const BAR_HEIGHTS = [38, 62, 48, 80, 66, 92];

type ServiceVignetteProps = {
  kind: VignetteKind;
  lines: string[];
  state?: string;
  className?: string;
};

const RENDERERS: Record<VignetteKind, (lines: string[], state?: string) => ReactNode> = {
  web: () => (
    <div className={styles.window}>
      <span className={styles.titleLine} />
      <span className={styles.wideLine} />
      <span />
      <span className={styles.cta} />
    </div>
  ),
  app: () => (
    <div className={styles.phone}>
      <span className={styles.active} />
      <span />
      <span />
      <span />
    </div>
  ),
  flow: (lines) => (
    <>
      {lines.map((line) => (
        <span key={line} className={styles.step}>
          {line}
        </span>
      ))}
      <i className={styles.dot} />
    </>
  ),
  chat: (lines) =>
    lines.map((line, index) => (
      <span key={line} className={joinClassNames(styles.bubble, index % 2 === 0 && styles.customer)}>
        {line}
      </span>
    )),
  chart: () => BAR_HEIGHTS.map((height) => <span key={height} className={styles.bar} style={cssVars({ "--h": `${height}%` })} />),
  status: (lines, state) =>
    lines.map((line) => (
      <span key={line} className={styles.row}>
        <i />
        {line}
        <em>{state}</em>
      </span>
    )),
};

const ServiceVignette = ({ kind, lines, state, className }: ServiceVignetteProps) => (
  <div className={joinClassNames(styles.vignette, styles[kind], className)} aria-hidden="true">
    {RENDERERS[kind](lines, state)}
  </div>
);

export default ServiceVignette;
