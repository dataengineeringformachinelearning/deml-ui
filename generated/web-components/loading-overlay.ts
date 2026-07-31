/* AUTO-GENERATED from components/loading-overlay/loading-overlay.html — do not edit */
export class DemlLoadingOverlay extends HTMLElement {
  static readonly tagName = "deml-loading-overlay";
  static readonly componentName = "loading-overlay";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="loading-overlay" role="status" aria-busy="true" aria-label="Loading">
      <span class="loading-overlay__message">Loading…</span>
    </div>`;
    }
  }
}

export function defineLoadingOverlay(): void {
  if (!customElements.get(DemlLoadingOverlay.tagName)) {
    customElements.define(DemlLoadingOverlay.tagName, DemlLoadingOverlay);
  }
}

export default DemlLoadingOverlay;
