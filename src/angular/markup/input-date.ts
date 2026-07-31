/* AUTO-GENERATED from components/input-date/input-date.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<label for=\"input-date-field\">Date</label>\n    <input id=\"input-date-field\" name=\"date\" type=\"date\">";

@Component({
  selector: "deml-input-date",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlInputDate implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
