/* AUTO-GENERATED from components/checkbox/checkbox.html — do not edit */
export class DemlCheckbox extends HTMLElement {
  static readonly tagName = "deml-checkbox";
  static readonly componentName = "checkbox";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label class="checkbox-field">
      <input class="checkbox-field__input" type="checkbox" name="checkbox-demo" />
      <span class="checkbox-field__box" aria-hidden="true"></span>
      <span class="checkbox-field__label">Checkbox option</span>
    </label>
    <label class="checkbox-field">
      <input class="checkbox-field__input" type="checkbox" name="checkbox-demo-disabled" disabled />
      <span class="checkbox-field__box" aria-hidden="true"></span>
      <span class="checkbox-field__label">Disabled option</span>
    </label>`;
    }
  }
}

export function defineCheckbox(): void {
  if (!customElements.get(DemlCheckbox.tagName)) {
    customElements.define(DemlCheckbox.tagName, DemlCheckbox);
  }
}

export default DemlCheckbox;
