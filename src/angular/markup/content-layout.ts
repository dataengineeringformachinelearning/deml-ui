/* AUTO-GENERATED from components/content-layout/content-layout.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"content-layout\">\n      <nav class=\"content-layout__breadcrumbs\" aria-label=\"Breadcrumb\">Home / Page</nav>\n      <header class=\"content-layout__header\">\n        <h1>Content layout</h1>\n      </header>\n      <div class=\"content-layout__body\">Body region</div>\n    </div>";

@Component({
  selector: "deml-content-layout",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlContentLayout implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
