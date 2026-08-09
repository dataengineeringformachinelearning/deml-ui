/* AUTO-GENERATED from components/text-field/text-field.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<label class=\"text-field\">\n      <span class=\"text-field__label\">Name</span>\n      <input class=\"text-field__control\" type=\"text\" name=\"name\" value=\"Ada Lovelace\" autocomplete=\"name\" />\n      <span class=\"text-field__hint\">Shown on your public profile.</span>\n    </label>\n    <label class=\"text-field\">\n      <span class=\"text-field__label\">Email</span>\n      <input class=\"text-field__control\" type=\"email\" name=\"email\" placeholder=\"you@example.com\" />\n    </label>\n    <label class=\"text-field\" data-invalid=\"true\">\n      <span class=\"text-field__label\">Slug</span>\n      <input\n        class=\"text-field__control\"\n        type=\"text\"\n        name=\"slug\"\n        id=\"demo-slug\"\n        value=\"Bad Slug\"\n        aria-invalid=\"true\"\n        aria-describedby=\"demo-slug-error demo-slug-hint\"\n      />\n      <span class=\"text-field__hint\" id=\"demo-slug-hint\">Lowercase letters and hyphens.</span>\n      <span class=\"text-field__error\" id=\"demo-slug-error\" role=\"alert\">Use lowercase letters and hyphens.</span>\n    </label>\n    <label class=\"text-field\">\n      <span class=\"text-field__label\">Locked</span>\n      <input class=\"text-field__control\" type=\"text\" value=\"Read only\" disabled />\n    </label>";

@Component({
  selector: "deml-text-field",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlTextField implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
