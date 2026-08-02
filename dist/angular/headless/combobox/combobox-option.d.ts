import type { DemlComboboxOptionData } from "./types";
import * as i0 from "@angular/core";
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
export declare class DemlComboboxOption {
    private readonly combobox;
    private readonly el;
    /** Unique value for this option (required). */
    readonly value: import("@angular/core").InputSignal<string>;
    /**
     * Display / accessible label. Defaults to the host text content when omitted.
     * Prefer setting this explicitly for stable filtering/display.
     */
    readonly label: import("@angular/core").InputSignal<string | null>;
    /** When true, option cannot be selected. */
    readonly disabled: import("@angular/core").InputSignal<boolean>;
    readonly optionId: import("@angular/core").Signal<string>;
    readonly selected: import("@angular/core").Signal<boolean>;
    readonly active: import("@angular/core").Signal<boolean>;
    /**
     * Resolved label for selection sync + change events.
     * Prefers the `label` input, then text content, then `value`.
     */
    resolvedLabel(): string;
    onClick(event: Event): void;
    onPointerMove(): void;
    toData(): DemlComboboxOptionData;
    static ɵfac: i0.ɵɵFactoryDeclaration<DemlComboboxOption, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DemlComboboxOption, "[demlComboboxOption]", never, { "value": { "alias": "value"; "required": true; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=combobox-option.d.ts.map