# Accessibility — WCAG 2.0 Level AA & Section 508

deml-ui targets **WCAG 2.0 Level AA** and **Section 508** (aligned with WCAG 2.0 AA).
The deml Angular app consumes these primitives and owns dialog focus management,
form association, and critical-flow keyboard behavior.

## Non-negotiables

| Requirement | How we meet it |
|-------------|----------------|
| Keyboard | All interactive controls are focusable; sheets trap Tab + Escape; mobile nav traps Tab |
| Visible focus | `--color-focus` on ash page; `--color-focus-on-card` on cream modules |
| Semantics | Native controls first; `role="dialog"` + `aria-modal` on sheets; landmarks via skip-link / main / nav |
| Contrast | Warm-ash tokens; secondary buttons on cream use card ink; badges use `--color-primary-ink` |
| Labels | Visible labels + `aria-label` when list actions are ambiguous |
| Live regions | Form errors `role="alert"`; status/empty `role="status"`; explore loading `aria-live="polite"` |
| Touch | `--hit-target` ≥ 44×44px on buttons, toggles, navbar controls |
| Composition | No app-local DS CSS; wrappers stay thin so a11y lives in library markup |

## Verification

```bash
# deml-ui
npm run check:nfts
npm run build
# Storybook a11y addon (axe-core WCAG 2 A/AA)
npm run storybook
# CI / Chromatic sets a11y test mode to "error" (axe WCAG 2 A/AA)
CI=1 npm run build-storybook
```

Manual checklist (each release that touches chrome):

1. Tab through login → signup → MFA → settings → explore → status page (light + dark).
2. Open confirm sheet and site editor: focus moves in, Escape closes, Tab stays inside, focus restores.
3. Mobile navbar menu: same as sheets; footer/main not reachable while open.
4. Submit empty auth forms: first invalid field receives focus; errors announced.
5. Screen reader: status cards announce title + status; uptime summary is text (segments decorative).

## Intentional exceptions (rare)

1. **Chart plot stage `#121212`** — locked ink stage for activity graphs (`--color-plot-stage` / `--chart-stage-ink`). Decorative plot chrome; data is also exposed via labels / empty states. Not used for body text.
2. **Uptime segment strips** — visual spark only (`aria-hidden="true"`). The percentage + summary text beside the strip is the accessible equivalent.
3. **Skeleton placeholders** — `aria-hidden` on decorative shimmer; parent sets `aria-busy` + live polite loading text.
4. **CSS-only sheet demos in Storybook/catalog HTML** — structural preview without runtime focus trap. Product behavior is implemented in deml `app-sheet` (trap, Escape, inert chrome, restore focus). Do not ship CSS demos as production dialogs.

No other exceptions are approved. Contrast, hit targets, and focus rings must pass in both themes.

## Component ownership

| Concern | Owner |
|---------|--------|
| Tokens, focus rings, contrast, hit targets | deml-ui `styles/tokens.css` + component CSS |
| Markup patterns (labels, ARIA, roles) | deml-ui `components/*/…html` + Angular wrappers |
| Modal focus trap / inert / restore | deml `app-sheet` + `shared/overlay-a11y.ts` |
| Field `aria-describedby` (hint + error) | deml `app-text-field` |
| Critical flows | deml pages (auth, settings, explore) |

## When adding a component

1. Prefer native HTML semantics.
2. Ensure `:focus-visible` uses page or card focus token as appropriate.
3. Meet `--hit-target` for any pointer target.
4. Add a Storybook story; a11y addon must be clean (or document a listed exception above).
5. If the control opens a dialog, compose `app-sheet` — do not invent a second trap.
