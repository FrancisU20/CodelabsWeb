import { describe, expect, it } from "vitest";
import { enMessages } from "./en";
import { esMessages } from "./es";

type Shape = string | Shape[] | { [key: string]: Shape };

const shapeOf = (value: unknown): Shape => {
  if (Array.isArray(value)) return value.map(shapeOf);
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, nested]) => [key, shapeOf(nested)]));
  }
  return typeof value;
};

describe("messages", () => {
  it("messages_englishAndSpanish_shareTheSameStructure", () => {
    expect(shapeOf(enMessages)).toEqual(shapeOf(esMessages));
  });
});
