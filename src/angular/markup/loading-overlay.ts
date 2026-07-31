/* AUTO-GENERATED from components/loading-overlay/loading-overlay.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"loading-overlay\" role=\"status\" aria-busy=\"true\" aria-label=\"Loading\">\n      <span class=\"loading-overlay__message\">Loading…</span>\n    </div>";

@Component({
  selector: "deml-loading-overlay",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlLoadingOverlay implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
