/* AUTO-GENERATED from components/chart/chart.html — do not edit */
export class DemlChart extends HTMLElement {
  static readonly tagName = "deml-chart";
  static readonly componentName = "chart";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="chart-board" data-chart-board data-chart-ymax="auto">
      <article class="chart-card" data-accent="primary" aria-labelledby="line-a">
        <header class="chart-card-header">
          <h3 class="chart-card-heading" id="line-a">Latency</h3>
          <p class="chart-card-meta">p95 · shared Y</p>
        </header>
        <div class="chart-card-body">
          <div class="area-chart-frame" data-variant="spark" role="img" aria-label="Latency line">
            <div
              class="area-chart-mount"
              data-chart="line"
              data-series="[42,38,45,40,52,48,44]"
              data-categories='["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]'
            ></div>
          </div>
        </div>
      </article>

      <article class="chart-card" data-accent="primary" aria-labelledby="line-b">
        <header class="chart-card-header">
          <h3 class="chart-card-heading" id="line-b">Errors</h3>
          <p class="chart-card-meta">Same scale</p>
        </header>
        <div class="chart-card-body">
          <div class="area-chart-frame" data-variant="spark" role="img" aria-label="Errors line">
            <div
              class="area-chart-mount"
              data-chart="line"
              data-series="[12,9,14,11,18,15,10]"
              data-categories='["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]'
            ></div>
          </div>
        </div>
      </article>

      <article class="chart-card" data-accent="primary" aria-labelledby="line-c">
        <header class="chart-card-header">
          <h3 class="chart-card-heading" id="line-c">Saturation</h3>
          <p class="chart-card-meta">Same scale</p>
        </header>
        <div class="chart-card-body">
          <div class="area-chart-frame" data-variant="spark" role="img" aria-label="Saturation line">
            <div
              class="area-chart-mount"
              data-chart="line"
              data-series="[28,30,26,33,31,29,27]"
              data-categories='["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]'
            ></div>
          </div>
        </div>
      </article>
    </div>`;
    }
  }
}

export function defineChart(): void {
  if (!customElements.get(DemlChart.tagName)) {
    customElements.define(DemlChart.tagName, DemlChart);
  }
}

export default DemlChart;
