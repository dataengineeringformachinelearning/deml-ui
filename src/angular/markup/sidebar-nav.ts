/* AUTO-GENERATED from components/sidebar-nav/sidebar-nav.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<nav class=\"sidebar-nav\" aria-label=\"Sidebar\">\n      <p class=\"sidebar-nav__header\">Workspace</p>\n      <ul class=\"sidebar-nav__list\">\n        <li><a href=\"#\" aria-current=\"page\">Overview</a></li>\n        <li>\n          <button type=\"button\" aria-expanded=\"true\">Projects</button>\n          <ul>\n            <li><a href=\"#\">Alpha</a></li>\n            <li><a href=\"#\">Beta</a></li>\n          </ul>\n        </li>\n        <li><a href=\"#\">Members</a></li>\n      </ul>\n    </nav>";

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
