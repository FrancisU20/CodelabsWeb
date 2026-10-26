import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";

describe("sitemap", () => {
  it("sitemap_sitePagesAndLegalPages_listsEveryUrlWithAlternates", () => {
    const entries = sitemap();

    expect(entries).toHaveLength(14);
    expect(entries.find((entry) => entry.url === "https://codelabsecuador.com/en/services")?.alternates?.languages).toEqual({
      es: "https://codelabsecuador.com/servicios",
      en: "https://codelabsecuador.com/en/services",
    });
  });
});
