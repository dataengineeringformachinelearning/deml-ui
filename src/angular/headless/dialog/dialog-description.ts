import { Directive, OnDestroy, inject } from "@angular/core";
import { demlId } from "../core/id";
import { DEML_DIALOG } from "./dialog-context";

/**
 * Marks projected content as the dialog description (`aria-describedby`).
 *
 * @example
 * ```html
 * <p demlDialogDescription class="dialog__body">This cannot be undone.</p>
 * ```
 */
@Directive({
  selector: "[demlDialogDescription]",
  host: {
    "[id]": "id",
  },
})
export class DemlDialogDescription implements OnDestroy {
  private readonly dialog = inject(DEML_DIALOG);
  readonly id = demlId("deml-dialog-description");

  constructor() {
    this.dialog.registerDescription(this.id);
  }

  ngOnDestroy(): void {
    this.dialog.registerDescription(null);
  }
}
