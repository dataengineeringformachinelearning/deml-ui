/* AUTO-GENERATED from components/input-month/input-month.html — do not edit */
export class DemlInputMonth extends HTMLElement {
  static readonly tagName = "deml-input-month";
  static readonly componentName = "input-month";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="input-month-field">Month</label>
    <input id="input-month-field" name="month" type="month">`;
    }
  }
}

export function defineInputMonth(): void {
  if (!customElements.get(DemlInputMonth.tagName)) {
    customElements.define(DemlInputMonth.tagName, DemlInputMonth);
  }
}

export default DemlInputMonth;
