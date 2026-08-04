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
      <h1 class="banner-heading">Control plane for ML data.</h1>
      <p class="lede">Identity, status, analytics, and learning in one warm-ash surface.</p>
      <div class="banner-actions">
        <div class="button-group">
          <a class="button button--primary" href="#">Dashboard</a>
          <a class="button button--secondary" href="#">Explore</a>
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
