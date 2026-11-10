import type { ReactNode } from "react";
import { cx } from "@/shared/lib/class-names";

type KickerProps = {
  as?: "p" | "h2";
  id?: string;
  className?: string;
  children: ReactNode;
};

const Kicker = ({ as: Element = "p", id, className, children }: KickerProps) => (
  <Element id={id} className={cx("kicker", className)}>
    {children}
  </Element>
);

export default Kicker;
