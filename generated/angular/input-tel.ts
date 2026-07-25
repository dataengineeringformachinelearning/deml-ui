/* AUTO-GENERATED from components/input-tel/input-tel.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<label for=\"input-tel-field\">Phone</label>\n    <input id=\"input-tel-field\" name=\"tel\" type=\"tel\" placeholder=\"+1 555 0100\">";

@Component({
  selector: "deml-input-tel",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlInputTel implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
