/* AUTO-GENERATED from components/radio-free/radio-free.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<label><input type=\"radio\" name=\"radio-free\" value=\"free\" checked> Free</label>";

@Component({
  selector: "deml-radio-free",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlRadioFree implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
