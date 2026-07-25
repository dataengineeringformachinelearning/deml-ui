/* AUTO-GENERATED from components/input-tel/input-tel.html — do not edit */
export class DemlInputTel extends HTMLElement {
  static readonly tagName = "deml-input-tel";
  static readonly componentName = "input-tel";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="input-tel-field">Phone</label>
    <input id="input-tel-field" name="tel" type="tel" placeholder="+1 555 0100">`;
    }
  }
}

export function defineInputTel(): void {
  if (!customElements.get(DemlInputTel.tagName)) {
    customElements.define(DemlInputTel.tagName, DemlInputTel);
  }
}

export default DemlInputTel;
