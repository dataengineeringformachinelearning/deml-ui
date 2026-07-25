#!/usr/bin/env node
/**
 * Run ng-packagr without letting root package exports confuse the Angular manifest.
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pkgPath = path.join(root, "package.json");
const backupPath = path.join(root, "package.json.ng-backup");

const original = fs.readFileSync(pkgPath, "utf8");
const pkg = JSON.parse(original);

// Slim manifest for ng-packagr (avoids export-condition override warnings)
const slim = {
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
  license: pkg.license,
  peerDependencies: pkg.peerDependencies,
  peerDependenciesMeta: pkg.peerDependenciesMeta,
  sideEffects: false,
};

fs.writeFileSync(backupPath, original);
fs.writeFileSync(pkgPath, JSON.stringify(slim, null, 2) + "\n");

let status = 0;
try {
  const result = spawnSync(
    "npx",
    ["ng-packagr", "-p", "ng-package.json", "-c", "tsconfig.lib.json"],
    { cwd: root, stdio: "inherit", shell: process.platform === "win32" }
  );
  status = result.status ?? 1;
} finally {
  // Always restore root package.json
  fs.writeFileSync(pkgPath, original);
  if (fs.existsSync(backupPath)) fs.unlinkSync(backupPath);
}

if (status !== 0) {
  process.exit(status);
}

const finalize = spawnSync(process.execPath, ["scripts/finalize-package.mjs"], {
  cwd: root,
  stdio: "inherit",
});
process.exit(finalize.status ?? 0);
