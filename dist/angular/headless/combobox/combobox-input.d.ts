import { OnDestroy } from "@angular/core";
import * as i0 from "@angular/core";
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
export declare class DemlComboboxInput implements OnDestroy {
    readonly combobox: import("deml-ui").DemlCombobox;
    private readonly el;
    readonly labelledBy: import("@angular/core").Signal<string | null>;
    constructor();
    ngOnDestroy(): void;
    onInput(event: Event): void;
    onBlur(event: FocusEvent): void;
    onKeydown(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DemlComboboxInput, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DemlComboboxInput, "input[demlComboboxInput]", never, {}, {}, never, never, true, never>;
}
//# sourceMappingURL=combobox-input.d.ts.map