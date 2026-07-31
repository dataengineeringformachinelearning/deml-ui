/* AUTO-GENERATED from components/status-card/status-card.html — do not edit */
export class DemlStatusCard extends HTMLElement {
  static readonly tagName = "deml-status-card";
  static readonly componentName = "status-card";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<article class="status-card">
      <header class="status-card__header">
        <h3 class="status-card__title">API</h3>
        <span class="status-pill" data-status="up">Operational</span>
      </header>
      <p class="status-card__description">Public API endpoints.</p>
      <p class="status-card__uptime">Uptime 99.99%</p>
    </article>`;
    }
  }
}

export function defineStatusCard(): void {
  if (!customElements.get(DemlStatusCard.tagName)) {
    customElements.define(DemlStatusCard.tagName, DemlStatusCard);
  }
}

export default DemlStatusCard;
