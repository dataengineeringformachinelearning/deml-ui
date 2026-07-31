import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
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
import { resolveOpen, resolveValue } from "../core/open-state";
import { DEML_COMBOBOX } from "./combobox-context";
import { DemlComboboxOption } from "./combobox-option";
import type {
  DemlComboboxAutocomplete,
  DemlComboboxChangeEvent,
  DemlComboboxOptionData,
} from "./types";

/**
 * Headless Combobox / Autocomplete root.
 *
 * Completely unstyled. Implements the WAI-ARIA **Editable Combobox with Listbox**
 * pattern using `aria-activedescendant` (focus stays on the input).
 *
 * Composition:
 * - `[demlComboboxLabel]` (optional)
 * - `[demlComboboxInput]` (required)
 * - `[demlComboboxButton]` (optional toggle)
 * - `[demlComboboxOptions]` + `[demlComboboxOption]`
 *
 * Controlled: `[(value)]`, `[(open)]`, `[(query)]`.
 * Uncontrolled: `defaultValue` / `defaultOpen` / `defaultQuery`.
 *
 * Filtering is owned by the consumer — bind `query` and render matching options.
 * The root only manages open/active/selected state and keyboard contracts.
 *
 * @example
 * ```html
 * <deml-combobox [(value)]="fruit" [(query)]="q" [(open)]="open">
 *   <label demlComboboxLabel>Fruit</label>
 *   <input demlComboboxInput class="combo__input" />
 *   <button type="button" demlComboboxButton class="combo__button">▾</button>
 *   <ul demlComboboxOptions class="combo__list">
 *     @for (item of filtered(); track item) {
 *       <li demlComboboxOption [value]="item" class="combo__option">{{ item }}</li>
 *     }
 *   </ul>
 * </deml-combobox>
 * ```
 */
@Component({
  selector: "deml-combobox",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: DEML_COMBOBOX, useExisting: DemlCombobox }],
  template: `<ng-content />`,
  host: {
    // Transparent state host — no layout, no styles.
    "[attr.data-state]": "isOpen() ? 'open' : 'closed'",
    "[attr.data-disabled]": "disabled() ? '' : null",
  },
})
export class DemlCombobox {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  // ── Public models / inputs ───────────────────────────────────────────

  /**
   * Selected value (controlled/uncontrolled).
   * `null` means no selection.
   */
  readonly value = model<string | null>(null);

  /** Input text / typeahead query. */
  readonly query = model<string>("");

  /** Whether the listbox is open. */
  readonly open = model<boolean | null>(null);

  /** Uncontrolled initial value when `value` is null. */
  readonly defaultValue = input<string | null>(null);

  /** Uncontrolled initial query. */
  readonly defaultQuery = input("");

  /** Uncontrolled initial open state when `open` is null. */
  readonly defaultOpen = input(false);

  /** Disables the whole combobox. */
  readonly disabled = input(false);

  /**
   * `aria-autocomplete` strategy.
   * - `list` (default): suggestions in a listbox
   * - `both`: list + inline completion (consumer may mirror active option into input)
   * - `none`: no automatic suggestions announced
   */
  readonly autocomplete = input<DemlComboboxAutocomplete>("list");

  /**
   * When true (default), open the list when the input is focused.
   * Set false to open only on typing / button / ArrowDown.
   */
  readonly openOnFocus = input(true);

  /**
   * When true (default), selecting an option writes the option label into `query`.
   */
  readonly syncQueryOnSelect = input(true);

  /** Optional name for forms (forwarded to the input directive). */
  readonly name = input<string | null>(null);

  /** Emits on selection change (including clear → null). */
  readonly change = output<DemlComboboxChangeEvent>();

  /** Emits when the listbox opens. */
  readonly opened = output<void>();

  /** Emits when the listbox closes. */
  readonly closed = output<void>();

  // ── Internal ids ─────────────────────────────────────────────────────

  /** @internal */
  readonly listboxId = demlId("deml-combobox-listbox");
  /** @internal */
  readonly labelId = demlId("deml-combobox-label");
  /** @internal */
  readonly inputId = demlId("deml-combobox-input");
  private readonly baseOptionId = demlId("deml-combobox-option");

  // ── Registration ─────────────────────────────────────────────────────

  /** Registered option directives (content children). */
  readonly options = contentChildren(DemlComboboxOption, { descendants: true });

  /** Active (highlighted) option value — drives `aria-activedescendant`. */
  private readonly activeValue = signal<string | null>(null);

  /** Whether a label directive is present. */
  readonly hasLabel = signal(false);

  /** Input element ref registered by the input directive. */
  private inputEl: HTMLInputElement | null = null;

  private removeOutside: (() => void) | null = null;
  private prevOpen: boolean | null = null;

  // ── Derived state ────────────────────────────────────────────────────

  /** Effective selected value (`value` or `defaultValue`). */
  readonly selected = computed(() =>
    resolveValue(this.value(), this.defaultValue(), null)
  );

  /** Effective open state. */
  readonly isOpen = computed(() => {
    if (this.disabled()) return false;
    return resolveOpen(this.open(), this.defaultOpen());
  });

  /** Live query text (model). */
  readonly displayQuery = computed(() => this.query());

  readonly activeOption = computed(() => {
    const v = this.activeValue();
    if (v == null) return null;
    return this.options().find((o) => o.value() === v) ?? null;
  });

