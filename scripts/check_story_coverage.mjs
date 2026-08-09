#!/usr/bin/env node
/**
 * Fail if any component with HTML lacks a generated story file,
 * or if a story file has fewer than 2 named exports (Default + more).
 */
import fs from "node:fs";
import path from "node:path";
import {
  root,
  componentsDir,
  listComponents,
  categorize,
} from "./lib/components.mjs";
import { getStoryKit } from "./lib/story-kits.mjs";

const storiesDir = path.join(root, "stories");
const errors = [];

const names = listComponents().filter((n) =>
  fs.existsSync(path.join(componentsDir, n, `${n}.html`))
);
const groups = categorize(names);

for (const [category, list] of Object.entries(groups)) {
  for (const name of list) {
    const slug = category.toLowerCase().replace(/\s+/g, "-");
    const storyPath = path.join(storiesDir, slug, `${name}.stories.js`);
    if (!fs.existsSync(storyPath)) {
      errors.push(`Missing stories: ${name} (expected ${storyPath})`);
      continue;
    }
    const kit = getStoryKit(name, category);
    if (!kit.stories?.length) {
      errors.push(`${name}: story kit has zero stories`);
      continue;
    }
    if (kit.stories.length < 2) {
      errors.push(
        `${name}: need ≥2 named stories for exploration (has ${kit.stories.length})`
      );
    }
    const src = fs.readFileSync(storyPath, "utf8");
    if (!src.includes("chromatic")) {
      errors.push(`${name}: story meta missing chromatic modes`);
    }
    if (!src.includes("a11y")) {
      errors.push(`${name}: story meta missing a11y parameters`);
    }
    for (const story of kit.stories) {
      const id = story.id.replace(/[^A-Za-z0-9_]/g, "");
      if (!src.includes(`export const ${id}`)) {
        errors.push(`${name}: missing export const ${id}`);
      }
    }
  }
}

if (errors.length) {
  console.error("Story coverage gate failed:\n");
  for (const e of errors) console.error(`  • ${e}`);
  process.exit(1);
}

console.log(
  `Story coverage gate passed — ${names.length} components with kits + Chromatic/a11y meta.`
);
