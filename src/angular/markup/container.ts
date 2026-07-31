/* AUTO-GENERATED from components/container/container.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"container\">\n      <header class=\"container__header\">\n        <h3 class=\"container__title\">Container</h3>\n        <p class=\"container__description\">Content anatomy wrapper.</p>\n      </header>\n      <div class=\"container__body\">\n        <p>Body content.</p>\n      </div>\n    </div>";

@Component({
  selector: "deml-container",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlContainer implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
