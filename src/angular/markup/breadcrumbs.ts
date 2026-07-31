/* AUTO-GENERATED from components/breadcrumbs/breadcrumbs.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<nav class=\"breadcrumbs\" aria-label=\"Breadcrumb\">\n      <ol class=\"breadcrumbs__list\">\n        <li><a href=\"#\">Home</a></li>\n        <li><a href=\"#\">Library</a></li>\n        <li aria-current=\"page\">Current page</li>\n      </ol>\n    </nav>";

@Component({
  selector: "deml-breadcrumbs",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlBreadcrumbs implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
