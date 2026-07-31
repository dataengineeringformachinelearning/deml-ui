/* AUTO-GENERATED from components/section-template/section-template.html — do not edit */
export class DemlSectionTemplate extends HTMLElement {
  static readonly tagName = "deml-section-template";
  static readonly componentName = "section-template";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<section class="section-template">
      <header class="section-template__header">
        <div>
          <h3 class="section-template__title">Section template</h3>
          <p class="section-template__description">Reusable section anatomy.</p>
        </div>
        <div class="section-template__actions"><button type="button">Action</button></div>
      </header>
      <hr class="section-template__divider" />
      <div class="section-template__body">Body content.</div>
    </section>`;
    }
  }
}

export function defineSectionTemplate(): void {
  if (!customElements.get(DemlSectionTemplate.tagName)) {
    customElements.define(DemlSectionTemplate.tagName, DemlSectionTemplate);
  }
}

export default DemlSectionTemplate;
