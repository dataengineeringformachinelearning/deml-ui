/* AUTO-GENERATED from components/sidebar-nav/sidebar-nav.html — do not edit */
export class DemlSidebarNav extends HTMLElement {
  static readonly tagName = "deml-sidebar-nav";
  static readonly componentName = "sidebar-nav";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<nav class="sidebar-nav" aria-label="Sidebar">
      <p class="sidebar-nav__header">Workspace</p>
      <ul class="sidebar-nav__list">
        <li><a href="#" aria-current="page">Overview</a></li>
        <li>
          <button type="button" aria-expanded="true">Projects</button>
          <ul>
            <li><a href="#">Alpha</a></li>
            <li><a href="#">Beta</a></li>
          </ul>
        </li>
        <li><a href="#">Members</a></li>
      </ul>
    </nav>`;
    }
  }
}

export function defineSidebarNav(): void {
  if (!customElements.get(DemlSidebarNav.tagName)) {
    customElements.define(DemlSidebarNav.tagName, DemlSidebarNav);
  }
}

export default DemlSidebarNav;
