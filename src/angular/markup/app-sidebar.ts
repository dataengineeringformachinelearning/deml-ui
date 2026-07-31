/* AUTO-GENERATED from components/app-sidebar/app-sidebar.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<aside class=\"app-sidebar\" aria-label=\"Dashboard\">\n      <p class=\"app-sidebar__brand\">Product</p>\n      <nav class=\"app-sidebar__nav\">\n        <a href=\"#\" aria-current=\"page\">Dashboard</a>\n        <a href=\"#\">Pipelines</a>\n        <a href=\"#\">Settings</a>\n      </nav>\n    </aside>";

@Component({
  selector: "deml-app-sidebar",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlAppSidebar implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
