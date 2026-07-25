/* AUTO-GENERATED from components/button-submit/button-submit.html — do not edit */
export class DemlButtonSubmit extends HTMLElement {
  static readonly tagName = "deml-button-submit";
  static readonly componentName = "button-submit";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<button type="submit">Submit</button>`;
    }
  }
}

export function defineButtonSubmit(): void {
  if (!customElements.get(DemlButtonSubmit.tagName)) {
    customElements.define(DemlButtonSubmit.tagName, DemlButtonSubmit);
  }
}

export default DemlButtonSubmit;
