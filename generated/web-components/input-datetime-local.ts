/* AUTO-GENERATED from components/input-datetime-local/input-datetime-local.html — do not edit */
export class DemlInputDatetimeLocal extends HTMLElement {
  static readonly tagName = "deml-input-datetime-local";
  static readonly componentName = "input-datetime-local";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="input-datetime-local-field">Datetime local</label>
    <input id="input-datetime-local-field" name="datetime-local" type="datetime-local">`;
    }
  }
}

export function defineInputDatetimeLocal(): void {
  if (!customElements.get(DemlInputDatetimeLocal.tagName)) {
    customElements.define(DemlInputDatetimeLocal.tagName, DemlInputDatetimeLocal);
  }
}

export default DemlInputDatetimeLocal;
