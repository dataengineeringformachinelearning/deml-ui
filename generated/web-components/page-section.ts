/* AUTO-GENERATED from components/page-section/page-section.html — do not edit */
export class DemlPageSection extends HTMLElement {
  static readonly tagName = "deml-page-section";
  static readonly componentName = "page-section";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<section class="page-section"><div class="page-section__body">Section body</div></section>`;
    }
  }
}

export function definePageSection(): void {
  if (!customElements.get(DemlPageSection.tagName)) {
    customElements.define(DemlPageSection.tagName, DemlPageSection);
  }
}

export default DemlPageSection;
