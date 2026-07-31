/* AUTO-GENERATED from components/navigation-menu/navigation-menu.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<nav class=\"navigation-menu\" aria-label=\"Primary\">\n      <ul class=\"navigation-menu__list\">\n        <li><a class=\"navigation-menu__link\" href=\"#\" aria-current=\"page\">Dashboard</a></li>\n        <li><a class=\"navigation-menu__link\" href=\"#\">Analytics</a></li>\n        <li><a class=\"navigation-menu__link\" href=\"#\">Settings</a></li>\n      </ul>\n    </nav>";

@Component({
  selector: "deml-navigation-menu",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlNavigationMenu implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
