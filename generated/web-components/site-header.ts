/* AUTO-GENERATED from components/site-header/site-header.html — do not edit */
export class DemlSiteHeader extends HTMLElement {
  static readonly tagName = "deml-site-header";
  static readonly componentName = "site-header";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<header class="site-header">
  <hgroup>
    <h1>HTML Element Reference</h1>
    <p>A single-page catalog of common HTML elements and form controls.</p>
  </hgroup>
</header>`;
    }
  }
}

export function defineSiteHeader(): void {
  if (!customElements.get(DemlSiteHeader.tagName)) {
    customElements.define(DemlSiteHeader.tagName, DemlSiteHeader);
  }
}

export default DemlSiteHeader;
