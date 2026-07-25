#!/usr/bin/env node
/**
 * Normalize dist/angular/package.json so subpath imports stay coherent
 * when the root package is published (not as a nested npm package).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const angularPkgPath = path.join(root, "dist", "angular", "package.json");

if (!fs.existsSync(angularPkgPath)) {
  console.warn("skip finalize: dist/angular/package.json missing");
  process.exit(0);
}

const pkg = {
  name: "deml-ui-angular",
  version: JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"))
    .version,
  description: "Angular entry for deml-ui (use import from 'deml-ui/angular')",
  module: "fesm2022/deml-ui.mjs",
  typings: "index.d.ts",
  exports: {
    ".": {
      types: "./index.d.ts",
      default: "./fesm2022/deml-ui.mjs",
    },
  },
  sideEffects: false,
  peerDependencies: {
    "@angular/common": ">=19.0.0",
    "@angular/core": ">=19.0.0",
  },
};

fs.writeFileSync(angularPkgPath, JSON.stringify(pkg, null, 2) + "\n");
console.log("Normalized dist/angular/package.json");
