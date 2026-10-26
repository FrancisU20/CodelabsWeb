import { describe, expect, it } from "vitest";
import type { PageKey } from "./page-key";
import { getAlternatePath, ROUTES } from "./routing";

const pages = Object.entries(ROUTES) as [PageKey, (typeof ROUTES)[PageKey]][];

describe("getAlternatePath", () => {
  it.each(pages)("getAlternatePath_%s_mapsBothLocales", (_page, paths) => {
    expect(getAlternatePath(paths.es, "en")).toBe(paths.en);
    expect(getAlternatePath(paths.en, "es")).toBe(paths.es);
  });

  it("getAlternatePath_unknownPath_fallsBackToHome", () => {
    expect(getAlternatePath("/privacidad", "en")).toBe(ROUTES.home.en);
  });
});
