import { Directive, OnDestroy, inject } from "@angular/core";
import { demlId } from "../core/id";
import { DEML_DIALOG } from "./dialog-context";

/**
 * Marks projected content as the dialog title (`aria-labelledby`).
 *
 * @example
 * ```html
 * <h2 demlDialogTitle class="dialog__title">Confirm</h2>
 * ```
 */
@Directive({
  selector: "[demlDialogTitle]",
  host: {
    "[id]": "id",
  },
})
export class DemlDialogTitle implements OnDestroy {
  private readonly dialog = inject(DEML_DIALOG);
  readonly id = demlId("deml-dialog-title");

  constructor() {
    this.dialog.registerTitle(this.id);
  }

  ngOnDestroy(): void {
    this.dialog.registerTitle(null);
  }
}
