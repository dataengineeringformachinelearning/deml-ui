# Component alias map (new-from-the-start → deml-ui)

## Restyle existing
| deml local | deml-ui |
|---|---|
| button | button |
| button-group | button-group |
| card | card |
| container | container |
| theme-toggle | theme-toggle |
| stat-card | metric-card |
| chart-card / area-chart / bar-chart | chart-panel + chart |
| text-field | field + input-text |
| checkbox-field | field + checkbox |
| banner | banner (new) |
| navbar | navbar (new) |

## Add to deml-ui
page-section, section-header, card-grid, dashboard-grid, article, form-panel, microcard, microcard-grid, metric-list, banner, navbar

## Main product routes to port
login, auth-status, success, status, status/:slug, explore, dashboard, analytics, vulnerabilities, settings, account (+ marketing from new branch)
