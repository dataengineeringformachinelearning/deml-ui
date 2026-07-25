/* AUTO-GENERATED from components/button-reset/button-reset.html — do not edit */
export class DemlButtonReset extends HTMLElement {
  static readonly tagName = "deml-button-reset";
  static readonly componentName = "button-reset";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<button type="reset">Reset</button>`;
    }
  }
}

export function defineButtonReset(): void {
  if (!customElements.get(DemlButtonReset.tagName)) {
    customElements.define(DemlButtonReset.tagName, DemlButtonReset);
  }
}

export default DemlButtonReset;
