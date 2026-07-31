/* AUTO-GENERATED from components/page-shell/page-shell.html — do not edit */
export class DemlPageShell extends HTMLElement {
  static readonly tagName = "deml-page-shell";
  static readonly componentName = "page-shell";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="page-shell">
      <div class="page-shell__inner">
        <p>Constrained page canvas content.</p>
      </div>
    </div>`;
    }
  }
}

export function definePageShell(): void {
  if (!customElements.get(DemlPageShell.tagName)) {
    customElements.define(DemlPageShell.tagName, DemlPageShell);
  }
}

export default DemlPageShell;
