/* AUTO-GENERATED from components/textarea/textarea.html — do not edit */
export class DemlTextarea extends HTMLElement {
  static readonly tagName = "deml-textarea";
  static readonly componentName = "textarea";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="textarea-field">Message</label>
    <textarea id="textarea-field" name="message" rows="4" cols="40" placeholder="Message"></textarea>`;
    }
  }
}

export function defineTextarea(): void {
  if (!customElements.get(DemlTextarea.tagName)) {
    customElements.define(DemlTextarea.tagName, DemlTextarea);
  }
}

export default DemlTextarea;
