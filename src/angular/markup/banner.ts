/* AUTO-GENERATED from components/banner/banner.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"banner banner--hero\" data-variant=\"hero\">\n      <p class=\"preheader\">DEML</p>\n      <h1 class=\"banner-heading\">Status your customers can trust.</h1>\n      <p class=\"lede\">Publish public status pages, share clear uptime, and manage your account in one place.</p>\n      <div class=\"banner-actions\">\n        <div class=\"button-group\">\n          <a class=\"button button--primary\" href=\"#\">Explore</a>\n          <a class=\"button button--secondary\" href=\"#\">Log in</a>\n        </div>\n      </div>\n    </div>";

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
