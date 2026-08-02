/**
 * Shared keyboard helpers for headless widgets (roving tabindex, menus, tabs).
 */
export type RovingOrientation = "horizontal" | "vertical" | "both";
/**
 * Returns the next index for arrow / Home / End navigation.
 * Wraps at edges. Returns `null` when the event key is unrelated.
 */
export declare function nextRovingIndex(event: KeyboardEvent, current: number, count: number, orientation?: RovingOrientation): number | null;
/** True when the key activates a button-like control. */
export declare function isActivationKey(event: KeyboardEvent): boolean;
/**
 * Buffer for WAI-ARIA menu/listbox character typeahead.
 * Resets after `timeoutMs` of inactivity (APG recommends ~500ms).
 */
export declare class TypeaheadBuffer {
    private readonly timeoutMs;
    private buffer;
    private timer;
    constructor(timeoutMs?: number);
    /** Push a printable character; returns the current buffer. */
    push(char: string): string;
    clear(): void;
    dispose(): void;
}
/**
 * Find the next item index matching a typeahead buffer.
 * Searches from `fromIndex + 1`, then wraps. Returns -1 when none match.
 */
export declare function findTypeaheadIndex(buffer: string, labels: readonly string[], fromIndex: number, isEnabled?: (index: number) => boolean): number;
//# sourceMappingURL=keyboard.d.ts.map