/* AUTO-GENERATED from components/bar-chart/bar-chart.html — do not edit */
export class DemlBarChart extends HTMLElement {
  static readonly tagName = "deml-bar-chart";
  static readonly componentName = "bar-chart";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="chart-board" data-chart-board data-chart-ymax="auto">
      <article class="chart-card" data-accent="primary" aria-labelledby="bar-a">
        <header class="chart-card-header">
          <h3 class="chart-card-heading" id="bar-a">Genre</h3>
          <p class="chart-card-meta">Shared Y · 0–max</p>
        </header>
        <div class="chart-card-body">
          <div class="bar-chart-frame area-chart-frame" data-variant="spark" role="img" aria-label="Genre share">
            <div
              class="area-chart-mount"
              data-chart="bar"
              data-series="[82,64,48,36]"
              data-categories='["Synth","Jazz","Folk","Ambient"]'
            ></div>
          </div>
        </div>
      </article>

      <article class="chart-card" data-accent="primary" aria-labelledby="bar-b">
        <header class="chart-card-header">
          <h3 class="chart-card-heading" id="bar-b">Region</h3>
          <p class="chart-card-meta">Same scale</p>
        </header>
        <div class="chart-card-body">
          <div class="bar-chart-frame area-chart-frame" data-variant="spark" role="img" aria-label="Region share">
            <div
              class="area-chart-mount"
              data-chart="bar"
              data-series="[70,52,40,28]"
              data-categories='["NA","EU","APAC","LATAM"]'
            ></div>
          </div>
        </div>
      </article>

      <article class="chart-card" data-accent="primary" aria-labelledby="bar-c">
        <header class="chart-card-header">
          <h3 class="chart-card-heading" id="bar-c">Device</h3>
          <p class="chart-card-meta">Same scale</p>
        </header>
        <div class="chart-card-body">
          <div class="bar-chart-frame area-chart-frame" data-variant="spark" role="img" aria-label="Device share">
            <div
              class="area-chart-mount"
              data-chart="bar"
              data-series="[90,44,30,18]"
              data-categories='["Mobile","Desktop","TV","Other"]'
            ></div>
          </div>
        </div>
      </article>
    </div>`;
    }
  }
}

export function defineBarChart(): void {
  if (!customElements.get(DemlBarChart.tagName)) {
    customElements.define(DemlBarChart.tagName, DemlBarChart);
  }
}

export default DemlBarChart;
