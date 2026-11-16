import { describe, expect, it } from "vitest";
import { deferScripts } from "./defer-scripts.mjs";

describe("deferScripts", () => {
  it("deferScripts_pageWithAsyncAndDeferScripts_loadsThemAfterFirstPaint", () => {
    const page = `<head><link rel="preload" as="script" fetchPriority="low" href="/a.js"/><script src="/b.js" async=""></script><script src="/p.js" noModule=""></script><script defer="" src="https://cdn.test/beacon.js" data-cf-beacon="{&quot;token&quot;:&quot;t1&quot;}"></script></head><body><script src="/a.js" async=""></script></body>`;

    const deferred = deferScripts(page);

    expect(deferred).toContain(`<head><script src="/p.js" noModule=""></script></head><body><script>`);
    expect(deferred).toContain(`[{"src":"/b.js"},{"src":"https://cdn.test/beacon.js","data-cf-beacon":"{\\"token\\":\\"t1\\"}"},{"src":"/a.js"}]`);
  });
});
