/* AUTO-GENERATED from components/label/label.html — do not edit */
export class DemlLabel extends HTMLElement {
  static readonly tagName = "deml-label";
  static readonly componentName = "label";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label class="label" for="label-demo-input">Label</label>
    <input id="label-demo-input" type="text" name="label-demo" />`;
    }
  }
}

export function defineLabel(): void {
  if (!customElements.get(DemlLabel.tagName)) {
    customElements.define(DemlLabel.tagName, DemlLabel);
  }
}

export default DemlLabel;
