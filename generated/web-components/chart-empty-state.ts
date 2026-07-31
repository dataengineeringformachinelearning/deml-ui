/* AUTO-GENERATED from components/chart-empty-state/chart-empty-state.html — do not edit */
export class DemlChartEmptyState extends HTMLElement {
  static readonly tagName = "deml-chart-empty-state";
  static readonly componentName = "chart-empty-state";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="chart-empty-state" role="status">
      <p class="chart-empty-state__title">No chart data</p>
      <p class="chart-empty-state__description">Data will appear here once available.</p>
    </div>`;
    }
  }
}

export function defineChartEmptyState(): void {
  if (!customElements.get(DemlChartEmptyState.tagName)) {
    customElements.define(DemlChartEmptyState.tagName, DemlChartEmptyState);
  }
}

export default DemlChartEmptyState;
