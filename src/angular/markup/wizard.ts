/* AUTO-GENERATED from components/wizard/wizard.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"wizard\" role=\"dialog\" aria-labelledby=\"wizard-title\">\n      <header class=\"wizard__header\">\n        <h3 id=\"wizard-title\">Setup wizard</h3>\n        <ol class=\"wizard__steps\">\n          <li aria-current=\"step\">Account</li>\n          <li>Preferences</li>\n          <li>Confirm</li>\n        </ol>\n      </header>\n      <div class=\"wizard__body\">\n        <p>Step content goes here.</p>\n      </div>\n      <footer class=\"wizard__footer\">\n        <button type=\"button\">Back</button>\n        <button type=\"button\">Next</button>\n      </footer>\n    </div>";

@Component({
  selector: "deml-wizard",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlWizard implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
