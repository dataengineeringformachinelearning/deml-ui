export type {
  DemlMenuChangeEvent,
  DemlMenuActionEvent,
  DemlMenuItemData,
} from "./types";

export { DemlMenu } from "./menu";
export { DEML_MENU } from "./menu-context";
export { DemlMenuButton } from "./menu-button";
export { DemlMenuItems } from "./menu-items";
export { DemlMenuItem } from "./menu-item";

import { DemlMenu } from "./menu";
import { DemlMenuButton } from "./menu-button";
import { DemlMenuItems } from "./menu-items";
import { DemlMenuItem } from "./menu-item";

/** Convenience import array for standalone apps. */
export const DEML_MENU_IMPORTS = [
  DemlMenu,
  DemlMenuButton,
  DemlMenuItems,
  DemlMenuItem,
] as const;
