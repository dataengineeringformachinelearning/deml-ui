/* AUTO-GENERATED from components/chart-panel/chart-panel.html — do not edit */
export class DemlChartPanel extends HTMLElement {
  static readonly tagName = "deml-chart-panel";
  static readonly componentName = "chart-panel";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<section class="chart-panel" aria-labelledby="chart-panel-title">
      <header class="chart-panel__header">
        <h3 id="chart-panel-title">Chart panel</h3>
        <p class="chart-panel__value">42</p>
      </header>
      <div class="chart-panel__body" role="img" aria-label="Sample chart placeholder">
        <svg class="chart" viewBox="0 0 200 80" width="100%" height="80" aria-hidden="true">
          <polyline fill="none" stroke="currentColor" stroke-width="2" points="0,60 40,40 80,50 120,20 160,35 200,10" />
        </svg>
      </div>
    </section>`;
    }
  }
}

export function defineChartPanel(): void {
  if (!customElements.get(DemlChartPanel.tagName)) {
    customElements.define(DemlChartPanel.tagName, DemlChartPanel);
  }
}

export default DemlChartPanel;
