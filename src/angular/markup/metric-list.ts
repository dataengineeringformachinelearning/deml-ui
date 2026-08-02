/* AUTO-GENERATED from components/metric-list/metric-list.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<ul class=\"metric-list\"><li class=\"metric-list__item\"><span>Metric</span><strong>12</strong></li></ul>";

@Component({
  selector: "deml-metric-list",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlMetricList implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
