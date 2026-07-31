/* AUTO-GENERATED from components/breadcrumbs/breadcrumbs.html — do not edit */
export class DemlBreadcrumbs extends HTMLElement {
  static readonly tagName = "deml-breadcrumbs";
  static readonly componentName = "breadcrumbs";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<nav class="breadcrumbs" aria-label="Breadcrumb">
      <ol class="breadcrumbs__list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Library</a></li>
        <li aria-current="page">Current page</li>
      </ol>
    </nav>`;
    }
  }
}

export function defineBreadcrumbs(): void {
  if (!customElements.get(DemlBreadcrumbs.tagName)) {
    customElements.define(DemlBreadcrumbs.tagName, DemlBreadcrumbs);
  }
}

export default DemlBreadcrumbs;
