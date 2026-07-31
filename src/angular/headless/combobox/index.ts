export type {
  DemlComboboxAutocomplete,
  DemlComboboxChangeEvent,
  DemlComboboxOptionData,
} from "./types";

export { DemlCombobox } from "./combobox";
export { DEML_COMBOBOX } from "./combobox-context";
export { DemlComboboxInput } from "./combobox-input";
export { DemlComboboxButton } from "./combobox-button";
export { DemlComboboxOptions } from "./combobox-options";
export { DemlComboboxOption } from "./combobox-option";
export { DemlComboboxLabel } from "./combobox-label";

import { DemlCombobox } from "./combobox";
import { DemlComboboxInput } from "./combobox-input";
import { DemlComboboxButton } from "./combobox-button";
import { DemlComboboxOptions } from "./combobox-options";
import { DemlComboboxOption } from "./combobox-option";
import { DemlComboboxLabel } from "./combobox-label";

/** Convenience import array for standalone apps. */
export const DEML_COMBOBOX_IMPORTS = [
  DemlCombobox,
  DemlComboboxInput,
  DemlComboboxButton,
  DemlComboboxOptions,
  DemlComboboxOption,
  DemlComboboxLabel,
] as const;
