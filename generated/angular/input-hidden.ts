/* AUTO-GENERATED from components/input-hidden/input-hidden.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<input type=\"hidden\" name=\"csrf\" value=\"demo-token\">\n    <p>Hidden input present in the DOM (<code>type=\"hidden\"</code>).</p>";

@Component({
  selector: "deml-input-hidden",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlInputHidden implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
