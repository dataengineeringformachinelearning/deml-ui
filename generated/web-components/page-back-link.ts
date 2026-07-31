/* AUTO-GENERATED from components/page-back-link/page-back-link.html — do not edit */
export class DemlPageBackLink extends HTMLElement {
  static readonly tagName = "deml-page-back-link";
  static readonly componentName = "page-back-link";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<a class="page-back-link" href="#">← Back to list</a>`;
    }
  }
}

export function definePageBackLink(): void {
  if (!customElements.get(DemlPageBackLink.tagName)) {
    customElements.define(DemlPageBackLink.tagName, DemlPageBackLink);
  }
}

export default DemlPageBackLink;
