/* AUTO-GENERATED from components/chart-empty-state/chart-empty-state.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"chart-empty-state\" role=\"status\">\n      <p class=\"chart-empty-state__title\">No chart data</p>\n      <p class=\"chart-empty-state__description\">Data will appear here once available.</p>\n    </div>";

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
