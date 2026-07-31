/* AUTO-GENERATED from components/theme-toggle/theme-toggle.html — do not edit */
export class DemlThemeToggle extends HTMLElement {
  static readonly tagName = "deml-theme-toggle";
  static readonly componentName = "theme-toggle";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<button type="button" class="theme-toggle" aria-pressed="false" aria-label="Toggle dark mode">
      Theme
    </button>`;
    }
  }
}

export function defineThemeToggle(): void {
  if (!customElements.get(DemlThemeToggle.tagName)) {
    customElements.define(DemlThemeToggle.tagName, DemlThemeToggle);
  }
}

export default DemlThemeToggle;
