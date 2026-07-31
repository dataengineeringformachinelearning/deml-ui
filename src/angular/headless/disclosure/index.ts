export { DemlDisclosure } from "./disclosure";
export { DEML_DISCLOSURE } from "./disclosure-context";
export { DemlDisclosureButton } from "./disclosure-button";
export { DemlDisclosurePanel } from "./disclosure-panel";

import { DemlDisclosure } from "./disclosure";
import { DemlDisclosureButton } from "./disclosure-button";
import { DemlDisclosurePanel } from "./disclosure-panel";

/** Convenience import array for standalone apps. */
export const DEML_DISCLOSURE_IMPORTS = [
  DemlDisclosure,
  DemlDisclosureButton,
  DemlDisclosurePanel,
] as const;
