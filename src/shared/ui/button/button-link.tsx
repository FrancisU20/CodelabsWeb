import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { buttonClasses } from "./button-classes";
import type { ButtonSize } from "./button-size";
import type { ButtonVariant } from "./button-variant";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const ButtonLink = ({ variant = "primary", size = "md", className, ...props }: ButtonLinkProps) => (
  <Link {...props} className={buttonClasses(variant, size, className)} />
);

export default ButtonLink;
