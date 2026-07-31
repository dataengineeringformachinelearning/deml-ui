/* AUTO-GENERATED from components/section-template/section-template.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<section class=\"section-template\">\n      <header class=\"section-template__header\">\n        <div>\n          <h3 class=\"section-template__title\">Section template</h3>\n          <p class=\"section-template__description\">Reusable section anatomy.</p>\n        </div>\n        <div class=\"section-template__actions\"><button type=\"button\">Action</button></div>\n      </header>\n      <hr class=\"section-template__divider\" />\n      <div class=\"section-template__body\">Body content.</div>\n    </section>";

@Component({
  selector: "deml-section-template",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlSectionTemplate implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
