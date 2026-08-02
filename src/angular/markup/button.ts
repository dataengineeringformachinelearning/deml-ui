/* AUTO-GENERATED from components/button/button.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<button type=\"button\" class=\"button button--primary\">Primary</button>\n    <button type=\"button\" class=\"button button--secondary\">Secondary</button>\n    <button type=\"button\" class=\"button button--accent\">Accent</button>\n    <button type=\"button\" class=\"button button--primary button--pill\">Pill</button>\n    <button type=\"button\" class=\"button button--primary\" disabled>Disabled</button>";

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
