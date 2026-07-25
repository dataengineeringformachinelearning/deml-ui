/* AUTO-GENERATED from components/site-footer/site-footer.html — do not edit */
export class DemlSiteFooter extends HTMLElement {
  static readonly tagName = "deml-site-footer";
  static readonly componentName = "site-footer";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<footer class="site-footer">
  <p>HTML Element Reference — not every obscure or deprecated tag, but the common living HTML elements and form controls.</p>
</footer>`;
    }
  }
}

export function defineSiteFooter(): void {
  if (!customElements.get(DemlSiteFooter.tagName)) {
    customElements.define(DemlSiteFooter.tagName, DemlSiteFooter);
  }
}

export default DemlSiteFooter;
