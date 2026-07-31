/* AUTO-GENERATED from components/toggle/toggle.html — do not edit */
export class DemlToggle extends HTMLElement {
  static readonly tagName = "deml-toggle";
  static readonly componentName = "toggle";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="toggle-group" role="group" aria-label="View">
      <button type="button" class="toggle" aria-pressed="true">List</button>
      <button type="button" class="toggle" aria-pressed="false">Grid</button>
    </div>`;
    }
  }
}

export function defineToggle(): void {
  if (!customElements.get(DemlToggle.tagName)) {
    customElements.define(DemlToggle.tagName, DemlToggle);
  }
}

export default DemlToggle;
