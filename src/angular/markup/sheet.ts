/* AUTO-GENERATED from components/sheet/sheet.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<button type=\"button\" class=\"button\" data-deml-open-sheet>Open sheet</button>\n    <div class=\"sheet\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"sheet-title\" hidden>\n      <header class=\"sheet__header\">\n        <h3 id=\"sheet-title\">Sheet title</h3>\n        <button type=\"button\" class=\"sheet__close\" aria-label=\"Close\" data-deml-close-sheet>×</button>\n      </header>\n      <div class=\"sheet__body\">\n        <p>Slide-over panel content.</p>\n      </div>\n      <footer class=\"sheet__footer\">\n        <button type=\"button\" class=\"button\" data-deml-close-sheet>Cancel</button>\n        <button type=\"button\" class=\"button\" data-variant=\"primary\">Save</button>\n      </footer>\n    </div>";

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
