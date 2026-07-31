import { Directive, inject } from "@angular/core";
import { DEML_DIALOG } from "./dialog-context";

/**
 * Marks the dialog’s visual panel / surface.
 *
 * Completely unstyled — put your modal card classes here.
 * Keeps backdrop clicks (on the `<dialog>`) distinct from panel interactions.
 *
 * @example
 * ```html
 * <div demlDialogPanel class="modal">…</div>
 * ```
 */
@Directive({
  selector: "[demlDialogPanel]",
  host: {
    "[attr.data-state]": "dialog.isOpen() ? 'open' : 'closed'",
    // Prevent accidental dialog-as-backdrop handling if consumers stopPropagation oddly.
    "(click)": "$event.stopPropagation()",
  },
})
export class DemlDialogPanel {
  readonly dialog = inject(DEML_DIALOG);
}
