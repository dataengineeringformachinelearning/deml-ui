/* AUTO-GENERATED from components/navbar/navbar.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<header class=\"site-navbar\">\n      <div class=\"site-navbar-branding\">\n        <a class=\"site-navbar-icon\" href=\"#\" aria-label=\"DEML home\">DEML</a>\n      </div>\n      <button type=\"button\" class=\"site-navbar-menu-toggle\" aria-label=\"Open menu\" aria-expanded=\"false\">\n        Menu\n      </button>\n      <div class=\"site-navbar-panel\">\n        <div class=\"site-navbar-panel__inner\">\n          <nav class=\"main-navigation\" aria-label=\"Primary\">\n            <ul>\n              <li><a href=\"#\">Explore</a></li>\n              <li><a href=\"#\">Docs</a></li>\n            </ul>\n          </nav>\n          <div class=\"site-navbar-actions\">\n            <div class=\"button-group\" data-layout=\"row\" role=\"group\" aria-label=\"Account actions\">\n              <a class=\"button button--primary button--pill\" href=\"#\">Log in</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>";

@Component({
  selector: "deml-navbar",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlNavbar implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
