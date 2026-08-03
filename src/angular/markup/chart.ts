/* AUTO-GENERATED from components/chart/chart.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<figure class=\"chart-figure\">\n      <div class=\"chart-figure__plot\">\n        <svg\n          class=\"chart\"\n          viewBox=\"0 0 360 150\"\n          preserveAspectRatio=\"xMidYMid meet\"\n          role=\"img\"\n          aria-label=\"Sample line chart\"\n        >\n          <line x1=\"0\" y1=\"130\" x2=\"360\" y2=\"130\" stroke=\"currentColor\" opacity=\"0.25\" />\n          <polyline\n            fill=\"none\"\n            stroke=\"currentColor\"\n            stroke-width=\"2\"\n            points=\"0,110 60,85 120,95 180,50 240,70 300,40 360,30\"\n          />\n        </svg>\n      </div>\n      <figcaption>Chart placeholder (native SVG)</figcaption>\n    </figure>";

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
