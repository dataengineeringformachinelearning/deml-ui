import { Directive, computed, inject, input } from "@angular/core";
import { DEML_TABS } from "./tabs-context";

/**
 * Headless tab panel directive.
 *
 * Hidden when its `value` does not match the selected tab. Linked to the
 * matching `demlTab` via shared value-based ids.
 *
 * Accessibility:
 * - `role="tabpanel"`
 * - `aria-labelledby` → `deml-tab-<value>`
 * - `hidden` when inactive; `tabindex="0"` when active (panel can receive focus)
 *
 * @example
 * ```html
 * <section demlTabPanel value="overview" class="tabs__panel">…</section>
 * ```
 */
@Directive({
  selector: "[demlTabPanel]",
  host: {
    role: "tabpanel",
    "[id]": "panelId()",
    "[attr.aria-labelledby]": "labelledBy()",
    "[hidden]": "!active()",
    "[attr.tabindex]": "active() ? 0 : null",
    "[attr.data-state]": "active() ? 'active' : 'inactive'",
  },
})
export class DemlTabPanel {
  private readonly tabs = inject(DEML_TABS);

  /** Value of the tab that owns this panel (required). */
  readonly value = input.required<string>();

  /** Optional stable id; defaults to `deml-tab-panel-<value>`. */
  readonly id = input<string | null>(null);

  readonly panelId = computed(
    () => this.id() ?? `deml-tab-panel-${this.value()}`
  );

  readonly active = computed(() => this.tabs.selected() === this.value());

  readonly labelledBy = computed(() => {
    const tab = this.tabs.tabs().find((t) => t.value() === this.value());
    return tab?.resolvedId() ?? `deml-tab-${this.value()}`;
  });
}
