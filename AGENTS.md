# AGENTS.md — deml-ui

**Mission:** Own DEML’s visual design system — the **new-from-the-start** look
(atelier tokens, 8px grid, dual theme) consumed by the deml Angular app and
Django static chrome.

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
(`src/app/components`, `THEME.md`).

## Laws

1. **Edit source components** under `components/` — generators sync CE/Angular/stories.
2. **Tokens only** — no arbitrary hex in component CSS for chrome; use `--color-*` / `--space-*`.
3. **8px grid** — spacing and tile rhythm via `--grid`, `--tile-gap`, `--tile-row-unit`.
4. **Charts** — keep `--chart-aspect`; never squash or stretch plots.
5. **Light + dark** — `[data-theme="light"|"dark"]` (and `.light` / `.dark`).
6. **A11y** — WCAG 2.0 AA: focus-visible, contrast, hit targets, reduced motion, ARIA in demos/headless.
7. **No Viking-UI** — do not reintroduce `viking-*`, `--viking-*`, or void-black suite chrome.
8. **Ship dist** — `npm run build` updates committed `dist/` for `github:` consumers (`prepare` skips rebuild when artifacts exist).

## Commands

```bash
npm run sync
npm run storybook
npm run build
```

## When deml needs a new primitive

Add it here first, build, then bump deml’s `deml-ui` dependency. Do not invent
parallel styles inside deml `src/`.
