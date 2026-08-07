/* AUTO-GENERATED from components/site-footer/site-footer.html — do not edit */
export class DemlSiteFooter extends HTMLElement {
  static readonly tagName = "deml-site-footer";
  static readonly componentName = "site-footer";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<footer class="site-footer">
      <div class="site-footer__inner">
        <nav class="site-footer__directory" aria-label="Footer">
          <ul class="site-footer__list">
            <li><a href="/privacy/">Privacy</a></li>
            <li><a href="/terms/">Terms</a></li>
            <li><a href="/status/platform-status">Status</a></li>
          </ul>
        </nav>

        <div class="site-footer__bottom">
          <p class="site-footer__badge">Made in the U.S.A.</p>
          <p class="site-footer__copy">
            Copyright © 2026 Data Engineering for Machine Learning by
            <a href="https://joealongi.dev/" target="_blank" rel="noopener noreferrer">Joe Alongi</a>.
            All rights reserved.
          </p>
        </div>
      </div>
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
