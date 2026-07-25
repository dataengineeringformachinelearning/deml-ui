#!/usr/bin/env node
/**
 * Copy raw HTML/CSS components into dist/html for local reuse.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { componentsDir, listComponents, root } from "./lib/components.mjs";

const outDir = path.join(root, "dist", "html");

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

// tokens for consumers who copy-paste
fs.mkdirSync(path.join(outDir, "_styles"), { recursive: true });
fs.copyFileSync(
  path.join(root, "styles", "tokens.css"),
  path.join(outDir, "_styles", "tokens.css")
);

const names = listComponents();
// include form-field css-only
const formField = path.join(componentsDir, "form-field");
if (fs.existsSync(formField)) {
  copyDir(formField, path.join(outDir, "form-field"));
}

for (const name of names) {
  copyDir(path.join(componentsDir, name), path.join(outDir, name));
}

if (fs.existsSync(path.join(componentsDir, "components.css"))) {
  fs.copyFileSync(
    path.join(componentsDir, "components.css"),
    path.join(outDir, "components.css")
  );
}

console.log(`Copied ${names.length} components → dist/html/`);
