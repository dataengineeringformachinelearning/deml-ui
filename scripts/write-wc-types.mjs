#!/usr/bin/env node
/**
 * Emit ambient types for the web-components package entry.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  listPackageable,
  toClassName,
  toTagName,
  toPascalCase,
} from "./lib/components.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "dist", "web-components");
const names = listPackageable();

const body = ["/* AUTO-GENERATED — deml web component types */", ""];

for (const name of names) {
  const cls = toClassName(name);
  const pascal = toPascalCase(name);
  body.push(`export declare class ${cls} extends HTMLElement {`);
  body.push(`  static readonly tagName: "${toTagName(name)}";`);
  body.push(`  static readonly componentName: "${name}";`);
  body.push(`}`);
  body.push(`export declare function define${pascal}(): void;`);
  body.push(``);
}

body.push(`export declare function defineAll(): void;`);
body.push(
  `export declare const componentNames: readonly [${names
    .map((n) => JSON.stringify(n))
    .join(", ")}];`
);
body.push(``);
body.push(`declare global {`);
body.push(`  interface HTMLElementTagNameMap {`);
for (const name of names) {
  body.push(`    "${toTagName(name)}": ${toClassName(name)};`);
}
body.push(`  }`);
body.push(`}`);
body.push(``);
body.push(`export {};`);
body.push(``);

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "index.d.ts"), body.join("\n"));
console.log(`Wrote dist/web-components/index.d.ts (${names.length} elements)`);
