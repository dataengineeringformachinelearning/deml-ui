/* AUTO-GENERATED from components/metric-card/metric-card.html — do not edit */
export class DemlMetricCard extends HTMLElement {
  static readonly tagName = "deml-metric-card";
  static readonly componentName = "metric-card";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<article class="metric-card" role="group" aria-label="Active users">
      <p class="metric-card__label">Active users</p>
      <p class="metric-card__value">1,284</p>
      <p class="metric-card__trend">+12% vs last week</p>
    </article>`;
    }
  }
}

export function defineMetricCard(): void {
  if (!customElements.get(DemlMetricCard.tagName)) {
    customElements.define(DemlMetricCard.tagName, DemlMetricCard);
  }
}

export default DemlMetricCard;
