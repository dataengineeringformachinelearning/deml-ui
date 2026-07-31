import {
  Directive,
  ElementRef,
  computed,
  inject,
  input,
  output,
} from "@angular/core";
import { DEML_MENU } from "./menu-context";
import type { DemlMenuItemData } from "./types";

/**
 * A single menu item (`role="menuitem"`).
 *
 * Prefer `<button type="button">` or `<a href>`. Completely unstyled.
 *
 * - Disabled items are skipped by keyboard navigation and are not activatable.
 * - `data-active` marks the keyboard/pointer-highlighted item for styling.
 *
 * @example
 * ```html
 * <button type="button" demlMenuItem value="edit" class="menu__item">Edit</button>
 * ```
 */
@Directive({
  selector: "[demlMenuItem]",
  host: {
    role: "menuitem",
    "[attr.type]": "hostType",
    "[attr.tabindex]": "tabIndex()",
    "[attr.aria-disabled]": "disabled() ? true : null",
    "[attr.data-active]": "active() ? '' : null",
    "[attr.data-disabled]": "disabled() ? '' : null",
    "(click)": "onClick($event)",
    "(pointermove)": "onPointerMove()",
    "(focus)": "onFocus()",
  },
})
export class DemlMenuItem {
  private readonly menu = inject(DEML_MENU);
  private readonly el = inject(ElementRef<HTMLElement>);

  /**
   * Optional stable value emitted on root `change` / item `select`.
   * When omitted, only the label is available on the event.
   */
  readonly value = input<string | null>(null);

  /**
   * Optional label override. Defaults to the host text content.
   * Used for typeahead matching and change events.
   */
  readonly label = input<string | null>(null);

  /** When true, item cannot be activated and is skipped in arrow navigation. */
  readonly disabled = input(false);

  /** Fires when this item is activated (in addition to the menu `change` output). */
  readonly select = output<DemlMenuItemData>();

  readonly hostType =
    this.el.nativeElement.tagName === "BUTTON" ? "button" : null;

  readonly index = computed(() => this.menu.indexOf(this));

  readonly active = computed(() => this.menu.isActiveIndex(this.index()));

  /** Roving tabindex: only the active item is in the tab order while open. */
  readonly tabIndex = computed(() => {
    if (!this.menu.isOpen() || this.disabled()) return -1;
    return this.active() ? 0 : -1;
  });

  resolvedLabel(): string {
    const explicit = this.label();
    if (explicit != null && explicit !== "") return explicit;
    return this.el.nativeElement.textContent?.trim() ?? this.value() ?? "";
  }

  focus(): void {
    this.el.nativeElement.focus();
  }

  /** @internal called by menu root after activation */
  notifySelect(): void {
    this.select.emit(this.toData());
  }

  toData(): DemlMenuItemData {
    return {
      value: this.value(),
      label: this.resolvedLabel(),
      disabled: this.disabled(),
    };
  }

  onClick(event: Event): void {
    if (this.disabled()) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    event.preventDefault();
    this.menu.activateIndex(this.index());
  }

  onPointerMove(): void {
    if (this.disabled()) return;
    this.menu.setActiveFromItem(this);
  }

  onFocus(): void {
    if (this.disabled()) return;
    this.menu.setActiveFromItem(this);
  }
}
