# AGENTS.md — deml-ui (LOCKED SoT)

**Mission:** Own DEML’s visual design system — the **new-from-the-start (NFTS) /
heritage** look (seven-color palette, 8px grid, dual theme) consumed by the deml
Angular app and Django static chrome. This repo is the **single source of truth**
for product visuals. The style is **locked** for all future work.

## Repo role

| Path | Role |
|------|------|
| `styles/tokens.css` | Seven-color palette + space, type, chart, tile tokens |
| `styles/base.css` | Page chrome, type recipes, layout utilities |
| `components/<name>/` | HTML + CSS source of truth |
| `src/angular/` | Markup wrappers + headless primitives |
| `src/web-components/` | Custom element registration |
| Storybook | Local `:6006` · production [ui.deml.app](https://ui.deml.app) |

Consumer app: [`deml`](https://github.com/dataengineeringformachinelearning/deml)
(`src/app/components`, `THEME.md`, `.cursorrules`).

## Locked palette (exact — seven only)

| Hex | Role |
|-----|------|
| `#0066B2` | Primary / focus / chart accent |
| `#3D3D3D` | Charcoal surface / secondary text (light) |
| `#BDBDBD` | Muted / border / secondary text (dark) |
| `#121212` | Ink / dark ground / card text on light modules |
| `#FFFFFF` | White / light ground / on-primary |
| `#3C7A4A` | Success / positive (`--color-accent-gold`) |
| `#C41E3A` | Danger / accent red |

## Locked laws (mandatory)

1. **Edit source components** under `components/` — generators sync CE/Angular/stories.
2. **Seven colors only** — no arbitrary hex in component CSS for chrome; use
   `--palette-*` / `--color-*` / `--space-*` / `--tile-*` / `--chart-*` from
   `styles/tokens.css`. Mixes only among the seven.
3. **8px equal outer spacing** — `--grid`, `--tile-gap`, `--module-pad`.
   Identical padding on all four sides of modules/page bodies; no asymmetric
   one-offs.
4. **Identical card/bento heights** — `--tile-row-unit` + shared `--tile-gap`;
   siblings in a row stretch equally.
5. **Charts** — keep `--chart-aspect` (2.4); never squash or stretch plots;
   series colors from the palette only; host inside equal-height chart-cards.
6. **Typography** — primary headings: `--font-display`, bold, **tight** tracking;
   secondary/intro: **generous** letter-spacing (`--tracking-eyebrow` /
   `--tracking-intro`); body highly readable (`--font-sans`).
7. **Light + dark** — `[data-theme="light"|"dark"]` (and `.light` / `.dark`);
   role swaps only, same seven hexes.
8. **A11y** — WCAG 2.0 AA: focus-visible, contrast, ≥44px hit targets
   (`--hit-target`), reduced motion, ARIA in demos/headless.
9. **No Viking / cream** — do not reintroduce `viking-*`, `--viking-*`,
   `packages/viking-ui`, void-black / electric `#2176ff`, or atelier-cream
   (`#2A2622`, `#E4DDD0`, `#F4F1EA`).
10. **Ship dist** — `npm run build` updates committed `dist/` for `github:`
    consumers (`prepare` skips rebuild when artifacts exist).
11. **No parallel DS in deml** — consumers compose `app-*` wrappers only; deml
    must not invent app-level design-system CSS for product chrome.

## Hard Don't (anti-drift)

- No eighth chrome color.
- No free-height chart overrides.
- No asymmetric module padding.
- No Viking or cream atelier regression.

## Commands

```bash
npm run sync
npm run storybook
npm run build
```

## When deml needs a new primitive

Add it here first, build, then bump deml’s `deml-ui` dependency. Do not invent
parallel styles inside deml `src/`.

**Confirmation:** The NFTS / heritage seven-color style is locked; deml-ui is
the sole visual SoT; Viking and cream atelier are fully retired.
