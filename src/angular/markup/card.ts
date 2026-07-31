/* AUTO-GENERATED from components/card/card.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<article class=\"card\">\n      <header class=\"card__header\">\n        <h3 class=\"card__title\">Card title</h3>\n        <p class=\"card__description\">Optional supporting text.</p>\n      </header>\n      <div class=\"card__body\">\n        <p>Card body content.</p>\n      </div>\n      <footer class=\"card__footer\">\n        <button type=\"button\" class=\"button\">Action</button>\n      </footer>\n    </article>";

@Component({
  selector: "deml-card",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlCard implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
