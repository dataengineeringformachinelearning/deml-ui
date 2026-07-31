/* AUTO-GENERATED from components/sheet/sheet.html — do not edit */
export class DemlSheet extends HTMLElement {
  static readonly tagName = "deml-sheet";
  static readonly componentName = "sheet";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<button type="button" class="button" data-deml-open-sheet>Open sheet</button>
    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title" hidden>
      <header class="sheet__header">
        <h3 id="sheet-title">Sheet title</h3>
        <button type="button" class="sheet__close" aria-label="Close" data-deml-close-sheet>×</button>
      </header>
      <div class="sheet__body">
        <p>Slide-over panel content.</p>
      </div>
      <footer class="sheet__footer">
        <button type="button" class="button" data-deml-close-sheet>Cancel</button>
        <button type="button" class="button" data-variant="primary">Save</button>
      </footer>
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
