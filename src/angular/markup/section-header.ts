/* AUTO-GENERATED from components/section-header/section-header.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<header class=\"section-header\"><p class=\"type-eyebrow\">Eyebrow</p><h2 class=\"type-display\">Section</h2><p class=\"type-intro\">Supporting copy.</p></header>";

@Component({
  selector: "deml-section-header",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlSectionHeader implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
