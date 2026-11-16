import { describe, expect, it } from "vitest";
import { deferChunkScripts } from "./defer-chunk-scripts.mjs";

describe("deferChunkScripts", () => {
  it("deferChunkScripts_pageWithChunks_loadsThemAfterFirstPaint", () => {
    const page = `<head><link rel="preload" as="script" fetchPriority="low" href="/_next/static/chunks/a.js"/><script src="/_next/static/chunks/b.js" async=""></script><script src="/_next/static/chunks/p.js" noModule=""></script></head><body><script src="/_next/static/chunks/a.js" async=""></script></body>`;

    expect(deferChunkScripts(page)).toBe(
      `<head><script src="/_next/static/chunks/p.js" noModule=""></script></head><body><script>(()=>{let started=false;const start=()=>{if(started)return;started=true;["/_next/static/chunks/b.js","/_next/static/chunks/a.js"].forEach((src)=>{const tag=document.createElement("script");tag.src=src;tag.async=true;document.head.appendChild(tag)})};addEventListener("load",start);if(PerformanceObserver.supportedEntryTypes.includes("largest-contentful-paint"))new PerformanceObserver(()=>setTimeout(start)).observe({type:"largest-contentful-paint",buffered:true})})()</script></body>`,
    );
  });
});
