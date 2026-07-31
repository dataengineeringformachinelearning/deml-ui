#!/usr/bin/env node
/**
 * Remove components that are not dashboard/app primitives.
 * Safe to re-run. Keeps CATEGORIES inventory + form-field (CSS-only).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { CATEGORIES, componentsDir, listComponents } from "./lib/components.mjs";

const KEEP = new Set([...Object.values(CATEGORIES).flat(), "form-field"]);

/** Explicit remove list (HTML zoo, demos, niche product shells). */
const REMOVE = [
  "article",
  "aside",
  "audio",
  "bidirectional",
  "blockquote",
  "button-reset",
  "button-submit",
  "canvas",
  "checkbox-newsletter",
  "checkbox-updates",
  "datalist",
  "description-list",
  "details",
  "edits",
  "embed-object",
  "gallery",
  "headings",
  "iframe",
  "image",
  "image-map",
  "input-button",
  "input-color",
  "input-datetime-local",
  "input-file",
  "input-hidden",
  "input-image",
  "input-month",
  "input-reset",
  "input-submit",
  "input-tel",
  "input-url",
  "input-week",
  "math",
  "megaform",
  "menu",
  "meter",
  "navbar",
  "noscript",
  "ordered-list",
  "output",
  "paragraph",
  "picture",
  "pre",
  "radio-free",
  "radio-pro",
  "radio-team",
  "ruby",
  "search",
  "site-footer",
  "site-header",
  "slot",
  "svg",
  "template",
  "unordered-list",
  "video",
  // Niche / premature product shells
  "announcement-card",
  "auth-panel",
  "calendar",
  "carousel",
  "composer",
  "editor",
  "explore-card",
  "fab",
  "gauge-arc",
  "icon-badge",
  "icon-heading",
  "icon-text",
  "kanban",
  "menubar",
  "onboarding-checklist",
  "otp-input",
  "page-skeleton",
  "pillbox",
  "pipeline-flow",
  "preferences",
  "ring-gauge",
  "status-metric-row",
  "status-panel",
  "stream-status",
  "uptime-bar",
  "virtual-list",
];

function rmDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
}

let removed = 0;
for (const name of REMOVE) {
  const dir = path.join(componentsDir, name);
  if (!fs.existsSync(dir)) continue;
  rmDir(dir);
  removed += 1;
  console.log(`removed ${name}`);
}

// Also remove any orphan not in KEEP (belt + suspenders)
for (const name of listComponents()) {
  if (KEEP.has(name)) continue;
  const dir = path.join(componentsDir, name);
  rmDir(dir);
  removed += 1;
  console.log(`removed orphan ${name}`);
}

const kept = listComponents();
console.log(`Kept ${kept.length} components, removed ${removed}.`);
console.log(kept.join(", "));
