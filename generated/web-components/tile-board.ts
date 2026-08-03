/* AUTO-GENERATED from components/tile-board/tile-board.html — do not edit */
export class DemlTileBoard extends HTMLElement {
  static readonly tagName = "deml-tile-board";
  static readonly componentName = "tile-board";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="tile-board">
      <div class="dashboard-grid">
        <article class="tile-board__cell" data-size="sm">Stat</article>
        <article class="tile-board__cell" data-size="md">Chart</article>
        <article class="tile-board__cell" data-size="sm">KPI</article>
      </div>
    </div>`;
    }
  }
}

export function defineTileBoard(): void {
  if (!customElements.get(DemlTileBoard.tagName)) {
    customElements.define(DemlTileBoard.tagName, DemlTileBoard);
  }
}

export default DemlTileBoard;
