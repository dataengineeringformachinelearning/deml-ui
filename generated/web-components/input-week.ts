/* AUTO-GENERATED from components/input-week/input-week.html — do not edit */
export class DemlInputWeek extends HTMLElement {
  static readonly tagName = "deml-input-week";
  static readonly componentName = "input-week";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="input-week-field">Week</label>
    <input id="input-week-field" name="week" type="week">`;
    }
  }
}

export function defineInputWeek(): void {
  if (!customElements.get(DemlInputWeek.tagName)) {
    customElements.define(DemlInputWeek.tagName, DemlInputWeek);
  }
}

export default DemlInputWeek;
