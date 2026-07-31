import {
  Directive,
  ElementRef,
  computed,
  inject,
  input,
} from "@angular/core";
import { DEML_COMBOBOX } from "./combobox-context";
import type { DemlComboboxOptionData } from "./types";

/**
 * A single combobox option (`role="option"`).
 *
 * Highlight follows pointer + keyboard (`aria-activedescendant` on the input).
 * Clicking selects and closes. `mousedown` is prevented so the input keeps focus.
 *
 * @example
 * ```html
 * <li demlComboboxOption value="apple" class="combo__option">Apple</li>
 * ```
 */
@Directive({
  selector: "[demlComboboxOption]",
  host: {
    role: "option",
    "[id]": "optionId()",
    "[attr.aria-selected]": "selected()",
    "[attr.aria-disabled]": "disabled() ? true : null",
    "[attr.data-active]": "active() ? '' : null",
    "[attr.data-selected]": "selected() ? '' : null",
    "[attr.data-disabled]": "disabled() ? '' : null",
    "(click)": "onClick($event)",
    "(pointermove)": "onPointerMove()",
    "(mousedown)": "$event.preventDefault()",
  },
})
export class DemlComboboxOption {
  private readonly combobox = inject(DEML_COMBOBOX);
  private readonly el = inject(ElementRef<HTMLElement>);

  /** Unique value for this option (required). */
  readonly value = input.required<string>();

  /**
   * Display / accessible label. Defaults to the host text content when omitted.
   * Prefer setting this explicitly for stable filtering/display.
   */
  readonly label = input<string | null>(null);

  /** When true, option cannot be selected. */
  readonly disabled = input(false);

  readonly optionId = computed(() => this.combobox.optionDomId(this.value()));

  readonly selected = computed(() => this.combobox.isSelected(this.value()));

  readonly active = computed(() => this.combobox.isActive(this.value()));

  /**
   * Resolved label for selection sync + change events.
   * Prefers the `label` input, then text content, then `value`.
   */
  resolvedLabel(): string {
    const explicit = this.label();
    if (explicit != null && explicit !== "") return explicit;
    return this.el.nativeElement.textContent?.trim() ?? this.value();
  }

  onClick(event: Event): void {
    event.preventDefault();
    if (this.disabled()) return;
    this.combobox.select(this.value());
  }

  onPointerMove(): void {
    if (this.disabled()) return;
    this.combobox.setActiveValue(this.value());
  }

  toData(): DemlComboboxOptionData {
    return {
      value: this.value(),
      label: this.resolvedLabel(),
      disabled: this.disabled(),
    };
  }
}
