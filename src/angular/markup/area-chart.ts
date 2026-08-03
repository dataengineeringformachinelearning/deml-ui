/* AUTO-GENERATED from components/area-chart/area-chart.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"area-chart-frame\" role=\"img\" aria-label=\"Area chart\">\n      <svg\n        class=\"area-chart\"\n        viewBox=\"0 0 360 150\"\n        preserveAspectRatio=\"xMidYMid meet\"\n        aria-hidden=\"true\"\n        focusable=\"false\"\n      >\n        <line class=\"area-chart-baseline\" x1=\"32\" y1=\"120\" x2=\"348\" y2=\"120\" />\n        <polyline\n          class=\"area-chart-line\"\n          fill=\"none\"\n          points=\"32,110 80,90 140,95 200,50 260,70 320,40\"\n        />\n      </svg>\n    </div>";

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
