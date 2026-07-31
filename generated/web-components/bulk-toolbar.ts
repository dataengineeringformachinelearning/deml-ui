/* AUTO-GENERATED from components/bulk-toolbar/bulk-toolbar.html — do not edit */
export class DemlBulkToolbar extends HTMLElement {
  static readonly tagName = "deml-bulk-toolbar";
  static readonly componentName = "bulk-toolbar";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="bulk-toolbar" role="toolbar" aria-label="Bulk actions">
      <span class="bulk-toolbar__count">3 selected</span>
      <button type="button">Archive</button>
      <button type="button">Delete</button>
      <button type="button">Clear selection</button>
    </div>`;
    }
  }
}

export function defineBulkToolbar(): void {
  if (!customElements.get(DemlBulkToolbar.tagName)) {
    customElements.define(DemlBulkToolbar.tagName, DemlBulkToolbar);
  }
}

export default DemlBulkToolbar;
