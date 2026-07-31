/* AUTO-GENERATED from components/toast/toast.html — do not edit */
export class DemlToast extends HTMLElement {
  static readonly tagName = "deml-toast";
  static readonly componentName = "toast";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="toast" role="status">
      <p class="toast__title">Saved</p>
      <p class="toast__description">Your changes were saved.</p>
      <button type="button" class="toast__close" aria-label="Dismiss">×</button>
    </div>`;
    }
  }
}

export function defineToast(): void {
  if (!customElements.get(DemlToast.tagName)) {
    customElements.define(DemlToast.tagName, DemlToast);
  }
}

export default DemlToast;
