/* AUTO-GENERATED from components/input-password/input-password.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<label for=\"input-password-field\">Password</label>\n    <input id=\"input-password-field\" name=\"password\" type=\"password\" placeholder=\"Password\" autocomplete=\"new-password\">";

@Component({
  selector: "deml-input-password",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlInputPassword implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
