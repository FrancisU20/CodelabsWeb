import type { ComponentPropsWithoutRef } from "react";
import { buttonClasses } from "./button-classes";
import type { ButtonSize } from "./button-size";
import type { ButtonVariant } from "./button-variant";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const Button = ({ variant = "primary", size = "md", className, type = "button", ...props }: ButtonProps) => (
  <button {...props} type={type} className={buttonClasses(variant, size, className)} />
);

export default Button;
