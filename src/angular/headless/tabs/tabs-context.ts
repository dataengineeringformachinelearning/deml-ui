import { InjectionToken } from "@angular/core";
import type { DemlTabs } from "./tabs";

/** DI token so tab/panel directives can access the root without DOM coupling. */
export const DEML_TABS = new InjectionToken<DemlTabs>("DEML_TABS");
