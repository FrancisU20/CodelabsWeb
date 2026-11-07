import type { CSSProperties } from "react";
import { cssVars } from "@/shared/lib/css-vars";

const PIN_HEIGHT = {
  standard: "160vh",
  extended: "220vh",
} as const;

export type PinLength = keyof typeof PIN_HEIGHT;

export const pinLength = (length: PinLength): CSSProperties => cssVars({ "--pin-height": PIN_HEIGHT[length] });
