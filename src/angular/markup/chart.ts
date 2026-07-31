/* AUTO-GENERATED from components/chart/chart.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<figure class=\"chart-figure\">\n      <svg class=\"chart\" viewBox=\"0 0 240 120\" width=\"100%\" height=\"120\" role=\"img\" aria-label=\"Sample line chart\">\n        <line x1=\"0\" y1=\"110\" x2=\"240\" y2=\"110\" stroke=\"currentColor\" opacity=\"0.25\" />\n        <polyline fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" points=\"0,90 40,70 80,75 120,40 160,55 200,30 240,20\" />\n      </svg>\n      <figcaption>Chart placeholder (native SVG)</figcaption>\n    </figure>";

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
