/* AUTO-GENERATED from components/canvas/canvas.html — do not edit */
export class DemlCanvas extends HTMLElement {
  static readonly tagName = "deml-canvas";
  static readonly componentName = "canvas";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<canvas id="demo-canvas" width="200" height="100" aria-label="Canvas demo"></canvas>`;
    }
  }
}

export function defineCanvas(): void {
  if (!customElements.get(DemlCanvas.tagName)) {
    customElements.define(DemlCanvas.tagName, DemlCanvas);
  }
}

export default DemlCanvas;
