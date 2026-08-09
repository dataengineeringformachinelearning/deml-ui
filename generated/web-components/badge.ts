/* AUTO-GENERATED from components/badge/badge.html — do not edit */
export class DemlBadge extends HTMLElement {
  static readonly tagName = "deml-badge";
  static readonly componentName = "badge";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<span class="badge">Badge</span>
    <span class="badge" data-tone="neutral">Neutral</span>
    <span class="badge" data-tone="info">Info</span>
    <span class="badge" data-tone="success">Success</span>
    <span class="badge" data-tone="warning">Warning</span>
    <span class="badge" data-tone="danger">Danger</span>`;
    }
  }
}

export function defineBadge(): void {
  if (!customElements.get(DemlBadge.tagName)) {
    customElements.define(DemlBadge.tagName, DemlBadge);
  }
}

export default DemlBadge;
