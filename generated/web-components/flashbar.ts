/* AUTO-GENERATED from components/flashbar/flashbar.html — do not edit */
export class DemlFlashbar extends HTMLElement {
  static readonly tagName = "deml-flashbar";
  static readonly componentName = "flashbar";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<ul class="flashbar" aria-label="Notifications">
      <li class="flashbar__item" data-tone="info">
        <p class="flashbar__message">Informational notice.</p>
        <button type="button" class="flashbar__dismiss" aria-label="Dismiss">×</button>
      </li>
      <li class="flashbar__item" data-tone="warning">
        <p class="flashbar__message">Warning notice.</p>
        <button type="button" class="flashbar__dismiss" aria-label="Dismiss">×</button>
      </li>
    </ul>`;
    }
  }
}

export function defineFlashbar(): void {
  if (!customElements.get(DemlFlashbar.tagName)) {
    customElements.define(DemlFlashbar.tagName, DemlFlashbar);
  }
}

export default DemlFlashbar;
