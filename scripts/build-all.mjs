#!/usr/bin/env node
/**
 * Full library build: sync → styles → web components → html pack → angular
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function run(cmd, args) {
  console.log(`\n› ${cmd} ${args.join(" ")}\n`);
  const result = spawnSync(cmd, args, {
    cwd: root,
    stdio: "inherit",
    shell: process.platform === "win32",
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run(process.execPath, ["scripts/sync.mjs"]);
run(process.execPath, ["scripts/build-styles.mjs"]);
run("npx", ["vite", "build", "--config", "vite.lib.config.ts"]);
run(process.execPath, ["scripts/write-wc-types.mjs"]);
run(process.execPath, ["scripts/build-html.mjs"]);
run(process.execPath, ["scripts/build-angular.mjs"]);

console.log("\n✓ deml library build complete → dist/\n");
