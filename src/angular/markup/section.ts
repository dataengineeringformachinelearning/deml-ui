/* AUTO-GENERATED from components/section/section.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<section class=\"section\">\n      <header class=\"section__header\">\n        <h3 class=\"section__title\">Section title</h3>\n        <p class=\"section__description\">Section supporting text.</p>\n      </header>\n      <div class=\"section__body\">\n        <p>Section body.</p>\n      </div>\n    </section>";

@Component({
  selector: "deml-section",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlSection implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
