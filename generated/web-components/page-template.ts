/* AUTO-GENERATED from components/page-template/page-template.html — do not edit */
export class DemlPageTemplate extends HTMLElement {
  static readonly tagName = "deml-page-template";
  static readonly componentName = "page-template";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="page-template">
      <header class="page-template__header">
        <h1>Page template</h1>
        <div class="page-template__actions"><button type="button">Action</button></div>
      </header>
      <div class="page-template__content">
        <p>Route content region.</p>
      </div>
      <footer class="page-template__footer">Footer slot</footer>
    </div>`;
    }
  }
}

export function definePageTemplate(): void {
  if (!customElements.get(DemlPageTemplate.tagName)) {
    customElements.define(DemlPageTemplate.tagName, DemlPageTemplate);
  }
}

export default DemlPageTemplate;
