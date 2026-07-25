/* AUTO-GENERATED from components/input-url/input-url.html — do not edit */
export class DemlInputUrl extends HTMLElement {
  static readonly tagName = "deml-input-url";
  static readonly componentName = "input-url";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="input-url-field">Website</label>
    <input id="input-url-field" name="url" type="url" placeholder="https://example.com">`;
    }
  }
}

export function defineInputUrl(): void {
  if (!customElements.get(DemlInputUrl.tagName)) {
    customElements.define(DemlInputUrl.tagName, DemlInputUrl);
  }
}

export default DemlInputUrl;
