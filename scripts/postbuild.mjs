import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { deferScripts } from "./defer-scripts.mjs";

const OUTPUT_DIR = "out";

readdirSync(OUTPUT_DIR, { recursive: true })
  .filter((file) => file.endsWith(".html"))
  .map((file) => join(OUTPUT_DIR, file))
  .forEach((path) => writeFileSync(path, deferScripts(readFileSync(path, "utf8"))));
