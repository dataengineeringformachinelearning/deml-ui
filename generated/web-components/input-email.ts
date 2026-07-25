/* AUTO-GENERATED from components/input-email/input-email.html — do not edit */
export class DemlInputEmail extends HTMLElement {
  static readonly tagName = "deml-input-email";
  static readonly componentName = "input-email";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="input-email-field">Email</label>
    <input id="input-email-field" name="email" type="email" placeholder="you@example.com" autocomplete="email">`;
    }
  }
}

export function defineInputEmail(): void {
  if (!customElements.get(DemlInputEmail.tagName)) {
    customElements.define(DemlInputEmail.tagName, DemlInputEmail);
  }
}

export default DemlInputEmail;
