# AGENTS.md — deml-ui

**Mission:** Own DEML’s visual design system — the **new-from-the-start (warm ash)** look
consumed by the deml Angular app and Django static chrome.

## Repo role

| Path | Role |
|------|------|
| `styles/tokens.css` | Warm-ash color, space, type, chart, tile tokens |
| `styles/base.css` | Page chrome, type recipes (Geist), layout utilities |
| `components/<name>/` | HTML + CSS source of truth |
| `src/angular/` | Markup wrappers + headless primitives |
| `src/web-components/` | Custom element registration |
| Storybook | Local `:6006` · production [ui.deml.app](https://ui.deml.app) |

Consumer app: [`deml`](https://github.com/dataengineeringformachinelearning/deml).

## Laws

1. **Edit source components** under `components/` — generators sync CE/Angular/stories.
2. **Warm ash NFTS only** — grounds `#35312D`/`#1C1916`, cards `#F3F0EA`, primary `#2F5F8F`; light theme `#D4CEC5` ground. No cold seven-color swap that fights this system.
3. **Geist only** — `--font-display`, `--font-mark`, `--font-secondary`, and body all resolve to Geist. Do not ship Syne/Fraunces mixes.
4. **8px grid** — spacing and tile rhythm via `--grid`, `--tile-gap`, `--tile-row-unit`.
5. **Fluid equal cells** — `grid-auto-rows: minmax(var(--tile-row-unit), auto)` so peer tiles stretch; never squash with fixed-only rows.
6. **Charts** — `--chart-aspect: 2.4` with equal `--chart-inset`; width fills the well (capped by `--chart-stage-max-inline`) so wider cards grow taller; never `height: 100%` / max-height squash on plot stages — letterbox peer tiles, not the SVG.
7. **Light + dark** — `[data-theme="light"|"dark"]` (and `.light` / `.dark`).
8. **A11y** — WCAG 2.0 AA: focus-visible, contrast, hit targets, reduced motion.
9. **No Viking-UI** — do not reintroduce `viking-*`, `--viking-*`, or void-black suite chrome.
10. **Ship dist** — `npm run build` updates committed `dist/` for `github:` consumers.

## Commands

```bash
npm run sync
npm run storybook
npm run build
```

## When deml needs a new primitive

Add it here first, build, then bump deml’s `deml-ui` dependency. Expand from NFTS — do not invent parallel styles inside deml `src/`.
