/* AUTO-GENERATED from components/scroll-area/scroll-area.html — do not edit */
export class DemlScrollArea extends HTMLElement {
  static readonly tagName = "deml-scroll-area";
  static readonly componentName = "scroll-area";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="scroll-area" tabindex="0">
      <p>Scrollable region with constrained height.</p>
      <p>Additional content for overflow.</p>
      <p>More content.</p>
      <p>Even more content.</p>
    </div>`;
    }
  }
}

export function defineScrollArea(): void {
  if (!customElements.get(DemlScrollArea.tagName)) {
    customElements.define(DemlScrollArea.tagName, DemlScrollArea);
  }
}

export default DemlScrollArea;
