/* AUTO-GENERATED from components/brand/brand.html — do not edit */
export class DemlBrand extends HTMLElement {
  static readonly tagName = "deml-brand";
  static readonly componentName = "brand";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<a class="brand" href="/" aria-label="Product home">
      <span class="brand__mark" aria-hidden="true"></span>
      <span class="brand__wordmark">Product</span>
    </a>`;
    }
  }
}

export function defineBrand(): void {
  if (!customElements.get(DemlBrand.tagName)) {
    customElements.define(DemlBrand.tagName, DemlBrand);
  }
}

export default DemlBrand;
