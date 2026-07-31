/* AUTO-GENERATED from components/content-layout/content-layout.html — do not edit */
export class DemlContentLayout extends HTMLElement {
  static readonly tagName = "deml-content-layout";
  static readonly componentName = "content-layout";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="content-layout">
      <nav class="content-layout__breadcrumbs" aria-label="Breadcrumb">Home / Page</nav>
      <header class="content-layout__header">
        <h1>Content layout</h1>
      </header>
      <div class="content-layout__body">Body region</div>
    </div>`;
    }
  }
}

export function defineContentLayout(): void {
  if (!customElements.get(DemlContentLayout.tagName)) {
    customElements.define(DemlContentLayout.tagName, DemlContentLayout);
  }
}

export default DemlContentLayout;
