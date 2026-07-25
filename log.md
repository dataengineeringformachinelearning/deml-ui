# log

- 2026-07-25: HTML/CSS startpoint — element reference page (`index.html`); layout tokens/shell in `styles.css`.
- 2026-07-25: Untitled UI–style convention — copy/paste ownership; `components/<name>/<name>.html` + `<name>.css`.
- 2026-07-25: Navbar component — co-located markup/styles; Components gallery on `index.html`.
- 2026-07-25: Stylesheet split — shared tokens in `styles.css`; component barrel `components/components.css`.
- 2026-07-25: Index → components — shell + element boilerplate extracted; `load.js` includes + `demos.js` wiring.
- 2026-07-25: Split boilerplate — one component per section (`.component--name`); forms/headings/embed-object kept as natural groups.
- 2026-07-25: Demo layout — full-width `main`/`.demo`; equal inset via `--demo-padding`.
- 2026-07-25: README — minimal docs; Run section adds `live-server` / BrowserSync hot reload.
- 2026-07-25: Color scheme — violet/twilight tokens + dark mode (`data-theme="dark"` / `.dark`).
- 2026-07-25: Geist Sans — Google Fonts `preconnect` + link; `--font-family` for all UI.
- 2026-07-25: Storybook — HTML/Vite (`npm run storybook`); stories from components with HMR.
- 2026-07-25: Forms split — atomic inputs/buttons/choices + `megaform` composition; shared `form-field` styles.
- 2026-07-25: `.gitignore` — ignore `node_modules`, Storybook build, generated stories, env, caches.
- 2026-07-25: Secure includes — ES module `load.js` (same-origin + `components/` only); site via `npm run dev` (Vite).
- 2026-07-25: **Library foundation** — dual build (Web Components + Angular), tokens in `styles/tokens.css`, `npm run sync` generators, `npm run build` → `dist/`, Storybook a11y + theme toolbar, `vercel.json` (Storybook deploy), GitHub Actions CI.
