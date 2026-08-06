/* AUTO-GENERATED from components/chart-panel/chart-panel.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"chart-board chart-board--panel\" data-chart-board data-chart-ymax=\"auto\">\n      <section class=\"chart-panel\" data-accent=\"primary\" aria-labelledby=\"panel-a\">\n        <header class=\"chart-panel__header\">\n          <div class=\"chart-panel__header-row\">\n            <h3 class=\"chart-panel__title\" id=\"panel-a\">System latency</h3>\n            <p class=\"chart-panel__value\">52<span class=\"chart-panel__unit\">ms</span></p>\n          </div>\n          <p class=\"chart-panel__meta\">\n            <span class=\"chart-card-trend\" data-trend=\"up\">+4%</span>\n            Last 24h · shared Y\n          </p>\n        </header>\n        <div class=\"chart-panel__body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Latency\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"area\"\n              data-series=\"[36,40,38,44,52,48,42]\"\n              data-categories='[\"00\",\"04\",\"08\",\"12\",\"16\",\"20\",\"24\"]'\n            ></div>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"chart-panel\" data-accent=\"primary\" aria-labelledby=\"panel-b\">\n        <header class=\"chart-panel__header\">\n          <div class=\"chart-panel__header-row\">\n            <h3 class=\"chart-panel__title\" id=\"panel-b\">Throughput</h3>\n            <p class=\"chart-panel__value\">1.2<span class=\"chart-panel__unit\">k</span></p>\n          </div>\n          <p class=\"chart-panel__meta\">\n            <span class=\"chart-card-trend\" data-trend=\"up\">+9%</span>\n            Same scale\n          </p>\n        </header>\n        <div class=\"chart-panel__body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Throughput\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"area\"\n              data-series=\"[22,28,26,34,40,38,32]\"\n              data-categories='[\"00\",\"04\",\"08\",\"12\",\"16\",\"20\",\"24\"]'\n            ></div>\n          </div>\n        </div>\n      </section>\n    </div>";

@Component({
  selector: "deml-chart-panel",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlChartPanel implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
