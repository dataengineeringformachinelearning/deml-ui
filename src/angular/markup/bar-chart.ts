/* AUTO-GENERATED from components/bar-chart/bar-chart.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<ul class=\"bar-chart\" role=\"list\" aria-label=\"Bar chart\">\n      <li class=\"bar-chart-row\">\n        <div class=\"bar-chart-meta\">\n          <span class=\"bar-chart-label\">Alpha</span>\n          <span class=\"bar-chart-value\">80%</span>\n        </div>\n        <div class=\"bar-chart-track\" aria-hidden=\"true\">\n          <div class=\"bar-chart-fill\" style=\"width: 80%\"></div>\n        </div>\n      </li>\n      <li class=\"bar-chart-row\">\n        <div class=\"bar-chart-meta\">\n          <span class=\"bar-chart-label\">Beta</span>\n          <span class=\"bar-chart-value\">55%</span>\n        </div>\n        <div class=\"bar-chart-track\" aria-hidden=\"true\">\n          <div class=\"bar-chart-fill\" style=\"width: 55%\"></div>\n        </div>\n      </li>\n      <li class=\"bar-chart-row\">\n        <div class=\"bar-chart-meta\">\n          <span class=\"bar-chart-label\">Gamma</span>\n          <span class=\"bar-chart-value\">35%</span>\n        </div>\n        <div class=\"bar-chart-track\" aria-hidden=\"true\">\n          <div class=\"bar-chart-fill\" style=\"width: 35%\"></div>\n        </div>\n      </li>\n    </ul>";

@Component({
  selector: "deml-bar-chart",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlBarChart implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
