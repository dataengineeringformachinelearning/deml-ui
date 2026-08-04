# AGENTS.md — deml-ui

**Mission:** Own DEML’s visual design system — the **new-from-the-start (warm ash)** look
consumed by the deml Angular app and Django static chrome.

> **LOCKED LAW — MANDATORY EVERYWHERE.**  
> Warm ash NFTS is the **only** allowed style. **Any deviation is forbidden.**  
> Expand this system; never invent a parallel look (cold seven-color, Viking, Syne/Fraunces).

## Repo role

| Path | Role |
|------|------|
| `styles/tokens.css` | Warm-ash color, space, type, chart, tile, navbar tokens |
| `styles/base.css` | Page chrome, type recipes (Geist), layout utilities, no-overflow scaffolding |
| `components/<name>/` | HTML + CSS source of truth |
| `src/angular/` | Markup wrappers + headless primitives |
| `src/web-components/` | Custom element registration |
| Storybook | Local `:6006` · production [ui.deml.app](https://ui.deml.app) |

Consumer app: [`deml`](https://github.com/dataengineeringformachinelearning/deml)
([THEME.md](https://github.com/dataengineeringformachinelearning/deml/blob/main/THEME.md)).

## Laws

1. **Edit source components** under `components/` — generators sync CE/Angular/stories.
2. **Warm ash NFTS only (mandatory)** — grounds `#35312D`/`#1C1916`, cards `#F3F0EA`,
   primary `#2F5F8F`, accents `#3F6B54`/`#9E3D47`; light theme `#D4CEC5` ground.
   Muted `#C6C0B7`/`#4A453F`. **No** cold seven-color swap that fights this system.
3. **Geist only** — `--font-display`, `--font-mark`, `--font-secondary`, and body all
   resolve to Geist. Do not ship Syne/Fraunces mixes.
4. **8px grid** — spacing and tile rhythm via `--grid`, `--tile-gap`, `--tile-row-unit`,
   `--module-pad`.
5. **Fluid equal cells** — `grid-auto-rows: minmax(var(--tile-row-unit), auto)` so peer
   tiles stretch; never squash with fixed-only rows.
6. **Charts** — `--chart-aspect: 2.4` with equal `--chart-inset`; width fills the well
   (capped by `--chart-stage-max-inline`) so wider cards grow taller; never
   `height: 100%` / max-height squash on plot stages — letterbox peer tiles, not the SVG;
   never theme-invert plot series.
7. **Light + dark** — `[data-theme="light"|"dark"]` (and `.light` / `.dark`).
8. **Shell** — solid opaque navbar; page scaffolding must not introduce horizontal overflow.
9. **A11y** — WCAG 2.0 AA: focus-visible, contrast, hit targets, reduced motion.
10. **No Viking-UI** — do not reintroduce `viking-*`, `--viking-*`, or void-black /
    electric `#2176ff` suite chrome.
11. **Ship dist** — `npm run build` updates committed `dist/` for `github:` consumers.

## Commands

```bash
npm run check:nfts   # mandatory warm-ash gate — must pass
npm run sync
npm run storybook
npm run build
```

CI (`.github/workflows/ci.yml`) runs `check:nfts` before sync/build. **No escape hatches.**

## When deml needs a new primitive

Add it here first, build, then bump deml’s `deml-ui` dependency. Expand from NFTS —
do not invent parallel styles inside deml `src/`. **Deviation from NFTS is forbidden.**
