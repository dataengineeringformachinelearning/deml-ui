/* AUTO-GENERATED from components/sidebar-nav/sidebar-nav.html — do not edit */
export class DemlSidebarNav extends HTMLElement {
  static readonly tagName = "deml-sidebar-nav";
  static readonly componentName = "sidebar-nav";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<nav class="sidebar-nav" aria-label="Sidebar">
      <div class="sidebar-nav__header">
        <p class="sidebar-nav__title">Table of contents</p>
      </div>
      <div class="sidebar-nav__group">
        <h3 class="sidebar-nav__group-title">Foundations</h3>
        <ul class="sidebar-nav__list">
          <li>
            <a class="sidebar-nav__link sidebar-nav__link--numbered" href="#" aria-current="page">
              <span class="sidebar-nav__num">01</span>
              <span class="sidebar-nav__label">Fresh install</span>
            </a>
          </li>
          <li>
            <a class="sidebar-nav__link sidebar-nav__link--numbered" href="#">
              <span class="sidebar-nav__num">02</span>
              <span class="sidebar-nav__label">Clean codebase</span>
            </a>
          </li>
          <li>
            <a class="sidebar-nav__link sidebar-nav__link--numbered" href="#">
              <span class="sidebar-nav__num">03</span>
              <span class="sidebar-nav__label">The Fresh Install &amp; Environment Setup</span>
            </a>
          </li>
        </ul>
      </div>
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
