/* AUTO-GENERATED from components/empty-state/empty-state.html — do not edit */
export class DemlEmptyState extends HTMLElement {
  static readonly tagName = "deml-empty-state";
  static readonly componentName = "empty-state";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="empty-state" role="status">
      <p class="empty-state__eyebrow">Empty</p>
      <p class="empty-state__title">No items yet</p>
      <p class="empty-state__description">Create your first item to get started.</p>
      <div class="empty-state__actions">
        <button type="button">Create item</button>
      </div>
    </div>`;
    }
  }
}

export function defineEmptyState(): void {
  if (!customElements.get(DemlEmptyState.tagName)) {
    customElements.define(DemlEmptyState.tagName, DemlEmptyState);
  }
}

export default DemlEmptyState;
