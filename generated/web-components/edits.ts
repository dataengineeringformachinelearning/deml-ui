/* AUTO-GENERATED from components/edits/edits.html — do not edit */
export class DemlEdits extends HTMLElement {
  static readonly tagName = "deml-edits";
  static readonly componentName = "edits";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<p>
      <del datetime="2026-07-01">removed text</del>
      <ins datetime="2026-07-25">inserted text</ins>
    </p>`;
    }
  }
}

export function defineEdits(): void {
  if (!customElements.get(DemlEdits.tagName)) {
    customElements.define(DemlEdits.tagName, DemlEdits);
  }
}

export default DemlEdits;
