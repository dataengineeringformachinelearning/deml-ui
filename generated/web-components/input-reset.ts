/* AUTO-GENERATED from components/input-reset/input-reset.html — do not edit */
export class DemlInputReset extends HTMLElement {
  static readonly tagName = "deml-input-reset";
  static readonly componentName = "input-reset";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<input type="reset" value="Input reset">`;
    }
  }
}

export function defineInputReset(): void {
  if (!customElements.get(DemlInputReset.tagName)) {
    customElements.define(DemlInputReset.tagName, DemlInputReset);
  }
}

export default DemlInputReset;
