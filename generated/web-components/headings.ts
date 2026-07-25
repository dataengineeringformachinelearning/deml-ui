/* AUTO-GENERATED from components/headings/headings.html — do not edit */
export class DemlHeadings extends HTMLElement {
  static readonly tagName = "deml-headings";
  static readonly componentName = "headings";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<h1>Heading One</h1>`;
    }
  }
}

export function defineHeadings(): void {
  if (!customElements.get(DemlHeadings.tagName)) {
    customElements.define(DemlHeadings.tagName, DemlHeadings);
  }
}

export default DemlHeadings;
