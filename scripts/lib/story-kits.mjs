/**
 * Story kits — SoT for generated CSF matrices (variants, states, controls, edge cases).
 * HTML-first: markups are deml-ui class contracts, not parallel chrome.
 */

/** @typedef {{ id: string, name: string, kind: 'demo' | 'markup', markup?: string, args?: Record<string, unknown>, play?: boolean, parameters?: Record<string, unknown> }} StoryDef */
/** @typedef {{ description: string, layout?: string, argTypes?: Record<string, unknown>, args?: Record<string, unknown>, stories: StoryDef[], chromaticModes?: 'default' | 'layout' }} StoryKit */

const LONG =
  "This is intentionally long copy to verify wrapping, truncation, and density under stress — status pages, form notes, and callouts must remain readable without overflowing the module.";

function board(title, body) {
  return `<section class="component"><h2 class="visually-hidden">${title}</h2><div class="demo" style="display:grid;gap:var(--space-3);align-items:start;">${body}</div></section>`;
}

function stateRow(label, html) {
  return `<div style="display:grid;gap:var(--space-1);"><p class="mark" style="margin:0;color:var(--color-text-secondary);">${label}</p>${html}</div>`;
}

/** Shared control argTypes for playground stories. */
const controlArgTypes = {
  label: { control: "text", description: "Primary label / heading" },
  description: { control: "text", description: "Supporting copy" },
  disabled: { control: "boolean", description: "Disabled state" },
  busy: { control: "boolean", description: "Loading / busy state" },
  invalid: { control: "boolean", description: "Error / invalid state" },
  tone: {
    control: "select",
    options: ["neutral", "info", "success", "warning", "danger"],
    description: "Semantic tone",
  },
  variant: {
    control: "select",
    options: ["primary", "secondary", "accent"],
    description: "Color variant",
  },
  shape: {
    control: "select",
    options: ["default", "pill"],
    description: "Geometry",
  },
};

