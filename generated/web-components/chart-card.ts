/* AUTO-GENERATED from components/chart-card/chart-card.html — do not edit */
export class DemlChartCard extends HTMLElement {
  static readonly tagName = "deml-chart-card";
  static readonly componentName = "chart-card";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<article class="chart-card"><header class="chart-card__header"><h3>Traffic</h3></header><div class="chart-card__body">Chart</div></article>`;
    }
  }
}

export function defineChartCard(): void {
  if (!customElements.get(DemlChartCard.tagName)) {
    customElements.define(DemlChartCard.tagName, DemlChartCard);
  }
}

export default DemlChartCard;
