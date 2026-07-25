#!/usr/bin/env node
/**
 * Generates Custom Element + Angular wrappers from components HTML/CSS.
 */
import fs from "node:fs";
import path from "node:path";
import {
  root,
  componentsDir,
  listPackageable,
  extractTemplate,
  escapeTemplateLiteral,
  toClassName,
  toTagName,
  toPascalCase,
  readMeta,
} from "./lib/components.mjs";

const genWcDir = path.join(root, "generated", "web-components");
const genNgDir = path.join(root, "generated", "angular");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function clearTs(dir) {
  if (!fs.existsSync(dir)) return;
  for (const file of fs.readdirSync(dir)) {
    if (file.endsWith(".ts")) fs.unlinkSync(path.join(dir, file));
  }
}

function writeWc(name, template, className, tagName) {
  const body = escapeTemplateLiteral(template);
  return `/* AUTO-GENERATED from components/${name}/${name}.html — do not edit */
export class ${className} extends HTMLElement {
  static readonly tagName = ${JSON.stringify(tagName)};
  static readonly componentName = ${JSON.stringify(name)};

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = \`${body}\`;
    }
  }
}

export function define${toPascalCase(name)}(): void {
  if (!customElements.get(${className}.tagName)) {
    customElements.define(${className}.tagName, ${className});
  }
}

export default ${className};
`;
}

function writeNg(name, template, className, tagName) {
  // Use JSON string + innerHTML so raw HTML ({}, @, etc.) never hits Angular's template parser.
  const json = JSON.stringify(template);
  return `/* AUTO-GENERATED from components/${name}/${name}.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = ${json};

@Component({
  selector: ${JSON.stringify(tagName)},
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class ${className} implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
`;
}

ensureDir(genWcDir);
ensureDir(genNgDir);
clearTs(genWcDir);
clearTs(genNgDir);

const names = listPackageable();
const exportsWc = [];
const exportsNg = [];
const defineCalls = [];

for (const name of names) {
  const htmlPath = path.join(componentsDir, name, `${name}.html`);
  if (!fs.existsSync(htmlPath)) continue;

  const meta = readMeta(name);
  const html = fs.readFileSync(htmlPath, "utf8");
  const template = extractTemplate(html);
  if (!template) {
    console.warn(`skip ${name}: empty template`);
    continue;
  }

  const className = meta.className || toClassName(name);
  const tagName = meta.tag || toTagName(name);
  const pascal = toPascalCase(name);

  fs.writeFileSync(
    path.join(genWcDir, `${name}.ts`),
    writeWc(name, template, className, tagName)
  );
  fs.writeFileSync(
    path.join(genNgDir, `${name}.ts`),
    writeNg(name, template, className, tagName)
  );

  exportsWc.push(
    `export { ${className}, define${pascal} } from "./${name}.js";`
  );
  exportsNg.push(`export { ${className} } from "./${name}";`);
  defineCalls.push(`  define${pascal}();`);
}

const registry = `/* AUTO-GENERATED — do not edit */
${names
  .map((n) => `import { define${toPascalCase(n)} } from "./${n}.js";`)
  .join("\n")}

/** Register every deml-ui custom element (idempotent). */
export function defineAll(): void {
${defineCalls.join("\n")}
}

export const componentNames = ${JSON.stringify(names, null, 2)} as const;
`;

fs.writeFileSync(path.join(genWcDir, "registry.ts"), registry);
fs.writeFileSync(
  path.join(genWcDir, "index.ts"),
  `/* AUTO-GENERATED — do not edit */
${exportsWc.join("\n")}
export { defineAll, componentNames } from "./registry.js";
`
);

fs.writeFileSync(
  path.join(genNgDir, "public-api.ts"),
  `/* AUTO-GENERATED — do not edit */
${exportsNg.join("\n")}
export { DEML_COMPONENTS } from "./all-components";
`
);

const classNames = names.map((n) => toClassName(n));
fs.writeFileSync(
  path.join(genNgDir, "all-components.ts"),
  `/* AUTO-GENERATED — do not edit */
${names.map((n) => `import { ${toClassName(n)} } from "./${n}";`).join("\n")}

/** Array of all standalone deml-ui Angular components (for convenience imports). */
export const DEML_COMPONENTS = [
${classNames.map((c) => `  ${c},`).join("\n")}
] as const;
`
);

console.log(
  `Generated ${names.length} web components + Angular wrappers → generated/`
);
