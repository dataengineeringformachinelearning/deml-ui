/* AUTO-GENERATED from components/metric-card/metric-card.html — do not edit */
export class DemlMetricCard extends HTMLElement {
  static readonly tagName = "deml-metric-card";
  static readonly componentName = "metric-card";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<article class="stat-card metric-card">
      <p class="stat-card__label metric-card__label">Sessions</p>
      <p class="stat-card__value metric-card__value">1.2k</p>
      <p class="stat-card__delta metric-card__trend">+4.2%</p>
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
