/* AUTO-GENERATED from components/page-template/page-template.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"page-template\">\n      <header class=\"page-template__header\">\n        <h1>Page template</h1>\n        <div class=\"page-template__actions\"><button type=\"button\">Action</button></div>\n      </header>\n      <div class=\"page-template__content\">\n        <p>Route content region.</p>\n      </div>\n      <footer class=\"page-template__footer\">Footer slot</footer>\n    </div>";

@Component({
  selector: "deml-page-template",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlPageTemplate implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
