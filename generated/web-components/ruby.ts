/* AUTO-GENERATED from components/ruby/ruby.html — do not edit */
export class DemlRuby extends HTMLElement {
  static readonly tagName = "deml-ruby";
  static readonly componentName = "ruby";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<p>
      <ruby>漢<rp>(</rp><rt>kan</rt><rp>)</rp>字<rp>(</rp><rt>ji</rt><rp>)</rp></ruby>
    </p>`;
    }
  }
}

export function defineRuby(): void {
  if (!customElements.get(DemlRuby.tagName)) {
    customElements.define(DemlRuby.tagName, DemlRuby);
  }
}

export default DemlRuby;
