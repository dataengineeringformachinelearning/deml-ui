export { DemlTabs } from "./tabs";
export { DEML_TABS } from "./tabs-context";
export { DemlTabList } from "./tab-list";
export { DemlTab } from "./tab";
export { DemlTabPanel } from "./tab-panel";

import { DemlTabs } from "./tabs";
import { DemlTabList } from "./tab-list";
import { DemlTab } from "./tab";
import { DemlTabPanel } from "./tab-panel";

/** Convenience import array for standalone apps. */
export const DEML_TABS_IMPORTS = [
  DemlTabs,
  DemlTabList,
  DemlTab,
  DemlTabPanel,
] as const;
