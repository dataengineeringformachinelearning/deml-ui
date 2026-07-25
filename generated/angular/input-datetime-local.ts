/* AUTO-GENERATED from components/input-datetime-local/input-datetime-local.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<label for=\"input-datetime-local-field\">Datetime local</label>\n    <input id=\"input-datetime-local-field\" name=\"datetime-local\" type=\"datetime-local\">";

@Component({
  selector: "deml-input-datetime-local",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlInputDatetimeLocal implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
