/* AUTO-GENERATED from components/separator/separator.html — do not edit */
export class DemlSeparator extends HTMLElement {
  static readonly tagName = "deml-separator";
  static readonly componentName = "separator";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<p>Above</p>
    <hr class="separator" />
    <p>Below</p>
    <div class="separator separator--vertical" role="separator" aria-orientation="vertical"></div>`;
    }
  }
}

export function defineSeparator(): void {
  if (!customElements.get(DemlSeparator.tagName)) {
    customElements.define(DemlSeparator.tagName, DemlSeparator);
  }
}

export default DemlSeparator;
