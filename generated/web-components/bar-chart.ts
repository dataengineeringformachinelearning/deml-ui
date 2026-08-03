/* AUTO-GENERATED from components/bar-chart/bar-chart.html — do not edit */
export class DemlBarChart extends HTMLElement {
  static readonly tagName = "deml-bar-chart";
  static readonly componentName = "bar-chart";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<ul class="bar-chart" role="list" aria-label="Bar chart">
      <li class="bar-chart-row">
        <div class="bar-chart-meta">
          <span class="bar-chart-label">Alpha</span>
          <span class="bar-chart-value">80%</span>
        </div>
        <div class="bar-chart-track" aria-hidden="true">
          <div class="bar-chart-fill" style="width: 80%"></div>
        </div>
      </li>
      <li class="bar-chart-row">
        <div class="bar-chart-meta">
          <span class="bar-chart-label">Beta</span>
          <span class="bar-chart-value">55%</span>
        </div>
        <div class="bar-chart-track" aria-hidden="true">
          <div class="bar-chart-fill" style="width: 55%"></div>
        </div>
      </li>
      <li class="bar-chart-row">
        <div class="bar-chart-meta">
          <span class="bar-chart-label">Gamma</span>
          <span class="bar-chart-value">35%</span>
        </div>
        <div class="bar-chart-track" aria-hidden="true">
          <div class="bar-chart-fill" style="width: 35%"></div>
        </div>
      </li>
    </ul>`;
    }
  }
}

export function defineBarChart(): void {
  if (!customElements.get(DemlBarChart.tagName)) {
    customElements.define(DemlBarChart.tagName, DemlBarChart);
  }
}

export default DemlBarChart;
