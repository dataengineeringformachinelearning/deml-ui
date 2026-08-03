/* AUTO-GENERATED from components/chart-card/chart-card.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<article class=\"chart-card\" aria-labelledby=\"chart-card-demo-heading\">\n      <header class=\"chart-card-header\">\n        <h3 class=\"chart-card-heading\" id=\"chart-card-demo-heading\">Traffic</h3>\n        <p class=\"chart-card-meta\">Last 7 days</p>\n      </header>\n      <div class=\"chart-card-body\">\n        <div class=\"area-chart-frame\" role=\"img\" aria-label=\"Sample area chart\">\n          <svg\n            class=\"area-chart\"\n            viewBox=\"0 0 360 150\"\n            preserveAspectRatio=\"xMidYMid meet\"\n            aria-hidden=\"true\"\n            focusable=\"false\"\n          >\n            <polyline\n              class=\"area-chart-line\"\n              fill=\"none\"\n              points=\"32,110 80,90 140,95 200,50 260,70 320,40\"\n            />\n          </svg>\n        </div>\n      </div>\n    </article>";

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
