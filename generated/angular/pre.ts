/* AUTO-GENERATED from components/pre/pre.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<pre><code>function hello() {\n  console.log(\"preformatted code\");\n}</code></pre>";

@Component({
  selector: "deml-pre",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlPre implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
