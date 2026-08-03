/* AUTO-GENERATED from components/chart-card/chart-card.html — do not edit */
export class DemlChartCard extends HTMLElement {
  static readonly tagName = "deml-chart-card";
  static readonly componentName = "chart-card";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<article class="chart-card" aria-labelledby="chart-card-demo-heading">
      <header class="chart-card-header">
        <h3 class="chart-card-heading" id="chart-card-demo-heading">Traffic</h3>
        <p class="chart-card-meta">Last 7 days</p>
      </header>
      <div class="chart-card-body">
        <div class="area-chart-frame" role="img" aria-label="Sample area chart">
          <svg
            class="area-chart"
            viewBox="0 0 360 150"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
            focusable="false"
          >
            <polyline
              class="area-chart-line"
              fill="none"
              points="32,110 80,90 140,95 200,50 260,70 320,40"
            />
          </svg>
        </div>
      </div>
    </article>`;
    }
  }
}

export function defineChartCard(): void {
  if (!customElements.get(DemlChartCard.tagName)) {
    customElements.define(DemlChartCard.tagName, DemlChartCard);
  }
}

export default DemlChartCard;
