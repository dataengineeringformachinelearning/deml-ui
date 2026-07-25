/**
 * Shared component discovery for generators.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const root = path.resolve(__dirname, "../..");
export const componentsDir = path.join(root, "components");

/** Shell / page chrome — Storybook "Shell" group */
export const SHELL = [
  "skip-link",
  "site-header",
  "navbar",
  "gallery",
  "site-footer",
];

/** Form atoms + composition — Storybook "Forms" group (display order) */
export const FORMS_ORDER = [
  "form-field",
  "input-text",
  "input-email",
  "input-password",
  "input-tel",
  "input-url",
  "input-search",
  "input-number",
  "input-range",
  "input-color",
  "input-date",
  "input-time",
  "input-datetime-local",
  "input-month",
  "input-week",
  "checkbox-newsletter",
  "checkbox-updates",
  "radio-free",
  "radio-pro",
  "radio-team",
  "select",
  "datalist",
  "input-file",
  "input-hidden",
  "input-image",
  "textarea",
  "output",
  "progress",
  "meter",
  "button-submit",
  "button-reset",
  "button",
  "input-submit",
  "input-reset",
  "input-button",
  "megaform",
];

/**
 * Demo / composition pieces that stay in Storybook but are not
 * packaged as standalone CE / Angular atoms by default.
 */
export const PACKAGE_SKIP = new Set([
  "gallery",
  "megaform",
  "form-field", // shared CSS only, no standalone template
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
      const base = path.join(componentsDir, name, name);
      if (!fs.existsSync(`${base}.html`)) return false;
      if (requireCss && !fs.existsSync(`${base}.css`)) return false;
      return true;
    })
    .sort((a, b) => a.localeCompare(b));
}

export function categorize(names) {
  const formSet = new Set(FORMS_ORDER);
  const shellNames = SHELL.filter((n) => names.includes(n));
  const formNames = FORMS_ORDER.filter((n) => names.includes(n));
  const componentNames = names
    .filter((n) => !SHELL.includes(n) && !formSet.has(n))
    .sort((a, b) => a.localeCompare(b));
  return { shellNames, formNames, componentNames };
}

/**
 * Extract reusable template from component HTML.
 * Prefers .demo inner HTML; falls back to body without HTML comments.
 */
export function extractTemplate(html) {
  let cleaned = html.replace(/<!--[\s\S]*?-->/g, "").trim();

  // Prefer content inside the first .demo
  const demoMatch = cleaned.match(
    /<div[^>]*class=["'][^"']*\bdemo\b[^"']*["'][^>]*>([\s\S]*?)<\/div>/i
  );
  if (demoMatch) {
    return demoMatch[1].trim();
  }

  // Prefer <nav>, <header>, <footer>, <form> roots without section chrome
  const rootMatch = cleaned.match(
    /<(nav|header|footer|form|aside|article|search)[\s>][\s\S]*$/i
  );
  if (rootMatch) {
    // strip outer section wrapper if present
    const sectionInner = cleaned.match(
      /<section[^>]*>\s*([\s\S]*)\s*<\/section>\s*$/i
    );
    if (sectionInner) {
      let inner = sectionInner[1].trim();
      // drop leading h2 titles from demos
      inner = inner.replace(/^<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>\s*/i, "");
      const demo2 = inner.match(
        /<div[^>]*class=["'][^"']*\bdemo\b[^"']*["'][^>]*>([\s\S]*?)<\/div>/i
      );
      if (demo2) return demo2[1].trim();
      return inner.trim();
    }
  }

  // Strip section chrome: remove outer <section>…</section> and h2
  const sectionMatch = cleaned.match(
    /<section[^>]*>\s*([\s\S]*)\s*<\/section>\s*$/i
  );
  if (sectionMatch) {
    let inner = sectionMatch[1].trim();
    inner = inner.replace(/^<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>\s*/i, "");
    const demo2 = inner.match(
      /<div[^>]*class=["'][^"']*\bdemo\b[^"']*["'][^>]*>([\s\S]*?)<\/div>/i
    );
    if (demo2) return demo2[1].trim();
    return inner.trim();
  }

  return cleaned;
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
    // form-field has CSS only
    const htmlPath = path.join(componentsDir, name, `${name}.html`);
    return fs.existsSync(htmlPath);
  });
}
