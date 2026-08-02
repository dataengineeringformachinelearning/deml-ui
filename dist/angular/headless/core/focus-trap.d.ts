/**
 * Lightweight focus trap for modal surfaces.
 * Uses a focusin listener on document so Tab/Shift+Tab stay inside `root`.
 * Returns a dispose function.
 */
export declare function createFocusTrap(root: HTMLElement): () => void;
/**
 * Subscribes to pointerdown outside `root` (and optional ignore targets).
 * Returns a dispose function.
 */
export declare function onClickOutside(root: HTMLElement, handler: (event: PointerEvent) => void, ignore?: Array<HTMLElement | null | undefined>): () => void;
//# sourceMappingURL=focus-trap.d.ts.map