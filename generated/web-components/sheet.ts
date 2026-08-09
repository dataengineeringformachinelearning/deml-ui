/* AUTO-GENERATED from components/sheet/sheet.html — do not edit */
export class DemlSheet extends HTMLElement {
  static readonly tagName = "deml-sheet";
  static readonly componentName = "sheet";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="sheet-overlay" role="presentation">
      <div
        class="sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        aria-describedby="sheet-desc"
        tabindex="-1"
      >
        <button type="button" class="sheet__handle" aria-label="Dismiss"></button>
        <header class="sheet__header">
          <h3 class="sheet__title" id="sheet-title">Confirm action</h3>
        </header>
        <div class="sheet__body">
          <p id="sheet-desc">Bottom sheet on phone; centered panel from 800px.</p>
        </div>
        <footer class="sheet__footer">
          <button type="button" class="button button--secondary button--pill">Cancel</button>
          <button type="button" class="button button--primary button--pill">Confirm</button>
        </footer>
      </div>
    </div>`;
    }
  }
}

export function defineSheet(): void {
  if (!customElements.get(DemlSheet.tagName)) {
    customElements.define(DemlSheet.tagName, DemlSheet);
  }
}

export default DemlSheet;