/** @type {Record<string, () => StoryKit>} */
const KITS = {
  button: () => ({
    description:
      "Action control — primary / secondary / accent, pill shape, disabled, and busy.",
    argTypes: {
      label: controlArgTypes.label,
      variant: controlArgTypes.variant,
      shape: controlArgTypes.shape,
      disabled: controlArgTypes.disabled,
      busy: controlArgTypes.busy,
    },
    args: {
      label: "Continue",
      variant: "primary",
      shape: "default",
      disabled: false,
      busy: false,
    },
    stories: [
      { id: "Default", name: "Default", kind: "demo", play: false },
      {
        id: "Playground",
        name: "Playground",
        kind: "markup",
        markup: null, // filled by args render in generator via builder key
        args: true,
        builder: "button",
      },
      {
        id: "Variants",
        name: "Variants",
        kind: "markup",
        markup: board(
          "Button variants",
          [
            `<button type="button" class="button button--primary">Primary</button>`,
            `<button type="button" class="button button--secondary">Secondary</button>`,
            `<button type="button" class="button button--accent">Accent</button>`,
            `<button type="button" class="button button--primary button--pill">Pill</button>`,
            `<button type="button" class="button button--secondary button--pill">Secondary pill</button>`,
          ].join("")
        ),
      },
      {
        id: "States",
        name: "States",
        kind: "markup",
        markup: board(
          "Button states",
          [
            stateRow("Rest", `<button type="button" class="button button--primary">Save</button>`),
            stateRow(
              "Disabled",
              `<button type="button" class="button button--primary" disabled>Save</button>`
            ),
            stateRow(
              "Busy / loading",
              `<button type="button" class="button button--primary is-busy" aria-busy="true"><span class="button__label">Saving</span><span class="button__spinner" aria-hidden="true"></span></button>`
            ),
          ].join("")
        ),
      },
      {
        id: "Hover",
        name: "Hover",
        kind: "markup",
        markup: board(
          "Button hover",
          `<button type="button" class="button button--primary">Hover me</button>`
        ),
        parameters: { pseudo: { hover: true } },
      },
      {
        id: "Focus",
        name: "Focus",
        kind: "markup",
        markup: board(
          "Button focus",
          `<button type="button" class="button button--primary">Focused</button>`
        ),
        parameters: { pseudo: { focusVisible: true } },
      },
      {
        id: "Active",
        name: "Active",
        kind: "markup",
        markup: board(
          "Button active",
          `<button type="button" class="button button--primary">Pressed</button>`
        ),
        parameters: { pseudo: { active: true } },
      },
      {
        id: "LongContent",
        name: "Long content",
        kind: "markup",
        markup: board(
          "Button long label",
          `<button type="button" class="button button--primary">${LONG.slice(0, 80)}</button>`
        ),
      },
    ],
  }),

  badge: () => ({
    description: "Quiet status chip — tone variants on page and cream modules.",
    argTypes: {
      label: controlArgTypes.label,
      tone: controlArgTypes.tone,
    },
    args: { label: "Published", tone: "info" },
    stories: [
      { id: "Default", name: "Default", kind: "demo" },
      {
        id: "Playground",
        name: "Playground",
        kind: "markup",
        args: true,
        builder: "badge",
      },
      {
        id: "Variants",
        name: "Variants",
        kind: "markup",
        markup: board(
          "Badge tones",
          ["", "neutral", "info", "success", "warning", "danger"]
            .map((t) =>
              t
                ? `<span class="badge" data-tone="${t}">${t}</span>`
                : `<span class="badge">Default</span>`
            )
            .join(" ")
        ),
      },
      {
        id: "LongContent",
        name: "Long content",
        kind: "markup",
        markup: board(
          "Badge long",
          `<span class="badge" data-tone="info">${LONG.slice(0, 48)}</span>`
        ),
      },
    ],
  }),

  "status-pill": () => toneChipKit("status-pill", "status-pill"),
  "status-badge": () => toneChipKit("status-badge", "status-badge"),

  callout: () => ({
    description: "Inline continuity / alert module with dismiss control.",
    argTypes: {
      heading: { control: "text" },
      text: { control: "text" },
      tone: controlArgTypes.tone,
    },
    args: {
      heading: "Heads up",
      text: "Something needs your attention.",
      tone: "info",
    },
    stories: [
      { id: "Default", name: "Default", kind: "demo" },
      {
        id: "Playground",
        name: "Playground",
        kind: "markup",
        args: true,
        builder: "callout",
      },
      {
        id: "Variants",
        name: "Variants",
        kind: "markup",
        markup: board(
          "Callout tones",
          ["info", "success", "warning", "danger", "neutral"]
            .map(
              (t) =>
                `<aside class="callout" role="status" data-tone="${t}"><div class="callout__body"><p class="callout__heading">${t}</p><p class="callout__text">Tone sample for ${t}.</p></div></aside>`
            )
            .join("")
        ),
      },
      {
        id: "LongContent",
        name: "Long content",
        kind: "markup",
        markup: board(
          "Callout long",
          `<aside class="callout" role="status" data-tone="warning"><div class="callout__body"><p class="callout__heading">Long notice</p><p class="callout__text">${LONG}</p></div></aside>`
        ),
      },
    ],
  }),

  "empty-state": () => ({
    description: "Empty module — eyebrow, title, description, actions.",
    argTypes: {
      title: { control: "text" },
      description: controlArgTypes.description,
      eyebrow: { control: "text" },
    },
    args: {
      eyebrow: "Empty",
      title: "Nothing here yet",
      description: "Create your first item to get started.",
    },
    stories: [
      { id: "Default", name: "Default", kind: "demo" },
      {
        id: "Playground",
        name: "Playground",
        kind: "markup",
        args: true,
        builder: "emptyState",
      },
      {
        id: "Empty",
        name: "Empty",
        kind: "markup",
        markup: board(
          "Empty",
          `<div class="empty-state" role="status"><p class="empty-state__title">No results</p><p class="empty-state__description">Try another filter.</p></div>`
        ),
      },
      {
        id: "LongContent",
        name: "Long content",
        kind: "markup",
        markup: board(
          "Empty long",
          `<div class="empty-state" role="status"><p class="empty-state__eyebrow">Directory</p><p class="empty-state__title">${LONG.slice(0, 60)}</p><p class="empty-state__description">${LONG}</p><div class="empty-state__actions"><button type="button" class="button button--primary button--pill">Action</button></div></div>`
        ),
      },
    ],
  }),

  "error-state": () => ({
    description: "Error module with recovery action slot.",
    argTypes: {
      title: { control: "text" },
      description: controlArgTypes.description,
    },
    args: {
      title: "Unable to load",
      description: "Check your connection, then try again.",
    },
    stories: [
      { id: "Default", name: "Default", kind: "demo" },
      {
        id: "Playground",
        name: "Playground",
        kind: "markup",
        args: true,
        builder: "errorState",
      },
      {
        id: "Error",
        name: "Error",
        kind: "markup",
        markup: board(
          "Error",
          `<div class="error-state" role="alert"><p class="error-state__title">Something went wrong</p><p class="error-state__description">We could not complete that request.</p><div class="error-state__actions"><button type="button" class="button button--primary button--pill">Retry</button></div></div>`
        ),
      },
      {
        id: "LongContent",
        name: "Long content",
        kind: "markup",
        markup: board(
          "Error long",
          `<div class="error-state" role="alert"><p class="error-state__title">${LONG.slice(0, 48)}</p><p class="error-state__description">${LONG}</p></div>`
        ),
      },
    ],
  }),

  "text-field": () => ({
    description: "Labeled text control with hint, error, and disabled states.",
    argTypes: {
      label: controlArgTypes.label,
      value: { control: "text" },
      hint: { control: "text" },
      error: { control: "text" },
      disabled: controlArgTypes.disabled,
      invalid: controlArgTypes.invalid,
      required: { control: "boolean" },
    },
    args: {
      label: "Display name",
      value: "",
      hint: "Shown on your public profile.",
      error: "",
      disabled: false,
      invalid: false,
      required: true,
    },
    stories: [
      { id: "Default", name: "Default", kind: "demo" },
      {
        id: "Playground",
        name: "Playground",
        kind: "markup",
        args: true,
        builder: "textField",
      },
      {
        id: "States",
        name: "States",
        kind: "markup",
        markup: board(
          "Text field states",
          [
            stateRow(
              "Default",
              `<label class="text-field"><span class="text-field__label">Name</span><input class="text-field__control" type="text" value="Ada" /></label>`
            ),
            stateRow(
              "Focus",
              `<label class="text-field"><span class="text-field__label">Email</span><input class="text-field__control" type="email" value="ada@example.com" autofocus /></label>`
            ),
            stateRow(
              "Disabled",
              `<label class="text-field"><span class="text-field__label">Locked</span><input class="text-field__control" type="text" value="Read only" disabled /></label>`
            ),
            stateRow(
              "Error",
              `<label class="text-field" data-invalid="true"><span class="text-field__label">Slug</span><input class="text-field__control" type="text" value="Bad Slug" aria-invalid="true" /><span class="text-field__error">Use lowercase letters and hyphens.</span></label>`
            ),
            stateRow(
              "Empty + hint",
              `<label class="text-field"><span class="text-field__label">Bio</span><input class="text-field__control" type="text" placeholder="Optional" /><span class="text-field__hint">Keep it short.</span></label>`
            ),
          ].join("")
        ),
      },
      {
        id: "LongContent",
        name: "Long content",
        kind: "markup",
        markup: board(
          "Text field long",
          `<label class="text-field"><span class="text-field__label">${LONG.slice(0, 40)}</span><input class="text-field__control" type="text" value="${LONG.slice(0, 120)}" /><span class="text-field__hint">${LONG}</span></label>`
        ),
      },
    ],
  }),

  skeleton: () => ({
    description: "Loading placeholder — lines and optional block.",
    stories: [
      { id: "Default", name: "Default", kind: "demo" },
      {
        id: "Loading",
        name: "Loading",
        kind: "markup",
        markup: board(
          "Skeleton",
          `<div class="skeleton" aria-hidden="true"><div class="skeleton__line"></div><div class="skeleton__line"></div><div class="skeleton__line"></div><div class="skeleton__block"></div></div>`
        ),
      },
    ],
  }),

  spinner: () => ({
    description: "Inline progress indicator.",
    stories: [
      { id: "Default", name: "Default", kind: "demo" },
      {
        id: "Loading",
        name: "Loading",
        kind: "markup",
        markup: board(
          "Spinner",
          `<span class="spinner" role="status" aria-label="Loading"></span>`
        ),
      },
    ],
  }),

  banner: () => ({
    description: "Page hero / section title with optional actions.",
    chromaticModes: "layout",
    argTypes: {
      heading: { control: "text" },
      lede: { control: "text" },
      preheader: { control: "text" },
    },
    args: {
      preheader: "DEML",
      heading: "Explore",
      lede: "Browse public status pages.",
    },
    stories: [
      { id: "Default", name: "Default", kind: "demo" },
      {
        id: "Playground",
        name: "Playground",
        kind: "markup",
        args: true,
        builder: "banner",
      },
      {
        id: "LongContent",
        name: "Long content",
        kind: "markup",
        markup: board(
          "Banner long",
          `<header class="banner"><p class="banner__preheader">Platform</p><h1 class="banner__heading">${LONG.slice(0, 72)}</h1><p class="banner__lede">${LONG}</p></header>`
        ),
      },
    ],
  }),

  "button-group": () => ({
    description: "Cluster of actions — row/column and alignment.",
    stories: [
      { id: "Default", name: "Default", kind: "demo" },
      {
        id: "Variants",
        name: "Variants",
        kind: "markup",
        markup: board(
          "Button group",
          [
            stateRow(
              "Row",
              `<div class="button-group" data-layout="row"><button type="button" class="button button--primary button--pill">Primary</button><button type="button" class="button button--secondary button--pill">Secondary</button></div>`
            ),
            stateRow(
              "Column",
              `<div class="button-group" data-layout="column" data-align="start"><button type="button" class="button button--primary button--pill">Primary</button><button type="button" class="button button--secondary button--pill">Secondary</button></div>`
            ),
          ].join("")
        ),
      },
    ],
  }),

  "form-panel": () => ({
    description: "Settings / auth form module with header, body, footer.",
    chromaticModes: "layout",
    stories: [
      { id: "Default", name: "Default", kind: "demo", play: false },
      {
        id: "States",
        name: "States",
        kind: "markup",
        markup: board(
          "Form panel states",
          [
            stateRow(
              "With error",
              `<section class="form-panel"><header class="form-panel__header"><h2 class="form-panel__title">Account</h2></header><div class="form-panel__body"><p class="form-panel__error" role="alert">Could not save changes.</p></div></section>`
            ),
            stateRow(
              "Empty list",
              `<section class="form-panel"><header class="form-panel__header"><h2 class="form-panel__title">API keys</h2><p class="form-panel__description">Manage integration keys.</p></header><div class="form-panel__body"><p class="form-panel__empty">No active keys yet.</p></div></section>`
            ),
          ].join("")
        ),
      },
      {
        id: "LongContent",
        name: "Long content",
        kind: "markup",
        markup: board(
          "Form panel long",
          `<section class="form-panel"><header class="form-panel__header"><h2 class="form-panel__title">${LONG.slice(0, 40)}</h2><p class="form-panel__description">${LONG}</p></header><div class="form-panel__body"><p>${LONG}</p></div></section>`
        ),
      },
    ],
  }),

  "explore-card": () => ({
    description: "Status directory / detail card with metrics and uptime.",
    chromaticModes: "layout",
    stories: [
      { id: "Default", name: "Default", kind: "demo" },
      {
        id: "Loading",
        name: "Loading",
        kind: "markup",
        markup: board(
          "Explore card loading",
          `<div class="explore-card explore-card--loading" aria-busy="true"><div class="skeleton" aria-hidden="true"><div class="skeleton__line"></div><div class="skeleton__line"></div><div class="skeleton__block"></div></div></div>`
        ),
      },
      {
        id: "Empty",
        name: "Empty services",
        kind: "markup",
        markup: board(
          "Explore empty",
          `<article class="explore-card"><header class="explore-card__header"><h3 class="explore-card__title">Quiet site</h3></header><p class="explore-card__muted">No services listed.</p></article>`
        ),
      },
      {
        id: "LongContent",
        name: "Long content",
        kind: "markup",
        markup: board(
          "Explore long",
          `<article class="explore-card"><header class="explore-card__header"><div class="explore-card__meta"><span class="explore-card__tag">Platform</span></div><h3 class="explore-card__title">${LONG.slice(0, 64)}</h3><p class="explore-card__lede">${LONG}</p></header></article>`
        ),
      },
    ],
  }),

  sheet: () => interactiveOverlayKit("sheet", "Bottom / side overlay panel."),
  dialog: () => interactiveOverlayKit("dialog", "Modal dialog."),
  "confirm-dialog": () =>
    interactiveOverlayKit("confirm-dialog", "Confirm / destructive dialog."),
  dropdown: () => interactiveOverlayKit("dropdown", "Menu / listbox overlay."),

  "theme-toggle": () => ({
    description: "Light / dark theme control.",
    stories: [
      { id: "Default", name: "Default", kind: "demo", play: true },
      {
        id: "States",
        name: "States",
        kind: "markup",
        markup: board(
          "Theme toggle",
          `<button type="button" class="theme-toggle" aria-pressed="true" aria-label="Toggle theme">Theme</button>`
        ),
        play: true,
      },
    ],
  }),

  "checkbox-field": () => fieldControlKit("checkbox-field"),
  checkbox: () => fieldControlKit("checkbox"),
  switch: () => fieldControlKit("switch"),
  toggle: () => fieldControlKit("toggle"),
  progress: () => ({
    description: "Determinate / busy progress.",
    stories: [
      { id: "Default", name: "Default", kind: "demo" },
      {
        id: "States",
        name: "States",
        kind: "markup",
        markup: board(
          "Progress",
          [
            stateRow(
              "Determinate",
              `<progress class="progress" max="100" value="40">40%</progress>`
            ),
            stateRow(
              "Indeterminate",
              `<progress class="progress" max="100">Loading</progress>`
            ),
          ].join("")
        ),
      },
    ],
  }),

  "form-field": () => ({
    description:
      "Shared form control CSS baseline (not a packaged custom element).",
    stories: [
      { id: "Default", name: "Default", kind: "demo" },
      {
        id: "States",
        name: "States",
        kind: "markup",
        markup: board(
          "Form field",
          [
            stateRow(
              "Text",
              `<div class="form-field"><label>Email<input type="email" value="you@example.com" /></label></div>`
            ),
            stateRow(
              "Disabled",
              `<div class="form-field"><label>Locked<input type="text" value="—" disabled /></label></div>`
            ),
            stateRow(
              "Textarea",
              `<div class="form-field"><label>Notes<textarea rows="3">${LONG.slice(0, 80)}</textarea></label></div>`
            ),
          ].join("")
        ),
      },
    ],
  }),

  navbar: () => shellKit("navbar"),
  "site-footer": () => shellKit("site-footer"),
  "skip-link": () => ({
    description: "Skip to main content landmark link.",
    stories: [
      { id: "Default", name: "Default", kind: "demo" },
      {
        id: "Focus",
        name: "Focus",
        kind: "markup",
        markup: board(
          "Skip link",
          `<a class="skip-link" href="#main-content" autofocus>Skip to content</a>`
        ),
        parameters: { a11y: { test: "todo" } },
      },
    ],
  }),
  "page-section": () => {
    const kit = shellKit("page-section");
    kit.chromaticModes = "layout";
    return kit;
  },
  "app-layout": () => {
    const kit = shellKit("app-layout");
    kit.chromaticModes = "layout";
    return kit;
  },
  "sidebar-nav": () => {
    const kit = shellKit("sidebar-nav");
    kit.chromaticModes = "layout";
    return kit;
  },
};

