/* AUTO-GENERATED from components/stat-card/stat-card.html — do not edit */
export class DemlStatCard extends HTMLElement {
  static readonly tagName = "deml-stat-card";
  static readonly componentName = "stat-card";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<article class="stat-card"><p class="stat-card__label">Sessions</p><p class="stat-card__value">1.2k</p><p class="stat-card__delta">+4%</p></article>`;
    }
  }
}

export function defineStatCard(): void {
  if (!customElements.get(DemlStatCard.tagName)) {
    customElements.define(DemlStatCard.tagName, DemlStatCard);
  }
}

export default DemlStatCard;
