/* AUTO-GENERATED from components/bidirectional/bidirectional.html — do not edit */
export class DemlBidirectional extends HTMLElement {
  static readonly tagName = "deml-bidirectional";
  static readonly componentName = "bidirectional";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<p>
      Bidirectional text:
      <bdi>مرحبا</bdi>
      and
      <bdo dir="rtl">forced RTL</bdo>.
    </p>
    <p>Line break here:<br>new line. <span>Span wrapper</span>.</p>
    <hr>`;
    }
  }
}

export function defineBidirectional(): void {
  if (!customElements.get(DemlBidirectional.tagName)) {
    customElements.define(DemlBidirectional.tagName, DemlBidirectional);
  }
}

export default DemlBidirectional;
