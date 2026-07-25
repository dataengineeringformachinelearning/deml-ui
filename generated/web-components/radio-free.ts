/* AUTO-GENERATED from components/radio-free/radio-free.html — do not edit */
export class DemlRadioFree extends HTMLElement {
  static readonly tagName = "deml-radio-free";
  static readonly componentName = "radio-free";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label><input type="radio" name="radio-free" value="free" checked> Free</label>`;
    }
  }
}

export function defineRadioFree(): void {
  if (!customElements.get(DemlRadioFree.tagName)) {
    customElements.define(DemlRadioFree.tagName, DemlRadioFree);
  }
}

export default DemlRadioFree;
