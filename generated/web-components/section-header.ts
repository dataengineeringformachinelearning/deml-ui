/* AUTO-GENERATED from components/section-header/section-header.html — do not edit */
export class DemlSectionHeader extends HTMLElement {
  static readonly tagName = "deml-section-header";
  static readonly componentName = "section-header";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<header class="section-header"><p class="type-eyebrow">Eyebrow</p><h2 class="type-display">Section</h2><p class="type-intro">Supporting copy.</p></header>`;
    }
  }
}

export function defineSectionHeader(): void {
  if (!customElements.get(DemlSectionHeader.tagName)) {
    customElements.define(DemlSectionHeader.tagName, DemlSectionHeader);
  }
}

export default DemlSectionHeader;
