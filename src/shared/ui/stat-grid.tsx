import { joinClassNames } from "@/shared/lib/class-names";
import styles from "./stat-grid.module.css";

type StatGridProps = {
  label: string;
  stats: { value: string; label: string }[];
  className?: string;
};

const StatGrid = ({ label, stats, className }: StatGridProps) => (
  <dl className={joinClassNames(styles.grid, className)} aria-label={label}>
    {stats.map((stat) => (
      <div key={stat.label} data-reveal>
        <dt>{stat.label}</dt>
        <dd>{stat.value}</dd>
      </div>
    ))}
  </dl>
);

export default StatGrid;
