/* AUTO-GENERATED from components/math/math.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<math display=\"block\">\n      <mrow>\n        <mi>a</mi>\n        <mo>²</mo>\n        <mo>+</mo>\n        <mi>b</mi>\n        <mo>²</mo>\n        <mo>=</mo>\n        <mi>c</mi>\n        <mo>²</mo>\n      </mrow>\n    </math>";

@Component({
  selector: "deml-math",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlMath implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
