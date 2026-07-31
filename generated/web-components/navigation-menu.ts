/* AUTO-GENERATED from components/navigation-menu/navigation-menu.html — do not edit */
export class DemlNavigationMenu extends HTMLElement {
  static readonly tagName = "deml-navigation-menu";
  static readonly componentName = "navigation-menu";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<nav class="navigation-menu" aria-label="Primary">
      <ul class="navigation-menu__list">
        <li><a class="navigation-menu__link" href="#" aria-current="page">Dashboard</a></li>
        <li><a class="navigation-menu__link" href="#">Analytics</a></li>
        <li><a class="navigation-menu__link" href="#">Settings</a></li>
      </ul>
    </nav>`;
    }
  }
}

export function defineNavigationMenu(): void {
  if (!customElements.get(DemlNavigationMenu.tagName)) {
    customElements.define(DemlNavigationMenu.tagName, DemlNavigationMenu);
  }
}

export default DemlNavigationMenu;
