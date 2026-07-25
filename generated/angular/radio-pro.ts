/* AUTO-GENERATED from components/radio-pro/radio-pro.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<label><input type=\"radio\" name=\"radio-pro\" value=\"pro\"> Pro</label>";

@Component({
  selector: "deml-radio-pro",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlRadioPro implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
