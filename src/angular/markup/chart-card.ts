/* AUTO-GENERATED from components/chart-card/chart-card.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<article class=\"chart-card\"><header class=\"chart-card__header\"><h3>Traffic</h3></header><div class=\"chart-card__body\">Chart</div></article>";

@Component({
  selector: "deml-chart-card",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlChartCard implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
