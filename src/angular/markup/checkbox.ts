/* AUTO-GENERATED from components/checkbox/checkbox.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<label class=\"checkbox\">\n      <input type=\"checkbox\" name=\"checkbox-demo\" />\n      <span class=\"checkbox__label\">Checkbox option</span>\n    </label>";

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
