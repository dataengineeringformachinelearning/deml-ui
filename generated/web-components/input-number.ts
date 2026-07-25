/* AUTO-GENERATED from components/input-number/input-number.html — do not edit */
export class DemlInputNumber extends HTMLElement {
  static readonly tagName = "deml-input-number";
  static readonly componentName = "input-number";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="input-number-field">Number</label>
    <input id="input-number-field" name="number" type="number" min="0" max="100" step="1" value="10">`;
    }
  }
}

export function defineInputNumber(): void {
  if (!customElements.get(DemlInputNumber.tagName)) {
    customElements.define(DemlInputNumber.tagName, DemlInputNumber);
  }
}

export default DemlInputNumber;
