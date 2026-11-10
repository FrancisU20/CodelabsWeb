import { cx } from "@/shared/lib/class-names";
import type { SectionTitleText } from "./section-title-text";

type SectionTitleProps = {
  title: SectionTitleText;
  id?: string;
  className?: string;
};

const SectionTitle = ({ title, id, className }: SectionTitleProps) => (
  <h2 id={id} className={cx("section-title m-0", className)}>
    {title.lines.map((line) => (
      <span key={line} className="block">
        {line}
      </span>
    ))}
    {title.accent && <span className="text-accent">{title.accent}</span>}
  </h2>
);

export default SectionTitle;
