/**
 * Public types for the headless Combobox.
 */
/** How the input suggests completions (maps to `aria-autocomplete`). */
export type DemlComboboxAutocomplete = "list" | "both" | "none";
/**
 * Snapshot of a registered option — useful for `selected` / `change` events.
 */
export interface DemlComboboxOptionData {
    /** Stable option value (required unique among siblings). */
    value: string;
    /** Accessible / display label (text content fallback when omitted). */
    label: string;
    /** When true, option is not selectable. */
    disabled: boolean;
}
/** Emitted when the consumer selects an option (or clears). */
export interface DemlComboboxChangeEvent {
    /** Selected value, or `null` when cleared. */
    value: string | null;
    /** Matching option metadata when a value is selected. */
    option: DemlComboboxOptionData | null;
}
//# sourceMappingURL=types.d.ts.map