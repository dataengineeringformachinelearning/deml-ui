/* AUTO-GENERATED from components/chart-panel/chart-panel.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<section class=\"chart-panel\" aria-labelledby=\"chart-panel-title\">\n      <header class=\"chart-panel__header\">\n        <h3 id=\"chart-panel-title\">Chart panel</h3>\n        <p class=\"chart-panel__value\">42</p>\n      </header>\n      <div class=\"chart-panel__body\" role=\"img\" aria-label=\"Sample chart placeholder\">\n        <svg\n          class=\"chart\"\n          viewBox=\"0 0 360 150\"\n          preserveAspectRatio=\"xMidYMid meet\"\n          aria-hidden=\"true\"\n          focusable=\"false\"\n        >\n          <polyline\n            fill=\"none\"\n            stroke=\"currentColor\"\n            stroke-width=\"2\"\n            points=\"0,110 60,80 120,95 180,40 240,65 300,30 360,20\"\n          />\n        </svg>\n      </div>\n    </section>";

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
