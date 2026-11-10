import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const SOURCE = join(process.cwd(), "src");

const sourceFiles = (readdirSync(SOURCE, { recursive: true }) as string[]).filter(
  (file) => /\.(css|ts|tsx)$/.test(file) && !file.includes(".test."),
);

const rules: [string, RegExp, string[]][] = [
  ["literalColors", /#[0-9a-fA-F]{3,8}\b|rgba?\(/, ["styles/tokens.css", "showcase/", "shared/ui/icons/icon-sprite.tsx"]],
  ["buttonClasses", /\bbtn btn-|"btn"/, ["shared/ui/button/"]],
  ["imagePaths", /"\/[\w/.-]+\.(png|webp|svg|ico|jpe?g)"/, ["content/images.ts"]],
];

describe("central modules", () => {
  it.each(rules)("sourceFiles_%s_appearOnlyInTheirCentralModule", (_rule, pattern, owners) => {
    const offenders = sourceFiles
      .filter((file) => !owners.some((owner) => file.startsWith(owner)))
      .filter((file) => pattern.test(readFileSync(join(SOURCE, file), "utf8")));

    expect(offenders).toEqual([]);
  });
});
