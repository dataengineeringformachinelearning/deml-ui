/* AUTO-GENERATED from components/banner/banner.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"banner banner--hero\" data-variant=\"hero\">\n      <p class=\"preheader\">DEML</p>\n      <h1 class=\"banner-heading\">Control plane for ML data.</h1>\n      <p class=\"lede\">Identity, status, analytics, and learning in one warm-ash surface.</p>\n      <div class=\"banner-actions\">\n        <div class=\"button-group\">\n          <a class=\"button button--primary\" href=\"#\">Dashboard</a>\n          <a class=\"button button--secondary\" href=\"#\">Explore</a>\n        </div>\n      </div>\n    </div>";

@Component({
  selector: "deml-banner",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlBanner implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
