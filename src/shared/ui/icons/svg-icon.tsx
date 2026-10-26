import type { IconName } from "./icon-name";

type IconProps = {
  name: IconName;
  className?: string;
  viewBox?: string;
};

const Icon = ({ name, className, viewBox }: IconProps) => (
  <svg className={className} viewBox={viewBox} aria-hidden="true" focusable="false">
    <use href={`#icon-${name}`} />
  </svg>
);

export default Icon;
