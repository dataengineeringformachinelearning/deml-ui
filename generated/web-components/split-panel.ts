/* AUTO-GENERATED from components/split-panel/split-panel.html — do not edit */
export class DemlSplitPanel extends HTMLElement {
  static readonly tagName = "deml-split-panel";
  static readonly componentName = "split-panel";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="split-panel">
      <div class="split-panel__main">
        <p>Main content region.</p>
      </div>
      <aside class="split-panel__side" aria-label="Details">
        <h3>Details</h3>
        <p>Contextual side panel.</p>
      </aside>
    </div>`;
    }
  }
}

export function defineSplitPanel(): void {
  if (!customElements.get(DemlSplitPanel.tagName)) {
    customElements.define(DemlSplitPanel.tagName, DemlSplitPanel);
  }
}

export default DemlSplitPanel;
