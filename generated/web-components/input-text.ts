/* AUTO-GENERATED from components/input-text/input-text.html — do not edit */
export class DemlInputText extends HTMLElement {
  static readonly tagName = "deml-input-text";
  static readonly componentName = "input-text";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="input-text-field">Name</label>
    <input id="input-text-field" name="name" type="text" placeholder="Name" autocomplete="name" required>`;
    }
  }
}

export function defineInputText(): void {
  if (!customElements.get(DemlInputText.tagName)) {
    customElements.define(DemlInputText.tagName, DemlInputText);
  }
}

export default DemlInputText;
