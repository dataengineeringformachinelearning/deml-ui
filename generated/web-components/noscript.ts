/* AUTO-GENERATED from components/noscript/noscript.html — do not edit */
export class DemlNoscript extends HTMLElement {
  static readonly tagName = "deml-noscript";
  static readonly componentName = "noscript";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<noscript>
      <p>JavaScript is disabled. Some demos (canvas, dialog) need it.</p>
    </noscript>
    <p>Visible when scripting is available; <code>&lt;noscript&gt;</code> content shows only when JS is off.</p>`;
    }
  }
}

export function defineNoscript(): void {
  if (!customElements.get(DemlNoscript.tagName)) {
    customElements.define(DemlNoscript.tagName, DemlNoscript);
  }
}

export default DemlNoscript;
