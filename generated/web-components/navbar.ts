/* AUTO-GENERATED from components/navbar/navbar.html — do not edit */
export class DemlNavbar extends HTMLElement {
  static readonly tagName = "deml-navbar";
  static readonly componentName = "navbar";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<header class="site-navbar"><div class="site-navbar-branding"><a class="site-navbar-icon" href="#">DEML</a></div><nav class="main-navigation"><ul><li><a href="#">Home</a></li></ul></nav></header>`;
    }
  }
}

export function defineNavbar(): void {
  if (!customElements.get(DemlNavbar.tagName)) {
    customElements.define(DemlNavbar.tagName, DemlNavbar);
  }
}

export default DemlNavbar;
