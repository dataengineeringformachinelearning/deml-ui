import { DemlMenuItem } from "./menu-item";
import type { DemlMenuChangeEvent } from "./types";
import * as i0 from "@angular/core";
/**
 * Headless Menu root — Trigger (`demlMenuButton`) + Panel (`demlMenuItems`).
 *
 * Completely unstyled. Implements the WAI-ARIA **Menu** pattern:
 * focus moves into the menu when open and restores to the trigger on close.
 *
 * Controlled: `[(open)]`. Uncontrolled: `defaultOpen`.
 *
 * @example
 * ```html
 * <deml-menu [(open)]="open" (change)="onChange($event)">
 *   <button type="button" demlMenuButton class="menu__trigger">Actions</button>
 *   <div demlMenuItems class="menu__panel">
 *     <button type="button" demlMenuItem value="edit" class="menu__item">Edit</button>
 *     <button type="button" demlMenuItem value="delete" class="menu__item">Delete</button>
 *     <button type="button" demlMenuItem disabled class="menu__item">Archive</button>
 *   </div>
 * </deml-menu>
 * ```
 */
export declare class DemlMenu {
    private readonly host;
    private readonly destroyRef;
    /** Whether the menu panel is open. */
    readonly open: import("@angular/core").ModelSignal<boolean | null>;
    /** Uncontrolled initial open state when `open` is null. */
    readonly defaultOpen: import("@angular/core").InputSignal<boolean>;
    /** Disables the trigger and prevents opening. */
    readonly disabled: import("@angular/core").InputSignal<boolean>;
    /**
     * When true (default), activating an item closes the menu.
     * Set false for persistent menus (rare).
     */
    readonly closeOnSelect: import("@angular/core").InputSignal<boolean>;
    /** Emits when an enabled item is activated (rich payload). */
    readonly change: import("@angular/core").OutputEmitterRef<DemlMenuChangeEvent>;
    /** Emits when the menu opens. */
    readonly opened: import("@angular/core").OutputEmitterRef<void>;
    /** Emits when the menu closes. */
    readonly closed: import("@angular/core").OutputEmitterRef<void>;
    /** @internal */
    readonly menuId: string;
    /** @internal */
    readonly buttonId: string;
    readonly items: import("@angular/core").Signal<readonly DemlMenuItem[]>;
    /** Index of the focused / active item among registered items. */
    private readonly activeIndex;
    private buttonEl;
    private itemsEl;
    private removeOutside;
    private prevOpen;
    private readonly typeahead;
    readonly isOpen: import("@angular/core").Signal<boolean>;
    readonly enabledItems: import("@angular/core").Signal<DemlMenuItem[]>;
    readonly activeItem: import("@angular/core").Signal<DemlMenuItem | null>;
    constructor();
    show(focus?: "first" | "last" | "none"): void;
    hide(restoreFocus?: boolean): void;
    toggle(): void;
    /** Activate item by registered index (skips disabled). */
    activateIndex(index: number): void;
    /** @internal */
    registerButton(el: HTMLElement | null): void;
    /** @internal */
    registerItemsEl(el: HTMLElement | null): void;
    /** @internal */
    isActiveIndex(index: number): boolean;
    /** @internal index of a given item directive among content children */
    indexOf(item: DemlMenuItem): number;
    /** @internal keyboard handler for the menu panel */
    onMenuKeydown(event: KeyboardEvent): void;
    /** @internal trigger keyboard when closed / to open */
    onButtonKeydown(event: KeyboardEvent): void;
    /** @internal pointer highlight */
    setActiveFromItem(item: DemlMenuItem): void;
    private onOpened;
    private onClosed;
    private focusItemAt;
    private firstEnabledIndex;
    private lastEnabledIndex;
    /**
     * If `index` is disabled, walk in `dir` until an enabled item is found.
     */
    private nearestEnabled;
    private bindOutside;
    private unbindOutside;
    static ɵfac: i0.ɵɵFactoryDeclaration<DemlMenu, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DemlMenu, "deml-menu", never, { "open": { "alias": "open"; "required": false; "isSignal": true; }; "defaultOpen": { "alias": "defaultOpen"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "closeOnSelect": { "alias": "closeOnSelect"; "required": false; "isSignal": true; }; }, { "open": "openChange"; "change": "change"; "opened": "opened"; "closed": "closed"; }, ["items"], ["*"], true, never>;
}
//# sourceMappingURL=menu.d.ts.map