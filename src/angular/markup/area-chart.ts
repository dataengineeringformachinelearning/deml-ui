/* AUTO-GENERATED from components/area-chart/area-chart.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"chart-board\" data-chart-board data-chart-ymax=\"auto\">\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"area-a\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"area-a\">Streams</h3>\n          <p class=\"chart-card-meta\">Shared Y · 0–max</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Streams\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"area\"\n              data-series=\"[120,156,142,188,210,196,230]\"\n              data-categories='[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"area-b\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"area-b\">Saves</h3>\n          <p class=\"chart-card-meta\">Same scale</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Saves\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"area\"\n              data-series=\"[48,62,55,70,84,78,96]\"\n              data-categories='[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"area-c\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"area-c\">Shares</h3>\n          <p class=\"chart-card-meta\">Same scale</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Shares\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"area\"\n              data-series=\"[18,22,20,28,34,30,42]\"\n              data-categories='[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n    </div>";

@Component({
  selector: "deml-area-chart",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlAreaChart implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
