/* AUTO-GENERATED from components/switch/switch.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<label class=\"switch\">\n      <span class=\"switch__track\">\n        <input type=\"checkbox\" role=\"switch\" name=\"switch-demo\" aria-checked=\"false\" />\n        <span class=\"switch__thumb\" aria-hidden=\"true\"></span>\n      </span>\n      <span class=\"switch__content\">\n        <span class=\"switch__label\">Enable notifications</span>\n        <span class=\"switch__description\">Receive product updates by email.</span>\n      </span>\n    </label>";

@Component({
  selector: "deml-switch",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlSwitch implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
