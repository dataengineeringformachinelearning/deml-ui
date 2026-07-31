/* AUTO-GENERATED from components/form-section/form-section.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<section class=\"form-section\">\n      <header class=\"form-section__header\">\n        <h3 class=\"form-section__title\">Account</h3>\n        <p class=\"form-section__description\">Basic profile settings.</p>\n      </header>\n      <div class=\"form-section__body\">\n        <label>Name <input type=\"text\" name=\"name\" /></label>\n        <label>Email <input type=\"email\" name=\"email\" /></label>\n      </div>\n    </section>";

@Component({
  selector: "deml-form-section",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlFormSection implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
