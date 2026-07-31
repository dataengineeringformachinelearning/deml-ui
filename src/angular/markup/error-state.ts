/* AUTO-GENERATED from components/error-state/error-state.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"error-state\" role=\"alert\">\n      <p class=\"error-state__title\">Something went wrong</p>\n      <p class=\"error-state__description\">We could not load this resource. Try again.</p>\n      <div class=\"error-state__actions\">\n        <button type=\"button\">Retry</button>\n      </div>\n    </div>";

@Component({
  selector: "deml-error-state",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlErrorState implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
