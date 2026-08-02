import type { DemlMenuItemData } from "./types";
import * as i0 from "@angular/core";
/**
 * A single menu item (`role="menuitem"`).
 *
 * Prefer `<button type="button">` or `<a href>`. Completely unstyled.
 *
 * - Disabled items are skipped by keyboard navigation and are not activatable.
 * - `data-active` marks the keyboard/pointer-highlighted item for styling.
 *
 * @example
 * ```html
 * <button type="button" demlMenuItem value="edit" class="menu__item">Edit</button>
 * ```
 */
export declare class DemlMenuItem {
    private readonly menu;
    private readonly el;
    /**
     * Optional stable value emitted on root `change` / item `select`.
     * When omitted, only the label is available on the event.
     */
    readonly value: import("@angular/core").InputSignal<string | null>;
    /**
     * Optional label override. Defaults to the host text content.
     * Used for typeahead matching and change events.
     */
    readonly label: import("@angular/core").InputSignal<string | null>;
    /** When true, item cannot be activated and is skipped in arrow navigation. */
    readonly disabled: import("@angular/core").InputSignal<boolean>;
    /** Fires when this item is activated (in addition to the menu `change` output). */
    readonly select: import("@angular/core").OutputEmitterRef<DemlMenuItemData>;
    readonly hostType: string | null;
    readonly index: import("@angular/core").Signal<number>;
    readonly active: import("@angular/core").Signal<boolean>;
    /** Roving tabindex: only the active item is in the tab order while open. */
    readonly tabIndex: import("@angular/core").Signal<0 | -1>;
    resolvedLabel(): string;
    focus(): void;
    /** @internal called by menu root after activation */
    notifySelect(): void;
    toData(): DemlMenuItemData;
    onClick(event: Event): void;
    onPointerMove(): void;
    onFocus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DemlMenuItem, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DemlMenuItem, "[demlMenuItem]", never, { "value": { "alias": "value"; "required": false; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; }, { "select": "select"; }, never, never, true, never>;
}
//# sourceMappingURL=menu-item.d.ts.map