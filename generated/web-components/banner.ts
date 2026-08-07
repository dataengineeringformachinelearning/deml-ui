/* AUTO-GENERATED from components/banner/banner.html — do not edit */
export class DemlBanner extends HTMLElement {
  static readonly tagName = "deml-banner";
  static readonly componentName = "banner";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="banner banner--hero" data-variant="hero">
      <p class="preheader">DEML</p>
      <h1 class="banner-heading">Status your customers can trust.</h1>
      <p class="lede">Publish public status pages, share clear uptime, and manage your account in one place.</p>
      <div class="banner-actions">
        <div class="button-group">
          <a class="button button--primary" href="#">Explore</a>
          <a class="button button--secondary" href="#">Log in</a>
        </div>
      </div>
    </div>`;
    }
  }
}

export function defineBanner(): void {
  if (!customElements.get(DemlBanner.tagName)) {
    customElements.define(DemlBanner.tagName, DemlBanner);
  }
}

export default DemlBanner;
