/**
 * deml-ui Angular public API.
 *
 * - Markup wrappers: generated from components HTML (styled by you via CSS)
 * - Headless primitives: unstyled behavior (tabs, dialog, disclosure, menu, combobox)
 */
export * from "./markup/public-api";
export * from "./headless";

import { DEML_MARKUP_COMPONENTS } from "./markup/all-components";
import { DEML_HEADLESS } from "./headless";

/** Markup dumps + headless primitives. */
export const DEML_COMPONENTS = [
  ...DEML_MARKUP_COMPONENTS,
  ...DEML_HEADLESS,
] as const;
