import * as i0 from "@angular/core";
/**
 * Headless Dialog (Modal) root.
 *
 * Completely unstyled. Built on the native `<dialog>` element + `showModal()`
 * so the browser provides the top layer (modal stacking). Optional `portal`
 * moves the `<dialog>` to `document.body` to escape overflow/transform traps.
 *
 * Accessibility contract:
 * - `role="dialog"` (native `<dialog>`) + `aria-modal="true"` via `showModal()`
 * - Focus trap while open; focus restored to the previously focused element on close
 * - Escape closes when `dismissible` is true
 * - Backdrop click closes when `closeOnBackdrop` is true
 * - Label via `[demlDialogTitle]` / `[demlDialogDescription]` or `ariaLabel`
 *
 * Controlled: `[(open)]="isOpen"`.
 * Uncontrolled: omit binding; call `show()` / `hide()`, or set `defaultOpen`.
 *
 * Composition:
 * ```html
 * <deml-dialog [(open)]="open">
 *   <div demlDialogPanel class="modal">
 *     <h2 demlDialogTitle>Title</h2>
 *     <p demlDialogDescription>Description</p>
 *     <button type="button" demlDialogClose>Close</button>
 *   </div>
 * </deml-dialog>
 * ```
 */
export declare class DemlDialog {
    private readonly destroyRef;
    private readonly dialogRef;
    /**
     * Open state. Bind for controlled usage.
     * When `null`, falls back to `defaultOpen` (uncontrolled).
     */
    readonly open: import("@angular/core").ModelSignal<boolean | null>;
    /** Uncontrolled initial open state when `open` is null. */
    readonly defaultOpen: import("@angular/core").InputSignal<boolean>;
    /**
     * When true (default), append the `<dialog>` to `document.body`.
     * Avoids being clipped by parent `overflow` / `transform` / stacking contexts.
     * Native `showModal()` already uses the top layer; portal is for DOM ancestry.
     */
    readonly portal: import("@angular/core").InputSignal<boolean>;
    /** When true (default), Escape closes the dialog. */
    readonly dismissible: import("@angular/core").InputSignal<boolean>;
    /** When true (default), clicking the backdrop (the `<dialog>` itself) closes. */
    readonly closeOnBackdrop: import("@angular/core").InputSignal<boolean>;
    /** Fallback accessible name when no title directive is present. */
    readonly ariaLabel: import("@angular/core").InputSignal<string | null>;
    /** Emits after the dialog opens. */
    readonly opened: import("@angular/core").OutputEmitterRef<void>;
    /** Emits after the dialog closes. */
    readonly closed: import("@angular/core").OutputEmitterRef<void>;
    /** @internal — set by title/description directives */
    readonly titleId: import("@angular/core").ModelSignal<string | null>;
    /** @internal */
    readonly descriptionId: import("@angular/core").ModelSignal<string | null>;
    private releaseTrap;
    private skipCloseEmit;
    private portaled;
    private placeholder;
    private prevOpen;
    /** Effective open state (controlled `open` or `defaultOpen`). */
    readonly isOpen: import("@angular/core").Signal<boolean>;
    constructor();
    /** Open the dialog. */
    show(): void;
    /** Close the dialog (always allowed programmatically). */
    hide(): void;
    /** @internal */
    registerTitle(id: string | null): void;
    /** @internal */
    registerDescription(id: string | null): void;
    onNativeClose(): void;
    /**
     * Native `cancel` fires on Escape before `close`.
     * Prevent default when non-dismissible so the dialog stays open.
     */
    onCancel(event: Event): void;
    onDialogClick(event: MouseEvent): void;
    private syncOpen;
    private applyPortal;
    private teardownPortal;
    static ɵfac: i0.ɵɵFactoryDeclaration<DemlDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DemlDialog, "deml-dialog", never, { "open": { "alias": "open"; "required": false; "isSignal": true; }; "defaultOpen": { "alias": "defaultOpen"; "required": false; "isSignal": true; }; "portal": { "alias": "portal"; "required": false; "isSignal": true; }; "dismissible": { "alias": "dismissible"; "required": false; "isSignal": true; }; "closeOnBackdrop": { "alias": "closeOnBackdrop"; "required": false; "isSignal": true; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; "isSignal": true; }; "titleId": { "alias": "titleId"; "required": false; "isSignal": true; }; "descriptionId": { "alias": "descriptionId"; "required": false; "isSignal": true; }; }, { "open": "openChange"; "opened": "opened"; "closed": "closed"; "titleId": "titleIdChange"; "descriptionId": "descriptionIdChange"; }, never, ["*"], true, never>;
}
//# sourceMappingURL=dialog.d.ts.map