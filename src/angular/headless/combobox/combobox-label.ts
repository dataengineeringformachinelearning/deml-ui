import { Directive, OnDestroy, inject } from "@angular/core";
import { DEML_COMBOBOX } from "./combobox-context";

/**
 * Optional label for the combobox input (`aria-labelledby` wiring).
 *
 * @example
 * ```html
 * <label demlComboboxLabel class="combo__label">Fruit</label>
 * ```
 */
@Directive({
  selector: "[demlComboboxLabel]",
  host: {
    "[id]": "combobox.labelId",
    "[attr.for]": "combobox.inputId",
  },
})
export class DemlComboboxLabel implements OnDestroy {
  readonly combobox = inject(DEML_COMBOBOX);

  constructor() {
    this.combobox.registerLabel(true);
  }

  ngOnDestroy(): void {
    this.combobox.registerLabel(false);
  }
}
