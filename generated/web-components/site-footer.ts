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
          <div class="site-footer__column">
            <h3 class="site-footer__heading">Platforms</h3>
            <ul class="site-footer__list">
              <li><a href="#">DEML</a></li>
              <li><a href="#">FORJD</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Dashboard</a></li>
            </ul>
          </div>
          <div class="site-footer__column">
            <h3 class="site-footer__heading">Resources</h3>
            <ul class="site-footer__list">
              <li><a href="#">Community</a></li>
              <li><a href="#">Whitepaper</a></li>
              <li><a href="#">Book</a></li>
              <li><a href="#">Blue Notes</a></li>
              <li><a href="#">Learn</a></li>
            </ul>
          </div>
          <div class="site-footer__column">
            <h3 class="site-footer__heading">Support</h3>
            <ul class="site-footer__list">
              <li><a href="#">Platform Status</a></li>
              <li><a href="#">Report a Bug</a></li>
            </ul>
          </div>
          <div class="site-footer__column">
            <h3 class="site-footer__heading">Legal &amp; Compliance</h3>
            <ul class="site-footer__list">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">SOC2 Compliance</a></li>
              <li><a href="#">GDPR Compliance</a></li>
            </ul>
          </div>
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
