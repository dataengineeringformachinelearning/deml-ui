/* AUTO-GENERATED from components/brand/brand.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<a class=\"brand\" href=\"/\" aria-label=\"Product home\">\n      <span class=\"brand__mark\" aria-hidden=\"true\"></span>\n      <span class=\"brand__wordmark\">Product</span>\n    </a>";

@Component({
  selector: "deml-brand",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlBrand implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
