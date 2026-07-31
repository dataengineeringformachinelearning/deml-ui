import { Directive, ElementRef, inject } from "@angular/core";
import { DEML_DIALOG } from "./dialog-context";

/**
 * Closes the parent `deml-dialog` when the host is activated.
 * Prefer a native `<button type="button">`.
 *
 * @example
 * ```html
 * <button type="button" demlDialogClose class="button">Cancel</button>
 * ```
 */
@Directive({
  selector: "[demlDialogClose]",
  host: {
    "[attr.type]": "hostType",
    "(click)": "onClick()",
  },
})
export class DemlDialogClose {
  private readonly dialog = inject(DEML_DIALOG);
  private readonly el = inject(ElementRef<HTMLElement>);

  readonly hostType =
    this.el.nativeElement.tagName === "BUTTON" ? "button" : null;

  onClick(): void {
    this.dialog.hide();
  }
}
