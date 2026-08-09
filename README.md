# deml-ui

**new-from-the-start (warm ash)** design system for the DEML suite — HTML/CSS sources with dual package builds (**Web Components** + **Angular**).

| Repo | Role | Production |
|------|------|------------|
| [`deml`](https://github.com/dataengineeringformachinelearning/deml) | Control plane | [deml.app](https://deml.app) · [backend.deml.app](https://backend.deml.app) |
| **This repo (`deml-ui`)** | Design system (warm ash NFTS) | [ui.deml.app](https://ui.deml.app) |
| [`forjd`](https://github.com/dataengineeringformachinelearning/forjd) | Data plane | [backend.forjd.co](https://backend.forjd.co) |
| [`dataengineeringformachinelearning`](https://github.com/dataengineeringformachinelearning/dataengineeringformachinelearning) | Community / BOOK / blog / docs | [dataengineeringformachinelearning.com](https://dataengineeringformachinelearning.com) |

## Owns

- Tokens, base chrome, and component HTML/CSS under `components/<name>/`
- Generated Custom Elements + Angular markup wrappers
- Storybook (local `:6006` · production [ui.deml.app](https://ui.deml.app))
- Locked **warm ash NFTS** look — Geist only; no Syne/Fraunces, Viking-UI, or parallel palettes

Consumers: **deml** (Angular + Django static), marketing Astro, FORJD/DEML API splash shells. Expand visuals here first; never invent a parallel look in a consumer.

## Run

```bash
npm install
npm run sync          # CSS barrel, CE/Angular wrappers, stories
npm run storybook     # → http://localhost:6006
```

Adding/removing a component folder: edit `components/`, update `scripts/lib/components.mjs` → `CATEGORIES` and (when needed) `scripts/lib/story-kits.mjs`, then `npm run sync`.

Storybook ships controls, actions, docs, a11y, themes (light/dark), viewport, backgrounds, measure, and outline. Every component gets a generated CSF matrix (Default + Gallery/Variants/States/Playground as applicable) with Chromatic light/dark modes.

## Check

```bash
npm run check:nfts      # mandatory warm-ash gate — must pass
npm run check:stories   # story coverage + Chromatic/a11y meta — must pass
npm run sync
npm run build-storybook
npm run chromatic       # visual regression (set CHROMATIC_PROJECT_TOKEN)
npm run build           # styles + WC + Angular → dist/
```

CI runs `check:nfts` + `check:stories` before sync/build; Chromatic publishes on `main`/PRs via `.github/workflows/chromatic.yml`. **No escape hatches.**

## Deploy

| Host | Platform | Notes |
|------|----------|-------|
| `ui.deml.app` | Vercel | Storybook production |

Package name: `deml-ui` (unscoped). Consumers pin a git SHA (`github:dataengineeringformachinelearning/deml-ui#<sha>`). `dist/` is committed for `github:` installs. After changes: `npm run build`, then bump deml + marketing (+ FORJD `sync:deml-ui`) pins.

## Layout

```text
components/<name>/     SOURCE OF TRUTH — style here
styles/tokens.css      design tokens
styles/base.css        type recipes + page chrome
src/angular/           markup wrappers + headless
src/web-components/    CE browser entry
generated/             AUTO — re-run sync
dist/                  committed build for github: consumers
```

## Consume (product path)

Primary consumers (deml Angular + Django chrome) use **CSS class contracts** + thin
behavioral wrappers — not the generated Angular markup dumps.

```js
import "deml-ui/styles.css";           // required
import { initSvgCharts } from "deml-ui/charts"; // charts only
```

```js
import "deml-ui"; // optional Custom Elements (Django splash / demos)
```

| Export | Use |
|--------|-----|
| `deml-ui/styles.css` | **Required** — tokens + components |
| `deml-ui/charts` | SVG mount + shared Y domain |
| `deml-ui` (WC) | Optional CE `defineAll()` |
| `deml-ui/angular` | Headless primitives + Storybook/CE dump wrappers (not deml product SoT) |
| `deml-ui/package.css` | Alias of `styles.css` (prefer `styles.css`) |

Light/dark: set `data-theme="light"|"dark"` (or `.light` / `.dark`) on `<html>` —
tokens flip; never invent page-local palettes.

Peer deps: `@angular/core` / `@angular/common` ≥ 19 (optional for WC-only).

## Docs

| Doc | When |
|-----|------|
| [`AGENTS.md`](AGENTS.md) · [`.cursorrules`](.cursorrules) | Laws + agent briefing |
| [`docs/SYSTEM.md`](docs/SYSTEM.md) | Final cohesive checklist (8 criteria) |
| [`docs/CHARTS.md`](docs/CHARTS.md) | Absolute chart sizing law |
| [`docs/ACCESSIBILITY.md`](docs/ACCESSIBILITY.md) | WCAG 2.0 AA / §508 |
| [`src/angular/headless/USAGE.md`](src/angular/headless/USAGE.md) | Headless primitives |
| [`src/angular/headless/CONVENTIONS.md`](src/angular/headless/CONVENTIONS.md) | Headless conventions |
| deml [`THEME.md`](https://github.com/dataengineeringformachinelearning/deml/blob/main/THEME.md) | Consumer visual contract |

## Related

- Consumer app: [`deml`](https://github.com/dataengineeringformachinelearning/deml)
- License: ISC — see [LICENSE](./LICENSE)
