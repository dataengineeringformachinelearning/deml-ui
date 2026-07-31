import { Directive, ElementRef, inject } from "@angular/core";
import { DEML_COMBOBOX } from "./combobox-context";

/**
 * Optional button that toggles the listbox open/closed.
 * Prefer `<button type="button">`.
 *
 * @example
 * ```html
 * <button type="button" demlComboboxButton aria-label="Show options">▾</button>
 * ```
 */
@Directive({
  selector: "[demlComboboxButton]",
  host: {
    "[attr.type]": "hostType",
    "[attr.tabindex]": "combobox.disabled() ? -1 : 0",
    "[attr.aria-haspopup]": "'listbox'",
    "[attr.aria-expanded]": "combobox.isOpen()",
    "[attr.aria-controls]": "combobox.listboxId",
    "[attr.disabled]": "combobox.disabled() ? true : null",
    "[attr.data-state]": "combobox.isOpen() ? 'open' : 'closed'",
    "(click)": "onClick($event)",
    "(keydown)": "onKeydown($event)",
  },
})
export class DemlComboboxButton {
  readonly combobox = inject(DEML_COMBOBOX);
  private readonly el = inject(ElementRef<HTMLElement>);

  readonly hostType =
    this.el.nativeElement.tagName === "BUTTON" ? "button" : null;

  onClick(event: Event): void {
    event.preventDefault();
    if (this.combobox.disabled()) return;
    this.combobox.toggle();
    this.combobox.focusInput();
  }

  onKeydown(event: KeyboardEvent): void {
    if (this.combobox.disabled()) return;
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.combobox.show();
      this.combobox.focusInput();
    }
    if (event.key === "Escape" && this.combobox.isOpen()) {
      event.preventDefault();
      this.combobox.hide();
      this.combobox.focusInput();
    }
  }
}
