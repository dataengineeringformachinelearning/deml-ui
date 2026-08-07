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

Adding/removing a component folder: edit `components/`, update `scripts/lib/components.mjs` → `CATEGORIES`, then `npm run sync`.

## Check

```bash
npm run check:nfts    # mandatory warm-ash gate — must pass
npm run sync
npm run build         # styles + WC + Angular → dist/
```

CI runs `check:nfts` before sync/build. **No escape hatches.**

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

## Consume

```js
import "deml-ui/styles.css";
import "deml-ui"; // defineAll()
```

```ts
import { DemlButton } from "deml-ui/angular";
```

Peer deps: `@angular/core` / `@angular/common` ≥ 19 (optional for WC-only).

## Docs

| Doc | When |
|-----|------|
| [`AGENTS.md`](AGENTS.md) · [`.cursorrules`](.cursorrules) | Laws + agent briefing |
| [`src/angular/headless/USAGE.md`](src/angular/headless/USAGE.md) | Headless primitives |
| [`src/angular/headless/CONVENTIONS.md`](src/angular/headless/CONVENTIONS.md) | Headless conventions |
| deml [`THEME.md`](https://github.com/dataengineeringformachinelearning/deml/blob/main/THEME.md) | Consumer visual contract |

## Related

- Consumer app: [`deml`](https://github.com/dataengineeringformachinelearning/deml)
- License: ISC — see [LICENSE](./LICENSE)
