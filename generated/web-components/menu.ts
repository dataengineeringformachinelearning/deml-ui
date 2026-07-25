/* AUTO-GENERATED from components/menu/menu.html — do not edit */
export class DemlMenu extends HTMLElement {
  static readonly tagName = "deml-menu";
  static readonly componentName = "menu";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<menu>
      <li><button type="button">Cut</button></li>
      <li><button type="button">Copy</button></li>
      <li><button type="button">Paste</button></li>
    </menu>`;
    }
  }
}

export function defineMenu(): void {
  if (!customElements.get(DemlMenu.tagName)) {
    customElements.define(DemlMenu.tagName, DemlMenu);
  }
}

export default DemlMenu;
