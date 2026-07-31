/* AUTO-GENERATED from components/container/container.html — do not edit */
export class DemlContainer extends HTMLElement {
  static readonly tagName = "deml-container";
  static readonly componentName = "container";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="container">
      <header class="container__header">
        <h3 class="container__title">Container</h3>
        <p class="container__description">Content anatomy wrapper.</p>
      </header>
      <div class="container__body">
        <p>Body content.</p>
      </div>
    </div>`;
    }
  }
}

export function defineContainer(): void {
  if (!customElements.get(DemlContainer.tagName)) {
    customElements.define(DemlContainer.tagName, DemlContainer);
  }
}

export default DemlContainer;
