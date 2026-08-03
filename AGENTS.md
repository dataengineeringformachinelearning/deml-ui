# AGENTS.md — deml-ui (LOCKED SoT)

**Mission:** Own DEML’s visual design system — the **new-from-the-start** look
(atelier tokens, 8px grid, dual theme) consumed by the deml Angular app and
Django static chrome. This repo is the **single source of truth** for product
visuals. The style is **locked** for all future work.

## Repo role

| Path | Role |
|------|------|
| `styles/tokens.css` | Color, space, type, chart, tile tokens |
| `styles/base.css` | Page chrome, type recipes, layout utilities |
| `components/<name>/` | HTML + CSS source of truth |
| `src/angular/` | Markup wrappers + headless primitives |
| `src/web-components/` | Custom element registration |
| Storybook | Local `:6006` · production [ui.deml.app](https://ui.deml.app) |

Consumer app: [`deml`](https://github.com/dataengineeringformachinelearning/deml)
(`src/app/components`, `THEME.md`, `.cursorrules`).

## Locked laws (mandatory)

1. **Edit source components** under `components/` — generators sync CE/Angular/stories.
2. **Tokens only** — no arbitrary hex in component CSS for chrome; use `--color-*` /
   `--space-*` / `--tile-*` / `--chart-*` from `styles/tokens.css`.
3. **8px grid** — spacing and tile rhythm via `--grid`, `--tile-gap`, `--tile-row-unit`.
   Equal outer spacing; identical card/bento heights via `--tile-row-unit`.
4. **Charts** — keep `--chart-aspect` (2.4); never squash or stretch plots.
5. **Typography** — bold display (`--font-display`) + letterspaced secondary
   (`--tracking-eyebrow`); intros via `--font-serif` / `--tracking-intro`.
6. **Light + dark** — `[data-theme="light"|"dark"]` (and `.light` / `.dark`).
7. **A11y** — WCAG 2.0 AA: focus-visible, contrast, ≥44px hit targets
   (`--hit-target`), reduced motion, ARIA in demos/headless.
8. **No Viking-UI** — do not reintroduce `viking-*`, `--viking-*`,
   `packages/viking-ui`, or void-black / electric `#2176ff` suite chrome.
9. **Ship dist** — `npm run build` updates committed `dist/` for `github:` consumers
   (`prepare` skips rebuild when artifacts exist).
10. **No parallel DS in deml** — consumers compose `app-*` wrappers only; deml must
    not invent app-level design-system CSS for product chrome.

## Commands

```bash
npm run sync
npm run storybook
npm run build
```

## When deml needs a new primitive

Add it here first, build, then bump deml’s `deml-ui` dependency. Do not invent
parallel styles inside deml `src/`.

**Confirmation:** The new-from-the-start / atelier style is locked; deml-ui is
the sole visual SoT; Viking is fully retired.
