import { describe, expect, it } from "vitest";
import { enMessages } from "./en";
import { esMessages } from "./es";

type MessageTree = string | number | boolean | readonly MessageTree[] | { readonly [key: string]: MessageTree };
type Shape = string | Shape[] | { [key: string]: Shape };

const shapeOf = (value: MessageTree): Shape => {
  if (Array.isArray(value)) return value.map(shapeOf);
  if (typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, nested]) => [key, shapeOf(nested)]));
  }
  return typeof value;
};

describe("messages", () => {
  it("messages_englishAndSpanish_shareTheSameStructure", () => {
    expect(shapeOf(enMessages)).toEqual(shapeOf(esMessages));
  });
});
