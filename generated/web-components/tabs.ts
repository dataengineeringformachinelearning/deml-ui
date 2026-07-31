/* AUTO-GENERATED from components/tabs/tabs.html — do not edit */
export class DemlTabs extends HTMLElement {
  static readonly tagName = "deml-tabs";
  static readonly componentName = "tabs";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="tabs">
      <div class="tabs__list" role="tablist" aria-label="Sample tabs">
        <button type="button" class="tabs__tab" role="tab" aria-selected="true" aria-controls="tab-panel-1" id="tab-1" tabindex="0">Overview</button>
        <button type="button" class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab-panel-2" id="tab-2" tabindex="-1">Details</button>
        <button type="button" class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab-panel-3" id="tab-3" tabindex="-1">Settings</button>
      </div>
      <div class="tabs__panel" role="tabpanel" id="tab-panel-1" aria-labelledby="tab-1">Overview content.</div>
      <div class="tabs__panel" role="tabpanel" id="tab-panel-2" aria-labelledby="tab-2" hidden>Details content.</div>
      <div class="tabs__panel" role="tabpanel" id="tab-panel-3" aria-labelledby="tab-3" hidden>Settings content.</div>
    </div>`;
    }
  }
}

export function defineTabs(): void {
  if (!customElements.get(DemlTabs.tagName)) {
    customElements.define(DemlTabs.tagName, DemlTabs);
  }
}

export default DemlTabs;
