/* AUTO-GENERATED from components/chart/chart.html — do not edit */
export class DemlChart extends HTMLElement {
  static readonly tagName = "deml-chart";
  static readonly componentName = "chart";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<figure class="chart-figure">
      <div class="chart-figure__plot">
        <svg
          class="chart"
          viewBox="0 0 360 150"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Sample line chart"
        >
          <line x1="0" y1="130" x2="360" y2="130" stroke="currentColor" opacity="0.25" />
          <polyline
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            points="0,110 60,85 120,95 180,50 240,70 300,40 360,30"
          />
        </svg>
      </div>
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
