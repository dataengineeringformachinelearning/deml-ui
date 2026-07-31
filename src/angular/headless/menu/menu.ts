import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  computed,
  contentChildren,
  effect,
  inject,
  input,
  model,
  output,
  signal,
} from "@angular/core";
import { onClickOutside } from "../core/focus-trap";
import { demlId } from "../core/id";
import {
  TypeaheadBuffer,
  findTypeaheadIndex,
  nextRovingIndex,
} from "../core/keyboard";
import { resolveOpen } from "../core/open-state";
import { DEML_MENU } from "./menu-context";
import { DemlMenuItem } from "./menu-item";
import type { DemlMenuChangeEvent } from "./types";

/**
 * Headless Menu root — Trigger (`demlMenuButton`) + Panel (`demlMenuItems`).
 *
 * Completely unstyled. Implements the WAI-ARIA **Menu** pattern:
 * focus moves into the menu when open and restores to the trigger on close.
 *
 * Controlled: `[(open)]`. Uncontrolled: `defaultOpen`.
 *
 * @example
 * ```html
 * <deml-menu [(open)]="open" (change)="onChange($event)">
 *   <button type="button" demlMenuButton class="menu__trigger">Actions</button>
 *   <div demlMenuItems class="menu__panel">
 *     <button type="button" demlMenuItem value="edit" class="menu__item">Edit</button>
 *     <button type="button" demlMenuItem value="delete" class="menu__item">Delete</button>
 *     <button type="button" demlMenuItem disabled class="menu__item">Archive</button>
 *   </div>
 * </deml-menu>
 * ```
 */
@Component({
  selector: "deml-menu",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: DEML_MENU, useExisting: DemlMenu }],
  template: `<ng-content />`,
  host: {
    "[attr.data-state]": "isOpen() ? 'open' : 'closed'",
    "[attr.data-disabled]": "disabled() ? '' : null",
  },
})
export class DemlMenu {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  /** Whether the menu panel is open. */
  readonly open = model<boolean | null>(null);

  /** Uncontrolled initial open state when `open` is null. */
  readonly defaultOpen = input(false);

  /** Disables the trigger and prevents opening. */
  readonly disabled = input(false);

  /**
   * When true (default), activating an item closes the menu.
   * Set false for persistent menus (rare).
   */
  readonly closeOnSelect = input(true);

  /** Emits when an enabled item is activated (rich payload). */
  readonly change = output<DemlMenuChangeEvent>();

  /** Emits when the menu opens. */
  readonly opened = output<void>();

  /** Emits when the menu closes. */
  readonly closed = output<void>();

  /** @internal */
  readonly menuId = demlId("deml-menu");
  /** @internal */
  readonly buttonId = demlId("deml-menu-button");

  readonly items = contentChildren(DemlMenuItem, { descendants: true });

  /** Index of the focused / active item among registered items. */
  private readonly activeIndex = signal(-1);

  private buttonEl: HTMLElement | null = null;
  private itemsEl: HTMLElement | null = null;
  private removeOutside: (() => void) | null = null;
  private prevOpen: boolean | null = null;
  private readonly typeahead = new TypeaheadBuffer(500);

  readonly isOpen = computed(() => {
    if (this.disabled()) return false;
    return resolveOpen(this.open(), this.defaultOpen());
  });

  readonly enabledItems = computed(() =>
    this.items().filter((item) => !item.disabled())
  );

  readonly activeItem = computed(() => {
    const i = this.activeIndex();
    const list = this.items();
    return i >= 0 && i < list.length ? list[i]! : null;
  });

  constructor() {
    effect(() => {
      const open = this.isOpen();
      if (this.prevOpen == null) {
        this.prevOpen = open;
        if (open) this.onOpened();
        return;
      }
      if (open === this.prevOpen) return;
      this.prevOpen = open;
      if (open) this.onOpened();
      else this.onClosed();
    });

    this.destroyRef.onDestroy(() => {
      this.unbindOutside();
      this.typeahead.dispose();
    });
  }

  // ── Public API ───────────────────────────────────────────────────────

  show(focus: "first" | "last" | "none" = "first"): void {
    if (this.disabled()) return;
    this.open.set(true);
    queueMicrotask(() => {
      if (focus === "first") this.focusItemAt(this.firstEnabledIndex());
      else if (focus === "last") this.focusItemAt(this.lastEnabledIndex());
    });
  }

