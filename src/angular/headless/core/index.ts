/**
 * Shared headless utilities (ids, keyboard, focus, open-state).
 * @packageDocumentation
 */

export { demlId } from "./id";
export {
  nextRovingIndex,
  isActivationKey,
  TypeaheadBuffer,
  findTypeaheadIndex,
  type RovingOrientation,
} from "./keyboard";
export { createFocusTrap, onClickOutside } from "./focus-trap";
export { resolveOpen, resolveValue } from "./open-state";
