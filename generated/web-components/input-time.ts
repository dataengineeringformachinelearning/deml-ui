/* AUTO-GENERATED from components/input-time/input-time.html — do not edit */
export class DemlInputTime extends HTMLElement {
  static readonly tagName = "deml-input-time";
  static readonly componentName = "input-time";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="input-time-field">Time</label>
    <input id="input-time-field" name="time" type="time">`;
    }
  }
}

export function defineInputTime(): void {
  if (!customElements.get(DemlInputTime.tagName)) {
    customElements.define(DemlInputTime.tagName, DemlInputTime);
  }
}

export default DemlInputTime;
