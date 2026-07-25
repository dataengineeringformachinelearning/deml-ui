/* AUTO-GENERATED from components/noscript/noscript.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<noscript>\n      <p>JavaScript is disabled. Some demos (canvas, dialog) need it.</p>\n    </noscript>\n    <p>Visible when scripting is available; <code>&lt;noscript&gt;</code> content shows only when JS is off.</p>";

@Component({
  selector: "deml-noscript",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlNoscript implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
