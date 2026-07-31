import { InjectionToken } from "@angular/core";
import type { DemlMenu } from "./menu";

/** DI token for menu parts (button, items, item). */
export const DEML_MENU = new InjectionToken<DemlMenu>("DEML_MENU");
