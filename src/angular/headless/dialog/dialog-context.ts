import { InjectionToken } from "@angular/core";
import type { DemlDialog } from "./dialog";

/** DI token for dialog parts (panel, title, description, close). */
export const DEML_DIALOG = new InjectionToken<DemlDialog>("DEML_DIALOG");
