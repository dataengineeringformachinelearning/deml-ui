/* AUTO-GENERATED from components/embed-object/embed-object.html — do not edit */
export class DemlEmbedObject extends HTMLElement {
  static readonly tagName = "deml-embed-object";
  static readonly componentName = "embed-object";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<embed
      src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      type="application/pdf"
      width="100%"
      height="160">`;
    }
  }
}

export function defineEmbedObject(): void {
  if (!customElements.get(DemlEmbedObject.tagName)) {
    customElements.define(DemlEmbedObject.tagName, DemlEmbedObject);
  }
}

export default DemlEmbedObject;
