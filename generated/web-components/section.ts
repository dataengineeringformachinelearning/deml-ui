/* AUTO-GENERATED from components/section/section.html — do not edit */
export class DemlSection extends HTMLElement {
  static readonly tagName = "deml-section";
  static readonly componentName = "section";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<section class="section">
      <header class="section__header">
        <h3 class="section__title">Section title</h3>
        <p class="section__description">Section supporting text.</p>
      </header>
      <div class="section__body">
        <p>Section body.</p>
      </div>
    </section>`;
    }
  }
}

export function defineSection(): void {
  if (!customElements.get(DemlSection.tagName)) {
    customElements.define(DemlSection.tagName, DemlSection);
  }
}

export default DemlSection;
