/* AUTO-GENERATED from components/app-header/app-header.html — do not edit */
export class DemlAppHeader extends HTMLElement {
  static readonly tagName = "deml-app-header";
  static readonly componentName = "app-header";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<header class="app-header">
      <a class="app-header__brand" href="#">Product</a>
      <nav class="app-header__nav" aria-label="App">
        <a href="#">Home</a>
        <a href="#">Docs</a>
      </nav>
      <div class="app-header__actions">
        <button type="button">Account</button>
      </div>
    </header>`;
    }
  }
}

export function defineAppHeader(): void {
  if (!customElements.get(DemlAppHeader.tagName)) {
    customElements.define(DemlAppHeader.tagName, DemlAppHeader);
  }
}

export default DemlAppHeader;
