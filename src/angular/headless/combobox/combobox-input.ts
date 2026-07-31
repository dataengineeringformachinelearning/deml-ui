import {
  Directive,
  ElementRef,
  OnDestroy,
  afterNextRender,
  computed,
  inject,
} from "@angular/core";
import { DEML_COMBOBOX } from "./combobox-context";

/**
 * Combobox text input — keeps focus; listbox uses `aria-activedescendant`.
 *
 * Apply to a native `<input>`. Completely unstyled.
 *
 * Keyboard (when focused):
 * - ArrowDown / ArrowUp — open + move highlight
 * - Home / End — first / last option
 * - Enter — select highlighted option
 * - Escape — close (clears highlight); second Escape can be handled by consumer
 * - Tab — close and move focus naturally
 *
 * @example
 * ```html
 * <input demlComboboxInput class="combo__input" placeholder="Search…" />
 * ```
 */
@Directive({
  selector: "input[demlComboboxInput]",
  host: {
    role: "combobox",
    "[id]": "combobox.inputId",
    "[attr.aria-expanded]": "combobox.isOpen()",
    "[attr.aria-controls]": "combobox.listboxId",
    "[attr.aria-autocomplete]": "combobox.autocomplete()",
    "[attr.aria-activedescendant]": "combobox.activeDescendantId()",
    "[attr.aria-labelledby]": "labelledBy()",
    "[attr.aria-disabled]": "combobox.disabled() ? true : null",
    "[attr.disabled]": "combobox.disabled() ? true : null",
    "[attr.name]": "combobox.name()",
    "[attr.autocomplete]": "'off'",
    "[attr.data-state]": "combobox.isOpen() ? 'open' : 'closed'",
    "[value]": "combobox.displayQuery()",
    "(input)": "onInput($event)",
    "(keydown)": "onKeydown($event)",
    "(focus)": "combobox.onInputFocus()",
    "(blur)": "onBlur($event)",
  },
})
export class DemlComboboxInput implements OnDestroy {
  readonly combobox = inject(DEML_COMBOBOX);
  private readonly el = inject(ElementRef<HTMLInputElement>);

  readonly labelledBy = computed(() =>
    this.combobox.hasLabel() ? this.combobox.labelId : null
  );

  constructor() {
    afterNextRender(() => {
      this.combobox.registerInput(this.el.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.combobox.registerInput(null);
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.combobox.onQueryInput(target.value);
  }

  onBlur(event: FocusEvent): void {
    this.combobox.onInputBlur(event.relatedTarget);
  }

  onKeydown(event: KeyboardEvent): void {
    if (this.combobox.disabled()) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (!this.combobox.isOpen()) this.combobox.show();
        else this.combobox.moveActive(1);
        break;
      case "ArrowUp":
        event.preventDefault();
        if (!this.combobox.isOpen()) this.combobox.show();
        else this.combobox.moveActive(-1);
        break;
      case "Home":
        if (this.combobox.isOpen()) {
          event.preventDefault();
          this.combobox.moveActiveToEdge("start");
        }
        break;
      case "End":
        if (this.combobox.isOpen()) {
          event.preventDefault();
          this.combobox.moveActiveToEdge("end");
        }
        break;
      case "Enter":
        if (this.combobox.isOpen()) {
          event.preventDefault();
          this.combobox.selectActive();
        }
        break;
      case "Escape":
        if (this.combobox.isOpen()) {
          event.preventDefault();
          this.combobox.hide();
        }
        break;
      case "Tab":
        this.combobox.hide();
        break;
      default:
        break;
    }
  }
}
