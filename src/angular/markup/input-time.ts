/* AUTO-GENERATED from components/input-time/input-time.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<label for=\"input-time-field\">Time</label>\n    <input id=\"input-time-field\" name=\"time\" type=\"time\">";

@Component({
  selector: "deml-input-time",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlInputTime implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
