/* AUTO-GENERATED from components/chart/chart.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"chart-board\" data-chart-board data-chart-ymax=\"auto\">\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"line-a\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"line-a\">Latency</h3>\n          <p class=\"chart-card-meta\">p95 · shared Y</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Latency line\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"line\"\n              data-series=\"[42,38,45,40,52,48,44]\"\n              data-categories='[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"line-b\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"line-b\">Errors</h3>\n          <p class=\"chart-card-meta\">Same scale</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Errors line\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"line\"\n              data-series=\"[12,9,14,11,18,15,10]\"\n              data-categories='[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"line-c\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"line-c\">Saturation</h3>\n          <p class=\"chart-card-meta\">Same scale</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Saturation line\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"line\"\n              data-series=\"[28,30,26,33,31,29,27]\"\n              data-categories='[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n    </div>";

@Component({
  selector: "deml-chart",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlChart implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
