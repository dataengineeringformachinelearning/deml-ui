import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
} from "@angular/core";
import { demlId } from "../core/id";
import { resolveOpen } from "../core/open-state";
import { DEML_DISCLOSURE } from "./disclosure-context";

/**
 * Headless disclosure root — expand/collapse.
 *
 * Completely unstyled. Compose with `[demlDisclosureButton]` + `[demlDisclosurePanel]`.
 *
 * Accessibility (WAI-ARIA Disclosure):
 * - Trigger: `aria-expanded`, `aria-controls`
 * - Panel: linked id; `hidden` when collapsed; `role="region"`
 * - Enter / Space toggle; Escape collapses when `closeOnEscape`
 *
 * Controlled: `[(open)]`. Uncontrolled: `defaultOpen`.
 *
 * @example
 * ```html
 * <deml-disclosure [(open)]="open">
 *   <button type="button" demlDisclosureButton class="disclosure__trigger">Details</button>
 *   <div demlDisclosurePanel class="disclosure__panel">…</div>
 * </deml-disclosure>
 * ```
 */
@Component({
  selector: "deml-disclosure",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: DEML_DISCLOSURE, useExisting: DemlDisclosure }],
  template: `<ng-content />`,
  host: {
    "[attr.data-state]": "isOpen() ? 'open' : 'closed'",
    "[attr.data-disabled]": "disabled() ? '' : null",
  },
})
export class DemlDisclosure {
  /** Open state. Controlled when non-null. */
  readonly open = model<boolean | null>(null);

  /** Uncontrolled initial state when `open` is null. */
  readonly defaultOpen = input(false);

  /** Disables the trigger. */
  readonly disabled = input(false);

  /** When true (default), Escape on the trigger collapses the panel. */
  readonly closeOnEscape = input(true);

  /** @internal ids shared by button/panel */
  readonly buttonId = demlId("deml-disclosure-button");
  /** @internal */
  readonly panelId = demlId("deml-disclosure-panel");

  /** Effective open state. */
  readonly isOpen = computed(() => resolveOpen(this.open(), this.defaultOpen()));

  toggle(): void {
    if (this.disabled()) return;
    this.setOpen(!this.isOpen());
  }

  setOpen(next: boolean): void {
    if (this.disabled()) return;
    if (next === this.isOpen() && this.open() != null) return;
    this.open.set(next);
  }
}
