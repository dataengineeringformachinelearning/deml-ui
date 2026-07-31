import { Directive, inject } from "@angular/core";
import { DEML_COMBOBOX } from "./combobox-context";

/**
 * Listbox container for combobox options.
 *
 * Hidden when closed. Completely unstyled — apply your own list styles.
 *
 * @example
 * ```html
 * <ul demlComboboxOptions class="combo__list">…</ul>
 * ```
 */
@Directive({
  selector: "[demlComboboxOptions]",
  host: {
    role: "listbox",
    "[id]": "combobox.listboxId",
    "[attr.aria-labelledby]": "combobox.hasLabel() ? combobox.labelId : null",
    "[hidden]": "!combobox.isOpen()",
    "[attr.data-state]": "combobox.isOpen() ? 'open' : 'closed'",
  },
})
export class DemlComboboxOptions {
  readonly combobox = inject(DEML_COMBOBOX);
}
