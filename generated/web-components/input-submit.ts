/* AUTO-GENERATED from components/input-submit/input-submit.html — do not edit */
export class DemlInputSubmit extends HTMLElement {
  static readonly tagName = "deml-input-submit";
  static readonly componentName = "input-submit";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<input type="submit" value="Input submit">`;
    }
  }
}

export function defineInputSubmit(): void {
  if (!customElements.get(DemlInputSubmit.tagName)) {
    customElements.define(DemlInputSubmit.tagName, DemlInputSubmit);
  }
}

export default DemlInputSubmit;
