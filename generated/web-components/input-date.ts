/* AUTO-GENERATED from components/input-date/input-date.html — do not edit */
export class DemlInputDate extends HTMLElement {
  static readonly tagName = "deml-input-date";
  static readonly componentName = "input-date";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="input-date-field">Date</label>
    <input id="input-date-field" name="date" type="date">`;
    }
  }
}

export function defineInputDate(): void {
  if (!customElements.get(DemlInputDate.tagName)) {
    customElements.define(DemlInputDate.tagName, DemlInputDate);
  }
}

export default DemlInputDate;
