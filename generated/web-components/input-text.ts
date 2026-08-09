/* AUTO-GENERATED from components/input-text/input-text.html — do not edit */
export class DemlInputText extends HTMLElement {
  static readonly tagName = "deml-input-text";
  static readonly componentName = "input-text";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label class="text-field" for="input-text-field">
      <span class="text-field__label">Name</span>
      <input
        id="input-text-field"
        class="text-field__control"
        name="name"
        type="text"
        placeholder="Your name"
        autocomplete="name"
      />
    </label>`;
    }
  }
}

export function defineInputText(): void {
  if (!customElements.get(DemlInputText.tagName)) {
    customElements.define(DemlInputText.tagName, DemlInputText);
  }
}

export default DemlInputText;
