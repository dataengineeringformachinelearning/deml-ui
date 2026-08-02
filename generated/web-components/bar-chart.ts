/* AUTO-GENERATED from components/bar-chart/bar-chart.html — do not edit */
export class DemlBarChart extends HTMLElement {
  static readonly tagName = "deml-bar-chart";
  static readonly componentName = "bar-chart";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="bar-chart" role="img" aria-label="Bar chart"></div>`;
    }
  }
}

export function defineBarChart(): void {
  if (!customElements.get(DemlBarChart.tagName)) {
    customElements.define(DemlBarChart.tagName, DemlBarChart);
  }
}

export default DemlBarChart;
