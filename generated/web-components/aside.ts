/* AUTO-GENERATED from components/aside/aside.html — do not edit */
export class DemlAside extends HTMLElement {
  static readonly tagName = "deml-aside";
  static readonly componentName = "aside";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<aside>
      <h3>Aside</h3>
      <p>Related notes or callouts belong in <code>&lt;aside&gt;</code>.</p>
    </aside>`;
    }
  }
}

export function defineAside(): void {
  if (!customElements.get(DemlAside.tagName)) {
    customElements.define(DemlAside.tagName, DemlAside);
  }
}

export default DemlAside;
