/* AUTO-GENERATED from components/button-reset/button-reset.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<button type=\"reset\">Reset</button>";

@Component({
  selector: "deml-button-reset",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlButtonReset implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
