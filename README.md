# deml-ui
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdataengineeringformachinelearning%2Fdeml-ui.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdataengineeringformachinelearning%2Fdeml-ui?ref=badge_shield)


DEML’s component library: HTML/CSS sources with dual package builds (**Web Components** + **Angular**) and Storybook docs that stay in sync as you style components.

**Source of truth:** `components/<name>/<name>.html` + `<name>.css`. Generators produce Custom Elements and Angular standalone wrappers so you can restyle first, then ship as a package.

## Quick start

```bash
npm install
npm run storybook   # design browser → http://localhost:6006
npm run dev         # element reference site → http://localhost:3000
npm run build       # styles + WC + html pack + Angular → dist/
```

Editing `components/**` or tokens hot-updates Storybook. Adding/removing a component folder regenerates stories and wrappers (`npm run sync`).

### Storybook features (enabled)

| Feature | Notes |
|---------|--------|
| **Docs / Autodocs** | MDX intro + per-component Docs tabs with HTML source |
| **A11y** | axe checks (WCAG 2 A/AA + best practices) in the panel |
| **Theme** | Light/dark via `data-theme` toolbar |
| **Viewport** | Device presets + deml content/narrow widths |
| **Backgrounds** | Page / surface / brand token colors |
| **Measure & Outline** | Spacing and box outlines in the toolbar |
| **Highlight** | Element highlight for inspection |
| **Controls** | Expanded controls panel |
| **Actions** | Logs click / submit / change / input / toggle / close |
| **Density** | Compact / comfortable / spacious canvas padding |
| **Links** | Cross-story navigation addon |
| **Branded manager** | deml-ui theme (Geist + violet) |

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run sync` | Regenerate CSS barrel, CE/Angular sources, Storybook stories |
| `npm run storybook` | Sync + Storybook dev (HMR) |
| `npm run build-storybook` | Static Storybook → `storybook-static/` (Vercel) |
| `npm run build` | Full library package → `dist/` |
| `npm run build:styles` | Tokens + component CSS |
| `npm run build:wc` | Custom Elements ESM + IIFE (CDN) |
| `npm run build:html` | Raw HTML/CSS pack for local reuse |
| `npm run build:angular` | Angular library (`ng-packagr`) |
| `npm run dev` | Vite demo site |

## Layout

```
components/<name>/     # SOURCE OF TRUTH — style here
styles/tokens.css      # design tokens
styles/library.css     # package CSS entry (tokens + components)
src/web-components/    # CE browser entry
src/angular/           # Angular public API
generated/             # AUTO: CE + Angular wrappers (commit; re-run sync)
stories/               # AUTO Storybook stories
scripts/               # generators + build
.storybook/            # Storybook config
.github/workflows/ci.yml
vercel.json            # Storybook static deploy
```

## Add a component

1. Create `components/<name>/<name>.html` and `<name>.css`
2. Put reusable markup inside `.demo` (section chrome stays for Storybook only)
3. Run `npm run sync` (or start Storybook — it syncs on folder changes)
4. Optional `components/<name>/meta.json`:

```json
{ "package": true, "tag": "deml-my-thing", "category": "content" }
```

Set `"package": false` for Storybook-only demos. Defaults skip `gallery`, `megaform`, and CSS-only `form-field`.

Packaged custom element tags are `deml-<name>` (e.g. `deml-button`).

## Consume the package

After `npm run build` (or once published to npm):

### Styles (any stack)

```js
import "deml-ui/styles.css";   // tokens + all components
// or
import "deml-ui/tokens.css";   // tokens only
```

### Web Components / CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/deml-ui/dist/styles/deml-ui.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/deml-ui/dist/web-components/deml-ui.js"></script>
<deml-button></deml-button>
```

```js
import "deml-ui/styles.css";
import "deml-ui"; // side-effect: defineAll()
```

IIFE: `dist/web-components/deml-ui.iife.js` (global `DemlUi`).

### Angular

```ts
import { DemlButton } from "deml-ui/angular";
// styles once in angular.json or global styles:
// "node_modules/deml-ui/dist/styles/deml-ui.css"
```

```html
<deml-button />
```

Peer deps: `@angular/core` / `@angular/common` ≥ 19 (optional if you only use Web Components).

### Raw HTML/CSS

Fragments for local reuse: `dist/html/<name>/` (same layout as `components/`).

## Storybook → Vercel

`vercel.json` builds Storybook only:

- **Build command:** `npm run build-storybook`
- **Output:** `storybook-static`

Connect the GitHub repo (`dataengineeringformachinelearning/deml-ui`) in the Vercel dashboard. Every push to `main` deploys docs; PRs get preview URLs.

## CI

GitHub Actions (`.github/workflows/ci.yml`) on push/PR to `main`:

1. `npm ci`
2. `npm run sync`
3. `npm run build`
4. `npm run build-storybook`
5. Upload `dist` + `storybook-static` artifacts

## Styling workflow

1. Open Storybook
2. Edit `components/<name>/<name>.css` (and HTML structure if needed)
3. Use the **Theme** toolbar for light/dark (`data-theme`)
4. When ready: `npm run build` and consume from `dist/` or publish

Tokens live in `styles/tokens.css`. Shared form chrome: `components/form-field/form-field.css`.

## Package outputs

| Path | Use |
|------|-----|
| `dist/styles/deml-ui.css` | Full stylesheet |
| `dist/styles/tokens.css` | Tokens only |
| `dist/web-components/deml-ui.js` | ESM custom elements |
| `dist/web-components/deml-ui.iife.js` | Script-tag / CDN |
| `dist/angular/` | Angular library |
| `dist/html/` | Raw HTML/CSS sources |

## Repository

https://github.com/dataengineeringformachinelearning/deml-ui

## License

ISC


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdataengineeringformachinelearning%2Fdeml-ui.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdataengineeringformachinelearning%2Fdeml-ui?ref=badge_large)