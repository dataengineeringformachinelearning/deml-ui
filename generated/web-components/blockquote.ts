/* AUTO-GENERATED from components/blockquote/blockquote.html — do not edit */
export class DemlBlockquote extends HTMLElement {
  static readonly tagName = "deml-blockquote";
  static readonly componentName = "blockquote";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<blockquote cite="https://example.com/quote">
      <p>A block quotation attributed to someone noteworthy.</p>
      <footer>— <cite>Example Source</cite></footer>
    </blockquote>`;
    }
  }
}

export function defineBlockquote(): void {
  if (!customElements.get(DemlBlockquote.tagName)) {
    customElements.define(DemlBlockquote.tagName, DemlBlockquote);
  }
}

export default DemlBlockquote;
