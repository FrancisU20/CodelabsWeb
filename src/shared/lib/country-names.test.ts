import { describe, expect, it } from "vitest";
import { formatCountryList } from "./country-names";

describe("formatCountryList", () => {
  it.each([
    ["es", "Ecuador, Perú, Colombia y México"],
    ["en", "Ecuador, Peru, Colombia, and Mexico"],
  ])("formatCountryList_%s_returnsLocalizedList", (locale, expected) => {
    expect(formatCountryList(["EC", "PE", "CO", "MX"], locale)).toBe(expected);
  });
});
