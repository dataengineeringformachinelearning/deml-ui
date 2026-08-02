import * as i0 from "@angular/core";
/**
 * Headless tab trigger. Place inside `[demlTabList]`.
 *
 * Prefer `<button type="button">`. Selection comes from parent `deml-tabs`.
 *
 * Accessibility: `role="tab"`, roving `tabindex`, `aria-selected` / `aria-controls`.
 *
 * @example
 * ```html
 * <button type="button" demlTab value="overview" class="tabs__tab">Overview</button>
 * ```
 */
export declare class DemlTab {
    private readonly el;
    private readonly tabs;
    /** Unique value identifying this tab (required). */
    readonly value: import("@angular/core").InputSignal<string>;
    /** When true, tab cannot be selected. */
    readonly disabled: import("@angular/core").InputSignal<boolean>;
    /** Optional stable id; defaults to `deml-tab-<value>`. */
    readonly id: import("@angular/core").InputSignal<string | null>;
    readonly tabId: import("@angular/core").Signal<string>;
    readonly panelId: import("@angular/core").Signal<string>;
    readonly selected: import("@angular/core").Signal<boolean>;
    /** Preserve native button type when host is a button. */
    readonly hostType: import("@angular/core").Signal<"button" | null>;
    onClick(event: Event): void;
    onKeydown(event: KeyboardEvent): void;
    /** Move DOM focus to this trigger. */
    focus(): void;
    /** Id used by panels for `aria-labelledby`. */
    resolvedId(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DemlTab, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DemlTab, "[demlTab]", never, { "value": { "alias": "value"; "required": true; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "id": { "alias": "id"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=tab.d.ts.map