/* AUTO-GENERATED from components/explore-card/explore-card.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<article class=\"explore-card\" data-status=\"operational\">\n      <header class=\"explore-card__header\">\n        <div class=\"explore-card__meta\">\n          <span class=\"status-pill\" data-status=\"up\">Operational</span>\n          <span class=\"explore-card__tag\">Public Status Page</span>\n        </div>\n        <h3 class=\"explore-card__title\">Platform Status</h3>\n        <p class=\"explore-card__lede\">Live service health for the DEML control plane.</p>\n      </header>\n      <ul class=\"explore-card__metrics\" role=\"list\">\n        <li class=\"explore-card__metric\">\n          <span class=\"explore-card__metric-label\">Cumulative SLA</span>\n          <span class=\"explore-card__metric-value\">99.98%</span>\n          <span class=\"explore-card__metric-meta\">Based on real telemetry</span>\n        </li>\n        <li class=\"explore-card__metric\">\n          <span class=\"explore-card__metric-label\">P99 Latency</span>\n          <span class=\"explore-card__metric-value\">42ms</span>\n          <span class=\"explore-card__metric-meta\">Last 24h</span>\n        </li>\n        <li class=\"explore-card__metric\">\n          <span class=\"explore-card__metric-label\">Spike Risk</span>\n          <span class=\"explore-card__metric-value\">12.00</span>\n          <span class=\"explore-card__metric-meta\">Dynamic Temporal Forecasting</span>\n        </li>\n        <li class=\"explore-card__metric\">\n          <span class=\"explore-card__metric-label\">Threat Anomaly</span>\n          <span class=\"explore-card__metric-value\">0.40%</span>\n          <span class=\"explore-card__metric-meta\">Active</span>\n        </li>\n      </ul>\n      <div class=\"explore-card__uptime\">\n        <div class=\"explore-card__uptime-head\">\n          <span class=\"explore-card__uptime-label\">Uptime</span>\n          <span class=\"explore-card__uptime-value\">99.9%</span>\n        </div>\n        <div class=\"explore-card__uptime-track\" aria-hidden=\"true\">\n          <span class=\"explore-card__uptime-seg\" data-status=\"up\"></span>\n          <span class=\"explore-card__uptime-seg\" data-status=\"up\"></span>\n          <span class=\"explore-card__uptime-seg\" data-status=\"partial\"></span>\n          <span class=\"explore-card__uptime-seg\" data-status=\"up\"></span>\n          <span class=\"explore-card__uptime-seg\" data-status=\"up\"></span>\n        </div>\n        <p class=\"explore-card__uptime-summary\">No current issues</p>\n      </div>\n      <footer class=\"explore-card__footer\">\n        <a class=\"button button--primary button--pill\" href=\"#\">View status</a>\n      </footer>\n    </article>";

@Component({
  selector: "deml-explore-card",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlExploreCard implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
