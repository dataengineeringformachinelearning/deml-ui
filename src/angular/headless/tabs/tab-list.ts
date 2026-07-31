import { Directive, inject, input } from "@angular/core";
import { DEML_TABS } from "./tabs-context";

/**
 * Tablist container — sets `role="tablist"` and wires keyboard navigation.
 *
 * @example
 * ```html
 * <div demlTabList aria-label="Settings" class="tabs__list">
 *   <button type="button" demlTab value="a">A</button>
 * </div>
 * ```
 */
@Directive({
  selector: "[demlTabList]",
  host: {
    role: "tablist",
    "[attr.aria-label]": "ariaLabel() ?? tabs.ariaLabel()",
    "[attr.aria-orientation]": "tabs.orientation() === 'both' ? 'horizontal' : tabs.orientation()",
    "(keydown)": "tabs.onTablistKeydown($event)",
  },
})
export class DemlTabList {
  readonly tabs = inject(DEML_TABS);

  /** Optional accessible name for this tablist (overrides root `ariaLabel`). */
  readonly ariaLabel = input<string | null>(null);
}
