/* AUTO-GENERATED from components/checkbox-field/checkbox-field.html — do not edit */
export class DemlCheckboxField extends HTMLElement {
  static readonly tagName = "deml-checkbox-field";
  static readonly componentName = "checkbox-field";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label class="checkbox-field"><input type="checkbox" /><span>Remember me</span></label>`;
    }
  }
}

export function defineCheckboxField(): void {
  if (!customElements.get(DemlCheckboxField.tagName)) {
    customElements.define(DemlCheckboxField.tagName, DemlCheckboxField);
  }
}

export default DemlCheckboxField;
