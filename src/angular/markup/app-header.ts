/* AUTO-GENERATED from components/app-header/app-header.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<header class=\"app-header\">\n      <a class=\"app-header__brand\" href=\"#\">Product</a>\n      <nav class=\"app-header__nav\" aria-label=\"App\">\n        <a href=\"#\">Home</a>\n        <a href=\"#\">Docs</a>\n      </nav>\n      <div class=\"app-header__actions\">\n        <button type=\"button\">Account</button>\n      </div>\n    </header>";

@Component({
  selector: "deml-app-header",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlAppHeader implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
