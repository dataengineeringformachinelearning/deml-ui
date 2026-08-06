/* AUTO-GENERATED from components/donut-chart/donut-chart.html — do not edit */
export class DemlDonutChart extends HTMLElement {
  static readonly tagName = "deml-donut-chart";
  static readonly componentName = "donut-chart";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="chart-board chart-board--donut">
      <article class="chart-card" data-accent="primary" aria-labelledby="donut-a">
        <header class="chart-card-header">
          <h3 class="chart-card-heading" id="donut-a">Severity</h3>
          <p class="chart-card-meta">Threat mix</p>
        </header>
        <div class="chart-card-body">
          <div class="donut-chart-frame" role="img" aria-label="Severity distribution">
            <div
              class="donut-chart"
              data-chart="donut"
              data-center="128"
              data-segments='[{"label":"Critical","value":18,"tone":"red"},{"label":"High","value":34,"tone":"primary"},{"label":"Medium","value":46,"tone":"gold"},{"label":"Low","value":30,"tone":"muted"}]'
            ></div>
          </div>
        </div>
      </article>

      <article class="chart-card" data-accent="primary" aria-labelledby="donut-b">
        <header class="chart-card-header">
          <h3 class="chart-card-heading" id="donut-b">Sources</h3>
          <p class="chart-card-meta">Ingest share</p>
        </header>
        <div class="chart-card-body">
          <div class="donut-chart-frame" role="img" aria-label="Source distribution">
            <div
              class="donut-chart"
              data-chart="donut"
              data-center="96"
              data-segments='[{"label":"API","value":42,"tone":"primary"},{"label":"Agent","value":28,"tone":"gold"},{"label":"Batch","value":16,"tone":"muted"},{"label":"Other","value":10,"tone":"red"}]'
            ></div>
          </div>
        </div>
      </article>

      <article class="chart-card" data-accent="primary" aria-labelledby="donut-c">
        <header class="chart-card-header">
          <h3 class="chart-card-heading" id="donut-c">Outcomes</h3>
          <p class="chart-card-meta">Playbooks</p>
        </header>
        <div class="chart-card-body">
          <div class="donut-chart-frame" role="img" aria-label="Outcome distribution">
            <div
              class="donut-chart"
              data-chart="donut"
              data-center="64"
              data-segments='[{"label":"Cleared","value":38,"tone":"gold"},{"label":"Open","value":16,"tone":"primary"},{"label":"Blocked","value":10,"tone":"red"}]'
            ></div>
          </div>
        </div>
      </article>
    </div>`;
    }
  }
}

export function defineDonutChart(): void {
  if (!customElements.get(DemlDonutChart.tagName)) {
    customElements.define(DemlDonutChart.tagName, DemlDonutChart);
  }
}

export default DemlDonutChart;
