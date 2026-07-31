/* AUTO-GENERATED from components/field/field.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"field\" role=\"group\" aria-labelledby=\"field-label\">\n      <label class=\"field__label-wrap\" for=\"field-input\">\n        <span class=\"field__label\" id=\"field-label\">Field label <span class=\"field__required\" aria-hidden=\"true\">*</span></span>\n        <input id=\"field-input\" class=\"field__control\" type=\"text\" name=\"field\" required aria-describedby=\"field-desc\" />\n      </label>\n      <p class=\"field__description\" id=\"field-desc\">Helper text for the control.</p>\n    </div>";

@Component({
  selector: "deml-field",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlField implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
