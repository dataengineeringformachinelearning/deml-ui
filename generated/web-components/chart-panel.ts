/* AUTO-GENERATED from components/chart-panel/chart-panel.html — do not edit */
export class DemlChartPanel extends HTMLElement {
  static readonly tagName = "deml-chart-panel";
  static readonly componentName = "chart-panel";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="chart-board chart-board--panel" data-chart-board data-chart-ymax="auto">
      <section class="chart-panel" data-accent="primary" aria-labelledby="panel-a">
        <header class="chart-panel__header">
          <div class="chart-panel__header-row">
            <h3 class="chart-panel__title" id="panel-a">System latency</h3>
            <p class="chart-panel__value">52<span class="chart-panel__unit">ms</span></p>
          </div>
          <p class="chart-panel__meta">
            <span class="chart-card-trend" data-trend="up">+4%</span>
            Last 24h · shared Y
          </p>
        </header>
        <div class="chart-panel__body">
          <div class="area-chart-frame" data-variant="spark" role="img" aria-label="Latency">
            <div
              class="area-chart-mount"
              data-chart="area"
              data-series="[36,40,38,44,52,48,42]"
              data-categories='["00","04","08","12","16","20","24"]'
            ></div>
          </div>
        </div>
      </section>

      <section class="chart-panel" data-accent="primary" aria-labelledby="panel-b">
        <header class="chart-panel__header">
          <div class="chart-panel__header-row">
            <h3 class="chart-panel__title" id="panel-b">Throughput</h3>
            <p class="chart-panel__value">1.2<span class="chart-panel__unit">k</span></p>
          </div>
          <p class="chart-panel__meta">
            <span class="chart-card-trend" data-trend="up">+9%</span>
            Same scale
          </p>
        </header>
        <div class="chart-panel__body">
          <div class="area-chart-frame" data-variant="spark" role="img" aria-label="Throughput">
            <div
              class="area-chart-mount"
              data-chart="area"
              data-series="[22,28,26,34,40,38,32]"
              data-categories='["00","04","08","12","16","20","24"]'
            ></div>
          </div>
        </div>
      </section>
    </div>`;
    }
  }
}

export function defineChartPanel(): void {
  if (!customElements.get(DemlChartPanel.tagName)) {
    customElements.define(DemlChartPanel.tagName, DemlChartPanel);
  }
}

export default DemlChartPanel;
