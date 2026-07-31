/**
 * One-shot: add simple structural shells for Viking-UI product components
 * that deml-ui does not already cover. Markup only — empty CSS scopes.
 *
 * Usage: node scripts/extract-viking-shells.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const componentsDir = path.join(root, "components");

function titleCase(kebab) {
  return kebab
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

function htmlShell(name, title, demoInner, { formField = false } = {}) {
  const classes = ["component", `component--${name}`];
  if (formField) classes.push("form-field");
  return `<!--
  Component: ${title}
  Path: components/${name}/${name}.html
  Styles: components/${name}/${name}.css
  Source: structural shell from deml Viking-UI (unstyled)
-->
<section id="${name}" class="${classes.join(" ")}">
  <h2>${title}</h2>
  <div class="demo">
${demoInner}
  </div>
</section>
`;
}

function cssShell(name, title) {
  return `/* Component: ${title}
   Markup: components/${name}/${name}.html
   Unstyled shell — style here.
*/

.component--${name} {
}
`;
}

/** Components already represented in deml-ui (skip). */
const EXISTING = new Set([
  "article",
  "aside",
  "audio",
  "bidirectional",
  "blockquote",
  "button",
  "button-reset",
  "button-submit",
  "canvas",
  "checkbox-newsletter",
  "checkbox-updates",
  "datalist",
  "description-list",
  "details",
  "dialog",
  "edits",
  "embed-object",
  "form-field",
  "gallery",
  "headings",
  "iframe",
  "image",
  "image-map",
  "input-button",
  "input-color",
  "input-date",
  "input-datetime-local",
  "input-email",
  "input-file",
  "input-hidden",
  "input-image",
  "input-month",
  "input-number",
  "input-password",
  "input-range",
  "input-reset",
  "input-search",
  "input-submit",
  "input-tel",
  "input-text",
  "input-time",
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
  "progress",
  "radio-free",
  "radio-pro",
  "radio-team",
  "ruby",
  "search",
  "select",
  "site-footer",
  "site-header",
  "skip-link",
  "slot",
  "svg",
  "table",
  "template",
  "textarea",
  "unordered-list",
  "video",
]);

/**
 * Simple structural demos — anatomy only, no colors/tokens/branding.
 * Keys = deml-ui folder names.
 */
const SHELLS = {
  // ——— Surfaces / feedback ———
  card: {
    demo: `    <article class="card">
      <header class="card__header">
        <h3 class="card__title">Card title</h3>
        <p class="card__description">Optional supporting text.</p>
      </header>
      <div class="card__body">
        <p>Card body content.</p>
      </div>
      <footer class="card__footer">
        <button type="button">Action</button>
      </footer>
    </article>`,
  },
  badge: {
    demo: `    <span class="badge">Badge</span>
    <span class="badge" data-tone="success">Success</span>
    <span class="badge" data-tone="warning">Warning</span>
    <span class="badge" data-tone="danger">Danger</span>`,
  },
  callout: {
    demo: `    <aside class="callout" role="status" data-tone="info">
      <div class="callout__body">
        <p class="callout__heading">Callout heading</p>
        <p class="callout__text">Highlighted message for the user.</p>
      </div>
      <button type="button" class="callout__close" aria-label="Dismiss">×</button>
    </aside>`,
  },
  avatar: {
    demo: `    <span class="avatar" aria-label="Ada Lovelace">
      <span class="avatar__initials" aria-hidden="true">AL</span>
    </span>
    <span class="avatar" aria-label="User photo">
      <img class="avatar__image" src="" alt="" width="40" height="40" />
    </span>`,
  },
  separator: {
    demo: `    <p>Above</p>
    <hr class="separator" />
    <p>Below</p>
    <div class="separator separator--vertical" role="separator" aria-orientation="vertical"></div>`,
  },
  kbd: {
    demo: `    <p>Press <kbd class="kbd">⌘</kbd> <kbd class="kbd">K</kbd> to search.</p>`,
  },
  icon: {
    demo: `    <svg class="icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2" />
      <path d="M12 8v4l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
    <span class="icon-label">Icon placeholder</span>`,
  },
  spinner: {
    demo: `    <span class="spinner" role="status" aria-label="Loading">
      <span class="spinner__visual" aria-hidden="true"></span>
    </span>`,
  },
  skeleton: {
    demo: `    <div class="skeleton" aria-hidden="true">
      <div class="skeleton__line" style="width: 45%"></div>
      <div class="skeleton__line" style="width: 80%"></div>
      <div class="skeleton__line" style="width: 65%"></div>
    </div>`,
  },
  "empty-state": {
    demo: `    <div class="empty-state" role="status">
      <p class="empty-state__eyebrow">Empty</p>
      <p class="empty-state__title">No items yet</p>
      <p class="empty-state__description">Create your first item to get started.</p>
      <div class="empty-state__actions">
        <button type="button">Create item</button>
      </div>
    </div>`,
  },
  "error-state": {
    demo: `    <div class="error-state" role="alert">
      <p class="error-state__title">Something went wrong</p>
      <p class="error-state__description">We could not load this resource. Try again.</p>
      <div class="error-state__actions">
        <button type="button">Retry</button>
      </div>
    </div>`,
  },
  "loading-overlay": {
    demo: `    <div class="loading-overlay" role="status" aria-busy="true" aria-label="Loading">
      <span class="loading-overlay__message">Loading…</span>
    </div>`,
  },
  toast: {
    demo: `    <div class="toast" role="status">
      <p class="toast__title">Saved</p>
      <p class="toast__description">Your changes were saved.</p>
      <button type="button" class="toast__close" aria-label="Dismiss">×</button>
    </div>`,
  },
  flashbar: {
    demo: `    <ul class="flashbar" aria-label="Notifications">
      <li class="flashbar__item" data-tone="info">
        <p class="flashbar__message">Informational notice.</p>
        <button type="button" class="flashbar__dismiss" aria-label="Dismiss">×</button>
      </li>
      <li class="flashbar__item" data-tone="warning">
        <p class="flashbar__message">Warning notice.</p>
        <button type="button" class="flashbar__dismiss" aria-label="Dismiss">×</button>
      </li>
    </ul>`,
  },
  "status-badge": {
    demo: `    <span class="status-badge" data-tone="success">
      <span class="status-badge__dot" aria-hidden="true"></span>
      Operational
    </span>
    <span class="status-badge" data-tone="danger">
      <span class="status-badge__dot" aria-hidden="true"></span>
      Degraded
    </span>`,
  },
  "status-pill": {
    demo: `    <span class="status-pill" data-status="up">Up</span>
    <span class="status-pill" data-status="down">Down</span>
    <span class="status-pill" data-status="maintenance">Maintenance</span>`,
  },
  fab: {
    demo: `    <button type="button" class="fab" aria-label="Create">
      <span aria-hidden="true">+</span>
    </button>`,
  },

  // ——— Forms ———
  label: {
    formField: true,
    demo: `    <label class="label" for="label-demo-input">Label</label>
    <input id="label-demo-input" type="text" name="label-demo" />`,
  },
  field: {
    formField: true,
    demo: `    <div class="field" role="group" aria-labelledby="field-label">
      <label class="field__label-wrap" for="field-input">
        <span class="field__label" id="field-label">Field label <span class="field__required" aria-hidden="true">*</span></span>
        <input id="field-input" class="field__control" type="text" name="field" required aria-describedby="field-desc" />
      </label>
      <p class="field__description" id="field-desc">Helper text for the control.</p>
    </div>`,
  },
  checkbox: {
    formField: true,
    demo: `    <label class="checkbox">
      <input type="checkbox" name="checkbox-demo" />
      <span class="checkbox__label">Checkbox option</span>
    </label>`,
  },
  "radio-group": {
    formField: true,
    demo: `    <fieldset class="radio-group">
      <legend class="radio-group__legend">Plan</legend>
      <label class="radio-group__option"><input type="radio" name="plan" value="free" /> Free</label>
      <label class="radio-group__option"><input type="radio" name="plan" value="pro" checked /> Pro</label>
      <label class="radio-group__option"><input type="radio" name="plan" value="team" /> Team</label>
    </fieldset>`,
  },
  switch: {
    formField: true,
    demo: `    <label class="switch">
      <span class="switch__track">
        <input type="checkbox" role="switch" name="switch-demo" aria-checked="false" />
        <span class="switch__thumb" aria-hidden="true"></span>
      </span>
      <span class="switch__content">
        <span class="switch__label">Enable notifications</span>
        <span class="switch__description">Receive product updates by email.</span>
      </span>
    </label>`,
  },
  toggle: {
    formField: true,
    demo: `    <div class="toggle-group" role="group" aria-label="View">
      <button type="button" class="toggle" aria-pressed="true">List</button>
      <button type="button" class="toggle" aria-pressed="false">Grid</button>
    </div>`,
  },
  autocomplete: {
    formField: true,
    demo: `    <div class="autocomplete">
      <label for="autocomplete-input">Fruit</label>
      <input id="autocomplete-input" type="text" name="fruit" autocomplete="off" aria-autocomplete="list" aria-controls="autocomplete-list" aria-expanded="true" />
      <ul id="autocomplete-list" class="autocomplete__list" role="listbox">
        <li role="option" aria-selected="true">Apple</li>
        <li role="option">Apricot</li>
        <li role="option">Avocado</li>
      </ul>
    </div>`,
  },
  "otp-input": {
    formField: true,
    demo: `    <div class="otp-input" role="group" aria-label="One-time code">
      <label for="otp-input-field">Verification code</label>
      <input id="otp-input-field" class="otp-input__control" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" spellcheck="false" />
    </div>`,
  },
  pillbox: {
    formField: true,
    demo: `    <div class="pillbox">
      <label for="pillbox-input">Tags</label>
      <div class="pillbox__control">
        <ul class="pillbox__pills" aria-label="Selected tags">
          <li class="pillbox__pill">alpha <button type="button" aria-label="Remove alpha">×</button></li>
          <li class="pillbox__pill">beta <button type="button" aria-label="Remove beta">×</button></li>
        </ul>
        <input id="pillbox-input" type="text" name="tags" autocomplete="off" />
      </div>
    </div>`,
  },
  "file-upload": {
    formField: true,
    demo: `    <div class="file-upload">
      <label class="file-upload__dropzone" for="file-upload-input">
        <span class="file-upload__title">Drop files here</span>
        <span class="file-upload__hint">or click to browse</span>
        <input id="file-upload-input" class="file-upload__input" type="file" multiple />
      </label>
      <ul class="file-upload__list" aria-label="Selected files"></ul>
    </div>`,
  },
  calendar: {
    formField: true,
    demo: `    <div class="calendar" role="application" aria-label="Calendar">
      <div class="calendar__header">
        <button type="button" aria-label="Previous month">‹</button>
        <h3 class="calendar__month">July 2026</h3>
        <button type="button" aria-label="Next month">›</button>
      </div>
      <table class="calendar__grid">
        <thead>
          <tr>
            <th scope="col">Su</th><th scope="col">Mo</th><th scope="col">Tu</th><th scope="col">We</th><th scope="col">Th</th><th scope="col">Fr</th><th scope="col">Sa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><button type="button" disabled>28</button></td>
            <td><button type="button" disabled>29</button></td>
            <td><button type="button" disabled>30</button></td>
            <td><button type="button">1</button></td>
            <td><button type="button">2</button></td>
            <td><button type="button" aria-current="date">3</button></td>
            <td><button type="button">4</button></td>
          </tr>
        </tbody>
      </table>
    </div>`,
  },
  "form-section": {
    formField: true,
    demo: `    <section class="form-section">
      <header class="form-section__header">
        <h3 class="form-section__title">Account</h3>
        <p class="form-section__description">Basic profile settings.</p>
      </header>
      <div class="form-section__body">
        <label>Name <input type="text" name="name" /></label>
        <label>Email <input type="email" name="email" /></label>
      </div>
    </section>`,
  },

  // ——— Navigation / overlays ———
  tabs: {
    demo: `    <div class="tabs">
      <div class="tabs__list" role="tablist" aria-label="Sample tabs">
        <button type="button" class="tabs__tab" role="tab" aria-selected="true" aria-controls="tab-panel-1" id="tab-1">Overview</button>
        <button type="button" class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab-panel-2" id="tab-2">Details</button>
        <button type="button" class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab-panel-3" id="tab-3">Settings</button>
      </div>
      <div class="tabs__panel" role="tabpanel" id="tab-panel-1" aria-labelledby="tab-1">Overview content.</div>
      <div class="tabs__panel" role="tabpanel" id="tab-panel-2" aria-labelledby="tab-2" hidden>Details content.</div>
      <div class="tabs__panel" role="tabpanel" id="tab-panel-3" aria-labelledby="tab-3" hidden>Settings content.</div>
    </div>`,
  },
  accordion: {
    demo: `    <div class="accordion">
      <details class="accordion__item" open>
        <summary class="accordion__trigger">Section one</summary>
        <div class="accordion__panel">Content for section one.</div>
      </details>
      <details class="accordion__item">
        <summary class="accordion__trigger">Section two</summary>
        <div class="accordion__panel">Content for section two.</div>
      </details>
    </div>`,
  },
  dropdown: {
    demo: `    <div class="dropdown">
      <button type="button" class="dropdown__trigger" aria-haspopup="menu" aria-expanded="true" aria-controls="dropdown-menu">Actions</button>
      <ul id="dropdown-menu" class="dropdown__menu" role="menu">
        <li role="none"><button type="button" role="menuitem">Edit</button></li>
        <li role="none"><button type="button" role="menuitem">Duplicate</button></li>
        <li role="none"><button type="button" role="menuitem">Delete</button></li>
      </ul>
    </div>`,
  },
  popover: {
    demo: `    <div class="popover">
      <button type="button" class="popover__trigger" aria-expanded="true" aria-controls="popover-panel">Open popover</button>
      <div id="popover-panel" class="popover__panel" role="dialog" aria-label="Popover">
        <p>Popover content.</p>
        <button type="button">Got it</button>
      </div>
    </div>`,
  },
  tooltip: {
    demo: `    <button type="button" class="tooltip-trigger" aria-describedby="tooltip-demo">Hover me</button>
    <span id="tooltip-demo" class="tooltip" role="tooltip">Helpful tip</span>`,
  },
  sheet: {
    demo: `    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title">
      <header class="sheet__header">
        <h3 id="sheet-title">Sheet title</h3>
        <button type="button" class="sheet__close" aria-label="Close">×</button>
      </header>
      <div class="sheet__body">
        <p>Slide-over panel content.</p>
      </div>
      <footer class="sheet__footer">
        <button type="button">Cancel</button>
        <button type="button">Save</button>
      </footer>
    </div>`,
  },
  "split-panel": {
    demo: `    <div class="split-panel">
      <div class="split-panel__main">
        <p>Main content region.</p>
      </div>
      <aside class="split-panel__side" aria-label="Details">
        <h3>Details</h3>
        <p>Contextual side panel.</p>
      </aside>
    </div>`,
  },
  breadcrumbs: {
    demo: `    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <ol class="breadcrumbs__list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Library</a></li>
        <li aria-current="page">Current page</li>
      </ol>
    </nav>`,
  },
  pagination: {
    demo: `    <nav class="pagination" aria-label="Pagination">
      <button type="button" class="pagination__prev" aria-label="Previous page">Previous</button>
      <ul class="pagination__pages">
        <li><button type="button" aria-current="page">1</button></li>
        <li><button type="button">2</button></li>
        <li><button type="button">3</button></li>
      </ul>
      <button type="button" class="pagination__next" aria-label="Next page">Next</button>
    </nav>`,
  },
  menubar: {
    demo: `    <div class="menubar" role="menubar" aria-label="Application">
      <button type="button" role="menuitem" aria-haspopup="true">File</button>
      <button type="button" role="menuitem" aria-haspopup="true">Edit</button>
      <button type="button" role="menuitem" aria-haspopup="true">View</button>
    </div>`,
  },
  "navigation-menu": {
    demo: `    <nav class="navigation-menu" aria-label="Primary">
      <ul class="navigation-menu__list">
        <li><a class="navigation-menu__link" href="#" aria-current="page">Dashboard</a></li>
        <li><a class="navigation-menu__link" href="#">Analytics</a></li>
        <li><a class="navigation-menu__link" href="#">Settings</a></li>
      </ul>
    </nav>`,
  },
  "sidebar-nav": {
    demo: `    <nav class="sidebar-nav" aria-label="Sidebar">
      <p class="sidebar-nav__header">Workspace</p>
      <ul class="sidebar-nav__list">
        <li><a href="#" aria-current="page">Overview</a></li>
        <li>
          <button type="button" aria-expanded="true">Projects</button>
          <ul>
            <li><a href="#">Alpha</a></li>
            <li><a href="#">Beta</a></li>
          </ul>
        </li>
        <li><a href="#">Members</a></li>
      </ul>
    </nav>`,
  },
  wizard: {
    demo: `    <div class="wizard" role="dialog" aria-labelledby="wizard-title">
      <header class="wizard__header">
        <h3 id="wizard-title">Setup wizard</h3>
        <ol class="wizard__steps">
          <li aria-current="step">Account</li>
          <li>Preferences</li>
          <li>Confirm</li>
        </ol>
      </header>
      <div class="wizard__body">
        <p>Step content goes here.</p>
      </div>
      <footer class="wizard__footer">
        <button type="button">Back</button>
        <button type="button">Next</button>
      </footer>
    </div>`,
  },
  carousel: {
    demo: `    <div class="carousel" aria-roledescription="carousel" aria-label="Examples">
      <div class="carousel__track">
        <div class="carousel__slide" role="group" aria-roledescription="slide" aria-label="1 of 3">Slide one</div>
        <div class="carousel__slide" role="group" aria-roledescription="slide" aria-label="2 of 3">Slide two</div>
        <div class="carousel__slide" role="group" aria-roledescription="slide" aria-label="3 of 3">Slide three</div>
      </div>
      <div class="carousel__controls">
        <button type="button" aria-label="Previous slide">Previous</button>
        <button type="button" aria-label="Next slide">Next</button>
      </div>
    </div>`,
  },
  timeline: {
    demo: `    <ol class="timeline">
      <li class="timeline__item">
        <time datetime="2026-07-01">Jul 1</time>
        <p class="timeline__title">Created</p>
        <p class="timeline__description">Resource was created.</p>
      </li>
      <li class="timeline__item">
        <time datetime="2026-07-15">Jul 15</time>
        <p class="timeline__title">Updated</p>
        <p class="timeline__description">Configuration changed.</p>
      </li>
    </ol>`,
  },
  command: {
    demo: `    <div class="command" role="dialog" aria-modal="true" aria-label="Command palette">
      <input class="command__input" type="search" placeholder="Type a command…" aria-controls="command-list" />
      <ul id="command-list" class="command__list" role="listbox">
        <li role="option" aria-selected="true">Go to dashboard</li>
        <li role="option">Open settings</li>
        <li role="option">Sign out</li>
      </ul>
    </div>`,
  },
  "scroll-area": {
    demo: `    <div class="scroll-area" tabindex="0">
      <p>Scrollable region with constrained height.</p>
      <p>Additional content for overflow.</p>
      <p>More content.</p>
      <p>Even more content.</p>
    </div>`,
  },
  "virtual-list": {
    demo: `    <div class="virtual-list" role="list" aria-label="Virtualized list" tabindex="0">
      <div class="virtual-list__window">
        <div class="virtual-list__item" role="listitem">Item 1</div>
        <div class="virtual-list__item" role="listitem">Item 2</div>
        <div class="virtual-list__item" role="listitem">Item 3</div>
      </div>
    </div>`,
  },
  disclosure: {
    demo: `    <div class="disclosure">
      <button type="button" class="disclosure__trigger" aria-expanded="false" aria-controls="disclosure-panel">
        Show more
      </button>
      <div id="disclosure-panel" class="disclosure__panel" hidden>
        Progressive disclosure content.
      </div>
    </div>`,
  },

  // ——— Layout ———
  stack: {
    demo: `    <div class="stack">
      <div>Stack item one</div>
      <div>Stack item two</div>
      <div>Stack item three</div>
    </div>`,
  },
  grid: {
    demo: `    <div class="grid">
      <div class="grid__item">A</div>
      <div class="grid__item">B</div>
      <div class="grid__item">C</div>
      <div class="grid__item">D</div>
    </div>`,
  },
  "panel-grid": {
    demo: `    <div class="panel-grid">
      <article class="panel-grid__item">Panel A</article>
      <article class="panel-grid__item">Panel B</article>
    </div>`,
  },
  "form-grid": {
    formField: true,
    demo: `    <div class="form-grid">
      <label>First name <input type="text" name="first" /></label>
      <label>Last name <input type="text" name="last" /></label>
      <label>Email <input type="email" name="email" /></label>
      <label>Company <input type="text" name="company" /></label>
    </div>`,
  },
  cluster: {
    demo: `    <div class="cluster">
      <button type="button">Primary</button>
      <button type="button">Secondary</button>
      <span class="badge">Tag</span>
    </div>`,
  },
  box: {
    demo: `    <div class="box">
      <p>Lightweight content grouping box.</p>
    </div>`,
  },
  container: {
    demo: `    <div class="container">
      <header class="container__header">
        <h3 class="container__title">Container</h3>
        <p class="container__description">Content anatomy wrapper.</p>
      </header>
      <div class="container__body">
        <p>Body content.</p>
      </div>
    </div>`,
  },
  "page-shell": {
    demo: `    <div class="page-shell">
      <div class="page-shell__inner">
        <p>Constrained page canvas content.</p>
      </div>
    </div>`,
  },
  section: {
    demo: `    <section class="section">
      <header class="section__header">
        <h3 class="section__title">Section title</h3>
        <p class="section__description">Section supporting text.</p>
      </header>
      <div class="section__body">
        <p>Section body.</p>
      </div>
    </section>`,
  },
  "page-header": {
    demo: `    <header class="page-header">
      <div class="page-header__text">
        <h1 class="page-header__title">Page title</h1>
        <p class="page-header__subtitle">Short page description.</p>
      </div>
      <div class="page-header__actions">
        <button type="button">Secondary</button>
        <button type="button">Primary</button>
      </div>
    </header>`,
  },
  "page-template": {
    demo: `    <div class="page-template">
      <header class="page-template__header">
        <h1>Page template</h1>
        <div class="page-template__actions"><button type="button">Action</button></div>
      </header>
      <div class="page-template__content">
        <p>Route content region.</p>
      </div>
      <footer class="page-template__footer">Footer slot</footer>
    </div>`,
  },
  "section-template": {
    demo: `    <section class="section-template">
      <header class="section-template__header">
        <div>
          <h3 class="section-template__title">Section template</h3>
          <p class="section-template__description">Reusable section anatomy.</p>
        </div>
        <div class="section-template__actions"><button type="button">Action</button></div>
      </header>
      <hr class="section-template__divider" />
      <div class="section-template__body">Body content.</div>
    </section>`,
  },
  "app-layout": {
    demo: `    <div class="app-layout">
      <aside class="app-layout__nav" aria-label="App navigation">Nav</aside>
      <div class="app-layout__main">
        <header class="app-layout__header">Header</header>
        <main class="app-layout__content">Main content</main>
      </div>
      <aside class="app-layout__tools" aria-label="Tools">Tools</aside>
    </div>`,
  },
  "content-layout": {
    demo: `    <div class="content-layout">
      <nav class="content-layout__breadcrumbs" aria-label="Breadcrumb">Home / Page</nav>
      <header class="content-layout__header">
        <h1>Content layout</h1>
      </header>
      <div class="content-layout__body">Body region</div>
    </div>`,
  },

  // ——— App chrome ———
  "app-header": {
    demo: `    <header class="app-header">
      <a class="app-header__brand" href="#">Product</a>
      <nav class="app-header__nav" aria-label="App">
        <a href="#">Home</a>
        <a href="#">Docs</a>
      </nav>
      <div class="app-header__actions">
        <button type="button">Account</button>
      </div>
    </header>`,
  },
  "app-sidebar": {
    demo: `    <aside class="app-sidebar" aria-label="Dashboard">
      <p class="app-sidebar__brand">Product</p>
      <nav class="app-sidebar__nav">
        <a href="#" aria-current="page">Dashboard</a>
        <a href="#">Pipelines</a>
        <a href="#">Settings</a>
      </nav>
    </aside>`,
  },
  "app-footer": {
    demo: `    <footer class="app-footer">
      <p class="app-footer__copy">© Product</p>
      <nav class="app-footer__nav" aria-label="Footer">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </nav>
    </footer>`,
  },
  "page-back-link": {
    demo: `    <a class="page-back-link" href="#">← Back to list</a>`,
  },
  brand: {
    demo: `    <a class="brand" href="/" aria-label="Product home">
      <span class="brand__mark" aria-hidden="true"></span>
      <span class="brand__wordmark">Product</span>
    </a>`,
  },
  profile: {
    demo: `    <div class="profile">
      <span class="avatar" aria-hidden="true"><span class="avatar__initials">JD</span></span>
      <div class="profile__text">
        <p class="profile__name">Jane Doe</p>
        <p class="profile__meta">jane@example.com</p>
      </div>
    </div>`,
  },
  "theme-toggle": {
    demo: `    <button type="button" class="theme-toggle" aria-pressed="false" aria-label="Toggle dark mode">
      Theme
    </button>`,
  },
  "auth-panel": {
    demo: `    <section class="auth-panel" aria-labelledby="auth-panel-title">
      <h2 id="auth-panel-title">Sign in</h2>
      <p class="auth-panel__description">Access your account.</p>
      <form class="auth-panel__form">
        <label>Email <input type="email" name="email" autocomplete="username" /></label>
        <label>Password <input type="password" name="password" autocomplete="current-password" /></label>
        <button type="submit">Continue</button>
      </form>
      <div class="auth-panel__social">
        <button type="button">Continue with Google</button>
        <button type="button">Continue with GitHub</button>
      </div>
    </section>`,
  },

  // ——— Data / dashboard ———
  "metric-card": {
    demo: `    <article class="metric-card" role="group" aria-label="Active users">
      <p class="metric-card__label">Active users</p>
      <p class="metric-card__value">1,284</p>
      <p class="metric-card__trend">+12% vs last week</p>
    </article>`,
  },
  "hud-panel": {
    demo: `    <section class="hud-panel" aria-labelledby="hud-panel-title">
      <header class="hud-panel__header">
        <h3 id="hud-panel-title">HUD panel</h3>
      </header>
      <div class="hud-panel__body">
        <p>Dashboard panel body.</p>
      </div>
    </section>`,
  },
  "chart-panel": {
    demo: `    <section class="chart-panel" aria-labelledby="chart-panel-title">
      <header class="chart-panel__header">
        <h3 id="chart-panel-title">Chart panel</h3>
        <p class="chart-panel__value">42</p>
      </header>
      <div class="chart-panel__body" role="img" aria-label="Sample chart placeholder">
        <svg class="chart" viewBox="0 0 200 80" width="100%" height="80" aria-hidden="true">
          <polyline fill="none" stroke="currentColor" stroke-width="2" points="0,60 40,40 80,50 120,20 160,35 200,10" />
        </svg>
      </div>
    </section>`,
  },
  chart: {
    demo: `    <figure class="chart-figure">
      <svg class="chart" viewBox="0 0 240 120" width="100%" height="120" role="img" aria-label="Sample line chart">
        <line x1="0" y1="110" x2="240" y2="110" stroke="currentColor" opacity="0.25" />
        <polyline fill="none" stroke="currentColor" stroke-width="2" points="0,90 40,70 80,75 120,40 160,55 200,30 240,20" />
      </svg>
      <figcaption>Chart placeholder (native SVG)</figcaption>
    </figure>`,
  },
  "ring-gauge": {
    demo: `    <div class="ring-gauge" role="img" aria-label="72 percent complete">
      <svg viewBox="0 0 36 36" width="72" height="72" aria-hidden="true">
        <circle class="ring-gauge__track" cx="18" cy="18" r="15.5" fill="none" stroke="currentColor" stroke-width="3" opacity="0.2" />
        <circle class="ring-gauge__value" cx="18" cy="18" r="15.5" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="72 100" transform="rotate(-90 18 18)" />
      </svg>
      <span class="ring-gauge__label">72%</span>
    </div>`,
  },
  "gauge-arc": {
    demo: `    <div class="gauge-arc" role="img" aria-label="64 percent">
      <svg viewBox="0 0 100 56" width="120" height="68" aria-hidden="true">
        <path d="M10 50 A40 40 0 0 1 90 50" fill="none" stroke="currentColor" stroke-width="8" opacity="0.2" />
        <path d="M10 50 A40 40 0 0 1 70 18" fill="none" stroke="currentColor" stroke-width="8" />
      </svg>
      <span class="gauge-arc__label">64%</span>
    </div>`,
  },
  "activity-list": {
    demo: `    <ul class="activity-list" aria-label="Recent activity">
      <li class="activity-list__item">
        <time datetime="2026-07-30T12:00:00Z">12:00</time>
        <p class="activity-list__title">Deploy completed</p>
        <p class="activity-list__meta">production</p>
      </li>
      <li class="activity-list__item">
        <time datetime="2026-07-30T11:40:00Z">11:40</time>
        <p class="activity-list__title">Config updated</p>
        <p class="activity-list__meta">settings</p>
      </li>
    </ul>`,
  },
  "onboarding-checklist": {
    demo: `    <section class="onboarding-checklist" aria-labelledby="onboarding-title">
      <h3 id="onboarding-title">Get started</h3>
      <ul>
        <li><label><input type="checkbox" checked disabled /> Create account</label></li>
        <li><label><input type="checkbox" /> Connect data source</label></li>
        <li><label><input type="checkbox" /> Invite teammates</label></li>
      </ul>
    </section>`,
  },
  "status-card": {
    demo: `    <article class="status-card">
      <header class="status-card__header">
        <h3 class="status-card__title">API</h3>
        <span class="status-pill" data-status="up">Operational</span>
      </header>
      <p class="status-card__description">Public API endpoints.</p>
      <p class="status-card__uptime">Uptime 99.99%</p>
    </article>`,
  },
  "status-panel": {
    demo: `    <section class="status-panel" aria-labelledby="status-panel-title">
      <h3 id="status-panel-title">Service status</h3>
      <ul class="status-panel__list">
        <li>API — Operational</li>
        <li>Dashboard — Operational</li>
        <li>Ingest — Degraded</li>
      </ul>
    </section>`,
  },
  "uptime-bar": {
    demo: `    <div class="uptime-bar" role="img" aria-label="90 day uptime history">
      <ol class="uptime-bar__segments" aria-hidden="true">
        <li data-status="up"></li>
        <li data-status="up"></li>
        <li data-status="degraded"></li>
        <li data-status="up"></li>
        <li data-status="down"></li>
        <li data-status="up"></li>
      </ol>
      <p class="uptime-bar__caption">90-day history</p>
    </div>`,
  },
  "stream-status": {
    demo: `    <div class="stream-status" role="status" data-state="live">
      <span class="stream-status__indicator" aria-hidden="true"></span>
      <span class="stream-status__label">Live</span>
      <span class="stream-status__meta">Updated just now</span>
    </div>`,
  },
  "announcement-card": {
    demo: `    <article class="announcement-card">
      <p class="announcement-card__eyebrow">Scheduled</p>
      <h3 class="announcement-card__title">Maintenance window</h3>
      <p class="announcement-card__body">Brief maintenance on Saturday 02:00–04:00 UTC.</p>
    </article>`,
  },
  "explore-card": {
    demo: `    <article class="explore-card">
      <h3 class="explore-card__title">Status directory</h3>
      <p class="explore-card__description">Browse public status pages.</p>
      <p class="explore-card__metric"><span class="explore-card__metric-value">128</span> services</p>
      <a class="explore-card__link" href="#">Explore</a>
    </article>`,
  },
  "bulk-toolbar": {
    demo: `    <div class="bulk-toolbar" role="toolbar" aria-label="Bulk actions">
      <span class="bulk-toolbar__count">3 selected</span>
      <button type="button">Archive</button>
      <button type="button">Delete</button>
      <button type="button">Clear selection</button>
    </div>`,
  },
  "property-filter": {
    demo: `    <div class="property-filter">
      <label for="property-filter-input">Filter</label>
      <div class="property-filter__control">
        <ul class="property-filter__tokens" aria-label="Active filters">
          <li class="property-filter__token">status = active <button type="button" aria-label="Remove">×</button></li>
        </ul>
        <input id="property-filter-input" type="search" placeholder="Filter properties…" />
      </div>
    </div>`,
  },
  composer: {
    demo: `    <form class="composer" aria-label="Message composer">
      <label for="composer-input" class="visually-hidden">Message</label>
      <textarea id="composer-input" class="composer__input" rows="3" placeholder="Write a message…"></textarea>
      <div class="composer__toolbar">
        <button type="button">Attach</button>
        <button type="submit">Send</button>
      </div>
    </form>`,
  },
  editor: {
    demo: `    <div class="editor">
      <div class="editor__toolbar" role="toolbar" aria-label="Formatting">
        <button type="button" aria-pressed="false">Bold</button>
        <button type="button" aria-pressed="false">Italic</button>
      </div>
      <div class="editor__content" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Editor">
        Editable content.
      </div>
    </div>`,
  },
  "pipeline-flow": {
    demo: `    <ol class="pipeline-flow" aria-label="Pipeline steps">
      <li class="pipeline-flow__step" data-state="complete">Ingest</li>
      <li class="pipeline-flow__step" data-state="current">Transform</li>
      <li class="pipeline-flow__step" data-state="pending">Deliver</li>
    </ol>`,
  },
  kanban: {
    demo: `    <div class="kanban" aria-label="Board">
      <section class="kanban__column" aria-labelledby="kanban-todo">
        <h3 id="kanban-todo">To do</h3>
        <ul>
          <li class="kanban__card">Draft brief</li>
        </ul>
      </section>
      <section class="kanban__column" aria-labelledby="kanban-doing">
        <h3 id="kanban-doing">Doing</h3>
        <ul>
          <li class="kanban__card">Build shell</li>
        </ul>
      </section>
      <section class="kanban__column" aria-labelledby="kanban-done">
        <h3 id="kanban-done">Done</h3>
        <ul>
          <li class="kanban__card">Inventory</li>
        </ul>
      </section>
    </div>`,
  },
  "help-panel": {
    demo: `    <aside class="help-panel" aria-labelledby="help-panel-title">
      <h3 id="help-panel-title">Help</h3>
      <p>Contextual guidance for this page.</p>
      <a href="#">Learn more</a>
    </aside>`,
  },
  preferences: {
    demo: `    <form class="preferences" aria-labelledby="preferences-title">
      <h3 id="preferences-title">Preferences</h3>
      <label><input type="checkbox" name="compact" /> Compact density</label>
      <label><input type="checkbox" name="wrap" /> Wrap lines</label>
      <div class="preferences__actions">
        <button type="button">Cancel</button>
        <button type="submit">Save</button>
      </div>
    </form>`,
  },
  "page-skeleton": {
    demo: `    <div class="page-skeleton" aria-busy="true" aria-label="Loading page">
      <div class="skeleton__line" style="width: 30%"></div>
      <div class="skeleton__line" style="width: 70%"></div>
      <div class="page-skeleton__grid">
        <div class="skeleton__block"></div>
        <div class="skeleton__block"></div>
      </div>
    </div>`,
  },
  "confirm-dialog": {
    demo: `    <dialog class="confirm-dialog" open>
      <form method="dialog">
        <h3 class="confirm-dialog__title">Confirm action</h3>
        <p class="confirm-dialog__body">This cannot be undone.</p>
        <div class="confirm-dialog__actions">
          <button value="cancel">Cancel</button>
          <button value="confirm">Confirm</button>
        </div>
      </form>
    </dialog>`,
  },
  "button-group": {
    demo: `    <div class="button-group" role="group" aria-label="Alignment">
      <button type="button">Left</button>
      <button type="button">Center</button>
      <button type="button">Right</button>
    </div>`,
  },
  "icon-text": {
    demo: `    <div class="icon-text">
      <svg class="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2" />
      </svg>
      <div class="icon-text__copy">
        <p class="icon-text__title">Icon text</p>
        <p class="icon-text__description">Title with supporting description.</p>
      </div>
    </div>`,
  },
  "icon-badge": {
    demo: `    <span class="icon-badge" aria-hidden="true">
      <svg class="icon" width="16" height="16" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2" />
      </svg>
    </span>`,
  },
  "icon-heading": {
    demo: `    <div class="icon-heading">
      <svg class="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2" />
      </svg>
      <h3 class="icon-heading__title">Icon heading</h3>
    </div>`,
  },
  "chart-empty-state": {
    demo: `    <div class="chart-empty-state" role="status">
      <p class="chart-empty-state__title">No chart data</p>
      <p class="chart-empty-state__description">Data will appear here once available.</p>
    </div>`,
  },
  "status-metric-row": {
    demo: `    <div class="status-metric-row">
      <span class="status-metric-row__icon" aria-hidden="true">●</span>
      <div class="status-metric-row__text">
        <p class="status-metric-row__title">Latency</p>
        <p class="status-metric-row__value">42 ms</p>
      </div>
    </div>`,
  },
};

let created = 0;
let skipped = 0;
const createdNames = [];

for (const [name, conf] of Object.entries(SHELLS)) {
  if (EXISTING.has(name)) {
    console.warn(`skip overlap (existing): ${name}`);
    skipped++;
    continue;
  }
  const dir = path.join(componentsDir, name);
  const htmlPath = path.join(dir, `${name}.html`);
  const cssPath = path.join(dir, `${name}.css`);
  if (fs.existsSync(htmlPath)) {
    console.warn(`skip exists: ${name}`);
    skipped++;
    continue;
  }
  fs.mkdirSync(dir, { recursive: true });
  const title = titleCase(name);
  fs.writeFileSync(
    htmlPath,
    htmlShell(name, title, conf.demo, { formField: !!conf.formField })
  );
  fs.writeFileSync(cssPath, cssShell(name, title));
  created++;
  createdNames.push(name);
}

console.log(`Created ${created} shells, skipped ${skipped}.`);
console.log(createdNames.join("\n"));
