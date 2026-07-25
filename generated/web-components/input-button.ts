/* AUTO-GENERATED from components/input-button/input-button.html — do not edit */
export class DemlInputButton extends HTMLElement {
  static readonly tagName = "deml-input-button";
  static readonly componentName = "input-button";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<input type="button" value="Input button">`;
    }
  }
}

export function defineInputButton(): void {
  if (!customElements.get(DemlInputButton.tagName)) {
    customElements.define(DemlInputButton.tagName, DemlInputButton);
  }
}

export default DemlInputButton;
