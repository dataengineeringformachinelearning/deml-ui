/* AUTO-GENERATED from components/icon/icon.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<svg class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n      <circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" />\n      <path d=\"M12 8v4l3 2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" />\n    </svg>\n    <span class=\"icon-label\">Icon placeholder</span>";

@Component({
  selector: "deml-icon",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlIcon implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
