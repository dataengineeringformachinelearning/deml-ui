import * as i0 from "@angular/core";
/**
 * Headless tab panel directive.
 *
 * Hidden when its `value` does not match the selected tab. Linked to the
 * matching `demlTab` via shared value-based ids.
 *
 * Accessibility:
 * - `role="tabpanel"`
 * - `aria-labelledby` → `deml-tab-<value>`
 * - `hidden` when inactive; `tabindex="0"` when active (panel can receive focus)
 *
 * @example
 * ```html
 * <section demlTabPanel value="overview" class="tabs__panel">…</section>
 * ```
 */
export declare class DemlTabPanel {
    private readonly tabs;
    /** Value of the tab that owns this panel (required). */
    readonly value: import("@angular/core").InputSignal<string>;
    /** Optional stable id; defaults to `deml-tab-panel-<value>`. */
    readonly id: import("@angular/core").InputSignal<string | null>;
    readonly panelId: import("@angular/core").Signal<string>;
    readonly active: import("@angular/core").Signal<boolean>;
    readonly labelledBy: import("@angular/core").Signal<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DemlTabPanel, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DemlTabPanel, "[demlTabPanel]", never, { "value": { "alias": "value"; "required": true; "isSignal": true; }; "id": { "alias": "id"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=tab-panel.d.ts.map