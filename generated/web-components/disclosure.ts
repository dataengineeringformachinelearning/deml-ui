/* AUTO-GENERATED from components/disclosure/disclosure.html — do not edit */
export class DemlDisclosure extends HTMLElement {
  static readonly tagName = "deml-disclosure";
  static readonly componentName = "disclosure";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="disclosure">
      <button type="button" class="disclosure__trigger" aria-expanded="false" aria-controls="disclosure-panel">
        Show more
      </button>
      <div id="disclosure-panel" class="disclosure__panel" hidden>
        Progressive disclosure content.
      </div>
    </div>`;
    }
  }
}

export function defineDisclosure(): void {
  if (!customElements.get(DemlDisclosure.tagName)) {
    customElements.define(DemlDisclosure.tagName, DemlDisclosure);
  }
}

export default DemlDisclosure;
