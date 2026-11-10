import { describe, expect, it } from "vitest";
import { activeIndex, entryProgress, pinProgress } from "./progress";

describe("pinProgress", () => {
  it.each([
    ["beforeSection", 0, 0],
    ["middle", 600, 0.5],
    ["afterSection", 5000, 1],
  ])("pinProgress_%s_returns%s", (_case, scrollY, expected) => {
    expect(pinProgress(scrollY, 100, 1000)).toBe(expected);
  });

  it("pinProgress_sectionShorterThanViewport_returnsComplete", () => {
    expect(pinProgress(0, 100, -50)).toBe(1);
  });
});

describe("entryProgress", () => {
  it.each([
    ["belowViewport", 0, 0],
    ["halfEntered", 500, 0.5],
    ["reachedTop", 1000, 1],
  ])("entryProgress_%s_returns%s", (_case, scrollY, expected) => {
    expect(entryProgress(scrollY, 1000, 1000)).toBe(expected);
  });
});

describe("activeIndex", () => {
  it.each([
    [0, 0],
    [0.4, 1],
    [1, 2],
  ])("activeIndex_progress%s_returns%s", (progress, expected) => {
    expect(activeIndex(progress, 3)).toBe(expected);
  });
});
