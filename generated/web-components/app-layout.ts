/* AUTO-GENERATED from components/app-layout/app-layout.html — do not edit */
export class DemlAppLayout extends HTMLElement {
  static readonly tagName = "deml-app-layout";
  static readonly componentName = "app-layout";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="app-layout">
      <aside class="app-layout__nav" aria-label="App navigation">Nav</aside>
      <div class="app-layout__main">
        <header class="app-layout__header">Header</header>
        <main class="app-layout__content">Main content</main>
      </div>
      <aside class="app-layout__tools" aria-label="Tools">Tools</aside>
    </div>`;
    }
  }
}

export function defineAppLayout(): void {
  if (!customElements.get(DemlAppLayout.tagName)) {
    customElements.define(DemlAppLayout.tagName, DemlAppLayout);
  }
}

export default DemlAppLayout;
