/* AUTO-GENERATED from components/pre/pre.html — do not edit */
export class DemlPre extends HTMLElement {
  static readonly tagName = "deml-pre";
  static readonly componentName = "pre";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<pre><code>function hello() {
  console.log("preformatted code");
}</code></pre>`;
    }
  }
}

export function definePre(): void {
  if (!customElements.get(DemlPre.tagName)) {
    customElements.define(DemlPre.tagName, DemlPre);
  }
}

export default DemlPre;
