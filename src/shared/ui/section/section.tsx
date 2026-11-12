import type { ComponentPropsWithoutRef } from "react";
import { joinClassNames } from "@/shared/lib/class-names";
import type { SectionSpace } from "./section-space";
import type { SectionTone } from "./section-tone";

const TONE_CLASS: Record<SectionTone, string | undefined> = {
  default: undefined,
  mist: "tone-mist",
  night: "tone-night",
  brand: "tone-brand",
};

const SPACE_CLASS: Record<SectionSpace, string | undefined> = {
  none: undefined,
  section: "space-section",
  tight: "space-tight",
};

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: SectionTone;
  space?: SectionSpace;
};

const Section = ({ tone = "default", space = "none", className, ...props }: SectionProps) => (
  <section {...props} className={joinClassNames(TONE_CLASS[tone], SPACE_CLASS[space], className)} />
);

export default Section;