function toneChipKit(name, className) {
  return {
    description: `${name} — semantic status chip.`,
    argTypes: { label: controlArgTypes.label, tone: controlArgTypes.tone },
    args: { label: "Operational", tone: "success" },
    stories: [
      { id: "Default", name: "Default", kind: "demo" },
      {
        id: "Variants",
        name: "Variants",
        kind: "markup",
        markup: board(
          name,
          ["neutral", "info", "success", "warning", "danger"]
            .map((t) => `<span class="${className}" data-tone="${t}">${t}</span>`)
            .join(" ")
        ),
      },
    ],
  };
}

function interactiveOverlayKit(name, description) {
  return {
    description,
    chromaticModes: "layout",
    stories: [
      { id: "Default", name: "Default", kind: "demo", play: true },
      {
        id: "States",
        name: "Open",
        kind: "demo",
        play: true,
        parameters: {
          docs: {
            description: {
              story: "Use the demo controls to open the overlay.",
            },
          },
        },
      },
    ],
  };
}

function fieldControlKit(name) {
  return {
    description: `${name} control states.`,
    stories: [
      { id: "Default", name: "Default", kind: "demo" },
      {
        id: "States",
        name: "States",
        kind: "demo",
      },
    ],
  };
}

function shellKit(name) {
  return {
    description: `${name} shell / layout primitive.`,
    chromaticModes: "layout",
    stories: [
      { id: "Default", name: "Default", kind: "demo" },
      {
        id: "LongContent",
        name: "Long content",
        kind: "demo",
      },
    ],
  };
}

