/* AUTO-GENERATED from components/checkbox/checkbox.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<label class=\"checkbox-field\">\n      <input class=\"checkbox-field__input\" type=\"checkbox\" name=\"checkbox-demo\" />\n      <span class=\"checkbox-field__box\" aria-hidden=\"true\"></span>\n      <span class=\"checkbox-field__label\">Checkbox option</span>\n    </label>\n    <label class=\"checkbox-field\">\n      <input class=\"checkbox-field__input\" type=\"checkbox\" name=\"checkbox-demo-disabled\" disabled />\n      <span class=\"checkbox-field__box\" aria-hidden=\"true\"></span>\n      <span class=\"checkbox-field__label\">Disabled option</span>\n    </label>";

@Component({
  selector: "deml-checkbox",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlCheckbox implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
