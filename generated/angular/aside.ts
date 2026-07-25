/* AUTO-GENERATED from components/aside/aside.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<aside>\n      <h3>Aside</h3>\n      <p>Related notes or callouts belong in <code>&lt;aside&gt;</code>.</p>\n    </aside>";

@Component({
  selector: "deml-aside",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlAside implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
