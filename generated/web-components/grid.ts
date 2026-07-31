/* AUTO-GENERATED from components/grid/grid.html — do not edit */
export class DemlGrid extends HTMLElement {
  static readonly tagName = "deml-grid";
  static readonly componentName = "grid";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="grid">
      <div class="grid__item">A</div>
      <div class="grid__item">B</div>
      <div class="grid__item">C</div>
      <div class="grid__item">D</div>
    </div>`;
    }
  }
}

export function defineGrid(): void {
  if (!customElements.get(DemlGrid.tagName)) {
    customElements.define(DemlGrid.tagName, DemlGrid);
  }
}

export default DemlGrid;
