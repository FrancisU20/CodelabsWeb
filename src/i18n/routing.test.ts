import { describe, expect, it } from "vitest";
import type { PageKey } from "./page-key";
import { getAlternatePath, LEGAL_ROUTES, ROUTES, SERVICE_ROUTES, serviceIdFromSlug, serviceSlugs } from "./routing";

const pages = [...Object.entries(ROUTES), ...Object.entries(SERVICE_ROUTES), ...Object.entries(LEGAL_ROUTES)] as [PageKey, (typeof ROUTES)[PageKey]][];

describe("serviceIdFromSlug", () => {
  it("serviceIdFromSlug_everyPublishedSlug_resolvesItsService", () => {
    expect(serviceSlugs("en").map((slug) => serviceIdFromSlug(slug, "en"))).toEqual(Object.keys(SERVICE_ROUTES));
  });
});

describe("getAlternatePath", () => {
  it.each(pages)("getAlternatePath_%s_mapsBothLocales", (_page, paths) => {
    expect(getAlternatePath(paths.es, "en")).toBe(paths.en);
    expect(getAlternatePath(paths.en, "es")).toBe(paths.es);
  });

  it("getAlternatePath_unknownPath_fallsBackToHome", () => {
    expect(getAlternatePath("/no-existe", "en")).toBe(ROUTES.home.en);
  });
});
