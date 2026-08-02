import * as i0 from "@angular/core";
/**
 * Headless disclosure root — expand/collapse.
 *
 * Completely unstyled. Compose with `[demlDisclosureButton]` + `[demlDisclosurePanel]`.
 *
 * Accessibility (WAI-ARIA Disclosure):
 * - Trigger: `aria-expanded`, `aria-controls`
 * - Panel: linked id; `hidden` when collapsed; `role="region"`
 * - Enter / Space toggle; Escape collapses when `closeOnEscape`
 *
 * Controlled: `[(open)]`. Uncontrolled: `defaultOpen`.
 *
 * @example
 * ```html
 * <deml-disclosure [(open)]="open">
 *   <button type="button" demlDisclosureButton class="disclosure__trigger">Details</button>
 *   <div demlDisclosurePanel class="disclosure__panel">…</div>
 * </deml-disclosure>
 * ```
 */
export declare class DemlDisclosure {
    /** Open state. Controlled when non-null. */
    readonly open: import("@angular/core").ModelSignal<boolean | null>;
    /** Uncontrolled initial state when `open` is null. */
    readonly defaultOpen: import("@angular/core").InputSignal<boolean>;
    /** Disables the trigger. */
    readonly disabled: import("@angular/core").InputSignal<boolean>;
    /** When true (default), Escape on the trigger collapses the panel. */
    readonly closeOnEscape: import("@angular/core").InputSignal<boolean>;
    /** @internal ids shared by button/panel */
    readonly buttonId: string;
    /** @internal */
    readonly panelId: string;
    /** Effective open state. */
    readonly isOpen: import("@angular/core").Signal<boolean>;
    toggle(): void;
    setOpen(next: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DemlDisclosure, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DemlDisclosure, "deml-disclosure", never, { "open": { "alias": "open"; "required": false; "isSignal": true; }; "defaultOpen": { "alias": "defaultOpen"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "closeOnEscape": { "alias": "closeOnEscape"; "required": false; "isSignal": true; }; }, { "open": "openChange"; }, never, ["*"], true, never>;
}
//# sourceMappingURL=disclosure.d.ts.map