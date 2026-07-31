/* AUTO-GENERATED from components/chart/chart.html — do not edit */
export class DemlChart extends HTMLElement {
  static readonly tagName = "deml-chart";
  static readonly componentName = "chart";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<figure class="chart-figure">
      <svg class="chart" viewBox="0 0 240 120" width="100%" height="120" role="img" aria-label="Sample line chart">
        <line x1="0" y1="110" x2="240" y2="110" stroke="currentColor" opacity="0.25" />
        <polyline fill="none" stroke="currentColor" stroke-width="2" points="0,90 40,70 80,75 120,40 160,55 200,30 240,20" />
      </svg>
      <figcaption>Chart placeholder (native SVG)</figcaption>
    </figure>`;
    }
  }
}

export function defineChart(): void {
  if (!customElements.get(DemlChart.tagName)) {
    customElements.define(DemlChart.tagName, DemlChart);
  }
}

export default DemlChart;
