/* AUTO-GENERATED from components/bar-chart/bar-chart.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"bar-chart\" role=\"img\" aria-label=\"Bar chart\"></div>";

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
