/* AUTO-GENERATED from components/slot/slot.html — do not edit */
export class DemlSlot extends HTMLElement {
  static readonly tagName = "deml-slot";
  static readonly componentName = "slot";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<p><slot>Fallback for shadow DOM <code>&lt;slot&gt;</code> (shown as normal content outside a shadow root).</slot></p>`;
    }
  }
}

export function defineSlot(): void {
  if (!customElements.get(DemlSlot.tagName)) {
    customElements.define(DemlSlot.tagName, DemlSlot);
  }
}

export default DemlSlot;
