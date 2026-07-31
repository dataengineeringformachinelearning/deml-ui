/* AUTO-GENERATED from components/spinner/spinner.html — do not edit */
export class DemlSpinner extends HTMLElement {
  static readonly tagName = "deml-spinner";
  static readonly componentName = "spinner";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<span class="spinner" role="status" aria-label="Loading">
      <span class="spinner__visual" aria-hidden="true"></span>
    </span>`;
    }
  }
}

export function defineSpinner(): void {
  if (!customElements.get(DemlSpinner.tagName)) {
    customElements.define(DemlSpinner.tagName, DemlSpinner);
  }
}

export default DemlSpinner;
