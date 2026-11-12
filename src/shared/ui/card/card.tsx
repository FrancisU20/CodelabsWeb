import type { ReactNode } from "react";
import { joinClassNames } from "@/shared/lib/class-names";

type CardProps = {
  as?: "div" | "article";
  padding?: "md" | "sm";
  className?: string;
  reveal?: boolean;
  children: ReactNode;
};

const Card = ({ as: Element = "div", padding = "md", className, reveal = false, children }: CardProps) => (
  <Element className={joinClassNames("card", padding === "sm" && "card-sm", className)} data-reveal={reveal || undefined}>
    {children}
  </Element>
);

export default Card;
