/* AUTO-GENERATED from components/button-group/button-group.html — do not edit */
export class DemlButtonGroup extends HTMLElement {
  static readonly tagName = "deml-button-group";
  static readonly componentName = "button-group";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="button-group" role="group" aria-label="Alignment">
      <button type="button">Left</button>
      <button type="button">Center</button>
      <button type="button">Right</button>
    </div>`;
    }
  }
}

export function defineButtonGroup(): void {
  if (!customElements.get(DemlButtonGroup.tagName)) {
    customElements.define(DemlButtonGroup.tagName, DemlButtonGroup);
  }
}

export default DemlButtonGroup;
