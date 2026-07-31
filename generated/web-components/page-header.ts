/* AUTO-GENERATED from components/page-header/page-header.html — do not edit */
export class DemlPageHeader extends HTMLElement {
  static readonly tagName = "deml-page-header";
  static readonly componentName = "page-header";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<header class="page-header">
      <div class="page-header__text">
        <h1 class="page-header__title">Page title</h1>
        <p class="page-header__subtitle">Short page description.</p>
      </div>
      <div class="page-header__actions">
        <button type="button">Secondary</button>
        <button type="button">Primary</button>
      </div>
    </header>`;
    }
  }
}

export function definePageHeader(): void {
  if (!customElements.get(DemlPageHeader.tagName)) {
    customElements.define(DemlPageHeader.tagName, DemlPageHeader);
  }
}

export default DemlPageHeader;
