import { DemlComboboxOption } from "./combobox-option";
import type { DemlComboboxAutocomplete, DemlComboboxChangeEvent, DemlComboboxOptionData } from "./types";
import * as i0 from "@angular/core";
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
export declare class DemlCombobox {
    private readonly host;
    private readonly destroyRef;
    /**
     * Selected value (controlled/uncontrolled).
     * `null` means no selection.
     */
    readonly value: import("@angular/core").ModelSignal<string | null>;
    /** Input text / typeahead query. */
    readonly query: import("@angular/core").ModelSignal<string>;
    /** Whether the listbox is open. */
    readonly open: import("@angular/core").ModelSignal<boolean | null>;
    /** Uncontrolled initial value when `value` is null. */
    readonly defaultValue: import("@angular/core").InputSignal<string | null>;
    /** Uncontrolled initial query. */
    readonly defaultQuery: import("@angular/core").InputSignal<string>;
    /** Uncontrolled initial open state when `open` is null. */
    readonly defaultOpen: import("@angular/core").InputSignal<boolean>;
    /** Disables the whole combobox. */
    readonly disabled: import("@angular/core").InputSignal<boolean>;
    /**
     * `aria-autocomplete` strategy.
     * - `list` (default): suggestions in a listbox
     * - `both`: list + inline completion (consumer may mirror active option into input)
     * - `none`: no automatic suggestions announced
     */
    readonly autocomplete: import("@angular/core").InputSignal<DemlComboboxAutocomplete>;
    /**
     * When true (default), open the list when the input is focused.
     * Set false to open only on typing / button / ArrowDown.
     */
    readonly openOnFocus: import("@angular/core").InputSignal<boolean>;
    /**
     * When true (default), selecting an option writes the option label into `query`.
     */
    readonly syncQueryOnSelect: import("@angular/core").InputSignal<boolean>;
    /** Optional name for forms (forwarded to the input directive). */
    readonly name: import("@angular/core").InputSignal<string | null>;
    /** Emits on selection change (including clear → null). */
    readonly change: import("@angular/core").OutputEmitterRef<DemlComboboxChangeEvent>;
    /** Emits when the listbox opens. */
    readonly opened: import("@angular/core").OutputEmitterRef<void>;
    /** Emits when the listbox closes. */
    readonly closed: import("@angular/core").OutputEmitterRef<void>;
    /** @internal */
    readonly listboxId: string;
    /** @internal */
    readonly labelId: string;
    /** @internal */
    readonly inputId: string;
    private readonly baseOptionId;
    /** Registered option directives (content children). */
    readonly options: import("@angular/core").Signal<readonly DemlComboboxOption[]>;
    /** Active (highlighted) option value — drives `aria-activedescendant`. */
    private readonly activeValue;
    /** Whether a label directive is present. */
    readonly hasLabel: import("@angular/core").WritableSignal<boolean>;
    /** Input element ref registered by the input directive. */
    private inputEl;
    private removeOutside;
    private prevOpen;
    /** Effective selected value (`value` or `defaultValue`). */
    readonly selected: import("@angular/core").Signal<string | null>;
    /** Effective open state. */
    readonly isOpen: import("@angular/core").Signal<boolean>;
    /** Live query text (model). */
    readonly displayQuery: import("@angular/core").Signal<string>;
    readonly activeOption: import("@angular/core").Signal<DemlComboboxOption | null>;
    readonly activeDescendantId: import("@angular/core").Signal<string | null>;
    readonly enabledOptions: import("@angular/core").Signal<DemlComboboxOption[]>;
    constructor();
    /** Open the listbox (no-op when disabled). */
    show(): void;
    /** Close the listbox. */
    hide(): void;
    /** Toggle open state. */
    toggle(): void;
    /** Select an option by value (or clear with `null`). */
    select(next: string | null): void;
    /** Clear selection and optionally the query. */
    clear(clearQuery?: boolean): void;
    /** Move highlight to the next/previous enabled option. */
    moveActive(delta: number): void;
    /** Highlight first / last enabled option. */
    moveActiveToEdge(edge: "start" | "end"): void;
    /** Commit the currently highlighted option. */
    selectActive(): void;
    /** @internal — option DOM id helper */
    optionDomId(value: string): string;
    /** @internal */
    setActiveValue(value: string | null): void;
    /** @internal */
    isActive(value: string): boolean;
    /** @internal */
    isSelected(value: string): boolean;
    /** @internal */
    registerInput(el: HTMLInputElement | null): void;
    /** @internal */
    registerLabel(present: boolean): void;
    /** @internal */
    onQueryInput(next: string): void;
    /** @internal */
    onInputFocus(): void;
    /** @internal */
    onInputBlur(relatedTarget: EventTarget | null): void;
    focusInput(): void;
    /** Snapshot of selected option data (if any). */
    selectedOptionData(): DemlComboboxOptionData | null;
    private ensureActive;
    private bindOutside;
    private unbindOutside;
    static ɵfac: i0.ɵɵFactoryDeclaration<DemlCombobox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DemlCombobox, "deml-combobox", never, { "value": { "alias": "value"; "required": false; "isSignal": true; }; "query": { "alias": "query"; "required": false; "isSignal": true; }; "open": { "alias": "open"; "required": false; "isSignal": true; }; "defaultValue": { "alias": "defaultValue"; "required": false; "isSignal": true; }; "defaultQuery": { "alias": "defaultQuery"; "required": false; "isSignal": true; }; "defaultOpen": { "alias": "defaultOpen"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "autocomplete": { "alias": "autocomplete"; "required": false; "isSignal": true; }; "openOnFocus": { "alias": "openOnFocus"; "required": false; "isSignal": true; }; "syncQueryOnSelect": { "alias": "syncQueryOnSelect"; "required": false; "isSignal": true; }; "name": { "alias": "name"; "required": false; "isSignal": true; }; }, { "value": "valueChange"; "query": "queryChange"; "open": "openChange"; "change": "change"; "opened": "opened"; "closed": "closed"; }, ["options"], ["*"], true, never>;
}
//# sourceMappingURL=combobox.d.ts.map