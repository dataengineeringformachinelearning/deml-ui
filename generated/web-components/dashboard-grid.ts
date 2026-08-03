/* AUTO-GENERATED from components/dashboard-grid/dashboard-grid.html — do not edit */
export class DemlDashboardGrid extends HTMLElement {
  static readonly tagName = "deml-dashboard-grid";
  static readonly componentName = "dashboard-grid";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="dashboard-grid">
      <div class="dashboard-grid__cell" data-size="sm">Tile SM</div>
      <div class="dashboard-grid__cell" data-size="md">Tile MD</div>
      <div class="dashboard-grid__cell" data-size="sm">Tile SM</div>
    </div>`;
    }
  }
}

export function defineDashboardGrid(): void {
  if (!customElements.get(DemlDashboardGrid.tagName)) {
    customElements.define(DemlDashboardGrid.tagName, DemlDashboardGrid);
  }
}

export default DemlDashboardGrid;