/** Input family — shared states board. */
function inputKit(name, type = "text") {
  return {
    description: `Native ${name} control.`,
    argTypes: {
      value: { control: "text" },
      disabled: controlArgTypes.disabled,
      invalid: controlArgTypes.invalid,
    },
    args: { value: "", disabled: false, invalid: false },
    stories: [
      { id: "Default", name: "Default", kind: "demo" },
      {
        id: "States",
        name: "States",
        kind: "markup",
        markup: board(
          name,
          [
            stateRow(
              "Default",
              `<input class="input" type="${type}" value="Sample" />`
            ),
            stateRow(
              "Disabled",
              `<input class="input" type="${type}" value="Sample" disabled />`
            ),
            stateRow(
              "Invalid",
              `<input class="input" type="${type}" value="!" aria-invalid="true" />`
            ),
          ].join("")
        ),
      },
    ],
  };
}

for (const [name, type] of [
  ["input-text", "text"],
  ["input-email", "email"],
  ["input-password", "password"],
  ["input-search", "search"],
  ["input-number", "number"],
  ["input-date", "date"],
  ["input-time", "time"],
  ["input-range", "range"],
]) {
  KITS[name] = () => inputKit(name, type);
}

KITS.textarea = () => ({
  description: "Multiline text control.",
  stories: [
    { id: "Default", name: "Default", kind: "demo" },
    {
      id: "States",
      name: "States",
      kind: "markup",
      markup: board(
        "Textarea",
        [
          stateRow("Default", `<textarea class="textarea" rows="3">Hello</textarea>`),
          stateRow(
            "Disabled",
            `<textarea class="textarea" rows="3" disabled>Locked</textarea>`
          ),
          stateRow(
            "Long",
            `<textarea class="textarea" rows="4">${LONG}</textarea>`
          ),
        ].join("")
      ),
    },
  ],
});

