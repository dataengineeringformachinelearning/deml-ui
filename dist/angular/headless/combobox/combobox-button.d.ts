import * as i0 from "@angular/core";
/**
 * Optional button that toggles the listbox open/closed.
 * Prefer `<button type="button">`.
 *
 * @example
 * ```html
 * <button type="button" demlComboboxButton aria-label="Show options">▾</button>
 * ```
 */
export declare class DemlComboboxButton {
    readonly combobox: import("deml-ui").DemlCombobox;
    private readonly el;
    readonly hostType: string | null;
    onClick(event: Event): void;
    onKeydown(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DemlComboboxButton, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DemlComboboxButton, "[demlComboboxButton]", never, {}, {}, never, never, true, never>;
}
//# sourceMappingURL=combobox-button.d.ts.map