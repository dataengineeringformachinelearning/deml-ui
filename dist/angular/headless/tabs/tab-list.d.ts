import * as i0 from "@angular/core";
/**
 * Tablist container — sets `role="tablist"` and wires keyboard navigation.
 *
 * @example
 * ```html
 * <div demlTabList aria-label="Settings" class="tabs__list">
 *   <button type="button" demlTab value="a">A</button>
 * </div>
 * ```
 */
export declare class DemlTabList {
    readonly tabs: import("deml-ui").DemlTabs;
    /** Optional accessible name for this tablist (overrides root `ariaLabel`). */
    readonly ariaLabel: import("@angular/core").InputSignal<string | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DemlTabList, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DemlTabList, "[demlTabList]", never, { "ariaLabel": { "alias": "ariaLabel"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=tab-list.d.ts.map