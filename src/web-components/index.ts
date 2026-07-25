/**
 * deml web components entry.
 * Registers all custom elements and re-exports generated classes.
 */
import { defineAll } from "../../generated/web-components/registry.js";

export * from "../../generated/web-components/index.js";
export { defineAll };

// Auto-register when loaded as a browser bundle / side-effect import
defineAll();
