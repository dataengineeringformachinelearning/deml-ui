/* AUTO-GENERATED from components/area-chart/area-chart.html — do not edit */
export class DemlAreaChart extends HTMLElement {
  static readonly tagName = "deml-area-chart";
  static readonly componentName = "area-chart";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="area-chart-frame" role="img" aria-label="Area chart">
      <svg
        class="area-chart"
        viewBox="0 0 360 150"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        focusable="false"
      >
        <line class="area-chart-baseline" x1="32" y1="120" x2="348" y2="120" />
        <polyline
          class="area-chart-line"
          fill="none"
          points="32,110 80,90 140,95 200,50 260,70 320,40"
        />
      </svg>
    </div>`;
    }
  }
}

export function defineAreaChart(): void {
  if (!customElements.get(DemlAreaChart.tagName)) {
    customElements.define(DemlAreaChart.tagName, DemlAreaChart);
  }
}

export default DemlAreaChart;
