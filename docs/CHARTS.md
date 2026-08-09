# Charts — absolute sizing law

**Non-negotiable.** Charts must never be squashed, stretched, oversized, or
undersized. Every chart renders at a consistent, intentional size across the
entire application, regardless of container or viewport.

## Canonical form

| Variant | Height (locked) | Width | Inset (equal all sides) |
|---------|-----------------|-------|-------------------------|
| Spark   | `--chart-height-spark` → **144px** | `100%` | `--chart-inset-spark` (`--space-2`) |
| Panel   | `--chart-height-panel` → **280px** | `100%` | `--chart-inset` (`--space-3`) |

- **Height is absolute** — `height` / `min-height` / `max-height` / `flex-basis` all pin the same token.
- **Width is fluid** inside tested bounds (`100%` of the host). Visual *weight* (height) never changes with viewport.
- **Y-scale** is shared via `computeSharedDomain` on `[data-chart-board]` — never per-chart auto-scale.
- **Stage ink** for panels: `--chart-stage-ink` (`#121212`) — never theme-invert series.

## Delivery

Charts ship **only** as deml-ui library components:

- `area-chart` / `bar-chart` / `chart` (plot frames)
- `chart-card` / `chart-panel` / `stat-card` spark slot (hosts)
- `chart-empty-state` (empty / loading bands — spark default; `data-variant="panel"` for panel)
- Mount: `deml-ui/charts` → `initSvgCharts` / `computeSharedDomain`

Product apps compose thin wrappers that call the mount — they never invent
heights, aspect ratios, or parallel chart CSS.

## Forbidden

- Data-driven height (`height: auto` growing with series length)
- Aspect-driven taller-when-wider (any `aspect-ratio` sizing of plot frames)
- Overriding `--chart-height-*` in product or page CSS
- Squashing via fixed-only `grid-auto-rows` or `min-content` board rows
- Uneven spark padding (`8px 16px` etc.)
- Theme-inverted plot series / stage

## Responsive bounds

Width may fluid-fill the card/tile. Height and inset stay token-locked.
Boards use `grid-auto-rows: minmax(var(--dash-row|tile-row-*), auto|1fr)` so
peer tiles stretch *around* charts without changing chart height.

## Gate

`npm run check:nfts` fails if tokens, chart CSS, or `svg-mount.js` drift from
144 / 280, equal insets, or the locked comments. **No escape hatches.**
