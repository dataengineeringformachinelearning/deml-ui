/* AUTO-GENERATED from components/text-field/text-field.html — do not edit */
export class DemlTextField extends HTMLElement {
  static readonly tagName = "deml-text-field";
  static readonly componentName = "text-field";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label class="text-field"><span class="text-field__label">Name</span><input class="text-field__control" type="text" /></label>`;
    }
  }
}

export function defineTextField(): void {
  if (!customElements.get(DemlTextField.tagName)) {
    customElements.define(DemlTextField.tagName, DemlTextField);
  }
}

export default DemlTextField;
