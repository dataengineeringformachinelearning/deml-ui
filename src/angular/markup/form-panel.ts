/* AUTO-GENERATED from components/form-panel/form-panel.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<form class=\"form-panel\"><label class=\"field\"><span class=\"field__label\">Email</span><input class=\"input-text\" type=\"email\" /></label><button class=\"button button--primary\" type=\"submit\">Submit</button></form>";

@Component({
  selector: "deml-form-panel",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlFormPanel implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
