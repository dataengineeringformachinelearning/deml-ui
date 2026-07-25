# deml

HTML/CSS startpoint for a copy/paste component library ([Untitled UI](https://www.untitledui.com/react/docs/introduction)–style ownership).

## Run

Serve over HTTP (includes use `fetch`):

```bash
npx serve .
```

## Layout

- `index.html` — page composition (`data-include` fragments)
- `styles.css` — tokens, reset, shell
- `components/<name>/` — `<name>.html` + `<name>.css`
- `components/components.css` — `@import` barrel
- `components/load.js` / `demos.js` — includes + demo wiring
- `log.md` — changelog

## Add a component

1. Create `components/<name>/<name>.html` and `<name>.css`
2. `@import` the CSS in `components/components.css`
3. Add a `data-include` in `index.html` (and gallery entry if useful)
