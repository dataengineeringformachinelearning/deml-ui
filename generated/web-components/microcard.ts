/* AUTO-GENERATED from components/microcard/microcard.html — do not edit */
export class DemlMicrocard extends HTMLElement {
  static readonly tagName = "deml-microcard";
  static readonly componentName = "microcard";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<article class="microcard"><p class="microcard__label">Label</p><p class="microcard__value">42</p></article>`;
    }
  }
}

export function defineMicrocard(): void {
  if (!customElements.get(DemlMicrocard.tagName)) {
    customElements.define(DemlMicrocard.tagName, DemlMicrocard);
  }
}

export default DemlMicrocard;
