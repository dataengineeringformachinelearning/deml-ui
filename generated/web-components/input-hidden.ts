/* AUTO-GENERATED from components/input-hidden/input-hidden.html — do not edit */
export class DemlInputHidden extends HTMLElement {
  static readonly tagName = "deml-input-hidden";
  static readonly componentName = "input-hidden";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<input type="hidden" name="csrf" value="demo-token">
    <p>Hidden input present in the DOM (<code>type="hidden"</code>).</p>`;
    }
  }
}

export function defineInputHidden(): void {
  if (!customElements.get(DemlInputHidden.tagName)) {
    customElements.define(DemlInputHidden.tagName, DemlInputHidden);
  }
}

export default DemlInputHidden;
