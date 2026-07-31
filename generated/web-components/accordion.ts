/* AUTO-GENERATED from components/accordion/accordion.html — do not edit */
export class DemlAccordion extends HTMLElement {
  static readonly tagName = "deml-accordion";
  static readonly componentName = "accordion";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="accordion">
      <details class="accordion__item" open>
        <summary class="accordion__trigger">Section one</summary>
        <div class="accordion__panel">Content for section one.</div>
      </details>
      <details class="accordion__item">
        <summary class="accordion__trigger">Section two</summary>
        <div class="accordion__panel">Content for section two.</div>
      </details>
    </div>`;
    }
  }
}

export function defineAccordion(): void {
  if (!customElements.get(DemlAccordion.tagName)) {
    customElements.define(DemlAccordion.tagName, DemlAccordion);
  }
}

export default DemlAccordion;
