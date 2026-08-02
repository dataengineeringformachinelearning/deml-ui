/* AUTO-GENERATED from components/area-chart/area-chart.html — do not edit */
export class DemlAreaChart extends HTMLElement {
  static readonly tagName = "deml-area-chart";
  static readonly componentName = "area-chart";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="area-chart" role="img" aria-label="Area chart"></div>`;
    }
  }
}

export function defineAreaChart(): void {
  if (!customElements.get(DemlAreaChart.tagName)) {
    customElements.define(DemlAreaChart.tagName, DemlAreaChart);
  }
}

export default DemlAreaChart;
