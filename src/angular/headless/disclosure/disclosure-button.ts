import { Directive, ElementRef, inject } from "@angular/core";
import { isActivationKey } from "../core/keyboard";
import { DEML_DISCLOSURE } from "./disclosure-context";

/**
 * Disclosure trigger. Prefer `<button type="button">`.
 *
 * @example
 * ```html
 * <button type="button" demlDisclosureButton class="disclosure__trigger">More</button>
 * ```
 */
@Directive({
  selector: "[demlDisclosureButton]",
  host: {
    "[id]": "disclosure.buttonId",
    "[attr.type]": "hostType",
    "[attr.aria-expanded]": "disclosure.isOpen()",
    "[attr.aria-controls]": "disclosure.panelId",
    "[attr.disabled]": "disclosure.disabled() ? true : null",
    "[attr.data-state]": "disclosure.isOpen() ? 'open' : 'closed'",
    "[attr.data-disabled]": "disclosure.disabled() ? '' : null",
    "(click)": "onClick($event)",
    "(keydown)": "onKeydown($event)",
  },
})
export class DemlDisclosureButton {
  readonly disclosure = inject(DEML_DISCLOSURE);
  private readonly el = inject(ElementRef<HTMLElement>);

  readonly hostType =
    this.el.nativeElement.tagName === "BUTTON" ? "button" : null;

  onClick(event: Event): void {
    event.preventDefault();
    this.disclosure.toggle();
  }

  onKeydown(event: KeyboardEvent): void {
    if (this.disclosure.disabled()) return;
    if (isActivationKey(event)) {
      event.preventDefault();
      this.disclosure.toggle();
      return;
    }
    if (
      event.key === "Escape" &&
      this.disclosure.closeOnEscape() &&
      this.disclosure.isOpen()
    ) {
      event.preventDefault();
      this.disclosure.setOpen(false);
    }
  }
}
