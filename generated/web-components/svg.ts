/* AUTO-GENERATED from components/svg/svg.html — do not edit */
export class DemlSvg extends HTMLElement {
  static readonly tagName = "deml-svg";
  static readonly componentName = "svg";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<svg width="120" height="80" viewBox="0 0 120 80" role="img" aria-label="Blue rectangle">
      <rect x="10" y="10" width="100" height="60" fill="#5C2A5A" rx="6"></rect>
      <text x="60" y="46" text-anchor="middle" fill="white" font-size="14" font-family="sans-serif">SVG</text>
    </svg>`;
    }
  }
}

export function defineSvg(): void {
  if (!customElements.get(DemlSvg.tagName)) {
    customElements.define(DemlSvg.tagName, DemlSvg);
  }
}

export default DemlSvg;
