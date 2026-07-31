/* AUTO-GENERATED from components/cluster/cluster.html — do not edit */
export class DemlCluster extends HTMLElement {
  static readonly tagName = "deml-cluster";
  static readonly componentName = "cluster";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="cluster">
      <button type="button">Primary</button>
      <button type="button">Secondary</button>
      <span class="badge">Tag</span>
    </div>`;
    }
  }
}

export function defineCluster(): void {
  if (!customElements.get(DemlCluster.tagName)) {
    customElements.define(DemlCluster.tagName, DemlCluster);
  }
}

export default DemlCluster;
