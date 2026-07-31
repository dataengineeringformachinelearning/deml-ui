/* AUTO-GENERATED from components/box/box.html — do not edit */
export class DemlBox extends HTMLElement {
  static readonly tagName = "deml-box";
  static readonly componentName = "box";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="box">
      <p>Lightweight content grouping box.</p>
    </div>`;
    }
  }
}

export function defineBox(): void {
  if (!customElements.get(DemlBox.tagName)) {
    customElements.define(DemlBox.tagName, DemlBox);
  }
}

export default DemlBox;
