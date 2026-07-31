import { Directive, inject } from "@angular/core";
import { DEML_DISCLOSURE } from "./disclosure-context";

/**
 * Disclosure panel — shown/hidden from parent `isOpen`.
 *
 * @example
 * ```html
 * <div demlDisclosurePanel class="disclosure__panel">…</div>
 * ```
 */
@Directive({
  selector: "[demlDisclosurePanel]",
  host: {
    "[id]": "disclosure.panelId",
    role: "region",
    "[attr.aria-labelledby]": "disclosure.buttonId",
    "[hidden]": "!disclosure.isOpen()",
    "[attr.data-state]": "disclosure.isOpen() ? 'open' : 'closed'",
  },
})
export class DemlDisclosurePanel {
  readonly disclosure = inject(DEML_DISCLOSURE);
}
