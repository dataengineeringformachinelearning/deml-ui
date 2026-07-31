export { DemlDialog } from "./dialog";
export { DEML_DIALOG } from "./dialog-context";
export { DemlDialogPanel } from "./dialog-panel";
export { DemlDialogTitle } from "./dialog-title";
export { DemlDialogDescription } from "./dialog-description";
export { DemlDialogClose } from "./dialog-close";

import { DemlDialog } from "./dialog";
import { DemlDialogPanel } from "./dialog-panel";
import { DemlDialogTitle } from "./dialog-title";
import { DemlDialogDescription } from "./dialog-description";
import { DemlDialogClose } from "./dialog-close";

/** Convenience import array for standalone apps. */
export const DEML_DIALOG_IMPORTS = [
  DemlDialog,
  DemlDialogPanel,
  DemlDialogTitle,
  DemlDialogDescription,
  DemlDialogClose,
] as const;
