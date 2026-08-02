/**
 * Shared open/selection helpers for headless primitives.
 *
 * Convention:
 * - Open: `open = model<boolean | null>(null)` + `defaultOpen` → `isOpen`
 * - Selection: `value = model<T | null>(null)` + `defaultValue` → `selected`
 * - Lifecycle: `opened` / `closed` where relevant
 * - Rich payloads: `change` (not a duplicate of the model emitter)
 * - Host: `data-state="open" | "closed"` (or `"active" | "inactive"`)
 */
/** Resolve controlled `open` against uncontrolled `defaultOpen`. */
export declare function resolveOpen(open: boolean | null | undefined, defaultOpen: boolean): boolean;
/**
 * Resolve controlled `value` against uncontrolled `defaultValue`, then `fallback`.
 * `null` / `undefined` means “not set” at that layer.
 */
export declare function resolveValue<T>(value: T | null | undefined, defaultValue: T | null | undefined, fallback?: T | null): T | null;
//# sourceMappingURL=open-state.d.ts.map