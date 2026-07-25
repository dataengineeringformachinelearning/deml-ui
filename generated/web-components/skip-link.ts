/* AUTO-GENERATED from components/skip-link/skip-link.html — do not edit */
export class DemlSkipLink extends HTMLElement {
  static readonly tagName = "deml-skip-link";
  static readonly componentName = "skip-link";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<a class="skip-link" href="#main">Skip to content</a>`;
    }
  }
}

export function defineSkipLink(): void {
  if (!customElements.get(DemlSkipLink.tagName)) {
    customElements.define(DemlSkipLink.tagName, DemlSkipLink);
  }
}

export default DemlSkipLink;
