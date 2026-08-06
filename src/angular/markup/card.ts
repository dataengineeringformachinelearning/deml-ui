/* AUTO-GENERATED from components/card/card.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<article class=\"card\" data-visual=\"olive\">\n      <div class=\"card-copy\">\n        <p class=\"card-meta\">Feature</p>\n        <h3 class=\"card-heading\">Card title</h3>\n        <p class=\"card-subtext\">Optional supporting text for the elevated cream module.</p>\n        <div class=\"card-actions\">\n          <div class=\"button-group\" data-layout=\"row\" role=\"group\">\n            <button type=\"button\" class=\"button button--primary button--pill\">Action</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-media has-visual\" aria-hidden=\"true\"></div>\n    </article>";

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
