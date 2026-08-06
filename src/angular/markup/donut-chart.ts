/* AUTO-GENERATED from components/donut-chart/donut-chart.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"chart-board chart-board--donut\">\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"donut-a\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"donut-a\">Severity</h3>\n          <p class=\"chart-card-meta\">Threat mix</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"donut-chart-frame\" role=\"img\" aria-label=\"Severity distribution\">\n            <div\n              class=\"donut-chart\"\n              data-chart=\"donut\"\n              data-center=\"128\"\n              data-segments='[{\"label\":\"Critical\",\"value\":18,\"tone\":\"red\"},{\"label\":\"High\",\"value\":34,\"tone\":\"primary\"},{\"label\":\"Medium\",\"value\":46,\"tone\":\"gold\"},{\"label\":\"Low\",\"value\":30,\"tone\":\"muted\"}]'\n            ></div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"donut-b\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"donut-b\">Sources</h3>\n          <p class=\"chart-card-meta\">Ingest share</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"donut-chart-frame\" role=\"img\" aria-label=\"Source distribution\">\n            <div\n              class=\"donut-chart\"\n              data-chart=\"donut\"\n              data-center=\"96\"\n              data-segments='[{\"label\":\"API\",\"value\":42,\"tone\":\"primary\"},{\"label\":\"Agent\",\"value\":28,\"tone\":\"gold\"},{\"label\":\"Batch\",\"value\":16,\"tone\":\"muted\"},{\"label\":\"Other\",\"value\":10,\"tone\":\"red\"}]'\n            ></div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"donut-c\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"donut-c\">Outcomes</h3>\n          <p class=\"chart-card-meta\">Playbooks</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"donut-chart-frame\" role=\"img\" aria-label=\"Outcome distribution\">\n            <div\n              class=\"donut-chart\"\n              data-chart=\"donut\"\n              data-center=\"64\"\n              data-segments='[{\"label\":\"Cleared\",\"value\":38,\"tone\":\"gold\"},{\"label\":\"Open\",\"value\":16,\"tone\":\"primary\"},{\"label\":\"Blocked\",\"value\":10,\"tone\":\"red\"}]'\n            ></div>\n          </div>\n        </div>\n      </article>\n    </div>";

@Component({
  selector: "deml-donut-chart",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlDonutChart implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
