/* AUTO-GENERATED from components/select/select.html — do not edit */
export class DemlSelect extends HTMLElement {
  static readonly tagName = "deml-select";
  static readonly componentName = "select";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="select-field">Country</label>
    <select id="select-field" name="country">
      <optgroup label="Americas">
        <option value="us">United States</option>
        <option value="ca">Canada</option>
      </optgroup>
      <optgroup label="Europe">
        <option value="uk">United Kingdom</option>
        <option value="de">Germany</option>
      </optgroup>
    </select>`;
    }
  }
}

export function defineSelect(): void {
  if (!customElements.get(DemlSelect.tagName)) {
    customElements.define(DemlSelect.tagName, DemlSelect);
  }
}

export default DemlSelect;
