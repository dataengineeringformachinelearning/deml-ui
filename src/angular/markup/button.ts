/* AUTO-GENERATED from components/button/button.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<button type=\"button\" class=\"button\" data-variant=\"primary\">Primary</button>\n    <button type=\"button\" class=\"button\">Default</button>\n    <button type=\"button\" class=\"button\" data-variant=\"ghost\">Ghost</button>\n    <button type=\"button\" class=\"button\" disabled>Disabled</button>";

@Component({
  selector: "deml-button",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlButton implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
