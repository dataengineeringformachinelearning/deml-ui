/* AUTO-GENERATED from components/input-email/input-email.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<label for=\"input-email-field\">Email</label>\n    <input id=\"input-email-field\" name=\"email\" type=\"email\" placeholder=\"you@example.com\" autocomplete=\"email\">";

@Component({
  selector: "deml-input-email",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlInputEmail implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
