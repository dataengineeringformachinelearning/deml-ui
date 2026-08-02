/* AUTO-GENERATED from components/metric-card/metric-card.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<article class=\"stat-card metric-card\">\n      <p class=\"stat-card__label metric-card__label\">Sessions</p>\n      <p class=\"stat-card__value metric-card__value\">1.2k</p>\n      <p class=\"stat-card__delta metric-card__trend\">+4.2%</p>\n    </article>";

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