KITS.select = () => ({
  description: "Select control.",
  stories: [
    { id: "Default", name: "Default", kind: "demo" },
    {
      id: "States",
      name: "States",
      kind: "markup",
      markup: board(
        "Select",
        [
          stateRow(
            "Default",
            `<select class="select"><option>One</option><option>Two</option></select>`
          ),
          stateRow(
            "Disabled",
            `<select class="select" disabled><option>One</option></select>`
          ),
        ].join("")
      ),
    },
  ],
});

/**
 * Generic kit for components without a specialized matrix.
 * Always ships Default + documentation-friendly Variants alias + edge LongContent when text-ish.
 */
function genericKit(name, category) {
  const layoutCategories = new Set(["Shell", "Layout", "Data"]);
  const stories = [{ id: "Default", name: "Default", kind: "demo" }];

  // Second story so the sidebar always offers more than a single board
  stories.push({
    id: "Gallery",
    name: "Gallery",
    kind: "demo",
    parameters: {
      docs: {
        description: {
          story:
            "Full component demo board — variants and composition samples from `components/" +
            name +
            "/`.",
        },
      },
    },
  });

  if (layoutCategories.has(category) || category === "Overlays") {
    stories.push({
      id: "Narrow",
      name: "Narrow viewport",
      kind: "demo",
      parameters: {
        viewport: { defaultViewport: "demlNarrow" },
        chromatic: {
          modes: {
            "dark mobile": {
              theme: "dark",
              backgrounds: { value: "warm-ash" },
              viewport: "demlNarrow",
            },
            "light mobile": {
              theme: "light",
              backgrounds: { value: "light-ground" },
              viewport: "demlNarrow",
            },
          },
        },
      },
    });
  }

  return {
    description: `**${name}** — deml-ui primitive. Explore Default / Gallery; use toolbar theme, viewport, measure, and outline.`,
    chromaticModes: layoutCategories.has(category) ? "layout" : "default",
    argTypes: {
      note: {
        control: "text",
        description: "Annotation only — markup SoT is the component HTML demo.",
      },
    },
    args: { note: `${name} demo` },
    stories,
  };
}

/**
 * Resolve the story kit for a component.
 * @param {string} name
 * @param {string} category
 * @returns {StoryKit}
 */
export function getStoryKit(name, category) {
  const factory = KITS[name];
  if (factory) return factory();
  return genericKit(name, category);
}

/**
 * Builders referenced by playground stories (args → HTML).
 * Consumed at Storybook runtime via render.js.
 */
export const BUILDER_NAMES = [
  "button",
  "badge",
  "callout",
  "emptyState",
  "errorState",
  "textField",
  "banner",
];
