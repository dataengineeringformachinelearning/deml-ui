/* AUTO-GENERATED from components/icon/icon.html — do not edit */
export class DemlIcon extends HTMLElement {
  static readonly tagName = "deml-icon";
  static readonly componentName = "icon";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<svg class="icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2" />
      <path d="M12 8v4l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
    <span class="icon-label">Icon placeholder</span>`;
    }
  }
}

export function defineIcon(): void {
  if (!customElements.get(DemlIcon.tagName)) {
    customElements.define(DemlIcon.tagName, DemlIcon);
  }
}

export default DemlIcon;
