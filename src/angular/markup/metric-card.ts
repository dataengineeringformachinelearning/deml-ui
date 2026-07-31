/* AUTO-GENERATED from components/metric-card/metric-card.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<article class=\"metric-card\" role=\"group\" aria-label=\"Active users\">\n      <p class=\"metric-card__label\">Active users</p>\n      <p class=\"metric-card__value\">1,284</p>\n      <p class=\"metric-card__trend\">+12% vs last week</p>\n    </article>";

@Component({
  selector: "deml-metric-card",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlMetricCard implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
