/* AUTO-GENERATED from components/panel-grid/panel-grid.html — do not edit */
export class DemlPanelGrid extends HTMLElement {
  static readonly tagName = "deml-panel-grid";
  static readonly componentName = "panel-grid";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="panel-grid">
      <article class="panel-grid__item">Panel A</article>
      <article class="panel-grid__item">Panel B</article>
    </div>`;
    }
  }
}

export function definePanelGrid(): void {
  if (!customElements.get(DemlPanelGrid.tagName)) {
    customElements.define(DemlPanelGrid.tagName, DemlPanelGrid);
  }
}

export default DemlPanelGrid;
