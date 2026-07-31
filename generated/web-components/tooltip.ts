/* AUTO-GENERATED from components/tooltip/tooltip.html — do not edit */
export class DemlTooltip extends HTMLElement {
  static readonly tagName = "deml-tooltip";
  static readonly componentName = "tooltip";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<button type="button" class="tooltip-trigger" aria-describedby="tooltip-demo">Hover me</button>
    <span id="tooltip-demo" class="tooltip" role="tooltip">Helpful tip</span>`;
    }
  }
}

export function defineTooltip(): void {
  if (!customElements.get(DemlTooltip.tagName)) {
    customElements.define(DemlTooltip.tagName, DemlTooltip);
  }
}

export default DemlTooltip;
