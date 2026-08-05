# deml-ui

**new-from-the-start (warm ash)** component library for DEML — HTML/CSS sources with dual package builds (**Web Components** + **Angular**).

Style first in Storybook. Ship via `npm run build`. Geist only; no Syne/Fraunces, no Viking-UI, no cold seven-color frankenstein.

**Source of truth:** `components/<name>/<name>.html` + `<name>.css` + `styles/tokens.css`. Generators produce Custom Elements and Angular standalone wrappers. Headless Angular primitives live under `src/angular/headless/`.

## Quick start

```bash
npm install
npm run sync        # regenerate CSS barrel, CE/Angular, stories
npm run storybook   # design browser → http://localhost:6006
npm run dev         # curated reference site → http://localhost:3000
npm run build       # styles + WC + html pack + Angular → dist/
```

Editing `components/**` hot-updates Storybook. Adding/removing a folder regenerates stories and wrappers.

### How to use this Storybook

| Feature | Where |
|--------|--------|
| **Canvas** | Live component preview |
| **Docs** | Autodocs + packaged HTML source (`.demo` fragment) |
| **Theme** | Toolbar — light / dark (`data-theme`) |
| **Viewport** | Toolbar — phone, tablet, desktop, deml widths |
| **Backgrounds** | Toolbar — warm ash / deep surface / cream / light ground |
| **Measure / Outline** | Toolbar — spacing & box inspection |
| **Density** | Toolbar — compact / comfortable / spacious |
| **A11y** | Panel — axe (WCAG 2 A/AA + best practices) |
| **Actions** | Panel — click / submit / change / input |

### Sidebar

1. **Dashboard** — composition example
2. **Shell** — app chrome, page headers, navigation
3. **Layout** — stack, grid, panels, spacing recipes
4. **Forms** — fields, inputs, buttons, switches
5. **Feedback** — badges, callouts, toasts, loaders
6. **Data** — cards, metrics, tables, charts
7. **Overlays** — dialogs, sheets, tabs, menus

## Package builds

```bash
npm run storybook        # this UI
npm run build            # styles + web components + Angular → dist/
npm run build-storybook  # static site
```

| Command | Purpose |
|---------|--------|
| `npm run sync` | CSS barrel + CE/Angular wrappers + Storybook stories |
| `npm run storybook` | Sync + Storybook dev |
| `npm run build-storybook` | Static Storybook → `storybook-static/` |
| `npm run build` | Full library package → `dist/` |
| `npm run dev` | Vite reference site |

Custom elements use the `deml-*` tag prefix (e.g. `<deml-button>`).

## Layout

```
components/<name>/          # SOURCE OF TRUTH — style here
styles/tokens.css           # design tokens
styles/library.css          # package CSS entry
src/web-components/         # CE browser entry
src/angular/                # Angular public API (markup + headless)
src/angular/headless/       # Headless primitives (hand-authored)
generated/                  # AUTO: CE + Angular markup wrappers (re-run sync)
stories/                    # Introduction + Dashboard MDX; *.stories.js auto
scripts/                    # generators + build
.storybook/                 # Storybook 10 (HTML + Vite)
```

## Add a component

1. Create `components/<name>/<name>.html` and `<name>.css`
2. Put reusable markup inside `.demo` (section chrome is Storybook-only)
3. Add the name to the right group in `scripts/lib/components.mjs` → `CATEGORIES`
4. Run `npm run sync`
5. Optional `meta.json`: `{ "package": true, "tag": "deml-my-thing" }`

Style BEM roots (`.card`, `.button`, `.tabs`, …) — not only `.component--name`.

Packaged tags are `deml-<name>` (e.g. `deml-button`).

## Headless Angular

Unstyled, accessible primitives with Signals — behavior only, you own CSS.
Composition-first (root + parts). Shared models: `[(open)]` / `[(value)]`, `(change)`, `(opened)` / `(closed)`, `data-state`.

| Primitive | Import | Parts |
|-----------|--------|-------|
| Tabs | `DEML_TABS_IMPORTS` | `demlTabList`, `demlTab`, `demlTabPanel` |
| Dialog | `DEML_DIALOG_IMPORTS` | panel / title / description / close |
| Disclosure | `DEML_DISCLOSURE_IMPORTS` | button / panel |
| Combobox | `DEML_COMBOBOX_IMPORTS` | label / input / button / options |
| Menu | `DEML_MENU_IMPORTS` | button / items / item |

```ts
import { DEML_COMBOBOX_IMPORTS } from "deml-ui/angular";
```

See [`USAGE.md`](src/angular/headless/USAGE.md) and [`CONVENTIONS.md`](src/angular/headless/CONVENTIONS.md).

## Inventory (dashboard kit)

Curated for app/dashboard composition — not an HTML element encyclopedia.

| Group | Examples |
|-------|----------|
| **Shell** | `app-layout`, `app-header`, `app-sidebar`, `page-header`, `sidebar-nav`, `breadcrumbs` |
| **Layout** | `stack`, `grid`, `panel-grid`, `form-grid`, `section`, `container`, `split-panel` |
| **Forms** | `field`, `button`, `input-*`, `select`, `checkbox`, `radio-group`, `switch`, `file-upload` |
| **Feedback** | `badge`, `callout`, `toast`, `empty-state`, `skeleton`, `spinner` |
| **Data** | `card`, `metric-card`, `table`, `chart-panel`, `pagination`, `activity-list` |
| **Overlays** | `dialog`, `sheet`, `tabs`, `accordion`, `dropdown`, `command`, `wizard` |

`form-field` is shared CSS only (not packaged as a custom element).

## Consume the package

```js
import "deml-ui/styles.css";
import "deml-ui"; // defineAll()
```

```ts
import { DemlButton } from "deml-ui/angular";
```

```html
<deml-button></deml-button>
```

Peer deps: `@angular/core` / `@angular/common` ≥ 19 (optional for WC-only).

## Styling workflow

1. Open Storybook → pick a component
2. Edit `components/<name>/<name>.css` (structure is already visible)
3. Use Theme / Viewport / A11y panels
4. Compose pages from Shell + Layout + Data primitives
5. `npm run build` when ready

Tokens: `styles/tokens.css`. Prefer token variables (`--space-*`, `--line`, `--surface`) over raw hex in component CSS.

## CI / Vercel

- CI: `npm ci` → `sync` → `build` → `build-storybook`
- Vercel: Storybook static (`build-storybook` → `storybook-static`)

## Publish to npm

Package name: `deml-ui` (unscoped). `dist/` is committed for `github:` consumers; `prepublishOnly` rebuilds before publish.

```bash
npm run check:nfts   # must pass
npm run sync && npm run build
npm publish --dry-run   # inspect tarball contents
npm login               # once
npm publish             # publishes public 1.x from package.json version
```

Prerequisites: Node ≥ 20, npm account with publish rights to `deml-ui`, clean working tree preferred.

After publish, re-pin the deml app to the npm version (`"deml-ui": "^1.1.0"`) or keep the `github:` SHA pin and bump when ready.

## License

ISC — see [LICENSE](./LICENSE).
