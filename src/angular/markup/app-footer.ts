/* AUTO-GENERATED from components/app-footer/app-footer.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<footer class=\"app-footer\">\n      <p class=\"app-footer__copy\">© Product</p>\n      <nav class=\"app-footer__nav\" aria-label=\"Footer\">\n        <a href=\"#\">Privacy</a>\n        <a href=\"#\">Terms</a>\n      </nav>\n    </footer>";

@Component({
  selector: "deml-app-footer",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlAppFooter implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
