/* AUTO-GENERATED from components/page-header/page-header.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<header class=\"page-header\">\n      <div class=\"page-header__text\">\n        <h1 class=\"page-header__title\">Page title</h1>\n        <p class=\"page-header__subtitle\">Short page description.</p>\n      </div>\n      <div class=\"page-header__actions\">\n        <button type=\"button\">Secondary</button>\n        <button type=\"button\">Primary</button>\n      </div>\n    </header>";

@Component({
  selector: "deml-page-header",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlPageHeader implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
