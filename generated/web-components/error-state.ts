/* AUTO-GENERATED from components/error-state/error-state.html — do not edit */
export class DemlErrorState extends HTMLElement {
  static readonly tagName = "deml-error-state";
  static readonly componentName = "error-state";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="error-state" role="alert">
      <p class="error-state__title">Something went wrong</p>
      <p class="error-state__description">We could not load this resource. Try again.</p>
      <div class="error-state__actions">
        <button type="button">Retry</button>
      </div>
    </div>`;
    }
  }
}

export function defineErrorState(): void {
  if (!customElements.get(DemlErrorState.tagName)) {
    customElements.define(DemlErrorState.tagName, DemlErrorState);
  }
}

export default DemlErrorState;
