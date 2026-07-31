/* AUTO-GENERATED from components/kbd/kbd.html — do not edit */
export class DemlKbd extends HTMLElement {
  static readonly tagName = "deml-kbd";
  static readonly componentName = "kbd";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<p>Press <kbd class="kbd">⌘</kbd> <kbd class="kbd">K</kbd> to search.</p>`;
    }
  }
}

export function defineKbd(): void {
  if (!customElements.get(DemlKbd.tagName)) {
    customElements.define(DemlKbd.tagName, DemlKbd);
  }
}

export default DemlKbd;
