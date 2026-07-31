/* AUTO-GENERATED from components/app-sidebar/app-sidebar.html — do not edit */
export class DemlAppSidebar extends HTMLElement {
  static readonly tagName = "deml-app-sidebar";
  static readonly componentName = "app-sidebar";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<aside class="app-sidebar" aria-label="Dashboard">
      <p class="app-sidebar__brand">Product</p>
      <nav class="app-sidebar__nav">
        <a href="#" aria-current="page">Dashboard</a>
        <a href="#">Pipelines</a>
        <a href="#">Settings</a>
      </nav>
    </aside>`;
    }
  }
}

export function defineAppSidebar(): void {
  if (!customElements.get(DemlAppSidebar.tagName)) {
    customElements.define(DemlAppSidebar.tagName, DemlAppSidebar);
  }
}

export default DemlAppSidebar;