  readonly activeDescendantId = computed(() => {
    const opt = this.activeOption();
    return opt && this.isOpen() ? opt.optionId() : null;
  });

  readonly enabledOptions = computed(() =>
    this.options().filter((o) => !o.disabled())
  );

  constructor() {
    // Keep uncontrolled query seeded once.
    afterNextRender(() => {
      if (this.query() === "" && this.defaultQuery()) {
        this.query.set(this.defaultQuery());
      }
      if (this.value() == null && this.defaultValue() != null) {
        this.value.set(this.defaultValue());
      }
    });

    effect(() => {
      const open = this.isOpen();
      if (this.prevOpen == null) {
        this.prevOpen = open;
        return;
      }
      if (open === this.prevOpen) return;
      this.prevOpen = open;
      if (open) {
        this.opened.emit();
        this.ensureActive();
        this.bindOutside();
      } else {
        this.closed.emit();
        this.activeValue.set(null);
        this.unbindOutside();
      }
    });

    this.destroyRef.onDestroy(() => this.unbindOutside());
  }

  // ── Public API ───────────────────────────────────────────────────────

  /** Open the listbox (no-op when disabled). */
  show(): void {
    if (this.disabled()) return;
    this.open.set(true);
  }

  /** Close the listbox. */
  hide(): void {
    this.open.set(false);
  }

  /** Toggle open state. */
  toggle(): void {
    if (this.isOpen()) this.hide();
    else this.show();
  }

  /** Select an option by value (or clear with `null`). */
  select(next: string | null): void {
    if (this.disabled()) return;
    if (next != null) {
      const opt = this.options().find((o) => o.value() === next);
      if (!opt || opt.disabled()) return;
      this.value.set(next);
      if (this.syncQueryOnSelect()) {
        this.query.set(opt.resolvedLabel());
      }
      this.change.emit({ value: next, option: opt.toData() });
    } else {
      this.value.set(null);
      this.change.emit({ value: null, option: null });
    }
    this.hide();
    this.focusInput();
  }

  /** Clear selection and optionally the query. */
  clear(clearQuery = true): void {
    this.select(null);
    if (clearQuery) this.query.set("");
  }

  /** Move highlight to the next/previous enabled option. */
  moveActive(delta: number): void {
    const list = this.enabledOptions();
    if (list.length === 0) return;
    if (!this.isOpen()) this.show();

    const current = this.activeValue();
    let index = list.findIndex((o) => o.value() === current);
    if (index < 0) index = delta > 0 ? -1 : 0;
    const next = (index + delta + list.length) % list.length;
    this.activeValue.set(list[next]!.value());
  }

  /** Highlight first / last enabled option. */
  moveActiveToEdge(edge: "start" | "end"): void {
    const list = this.enabledOptions();
    if (list.length === 0) return;
    if (!this.isOpen()) this.show();
    const opt = edge === "start" ? list[0] : list[list.length - 1];
    this.activeValue.set(opt!.value());
  }

  /** Commit the currently highlighted option. */
  selectActive(): void {
    const active = this.activeValue();
    if (active != null) this.select(active);
  }

  /** @internal — option DOM id helper */
  optionDomId(value: string): string {
    return `${this.baseOptionId}-${value}`;
  }

  /** @internal */
  setActiveValue(value: string | null): void {
    this.activeValue.set(value);
  }

  /** @internal */
  isActive(value: string): boolean {
    return this.activeValue() === value;
  }

  /** @internal */
  isSelected(value: string): boolean {
    return this.selected() === value;
  }

  /** @internal */
  registerInput(el: HTMLInputElement | null): void {
    this.inputEl = el;
  }

  /** @internal */
  registerLabel(present: boolean): void {
    this.hasLabel.set(present);
  }

  /** @internal */
  onQueryInput(next: string): void {
    if (this.disabled()) return;
    this.query.set(next);
    if (!this.isOpen()) this.show();
    // Reset highlight so ArrowDown starts fresh after filter changes.
    this.activeValue.set(null);
    queueMicrotask(() => this.ensureActive());
  }

  /** @internal */
  onInputFocus(): void {
    if (this.disabled()) return;
    if (this.openOnFocus()) this.show();
  }

  /** @internal */
  onInputBlur(relatedTarget: EventTarget | null): void {
    // Delay close so option click can run first.
    queueMicrotask(() => {
      const root = this.host.nativeElement;
      const active = document.activeElement;
      if (relatedTarget instanceof Node && root.contains(relatedTarget)) return;
      if (active && root.contains(active)) return;
      this.hide();
    });
  }

  focusInput(): void {
    this.inputEl?.focus();
  }

  /** Snapshot of selected option data (if any). */
  selectedOptionData(): DemlComboboxOptionData | null {
    const v = this.selected();
    if (v == null) return null;
    return this.options().find((o) => o.value() === v)?.toData() ?? null;
  }

  private ensureActive(): void {
    if (this.activeValue() != null) return;
    const selected = this.selected();
    if (selected != null) {
      const match = this.enabledOptions().find((o) => o.value() === selected);
      if (match) {
        this.activeValue.set(match.value());
        return;
      }
    }
    const first = this.enabledOptions()[0];
    if (first) this.activeValue.set(first.value());
  }

  private bindOutside(): void {
    this.unbindOutside();
    this.removeOutside = onClickOutside(this.host.nativeElement, () => {
      this.hide();
    });
  }

  private unbindOutside(): void {
    this.removeOutside?.();
    this.removeOutside = null;
  }
}
