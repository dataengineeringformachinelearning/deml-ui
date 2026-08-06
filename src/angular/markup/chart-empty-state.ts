/* AUTO-GENERATED from components/chart-empty-state/chart-empty-state.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"chart-board chart-board--empty\">\n      <div class=\"chart-empty-state\" data-layout=\"fill\" role=\"status\">\n        <span class=\"chart-empty-state__badge\" aria-hidden=\"true\"></span>\n        <p class=\"chart-empty-state__title\">No chart data</p>\n        <p class=\"chart-empty-state__description\">Signals appear once telemetry lands.</p>\n      </div>\n\n      <div class=\"chart-empty-state\" data-layout=\"inline\" role=\"status\">\n        <span class=\"chart-empty-state__badge\" aria-hidden=\"true\"></span>\n        <p class=\"chart-empty-state__title\">Awaiting signal</p>\n        <p class=\"chart-empty-state__description\">Connect a stream to populate this tile.</p>\n      </div>\n\n      <div class=\"chart-empty-state\" data-layout=\"loading\" role=\"status\" aria-busy=\"true\">\n        <span class=\"chart-empty-state__skeleton\" aria-hidden=\"true\"></span>\n        <p class=\"chart-empty-state__title\">Loading series</p>\n        <p class=\"chart-empty-state__description\">Fetching the latest board domain.</p>\n      </div>\n    </div>";

@Component({
  selector: "deml-chart-empty-state",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlChartEmptyState implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
