import { describe, expect, it } from "vitest";
import { buildPageMetadata } from "./page-metadata";

describe("buildPageMetadata", () => {
  it("buildPageMetadata_englishServices_setsCanonicalAndLanguageAlternates", () => {
    const metadata = buildPageMetadata("services", "en");

    expect(metadata.alternates).toEqual({
      canonical: "https://codelabsecuador.com/en/services",
      languages: {
        es: "https://codelabsecuador.com/servicios",
        en: "https://codelabsecuador.com/en/services",
        "x-default": "https://codelabsecuador.com/servicios",
      },
    });
  });
});
