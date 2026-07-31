/**
 * deml-ui headless Angular primitives.
 *
 * Unstyled, accessible building blocks. Apply your own classes/CSS.
 * See `CONVENTIONS.md` and `USAGE.md` in this folder.
 *
 * @packageDocumentation
 */

export * from "./core";

export * from "./tabs";
export * from "./dialog";
export * from "./disclosure";
export * from "./combobox";
export * from "./menu";

import { DEML_TABS_IMPORTS } from "./tabs";
import { DEML_DIALOG_IMPORTS } from "./dialog";
import { DEML_DISCLOSURE_IMPORTS } from "./disclosure";
import { DEML_COMBOBOX_IMPORTS } from "./combobox";
import { DEML_MENU_IMPORTS } from "./menu";

/** All headless standalone directives/components. */
export const DEML_HEADLESS = [
  ...DEML_TABS_IMPORTS,
  ...DEML_DIALOG_IMPORTS,
  ...DEML_DISCLOSURE_IMPORTS,
  ...DEML_COMBOBOX_IMPORTS,
  ...DEML_MENU_IMPORTS,
] as const;
