/* AUTO-GENERATED from components/button/button.html — do not edit */
export class DemlButton extends HTMLElement {
  static readonly tagName = "deml-button";
  static readonly componentName = "button";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<button type="button">Button</button>`;
    }
  }
}

export function defineButton(): void {
  if (!customElements.get(DemlButton.tagName)) {
    customElements.define(DemlButton.tagName, DemlButton);
  }
}

export default DemlButton;
