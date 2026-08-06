/* AUTO-GENERATED from components/chart-card/chart-card.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"chart-board\" data-chart-board data-chart-ymax=\"auto\">\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"cc-a\">\n        <header class=\"chart-card-header\">\n          <div class=\"chart-card-header__row\">\n            <h3 class=\"chart-card-heading\" id=\"cc-a\">Listen time</h3>\n            <p class=\"chart-card-value\">230<span class=\"chart-card-unit\">m</span></p>\n          </div>\n          <p class=\"chart-card-meta\">\n            <span class=\"chart-card-trend\" data-trend=\"up\">+12%</span>\n            Last 7 days\n          </p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Listen time\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"area\"\n              data-series=\"[120,156,142,188,210,196,230]\"\n              data-categories='[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"cc-b\">\n        <header class=\"chart-card-header\">\n          <div class=\"chart-card-header__row\">\n            <h3 class=\"chart-card-heading\" id=\"cc-b\">Playlist adds</h3>\n            <p class=\"chart-card-value\">74</p>\n          </div>\n          <p class=\"chart-card-meta\">\n            <span class=\"chart-card-trend\" data-trend=\"up\">+8%</span>\n            Same Y scale\n          </p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Playlist adds\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"area\"\n              data-series=\"[32,40,38,55,62,58,74]\"\n              data-categories='[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"cc-c\">\n        <header class=\"chart-card-header\">\n          <div class=\"chart-card-header__row\">\n            <h3 class=\"chart-card-heading\" id=\"cc-c\">Follows</h3>\n            <p class=\"chart-card-value\">34</p>\n          </div>\n          <p class=\"chart-card-meta\">\n            <span class=\"chart-card-trend\" data-trend=\"down\">−3%</span>\n            Same Y scale\n          </p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Follows\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"area\"\n              data-series=\"[14,18,16,22,28,26,34]\"\n              data-categories='[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n    </div>";

@Component({
  selector: "deml-chart-card",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlChartCard implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
