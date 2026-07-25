#!/usr/bin/env node
/**
 * Run all code generators (CSS barrel, CE/Angular wrappers, Storybook stories).
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const scripts = [
  "generate-css-barrel.mjs",
  "generate-components.mjs",
  "generate-stories.mjs",
];

let failed = false;
for (const script of scripts) {
  const result = spawnSync(process.execPath, [path.join("scripts", script)], {
    cwd: root,
    stdio: "inherit",
  });
  if (result.status !== 0) {
    failed = true;
    break;
  }
}

process.exit(failed ? 1 : 0);
