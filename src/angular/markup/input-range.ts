/* AUTO-GENERATED from components/input-range/input-range.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<label for=\"input-range-field\">Range</label>\n    <input id=\"input-range-field\" name=\"range\" type=\"range\" min=\"0\" max=\"100\" value=\"40\">";

@Component({
  selector: "deml-input-range",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlInputRange implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
