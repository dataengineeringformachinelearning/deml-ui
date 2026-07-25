/* AUTO-GENERATED from components/button/button.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<button type=\"button\">Button</button>";

@Component({
  selector: "deml-button",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlButton implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
