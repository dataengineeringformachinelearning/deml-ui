/* AUTO-GENERATED from components/dropdown/dropdown.html — do not edit */
export class DemlDropdown extends HTMLElement {
  static readonly tagName = "deml-dropdown";
  static readonly componentName = "dropdown";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="dropdown">
      <button type="button" class="dropdown__trigger" aria-haspopup="menu" aria-expanded="false" aria-controls="dropdown-menu">Actions</button>
      <ul id="dropdown-menu" class="dropdown__menu" role="menu" hidden>
        <li role="none"><button type="button" role="menuitem">Edit</button></li>
        <li role="none"><button type="button" role="menuitem">Duplicate</button></li>
        <li role="none"><button type="button" role="menuitem">Delete</button></li>
      </ul>
    </div>`;
    }
  }
}

export function defineDropdown(): void {
  if (!customElements.get(DemlDropdown.tagName)) {
    customElements.define(DemlDropdown.tagName, DemlDropdown);
  }
}

export default DemlDropdown;
