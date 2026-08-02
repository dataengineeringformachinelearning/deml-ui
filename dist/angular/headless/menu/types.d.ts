/**
 * Public types for the headless Menu.
 */
/** Emitted from the root `change` output when a menu item is activated. */
export interface DemlMenuChangeEvent {
    /** Item `value` when provided; otherwise `null`. */
    value: string | null;
    /** Resolved label text of the activated item. */
    label: string;
}
/**
 * @deprecated Use {@link DemlMenuChangeEvent}.
 */
export type DemlMenuActionEvent = DemlMenuChangeEvent;
/** Snapshot of a registered menu item. */
export interface DemlMenuItemData {
    value: string | null;
    label: string;
    disabled: boolean;
}
//# sourceMappingURL=types.d.ts.map