# AGENTS.md — deml-ui

**Mission:** Own DEML’s visual design system — the **new-from-the-start (warm ash)** look
consumed by the deml Angular app and Django static chrome.

> **LOCKED LAW — MANDATORY EVERYWHERE.**  
> Warm ash NFTS is the **only** allowed style. **Any deviation is forbidden.**  
> Expand this system; never invent a parallel look (cold seven-color, Viking, Syne/Fraunces).

## Repo role

| Path | Role |
|------|------|
| `styles/tokens.css` | **SoT** — color · type · space · radius · elevation · motion · opacity |
| `styles/base.css` | Type recipes (mark/body/title/display), module surface, page chrome |
| `components/<name>/` | Primitives only — compose from tokens; no one-off values |
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
3. **Geist only** — display weight 800 + confident scale; marks at 0.28em caps; intro
   at 0.1em; body leading 1.62 / measure 60ch. Do not ship Syne/Fraunces mixes.
4. **Strict 8px grid** — spacing / padding / margin / gap / radius are only N×8px
   (`--space-1`…`--space-8` + layout steps). **No half-steps** (`--space-half` retired).
   Strokes (`--border-width`) are not spacing. Equal `--module-pad` on every module side.
5. **Fluid equal cells** — `grid-auto-rows: minmax(var(--tile-row-*), auto|1fr)` so peer
   tiles stretch with no ragged gaps; never squash with fixed-only or `min-content` rows.
6. **Charts (LOCKED — absolute)** — `--chart-height-spark: 144px` /
   `--chart-height-panel: 280px`; width always `100%`; shared global y-scale;
   equal `--chart-inset` / `--chart-inset-spark`; panel stages use
   `--chart-stage-ink` (`#121212`). Never squash, stretch, oversize, undersize,
   aspect-drive, or data-drive height. Contract: [`docs/CHARTS.md`](docs/CHARTS.md).
7. **Light + dark** — `[data-theme="light"|"dark"]` (and `.light` / `.dark`).
8. **Shell** — solid opaque navbar; page scaffolding must not introduce horizontal overflow.
9. **A11y** — WCAG 2.0 Level AA / §508: focus-visible, contrast, ≥44px hits, reduced motion, skip link.
   Contract + exceptions: [`docs/ACCESSIBILITY.md`](docs/ACCESSIBILITY.md).
10. **No Viking-UI** — do not reintroduce `viking-*`, `--viking-*`, or void-black /
    electric `#2176ff` suite chrome.
11. **Ship dist** — `npm run build` updates committed `dist/` for `github:` consumers.

## Commands

```bash
npm run check:nfts      # mandatory warm-ash gate — must pass
npm run check:stories   # every component has ≥2 CSF stories + Chromatic/a11y meta
npm run sync
npm run storybook       # → :6006 — controls, a11y, themes, viewport, measure, outline
npm run build-storybook
npm run chromatic       # visual regression (needs CHROMATIC_PROJECT_TOKEN)
npm run build
```

Final cohesive checklist: [`docs/SYSTEM.md`](docs/SYSTEM.md) · a11y [`docs/ACCESSIBILITY.md`](docs/ACCESSIBILITY.md) · charts [`docs/CHARTS.md`](docs/CHARTS.md).

Story kits live in `scripts/lib/story-kits.mjs` (generated CSF is gitignored).
Chromatic modes: `.storybook/modes.js` (light/dark + mobile). CI: `ci.yml` + `chromatic.yml`.

CI runs `check:nfts` + `check:stories` before sync/build. **No escape hatches.**

## Token roles (use these names)

| Role | Tokens |
|------|--------|
| Color | `--color-bg/surface/card/text/primary/success/error` (+ card-* / *-hover / *-ink) |
| Type | `--font-size-mark/body/title/display` · weights · `--tracking-mark/intro/display` |
| Space | `--grid` · `--space-1`…`--space-8` · layout `--space-12/16/28/36` (no half-steps) |
| Radius | `--radius-none` · `--radius-pill` |
| Elevation | `--elevation-0/1/2` |
| Motion | `--duration-fast/normal/slow` · `--ease-out/exit` · `--press-scale` |
| Opacity | `--opacity-disabled/muted/subtle/overlay` · `--press-opacity` |

Aliases (`--space-md`, `--font-size-sm`, …) map to core only — prefer core names in new CSS.

## Product primitives (keep thin)

Prefer composing: **banner · button · button-group · text-field · checkbox · form-panel ·
explore-card · navbar · page-section · sheet · empty/error-state · skeleton · theme-toggle ·
site-footer**. Add new primitives here first; never invent app-local DS chrome in deml.

## When deml needs a new primitive

Add it here first, build, then bump deml’s `deml-ui` dependency. Expand from NFTS —
do not invent parallel styles inside deml `src/`. **Deviation from NFTS is forbidden.**
