/* AUTO-GENERATED from components/card-grid/card-grid.html — do not edit */
export class DemlCardGrid extends HTMLElement {
  static readonly tagName = "deml-card-grid";
  static readonly componentName = "card-grid";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="card-grid"><article class="card"><h3 class="card-heading">Card</h3></article></div>`;
    }
  }
}

export function defineCardGrid(): void {
  if (!customElements.get(DemlCardGrid.tagName)) {
    customElements.define(DemlCardGrid.tagName, DemlCardGrid);
  }
}

export default DemlCardGrid;
