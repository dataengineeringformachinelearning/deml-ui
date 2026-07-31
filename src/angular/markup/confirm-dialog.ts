/* AUTO-GENERATED from components/confirm-dialog/confirm-dialog.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<button type=\"button\" class=\"button\" data-deml-open-confirm>Delete item</button>\n    <dialog class=\"confirm-dialog\">\n      <form method=\"dialog\">\n        <h3 class=\"confirm-dialog__title\">Confirm action</h3>\n        <p class=\"confirm-dialog__body\">This cannot be undone.</p>\n        <div class=\"confirm-dialog__actions\">\n          <button type=\"submit\" class=\"button\" value=\"cancel\">Cancel</button>\n          <button type=\"submit\" class=\"button\" data-variant=\"primary\" value=\"confirm\">Confirm</button>\n        </div>\n      </form>\n    </dialog>";

@Component({
  selector: "deml-confirm-dialog",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlConfirmDialog implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
