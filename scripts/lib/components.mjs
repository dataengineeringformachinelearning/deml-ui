/**
 * Shared component discovery, categories, and template extraction.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const root = path.resolve(__dirname, "../..");
export const componentsDir = path.join(root, "components");

/**
 * Storybook sidebar groups (display order within each group).
 * Only components present on disk appear.
 */
export const CATEGORIES = {
  Shell: [
    "skip-link",
    "brand",
    "app-layout",
    "app-header",
    "app-sidebar",
    "app-footer",
    "page-shell",
    "page-header",
    "page-template",
    "page-back-link",
    "content-layout",
    "sidebar-nav",
    "navigation-menu",
    "breadcrumbs",
    "theme-toggle",
    "profile",
  ],
  Layout: [
    "section",
    "section-template",
    "section-header",
    "page-section",
    "container",
    "stack",
    "grid",
    "tile-board",
    "dashboard-grid",
    "card-grid",
    "microcard-grid",
    "panel-grid",
    "form-grid",
    "cluster",
    "box",
    "separator",
    "scroll-area",
    "split-panel",
  ],
  Forms: [
    "form-field",
    "label",
    "field",
    "form-section",
    "button",
    "button-group",
    "input-text",
    "input-email",
    "input-password",
    "input-search",
    "input-number",
    "input-date",
    "input-time",
    "input-range",
    "textarea",
    "select",
    "checkbox",
    "radio-group",
    "switch",
    "toggle",
    "autocomplete",
    "file-upload",
    "progress",
  ],
  Feedback: [
    "badge",
    "status-badge",
    "status-pill",
    "callout",
    "toast",
    "flashbar",
    "empty-state",
    "error-state",
    "skeleton",
    "spinner",
    "loading-overlay",
    "avatar",
    "icon",
    "kbd",
  ],
  Data: [
    "card",
    "stat-card",
    "metric-card",
    "microcard",
    "hud-panel",
    "status-card",
    "table",
    "pagination",
    "activity-list",
    "timeline",
    "metric-list",
    "chart-card",
    "area-chart",
    "bar-chart",
    "donut-chart",
    "chart",
    "chart-panel",
    "chart-empty-state",
    "property-filter",
    "bulk-toolbar",
  ],
  Overlays: [
    "dialog",
    "confirm-dialog",
    "sheet",
    "dropdown",
    "popover",
    "tooltip",
    "tabs",
    "accordion",
    "disclosure",
    "command",
    "wizard",
    "help-panel",
  ],
};

/** Flat ordered list of known category members (for PACKAGE_SKIP defaults). */
export const KNOWN_COMPONENTS = Object.values(CATEGORIES).flat();

/**
 * Not packaged as CE/Angular atoms (shared CSS or composition-only).
 */
export const PACKAGE_SKIP = new Set(["form-field"]);

/** Components that need Storybook play / runtime wiring. */
export const INTERACTIVE = new Set([
  "dialog",
  "confirm-dialog",
  "tabs",
  "dropdown",
  "popover",
  "disclosure",
  "theme-toggle",
  "accordion",
  "command",
  "sheet",
  "area-chart",
  "bar-chart",
  "donut-chart",
  "chart",
  "chart-card",
  "chart-panel",
]);

export function toPascalCase(kebab) {
  return kebab
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

export function toClassName(kebab) {
  return `Deml${toPascalCase(kebab)}`;
}

export function toTagName(kebab) {
  return `deml-${kebab}`;
}

export function toStoryTitle(category, name) {
  const label = name
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
  return `${category}/${label}`;
}

export function readMeta(name) {
  const metaPath = path.join(componentsDir, name, "meta.json");
  if (!fs.existsSync(metaPath)) return {};
  try {
    return JSON.parse(fs.readFileSync(metaPath, "utf8"));
  } catch {
    return {};
  }
}

/**
 * List component folders that have matching .html (and optionally .css).
 */
export function listComponents({ requireCss = false } = {}) {
  if (!fs.existsSync(componentsDir)) return [];

  return fs
    .readdirSync(componentsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => {
      if (name.startsWith("_") || name.startsWith(".")) return false;
      const base = path.join(componentsDir, name, name);
      if (!fs.existsSync(`${base}.html`)) {
        // CSS-only shared modules (form-field)
        if (requireCss) return false;
        return fs.existsSync(`${base}.css`);
      }
      if (requireCss && !fs.existsSync(`${base}.css`)) return false;
      return true;
    })
    .sort((a, b) => a.localeCompare(b));
}

/**
 * Group components for Storybook. Unknown folders land in Components.
 */
export function categorize(names) {
  const nameSet = new Set(names);
  const groups = {};
  const assigned = new Set();

  for (const [category, order] of Object.entries(CATEGORIES)) {
    const list = order.filter((n) => nameSet.has(n));
    if (list.length) {
      groups[category] = list;
      list.forEach((n) => assigned.add(n));
    }
  }

  const orphans = names
    .filter((n) => !assigned.has(n) && n !== "form-field")
    .sort((a, b) => a.localeCompare(b));
  if (orphans.length) groups.Components = orphans;

  return groups;
}

/**
 * Extract reusable template from component HTML.
 * Prefers balanced `.demo` inner HTML (handles nested divs).
 */
export function extractTemplate(html) {
  const cleaned = html.replace(/<!--[\s\S]*?-->/g, "").trim();
  const demoInner = extractBalancedDemo(cleaned);
  if (demoInner != null) return demoInner;

  const sectionMatch = cleaned.match(
    /<section[^>]*>\s*([\s\S]*)\s*<\/section>\s*$/i
  );
  if (sectionMatch) {
    let inner = sectionMatch[1].trim();
    inner = inner.replace(/^<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>\s*/i, "");
    const nested = extractBalancedDemo(inner);
    if (nested != null) return nested;
    return inner.trim();
  }

  return cleaned;
}

/**
 * Find first element with class containing `demo` and return its inner HTML,
 * balancing nested <div> tags.
 */
function extractBalancedDemo(html) {
  const openRe = /<div\b[^>]*\bclass=["'][^"']*\bdemo\b[^"']*["'][^>]*>/i;
  const openMatch = openRe.exec(html);
  if (!openMatch) return null;

  const start = openMatch.index + openMatch[0].length;
  let depth = 1;
  let i = start;
  const lower = html.toLowerCase();

  while (i < html.length && depth > 0) {
    const nextOpen = lower.indexOf("<div", i);
    const nextClose = lower.indexOf("</div>", i);
    if (nextClose === -1) break;

    if (nextOpen !== -1 && nextOpen < nextClose) {
      // Avoid matching "</div" falsely; ensure tag start
      const after = lower[nextOpen + 4];
      if (after === ">" || after === " " || after === "\n" || after === "\t") {
        depth += 1;
        i = nextOpen + 4;
        continue;
      }
      i = nextOpen + 4;
      continue;
    }

    depth -= 1;
    if (depth === 0) {
      return html.slice(start, nextClose).trim();
    }
    i = nextClose + 6;
  }

  return html.slice(start).trim();
}

export function escapeTemplateLiteral(str) {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

/**
 * Components that should be packaged as CE + Angular.
 */
export function listPackageable() {
  return listComponents({ requireCss: false }).filter((name) => {
    const meta = readMeta(name);
    if (meta.package === false) return false;
    if (meta.package === true) return true;
    if (PACKAGE_SKIP.has(name)) return false;
    const htmlPath = path.join(componentsDir, name, `${name}.html`);
    return fs.existsSync(htmlPath);
  });
}
