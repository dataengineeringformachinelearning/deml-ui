/* AUTO-GENERATED from components/svg/svg.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" role=\"img\" aria-label=\"Blue rectangle\">\n      <rect x=\"10\" y=\"10\" width=\"100\" height=\"60\" fill=\"#5C2A5A\" rx=\"6\"></rect>\n      <text x=\"60\" y=\"46\" text-anchor=\"middle\" fill=\"white\" font-size=\"14\" font-family=\"sans-serif\">SVG</text>\n    </svg>";

@Component({
  selector: "deml-svg",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlSvg implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