  hide(restoreFocus = true): void {
    this.open.set(false);
    if (restoreFocus) queueMicrotask(() => this.buttonEl?.focus());
  }

  toggle(): void {
    if (this.isOpen()) this.hide();
    else this.show("first");
  }

  /** Activate item by registered index (skips disabled). */
  activateIndex(index: number): void {
    const item = this.items()[index];
    if (!item || item.disabled()) return;
    this.change.emit({
      value: item.value(),
      label: item.resolvedLabel(),
    });
    item.notifySelect();
    if (this.closeOnSelect()) this.hide(true);
  }

  /** @internal */
  registerButton(el: HTMLElement | null): void {
    this.buttonEl = el;
  }

  /** @internal */
  registerItemsEl(el: HTMLElement | null): void {
    this.itemsEl = el;
  }

  /** @internal */
  isActiveIndex(index: number): boolean {
    return this.activeIndex() === index;
  }

  /** @internal index of a given item directive among content children */
  indexOf(item: DemlMenuItem): number {
    return this.items().indexOf(item);
  }

  /** @internal keyboard handler for the menu panel */
  onMenuKeydown(event: KeyboardEvent): void {
    const list = this.items();
    if (list.length === 0) return;

    const current = Math.max(0, this.activeIndex());
    const next = nextRovingIndex(event, current, list.length, "vertical");

    if (next != null) {
      event.preventDefault();
      const dir: 1 | -1 =
        event.key === "ArrowUp" || event.key === "End" ? -1 : 1;
      this.focusItemAt(this.nearestEnabled(next, dir));
      this.typeahead.clear();
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.activateIndex(this.activeIndex());
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      this.hide(true);
      return;
    }

    if (event.key === "Tab") {
      this.hide(false);
      return;
    }

    // Typeahead — printable characters
    if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
      const buffer = this.typeahead.push(event.key);
      if (!buffer) return;
      event.preventDefault();
      const labels = list.map((i) => i.resolvedLabel());
      const match = findTypeaheadIndex(
        buffer,
        labels,
        current,
        (i) => !list[i]!.disabled()
      );
      if (match >= 0) this.focusItemAt(match);
    }
  }

  /** @internal trigger keyboard when closed / to open */
  onButtonKeydown(event: KeyboardEvent): void {
    if (this.disabled()) return;

    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.show("first");
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      this.show("last");
      return;
    }
  }

  /** @internal pointer highlight */
  setActiveFromItem(item: DemlMenuItem): void {
    const index = this.indexOf(item);
    if (index >= 0 && !item.disabled()) this.activeIndex.set(index);
  }

  private onOpened(): void {
    this.opened.emit();
    this.bindOutside();
    // Default focus first enabled if nothing focused yet
    queueMicrotask(() => {
      if (this.activeIndex() < 0) {
        this.focusItemAt(this.firstEnabledIndex());
      } else {
        this.items()[this.activeIndex()]?.focus();
      }
    });
  }

  private onClosed(): void {
    this.closed.emit();
    this.activeIndex.set(-1);
    this.typeahead.clear();
    this.unbindOutside();
  }

  private focusItemAt(index: number): void {
    if (index < 0) return;
    const item = this.items()[index];
    if (!item || item.disabled()) return;
    this.activeIndex.set(index);
    item.focus();
  }

  private firstEnabledIndex(): number {
    return this.items().findIndex((i) => !i.disabled());
  }

  private lastEnabledIndex(): number {
    const list = this.items();
    for (let i = list.length - 1; i >= 0; i--) {
      if (!list[i]!.disabled()) return i;
    }
    return -1;
  }

  /**
   * If `index` is disabled, walk in `dir` until an enabled item is found.
   */
  private nearestEnabled(index: number, dir: 1 | -1): number {
    const list = this.items();
    if (list.length === 0) return -1;
    let i = index;
    for (let n = 0; n < list.length; n++) {
      const item = list[i];
      if (item && !item.disabled()) return i;
      i = (i + dir + list.length) % list.length;
    }
    return -1;
  }

  private bindOutside(): void {
    this.unbindOutside();
    this.removeOutside = onClickOutside(
      this.host.nativeElement,
      () => this.hide(true),
      [this.buttonEl]
    );
  }

  private unbindOutside(): void {
    this.removeOutside?.();
    this.removeOutside = null;
  }
}
