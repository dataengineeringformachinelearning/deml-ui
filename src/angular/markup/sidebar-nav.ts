/* AUTO-GENERATED from components/sidebar-nav/sidebar-nav.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<nav class=\"sidebar-nav\" aria-label=\"Sidebar\">\n      <div class=\"sidebar-nav__header\">\n        <p class=\"sidebar-nav__title\">Table of contents</p>\n      </div>\n      <div class=\"sidebar-nav__group\">\n        <h3 class=\"sidebar-nav__group-title\">Foundations</h3>\n        <ul class=\"sidebar-nav__list\">\n          <li>\n            <a class=\"sidebar-nav__link sidebar-nav__link--numbered\" href=\"#\" aria-current=\"page\">\n              <span class=\"sidebar-nav__num\">1</span>\n              <span class=\"sidebar-nav__label\">Fresh install</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"sidebar-nav__link sidebar-nav__link--numbered\" href=\"#\">\n              <span class=\"sidebar-nav__num\">2</span>\n              <span class=\"sidebar-nav__label\">Clean codebase</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </nav>";

@Component({
  selector: "deml-sidebar-nav",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlSidebarNav implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
