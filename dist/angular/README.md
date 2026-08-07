# deml-ui

**new-from-the-start (warm ash)** design system for DEML — HTML/CSS sources with dual package builds (**Web Components** + **Angular**).

Geist only. No Syne/Fraunces, Viking-UI, or parallel palettes. Storybook: [ui.deml.app](https://ui.deml.app).

**Source of truth:** `components/<name>/` · `styles/tokens.css` · `styles/base.css`. Generators produce Custom Elements and Angular wrappers. Headless Angular primitives: `src/angular/headless/`.

## Quick start

```bash
npm install
npm run sync          # CSS barrel, CE/Angular wrappers, stories
npm run storybook     # → http://localhost:6006
npm run build         # styles + WC + Angular → dist/
npm run check:nfts    # mandatory warm-ash gate
```

Adding/removing a component folder: edit `components/`, update `scripts/lib/components.mjs` → `CATEGORIES`, then `npm run sync`.

## Consume

Consumer app: [`deml`](https://github.com/dataengineeringformachinelearning/deml) ([THEME.md](https://github.com/dataengineeringformachinelearning/deml/blob/main/THEME.md)).

```js
import "deml-ui/styles.css";
import "deml-ui"; // defineAll()
```

```ts
import { DemlButton } from "deml-ui/angular";
```

Peer deps: `@angular/core` / `@angular/common` ≥ 19 (optional for WC-only). `dist/` is committed for `github:` installs.

## Layout

```text
components/<name>/     SOURCE OF TRUTH — style here
styles/tokens.css      design tokens
src/angular/           markup wrappers + headless
src/web-components/    CE browser entry
generated/             AUTO — re-run sync
```

Headless: [`USAGE.md`](src/angular/headless/USAGE.md) · [`CONVENTIONS.md`](src/angular/headless/CONVENTIONS.md). Laws: [`AGENTS.md`](AGENTS.md).

## Publish

```bash
npm run check:nfts && npm run sync && npm run build
npm publish --dry-run   # then npm publish
```

Package name: `deml-ui` (unscoped). Consumers pin a git SHA
(`github:dataengineeringformachinelearning/deml-ui#<sha>`). After changes: `npm run build`,
then bump deml + marketing pins.

## License

ISC — see [LICENSE](./LICENSE).
