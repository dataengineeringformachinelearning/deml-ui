# deml

HTML/CSS startpoint for a copy/paste component library ([Untitled UI](https://www.untitledui.com/react/docs/introduction)–style ownership).

## Run

```bash
npm install
npm run dev
```

Site: [http://localhost:3000](http://localhost:3000) (Vite — HMR for CSS/JS).

**Storybook** (component browser):

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006). Editing `components/**` or `styles.css` hot-updates the preview. Adding/removing a component folder regenerates stories automatically.

## Layout

- `index.html` — page composition (`data-include` fragments)
- `styles.css` — tokens, reset, shell
- `components/<name>/` — one section each; style via `.component--<name>`
- `components/components.css` — `@import` barrel
- `components/load.js` — secure ES module includes (same-origin, `components/` only)
- `stories/` — Storybook stories (auto-generated)
- `.storybook/` — Storybook config
- `log.md` — changelog

## Add a component

1. Create `components/<name>/<name>.html` and `<name>.css`
2. `@import` the CSS in `components/components.css`
3. Add a `data-include` in `index.html` (and gallery entry if useful)
4. Storybook picks it up on save (or run `npm run storybook:gen`)
