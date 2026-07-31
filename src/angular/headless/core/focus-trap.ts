/**
 * Lightweight focus trap for modal surfaces.
 * Uses a focusin listener on document so Tab/Shift+Tab stay inside `root`.
 * Returns a dispose function.
 */
export function createFocusTrap(root: HTMLElement): () => void {
  const getFocusable = (): HTMLElement[] => {
    const nodes = root.querySelectorAll<HTMLElement>(
      [
        "a[href]",
        "button:not([disabled])",
        "textarea:not([disabled])",
        "input:not([disabled])",
        "select:not([disabled])",
        "[tabindex]:not([tabindex='-1'])",
      ].join(",")
    );
    return Array.from(nodes).filter(
      (el) =>
        !el.hasAttribute("disabled") &&
        el.getAttribute("aria-hidden") !== "true" &&
        el.tabIndex >= 0
    );
  };

  const previouslyFocused =
    document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;

  const focusFirst = (): void => {
    const items = getFocusable();
    (items[0] ?? root).focus();
  };

  // Defer so projected content is in the DOM.
  queueMicrotask(focusFirst);

  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key !== "Tab") return;
    const items = getFocusable();
    if (items.length === 0) {
      event.preventDefault();
      root.focus();
      return;
    }
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  };

  root.addEventListener("keydown", onKeyDown);

  return () => {
    root.removeEventListener("keydown", onKeyDown);
    previouslyFocused?.focus?.();
  };
}

/**
 * Subscribes to pointerdown outside `root` (and optional ignore targets).
 * Returns a dispose function.
 */
export function onClickOutside(
  root: HTMLElement,
  handler: (event: PointerEvent) => void,
  ignore: Array<HTMLElement | null | undefined> = []
): () => void {
  const onPointerDown = (event: PointerEvent): void => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (root.contains(target)) return;
    if (ignore.some((el) => el?.contains(target))) return;
    handler(event);
  };
  document.addEventListener("pointerdown", onPointerDown, true);
  return () => document.removeEventListener("pointerdown", onPointerDown, true);
}
