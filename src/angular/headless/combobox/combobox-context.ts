import { InjectionToken } from "@angular/core";
import type { DemlCombobox } from "./combobox";

/** DI token for combobox parts (input, options, button). */
export const DEML_COMBOBOX = new InjectionToken<DemlCombobox>("DEML_COMBOBOX");
