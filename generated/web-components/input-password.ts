/* AUTO-GENERATED from components/input-password/input-password.html — do not edit */
export class DemlInputPassword extends HTMLElement {
  static readonly tagName = "deml-input-password";
  static readonly componentName = "input-password";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="input-password-field">Password</label>
    <input id="input-password-field" name="password" type="password" placeholder="Password" autocomplete="new-password">`;
    }
  }
}

export function defineInputPassword(): void {
  if (!customElements.get(DemlInputPassword.tagName)) {
    customElements.define(DemlInputPassword.tagName, DemlInputPassword);
  }
}

export default DemlInputPassword;
