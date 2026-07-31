/* AUTO-GENERATED from components/chart-panel/chart-panel.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<section class=\"chart-panel\" aria-labelledby=\"chart-panel-title\">\n      <header class=\"chart-panel__header\">\n        <h3 id=\"chart-panel-title\">Chart panel</h3>\n        <p class=\"chart-panel__value\">42</p>\n      </header>\n      <div class=\"chart-panel__body\" role=\"img\" aria-label=\"Sample chart placeholder\">\n        <svg class=\"chart\" viewBox=\"0 0 200 80\" width=\"100%\" height=\"80\" aria-hidden=\"true\">\n          <polyline fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" points=\"0,60 40,40 80,50 120,20 160,35 200,10\" />\n        </svg>\n      </div>\n    </section>";

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
