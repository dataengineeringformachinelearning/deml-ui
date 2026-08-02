/* AUTO-GENERATED from components/microcard-grid/microcard-grid.html — do not edit */
export class DemlMicrocardGrid extends HTMLElement {
  static readonly tagName = "deml-microcard-grid";
  static readonly componentName = "microcard-grid";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="microcard-grid"><article class="microcard"><p class="microcard__label">A</p><p class="microcard__value">1</p></article></div>`;
    }
  }
}

export function defineMicrocardGrid(): void {
  if (!customElements.get(DemlMicrocardGrid.tagName)) {
    customElements.define(DemlMicrocardGrid.tagName, DemlMicrocardGrid);
  }
}

export default DemlMicrocardGrid;
