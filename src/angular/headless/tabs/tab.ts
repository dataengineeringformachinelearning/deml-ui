import {
  Directive,
  ElementRef,
  computed,
  inject,
  input,
} from "@angular/core";
import { DEML_TABS } from "./tabs-context";
import { isActivationKey } from "../core/keyboard";

/**
 * Headless tab trigger. Place inside `[demlTabList]`.
 *
 * Prefer `<button type="button">`. Selection comes from parent `deml-tabs`.
 *
 * Accessibility: `role="tab"`, roving `tabindex`, `aria-selected` / `aria-controls`.
 *
 * @example
 * ```html
 * <button type="button" demlTab value="overview" class="tabs__tab">Overview</button>
 * ```
 */
@Directive({
  selector: "[demlTab]",
  host: {
    role: "tab",
    "[attr.type]": "hostType()",
    "[id]": "tabId()",
    "[attr.aria-selected]": "selected()",
    "[attr.aria-controls]": "panelId()",
    "[attr.aria-disabled]": "disabled() ? true : null",
    "[attr.tabindex]": "selected() ? 0 : -1",
    "[attr.data-state]": "selected() ? 'active' : 'inactive'",
    "[attr.data-disabled]": "disabled() ? '' : null",
    "(click)": "onClick($event)",
    "(keydown)": "onKeydown($event)",
  },
})
export class DemlTab {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly tabs = inject(DEML_TABS);

  /** Unique value identifying this tab (required). */
  readonly value = input.required<string>();

  /** When true, tab cannot be selected. */
  readonly disabled = input(false);

  /** Optional stable id; defaults to `deml-tab-<value>`. */
  readonly id = input<string | null>(null);

  readonly tabId = computed(() => this.id() ?? `deml-tab-${this.value()}`);
  readonly panelId = computed(() => `deml-tab-panel-${this.value()}`);

  readonly selected = computed(
    () => !this.disabled() && this.tabs.selected() === this.value()
  );

  /** Preserve native button type when host is a button. */
  readonly hostType = computed(() =>
    this.el.nativeElement.tagName === "BUTTON" ? "button" : null
  );

  onClick(event: Event): void {
    if (this.disabled()) {
      event.preventDefault();
      return;
    }
    this.tabs.select(this.value(), false);
  }

  onKeydown(event: KeyboardEvent): void {
    if (this.disabled()) return;
    if (isActivationKey(event)) {
      event.preventDefault();
      this.tabs.select(this.value(), true);
      return;
    }
    this.tabs.onTablistKeydown(event);
  }

  /** Move DOM focus to this trigger. */
  focus(): void {
    this.el.nativeElement.focus();
  }

  /** Id used by panels for `aria-labelledby`. */
  resolvedId(): string {
    return this.tabId();
  }
}
