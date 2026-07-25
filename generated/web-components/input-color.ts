/* AUTO-GENERATED from components/input-color/input-color.html — do not edit */
export class DemlInputColor extends HTMLElement {
  static readonly tagName = "deml-input-color";
  static readonly componentName = "input-color";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="input-color-field">Color</label>
    <input id="input-color-field" name="color" type="color" value="#5C2A5A">`;
    }
  }
}

export function defineInputColor(): void {
  if (!customElements.get(DemlInputColor.tagName)) {
    customElements.define(DemlInputColor.tagName, DemlInputColor);
  }
}

export default DemlInputColor;
