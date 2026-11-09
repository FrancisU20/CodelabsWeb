import SectionTitle from "./section-title";
import type { SectionTitleText } from "./section-title-text";

type SectionHeadingProps = {
  eyebrow: string;
  title: SectionTitleText;
  titleId?: string;
  body?: string;
  className?: string;
  reveal?: boolean;
};

const SectionHeading = ({ eyebrow, title, titleId, body, className, reveal = false }: SectionHeadingProps) => (
  <div className={className} data-reveal={reveal || undefined}>
    <p className="eyebrow">{eyebrow}</p>
    <SectionTitle id={titleId} title={title} />
    {body && <p className="lede m-0">{body}</p>}
  </div>
);

export default SectionHeading;
