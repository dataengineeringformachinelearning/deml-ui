/* AUTO-GENERATED from components/navbar/navbar.html — do not edit */
export class DemlNavbar extends HTMLElement {
  static readonly tagName = "deml-navbar";
  static readonly componentName = "navbar";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<header class="site-navbar">
      <div class="site-navbar-branding">
        <a class="site-navbar-icon" href="#" aria-label="DEML home">DEML</a>
      </div>
      <button type="button" class="site-navbar-menu-toggle" aria-label="Open menu" aria-expanded="false">
        Menu
      </button>
      <div class="site-navbar-panel">
        <div class="site-navbar-panel__inner">
          <nav class="main-navigation" aria-label="Primary">
            <ul>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Docs</a></li>
            </ul>
          </nav>
          <div class="site-navbar-actions">
            <div class="button-group" data-layout="row" role="group" aria-label="Account actions">
              <a class="button button--primary button--pill" href="#">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </header>`;
    }
  }
}

export function defineNavbar(): void {
  if (!customElements.get(DemlNavbar.tagName)) {
    customElements.define(DemlNavbar.tagName, DemlNavbar);
  }
}

export default DemlNavbar;
