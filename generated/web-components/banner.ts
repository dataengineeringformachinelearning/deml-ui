/* AUTO-GENERATED from components/banner/banner.html — do not edit */
export class DemlBanner extends HTMLElement {
  static readonly tagName = "deml-banner";
  static readonly componentName = "banner";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="banner"><p class="banner__title">Banner</p><p class="banner__text">Supporting message.</p></div>`;
    }
  }
}

export function defineBanner(): void {
  if (!customElements.get(DemlBanner.tagName)) {
    customElements.define(DemlBanner.tagName, DemlBanner);
  }
}

export default DemlBanner;
