/* AUTO-GENERATED from components/radio-pro/radio-pro.html — do not edit */
export class DemlRadioPro extends HTMLElement {
  static readonly tagName = "deml-radio-pro";
  static readonly componentName = "radio-pro";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label><input type="radio" name="radio-pro" value="pro"> Pro</label>`;
    }
  }
}

export function defineRadioPro(): void {
  if (!customElements.get(DemlRadioPro.tagName)) {
    customElements.define(DemlRadioPro.tagName, DemlRadioPro);
  }
}

export default DemlRadioPro;
