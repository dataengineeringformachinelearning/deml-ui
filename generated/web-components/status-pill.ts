/* AUTO-GENERATED from components/status-pill/status-pill.html — do not edit */
export class DemlStatusPill extends HTMLElement {
  static readonly tagName = "deml-status-pill";
  static readonly componentName = "status-pill";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<span class="status-pill" data-status="up">Up</span>
    <span class="status-pill" data-status="down">Down</span>
    <span class="status-pill" data-status="maintenance">Maintenance</span>`;
    }
  }
}

export function defineStatusPill(): void {
  if (!customElements.get(DemlStatusPill.tagName)) {
    customElements.define(DemlStatusPill.tagName, DemlStatusPill);
  }
}

export default DemlStatusPill;
