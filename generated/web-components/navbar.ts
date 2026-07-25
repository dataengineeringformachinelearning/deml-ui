/* AUTO-GENERATED from components/navbar/navbar.html — do not edit */
export class DemlNavbar extends HTMLElement {
  static readonly tagName = "deml-navbar";
  static readonly componentName = "navbar";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<nav class="navbar" aria-label="Primary">
  <div class="navbar__inner">
    <a class="navbar__brand" href="/">deml</a>

    <ul class="navbar__links">
      <li><a href="#components">Components</a></li>
      <li><a href="#article">Article</a></li>
      <li><a href="#headings">Headings</a></li>
      <li><a href="#paragraph">Paragraph</a></li>
      <li><a href="#unordered-list">Lists</a></li>
      <li><a href="#table">Table</a></li>
      <li><a href="#image">Image</a></li>
      <li><a href="#input-text">Inputs</a></li>
      <li><a href="#megaform">Megaform</a></li>
      <li><a href="#details">Details</a></li>
      <li><a href="#template">Template</a></li>
    </ul>
  </div>
</nav>`;
    }
  }
}

export function defineNavbar(): void {
  if (!customElements.get(DemlNavbar.tagName)) {
    customElements.define(DemlNavbar.tagName, DemlNavbar);
  }
}

export default DemlNavbar;
