/* AUTO-GENERATED from components/chart-card/chart-card.html — do not edit */
export class DemlChartCard extends HTMLElement {
  static readonly tagName = "deml-chart-card";
  static readonly componentName = "chart-card";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="chart-board" data-chart-board data-chart-ymax="auto">
      <article class="chart-card" data-accent="primary" aria-labelledby="cc-a">
        <header class="chart-card-header">
          <div class="chart-card-header__row">
            <h3 class="chart-card-heading" id="cc-a">Listen time</h3>
            <p class="chart-card-value">230<span class="chart-card-unit">m</span></p>
          </div>
          <p class="chart-card-meta">
            <span class="chart-card-trend" data-trend="up">+12%</span>
            Last 7 days
          </p>
        </header>
        <div class="chart-card-body">
          <div class="area-chart-frame" data-variant="spark" role="img" aria-label="Listen time">
            <div
              class="area-chart-mount"
              data-chart="area"
              data-series="[120,156,142,188,210,196,230]"
              data-categories='["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]'
            ></div>
          </div>
        </div>
      </article>

      <article class="chart-card" data-accent="primary" aria-labelledby="cc-b">
        <header class="chart-card-header">
          <div class="chart-card-header__row">
            <h3 class="chart-card-heading" id="cc-b">Playlist adds</h3>
            <p class="chart-card-value">74</p>
          </div>
          <p class="chart-card-meta">
            <span class="chart-card-trend" data-trend="up">+8%</span>
            Same Y scale
          </p>
        </header>
        <div class="chart-card-body">
          <div class="area-chart-frame" data-variant="spark" role="img" aria-label="Playlist adds">
            <div
              class="area-chart-mount"
              data-chart="area"
              data-series="[32,40,38,55,62,58,74]"
              data-categories='["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]'
            ></div>
          </div>
        </div>
      </article>

      <article class="chart-card" data-accent="primary" aria-labelledby="cc-c">
        <header class="chart-card-header">
          <div class="chart-card-header__row">
            <h3 class="chart-card-heading" id="cc-c">Follows</h3>
            <p class="chart-card-value">34</p>
          </div>
          <p class="chart-card-meta">
            <span class="chart-card-trend" data-trend="down">−3%</span>
            Same Y scale
          </p>
        </header>
        <div class="chart-card-body">
          <div class="area-chart-frame" data-variant="spark" role="img" aria-label="Follows">
            <div
              class="area-chart-mount"
              data-chart="area"
              data-series="[14,18,16,22,28,26,34]"
              data-categories='["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]'
            ></div>
          </div>
        </div>
      </article>
    </div>`;
    }
  }
}

export function defineChartCard(): void {
  if (!customElements.get(DemlChartCard.tagName)) {
    customElements.define(DemlChartCard.tagName, DemlChartCard);
  }
}

export default DemlChartCard;
