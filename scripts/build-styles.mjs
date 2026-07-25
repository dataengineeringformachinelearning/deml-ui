#!/usr/bin/env node
/**
 * Bundle tokens + component CSS into dist/styles for the npm package.
 * Inlines @import url("./…") relative to each file.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "dist", "styles");

function resolveImport(fromFile, importPath) {
  const cleaned = importPath.replace(/^["']|["']$/g, "");
  return path.resolve(path.dirname(fromFile), cleaned);
}

function bundleCss(entryFile, seen = new Set()) {
  const abs = path.resolve(entryFile);
  if (seen.has(abs)) return "";
  seen.add(abs);

  if (!fs.existsSync(abs)) {
    console.warn(`Missing CSS: ${abs}`);
    return "";
  }

  let source = fs.readFileSync(abs, "utf8");
  const importRe = /@import\s+url\(([^)]+)\)\s*;?/g;

  source = source.replace(importRe, (full, raw) => {
    const target = resolveImport(abs, raw.trim());
    return `/* inlined: ${path.relative(root, target)} */\n${bundleCss(target, seen)}`;
  });

  return source;
}

fs.mkdirSync(outDir, { recursive: true });

const tokensSrc = path.join(root, "styles", "tokens.css");
const librarySrc = path.join(root, "styles", "library.css");

fs.copyFileSync(tokensSrc, path.join(outDir, "tokens.css"));
fs.writeFileSync(path.join(outDir, "deml.css"), bundleCss(librarySrc));

console.log("Wrote dist/styles/tokens.css + dist/styles/deml.css");
