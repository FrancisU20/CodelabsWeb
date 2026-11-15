import { describe, expect, it } from "vitest";
import { fillTemplate } from "./fill-template";

describe("fillTemplate", () => {
  it.each([
    ["knownKeys", "{start}% al iniciar y {days} días", "40% al iniciar y 60 días"],
    ["unknownKey", "Mínimo {months} meses", "Mínimo {months} meses"],
  ])("fillTemplate_%s_replacesOnlyProvidedValues", (_case, template, expected) => {
    expect(fillTemplate(template, { start: 40, days: 60 })).toBe(expected);
  });
});
