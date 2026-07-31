/* AUTO-GENERATED from components/status-badge/status-badge.html — do not edit */
export class DemlStatusBadge extends HTMLElement {
  static readonly tagName = "deml-status-badge";
  static readonly componentName = "status-badge";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<span class="status-badge" data-tone="success">
      <span class="status-badge__dot" aria-hidden="true"></span>
      Operational
    </span>
    <span class="status-badge" data-tone="danger">
      <span class="status-badge__dot" aria-hidden="true"></span>
      Degraded
    </span>`;
    }
  }
}

export function defineStatusBadge(): void {
  if (!customElements.get(DemlStatusBadge.tagName)) {
    customElements.define(DemlStatusBadge.tagName, DemlStatusBadge);
  }
}

export default DemlStatusBadge;
