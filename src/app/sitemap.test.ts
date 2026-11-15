import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";

describe("sitemap", () => {
  it("sitemap_sitePagesAndLegalPages_listsEveryUrlWithAlternates", () => {
    const entries = sitemap();

    expect(entries).toHaveLength(38);
    expect(entries.find((entry) => entry.url === "https://codelabsecuador.com/en/services")?.alternates?.languages).toEqual({
      es: "https://codelabsecuador.com/servicios",
      en: "https://codelabsecuador.com/en/services",
    });
  });

  it("sitemap_spanishGuides_listsGuidesWithoutAlternates", () => {
    const guide = sitemap().find((entry) => entry.url === "https://codelabsecuador.com/guias/cuanto-cuesta-desarrollar-una-app-en-ecuador");

    expect(guide).toBeDefined();
    expect(guide?.alternates).toBeUndefined();
  });
});
