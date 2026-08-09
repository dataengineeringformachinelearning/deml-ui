# System checklist — cohesive DEML UI

Use this as the final-pass contract for deml-ui + consumers (deml, marketing, FORJD splash).

| # | Requirement | Proof |
|---|-------------|--------|
| 1 | UI is library components, dynamically composed | deml pages use only `app-*`; deml-ui owns CSS; `npm run check:nfts` |
| 2 | Storybook + Chromatic | `check:stories` (≥2 CSF + modes); `.github/workflows/chromatic.yml` + secret `CHROMATIC_PROJECT_TOKEN` |
| 3 | 8px grid, equal spacing, equal board heights | tokens `--space-*` / `--tile-gap`; boards `minmax(...auto\|1fr)`; no `--space-half` |
| 4 | Typography / character | Geist; mark `0.28em`; intro `0.1em`; display 800; body `1.62` / `60ch`; no Syne/Fraunces/Viking/forbidden names |
| 5 | Light + dark | `[data-theme]` tokens; ThemeService / theme-toggle; Storybook + Chromatic light/dark modes |
| 6 | WCAG 2.0 AA / §508 | [`ACCESSIBILITY.md`](ACCESSIBILITY.md); focus/hit/overlay traps; a11y addon in CI |
| 7 | Chart sizing golden rule | [`CHARTS.md`](CHARTS.md); spark **144** / panel **280**; gate-enforced |
| 8 | Modern, minimal, consistent | Signals/`input()`/`model()`; thin wrappers; CSS + charts product path |

**Gates (no escape hatches):**

```bash
# deml-ui
npm run check:nfts && npm run check:stories && npm run build

# deml
npm run check:nfts && npx ng build
```

**Ship order:** build deml-ui → commit/push → set Chromatic secret → bump deml (+ marketing) SHA → `./scripts/sync_deml_ui_static.sh`.
