import { joinClassNames } from "@/shared/lib/class-names";
import type { ButtonSize } from "./button-size";
import type { ButtonVariant } from "./button-variant";

export const buttonClasses = (variant: ButtonVariant, size: ButtonSize, className?: string): string =>
  joinClassNames("btn", `btn-${variant}`, size === "sm" && "btn-sm", className);
