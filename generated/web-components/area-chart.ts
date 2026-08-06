/* AUTO-GENERATED from components/area-chart/area-chart.html — do not edit */
export class DemlAreaChart extends HTMLElement {
  static readonly tagName = "deml-area-chart";
  static readonly componentName = "area-chart";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="chart-board" data-chart-board data-chart-ymax="auto">
      <article class="chart-card" data-accent="primary" aria-labelledby="area-a">
        <header class="chart-card-header">
          <h3 class="chart-card-heading" id="area-a">Streams</h3>
          <p class="chart-card-meta">Shared Y · 0–max</p>
        </header>
        <div class="chart-card-body">
          <div class="area-chart-frame" data-variant="spark" role="img" aria-label="Streams">
            <div
              class="area-chart-mount"
              data-chart="area"
              data-series="[120,156,142,188,210,196,230]"
              data-categories='["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]'
            ></div>
          </div>
        </div>
      </article>

      <article class="chart-card" data-accent="primary" aria-labelledby="area-b">
        <header class="chart-card-header">
          <h3 class="chart-card-heading" id="area-b">Saves</h3>
          <p class="chart-card-meta">Same scale</p>
        </header>
        <div class="chart-card-body">
          <div class="area-chart-frame" data-variant="spark" role="img" aria-label="Saves">
            <div
              class="area-chart-mount"
              data-chart="area"
              data-series="[48,62,55,70,84,78,96]"
              data-categories='["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]'
            ></div>
          </div>
        </div>
      </article>

      <article class="chart-card" data-accent="primary" aria-labelledby="area-c">
        <header class="chart-card-header">
          <h3 class="chart-card-heading" id="area-c">Shares</h3>
          <p class="chart-card-meta">Same scale</p>
        </header>
        <div class="chart-card-body">
          <div class="area-chart-frame" data-variant="spark" role="img" aria-label="Shares">
            <div
              class="area-chart-mount"
              data-chart="area"
              data-series="[18,22,20,28,34,30,42]"
              data-categories='["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]'
            ></div>
          </div>
        </div>
      </article>
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
