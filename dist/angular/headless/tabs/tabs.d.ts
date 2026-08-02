import { type RovingOrientation } from "../core/keyboard";
import { DemlTab } from "./tab";
import * as i0 from "@angular/core";
/**
 * Headless tabs root — selection state + keyboard contract.
 *
 * Completely unstyled. Compose with `[demlTabList]`, `[demlTab]`, `[demlTabPanel]`.
 *
 * Accessibility (WAI-ARIA Tabs):
 * - `[demlTabList]` → `role="tablist"`
 * - `[demlTab]` → `role="tab"`, roving tabindex, `aria-selected` / `aria-controls`
 * - `[demlTabPanel]` → `role="tabpanel"`, show/hide
 * - Arrow / Home / End move focus; Enter / Space activate
 *
 * Controlled: `[(value)]`. Uncontrolled: `defaultValue` or first tab.
 *
 * @example
 * ```html
 * <deml-tabs [(value)]="tab">
 *   <div demlTabList aria-label="Account" class="tabs__list">
 *     <button type="button" demlTab value="profile">Profile</button>
 *     <button type="button" demlTab value="billing">Billing</button>
 *   </div>
 *   <section demlTabPanel value="profile">…</section>
 *   <section demlTabPanel value="billing">…</section>
 * </deml-tabs>
 * ```
 */
export declare class DemlTabs {
    /**
     * Selected tab value.
     * Controlled when non-null; otherwise `defaultValue` / first tab.
     */
    readonly value: import("@angular/core").ModelSignal<string | null>;
    /** Uncontrolled initial value when `value` is null. */
    readonly defaultValue: import("@angular/core").InputSignal<string | null>;
    /**
     * Accessible name forwarded to `[demlTabList]` when the list omits its own.
     */
    readonly ariaLabel: import("@angular/core").InputSignal<string | null>;
    /** Arrow-key orientation. Default `horizontal`. */
    readonly orientation: import("@angular/core").InputSignal<RovingOrientation>;
    /** Wrap focus at ends. Default true. */
    readonly wrap: import("@angular/core").InputSignal<boolean>;
    /** Registered tab triggers. */
    readonly tabs: import("@angular/core").Signal<readonly DemlTab[]>;
    /** Effective selected value. */
    readonly selected: import("@angular/core").Signal<string | null>;
    constructor();
    /** Select a tab by value; optionally move focus to its trigger. */
    select(next: string, focus?: boolean): void;
    /**
     * Keyboard handler for the tablist.
     * Wired automatically by `[demlTabList]`; also invoked from tab keydown.
     */
    onTablistKeydown(event: KeyboardEvent): void;
    private focusValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<DemlTabs, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DemlTabs, "deml-tabs", never, { "value": { "alias": "value"; "required": false; "isSignal": true; }; "defaultValue": { "alias": "defaultValue"; "required": false; "isSignal": true; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; "isSignal": true; }; "orientation": { "alias": "orientation"; "required": false; "isSignal": true; }; "wrap": { "alias": "wrap"; "required": false; "isSignal": true; }; }, { "value": "valueChange"; }, ["tabs"], ["*"], true, never>;
}
//# sourceMappingURL=tabs.d.ts.map