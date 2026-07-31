/**
 * Shared keyboard helpers for headless widgets (roving tabindex, menus, tabs).
 */

export type RovingOrientation = "horizontal" | "vertical" | "both";

/**
 * Returns the next index for arrow / Home / End navigation.
 * Wraps at edges. Returns `null` when the event key is unrelated.
 */
export function nextRovingIndex(
  event: KeyboardEvent,
  current: number,
  count: number,
  orientation: RovingOrientation = "horizontal"
): number | null {
  if (count <= 0) return null;

  const key = event.key;
  const horizontal =
    orientation === "horizontal" || orientation === "both";
  const vertical = orientation === "vertical" || orientation === "both";

  if (key === "Home") return 0;
  if (key === "End") return count - 1;

  if (horizontal && key === "ArrowRight") return (current + 1) % count;
  if (horizontal && key === "ArrowLeft") {
    return (current - 1 + count) % count;
  }
  if (vertical && key === "ArrowDown") return (current + 1) % count;
  if (vertical && key === "ArrowUp") {
    return (current - 1 + count) % count;
  }

  return null;
}

/** True when the key activates a button-like control. */
export function isActivationKey(event: KeyboardEvent): boolean {
  return event.key === "Enter" || event.key === " ";
}

/**
 * Buffer for WAI-ARIA menu/listbox character typeahead.
 * Resets after `timeoutMs` of inactivity (APG recommends ~500ms).
 */
export class TypeaheadBuffer {
  private buffer = "";
  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor(private readonly timeoutMs = 500) {}

  /** Push a printable character; returns the current buffer. */
  push(char: string): string {
    if (char.length !== 1 || char === " ") return this.buffer;
    this.buffer += char.toLowerCase();
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.buffer = "";
      this.timer = null;
    }, this.timeoutMs);
    return this.buffer;
  }

  clear(): void {
    this.buffer = "";
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  dispose(): void {
    this.clear();
  }
}

/**
 * Find the next item index matching a typeahead buffer.
 * Searches from `fromIndex + 1`, then wraps. Returns -1 when none match.
 */
export function findTypeaheadIndex(
  buffer: string,
  labels: readonly string[],
  fromIndex: number,
  isEnabled: (index: number) => boolean = () => true
): number {
  if (!buffer || labels.length === 0) return -1;
  const start = fromIndex + 1;
  for (let offset = 0; offset < labels.length; offset++) {
    const i = (start + offset) % labels.length;
    if (!isEnabled(i)) continue;
    if (labels[i]!.toLowerCase().startsWith(buffer)) return i;
  }
  return -1;
}
