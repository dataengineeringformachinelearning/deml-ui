/* AUTO-GENERATED from components/button/button.html — do not edit */
export class DemlButton extends HTMLElement {
  static readonly tagName = "deml-button";
  static readonly componentName = "button";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<button type="button" class="button button--primary">Primary</button>
    <button type="button" class="button button--secondary">Secondary</button>
    <button type="button" class="button button--accent">Accent</button>
    <button type="button" class="button button--primary button--pill">Pill</button>
    <button type="button" class="button button--primary" disabled>Disabled</button>
    <button type="button" class="button button--primary is-busy" aria-busy="true">
      <span class="button__label">Saving</span>
      <span class="button__spinner" aria-hidden="true"></span>
    </button>`;
    }
  }
}

export function defineButton(): void {
  if (!customElements.get(DemlButton.tagName)) {
    customElements.define(DemlButton.tagName, DemlButton);
  }
}

export default DemlButton;
