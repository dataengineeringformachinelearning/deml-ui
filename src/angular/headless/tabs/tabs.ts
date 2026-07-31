import {
  ChangeDetectionStrategy,
  Component,
  afterNextRender,
  computed,
  contentChildren,
  input,
  model,
} from "@angular/core";
import { resolveValue } from "../core/open-state";
import { nextRovingIndex, type RovingOrientation } from "../core/keyboard";
import { DemlTab } from "./tab";
import { DEML_TABS } from "./tabs-context";

/**
 * Headless tabs root — selection state + keyboard contract.
 *
 * Completely unstyled. Compose with `[demlTabList]`, `[demlTab]`, `[demlTabPanel]`.
 *
 * Accessibility (WAI-ARIA Tabs):
 * - `[demlTabList]` → `role="tablist"`
 * - `[demlTab]` → `role="tab"`, roving tabindex, `aria-selected` / `aria-controls`
 * - `[demlTabPanel]` → `role="tabpanel"`, show/hide
 * - Arrow / Home / End move focus; Enter / Space activate
 *
 * Controlled: `[(value)]`. Uncontrolled: `defaultValue` or first tab.
 *
 * @example
 * ```html
 * <deml-tabs [(value)]="tab">
 *   <div demlTabList aria-label="Account" class="tabs__list">
 *     <button type="button" demlTab value="profile">Profile</button>
 *     <button type="button" demlTab value="billing">Billing</button>
 *   </div>
 *   <section demlTabPanel value="profile">…</section>
 *   <section demlTabPanel value="billing">…</section>
 * </deml-tabs>
 * ```
 */
@Component({
  selector: "deml-tabs",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: DEML_TABS, useExisting: DemlTabs }],
  template: `<ng-content />`,
  host: {
    "[attr.data-orientation]": "orientation()",
  },
})
export class DemlTabs {
  /**
   * Selected tab value.
   * Controlled when non-null; otherwise `defaultValue` / first tab.
   */
  readonly value = model<string | null>(null);

  /** Uncontrolled initial value when `value` is null. */
  readonly defaultValue = input<string | null>(null);

  /**
   * Accessible name forwarded to `[demlTabList]` when the list omits its own.
   */
  readonly ariaLabel = input<string | null>(null);

  /** Arrow-key orientation. Default `horizontal`. */
  readonly orientation = input<RovingOrientation>("horizontal");

  /** Wrap focus at ends. Default true. */
  readonly wrap = input(true);

  /** Registered tab triggers. */
  readonly tabs = contentChildren(DemlTab, { descendants: true });

  /** Effective selected value. */
  readonly selected = computed(() =>
    resolveValue(
      this.value(),
      this.defaultValue(),
      this.tabs()[0]?.value() ?? null
    )
  );

  constructor() {
    afterNextRender(() => {
      if (this.value() == null && this.selected() != null) {
        this.value.set(this.selected());
      }
    });
  }

  /** Select a tab by value; optionally move focus to its trigger. */
  select(next: string, focus = false): void {
    if (next !== this.value()) {
      this.value.set(next);
    }
    if (focus) this.focusValue(next);
  }

  /**
   * Keyboard handler for the tablist.
   * Wired automatically by `[demlTabList]`; also invoked from tab keydown.
   */
  onTablistKeydown(event: KeyboardEvent): void {
    const list = this.tabs().filter((t) => !t.disabled());
    if (list.length === 0) return;

    const current = Math.max(
      0,
      list.findIndex((t) => t.value() === this.selected())
    );
    const raw = nextRovingIndex(
      event,
      current,
      list.length,
      this.orientation()
    );
    if (raw == null) return;

    let next = raw;
    if (!this.wrap()) {
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        next = Math.min(current + 1, list.length - 1);
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        next = Math.max(current - 1, 0);
      }
    }

    event.preventDefault();
    const tab = list[next];
    if (!tab) return;
    this.select(tab.value(), true);
  }

  private focusValue(value: string): void {
    this.tabs()
      .find((t) => t.value() === value)
      ?.focus();
  }
}
