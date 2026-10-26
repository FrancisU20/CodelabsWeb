import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig, globalIgnores } from "eslint/config";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const restrictImports = (files, group, message) => ({
  files,
  rules: {
    "no-restricted-imports": ["error", { patterns: [{ group, message }] }],
  },
});

const architectureBoundaries = [
  restrictImports(
    ["src/shared/**"],
    ["@/app/**", "@/views/**", "@/layout/**", "@/features/**", "@/i18n/**", "@/config/**", "@/content/**"],
    "shared is business-agnostic: it receives copy and data through props.",
  ),
  restrictImports(
    ["src/features/**"],
    ["@/app/**", "@/views/**", "@/layout/**", "@/features/**", "../**"],
    "A feature never imports another feature; move shared code to src/shared.",
  ),
  restrictImports(
    ["src/layout/**"],
    ["@/app/**", "@/views/**", "@/features/**", "../**"],
    "layout composes shared UI only; page content belongs to features.",
  ),
  restrictImports(["src/views/**"], ["@/app/**"], "views are composed by routes, never the other way around."),
  restrictImports(
    ["src/config/**", "src/content/**", "src/i18n/**"],
    ["@/app/**", "@/views/**", "@/layout/**", "@/features/**", "@/shared/**"],
    "config, content and i18n hold data and pure functions without UI dependencies.",
  ),
];

const eslintConfig = defineConfig([
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...architectureBoundaries,
  {
    files: ["src/features/aws/aws-logo.tsx"],
    rules: { "@next/next/no-img-element": "off" },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "infra/cdk.out/**",
    "infra/dist/**",
    "infra/node_modules/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
