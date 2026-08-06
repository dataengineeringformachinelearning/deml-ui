/* AUTO-GENERATED from components/chart-empty-state/chart-empty-state.html — do not edit */
export class DemlChartEmptyState extends HTMLElement {
  static readonly tagName = "deml-chart-empty-state";
  static readonly componentName = "chart-empty-state";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="chart-board chart-board--empty">
      <div class="chart-empty-state" data-layout="fill" role="status">
        <span class="chart-empty-state__badge" aria-hidden="true"></span>
        <p class="chart-empty-state__title">No chart data</p>
        <p class="chart-empty-state__description">Signals appear once telemetry lands.</p>
      </div>

      <div class="chart-empty-state" data-layout="inline" role="status">
        <span class="chart-empty-state__badge" aria-hidden="true"></span>
        <p class="chart-empty-state__title">Awaiting signal</p>
        <p class="chart-empty-state__description">Connect a stream to populate this tile.</p>
      </div>

      <div class="chart-empty-state" data-layout="loading" role="status" aria-busy="true">
        <span class="chart-empty-state__skeleton" aria-hidden="true"></span>
        <p class="chart-empty-state__title">Loading series</p>
        <p class="chart-empty-state__description">Fetching the latest board domain.</p>
      </div>
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
