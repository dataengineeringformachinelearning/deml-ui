/* AUTO-GENERATED from components/bar-chart/bar-chart.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"chart-board\" data-chart-board data-chart-ymax=\"auto\">\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"bar-a\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"bar-a\">Genre</h3>\n          <p class=\"chart-card-meta\">Shared Y · 0–max</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"bar-chart-frame area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Genre share\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"bar\"\n              data-series=\"[82,64,48,36]\"\n              data-categories='[\"Synth\",\"Jazz\",\"Folk\",\"Ambient\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"bar-b\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"bar-b\">Region</h3>\n          <p class=\"chart-card-meta\">Same scale</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"bar-chart-frame area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Region share\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"bar\"\n              data-series=\"[70,52,40,28]\"\n              data-categories='[\"NA\",\"EU\",\"APAC\",\"LATAM\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"bar-c\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"bar-c\">Device</h3>\n          <p class=\"chart-card-meta\">Same scale</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"bar-chart-frame area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Device share\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"bar\"\n              data-series=\"[90,44,30,18]\"\n              data-categories='[\"Mobile\",\"Desktop\",\"TV\",\"Other\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n    </div>";

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
