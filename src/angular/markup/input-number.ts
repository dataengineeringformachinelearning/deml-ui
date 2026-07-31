/* AUTO-GENERATED from components/input-number/input-number.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<label for=\"input-number-field\">Number</label>\n    <input id=\"input-number-field\" name=\"number\" type=\"number\" min=\"0\" max=\"100\" step=\"1\" value=\"10\">";

@Component({
  selector: "deml-input-number",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlInputNumber implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
