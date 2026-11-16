import { describe, expect, it } from "vitest";
import { deferScripts } from "./defer-scripts.mjs";

describe("deferScripts", () => {
  it("deferScripts_pageWithFrameworkChunks_loadsThemAfterFirstPaint", () => {
    const page = `<head><link rel="preload" as="script" fetchPriority="low" href="/_next/static/chunks/a.js"/><script src="/_next/static/chunks/b.js" async=""></script><script src="/_next/static/chunks/p.js" noModule=""></script></head><body><script src="/_next/static/chunks/a.js" async=""></script></body>`;

    const deferred = deferScripts(page);

    expect(deferred).toContain(`<head><script src="/_next/static/chunks/p.js" noModule=""></script></head><body><script>`);
    expect(deferred).toContain(`["/_next/static/chunks/b.js","/_next/static/chunks/a.js"]`);
  });
});
