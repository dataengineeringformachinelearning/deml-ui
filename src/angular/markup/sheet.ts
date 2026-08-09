/* AUTO-GENERATED from components/sheet/sheet.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"sheet-overlay\" role=\"presentation\">\n      <div\n        class=\"sheet\"\n        role=\"dialog\"\n        aria-modal=\"true\"\n        aria-labelledby=\"sheet-title\"\n        aria-describedby=\"sheet-desc\"\n        tabindex=\"-1\"\n      >\n        <button type=\"button\" class=\"sheet__handle\" aria-label=\"Dismiss\"></button>\n        <header class=\"sheet__header\">\n          <h3 class=\"sheet__title\" id=\"sheet-title\">Confirm action</h3>\n        </header>\n        <div class=\"sheet__body\">\n          <p id=\"sheet-desc\">Bottom sheet on phone; centered panel from 800px.</p>\n        </div>\n        <footer class=\"sheet__footer\">\n          <button type=\"button\" class=\"button button--secondary button--pill\">Cancel</button>\n          <button type=\"button\" class=\"button button--primary button--pill\">Confirm</button>\n        </footer>\n      </div>\n    </div>";

@Component({
  selector: "deml-sheet",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlSheet implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
