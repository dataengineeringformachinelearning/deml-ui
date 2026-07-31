/* AUTO-GENERATED from components/confirm-dialog/confirm-dialog.html — do not edit */
export class DemlConfirmDialog extends HTMLElement {
  static readonly tagName = "deml-confirm-dialog";
  static readonly componentName = "confirm-dialog";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<button type="button" class="button" data-deml-open-confirm>Delete item</button>
    <dialog class="confirm-dialog">
      <form method="dialog">
        <h3 class="confirm-dialog__title">Confirm action</h3>
        <p class="confirm-dialog__body">This cannot be undone.</p>
        <div class="confirm-dialog__actions">
          <button type="submit" class="button" value="cancel">Cancel</button>
          <button type="submit" class="button" data-variant="primary" value="confirm">Confirm</button>
        </div>
      </form>
    </dialog>`;
    }
  }
}

export function defineConfirmDialog(): void {
  if (!customElements.get(DemlConfirmDialog.tagName)) {
    customElements.define(DemlConfirmDialog.tagName, DemlConfirmDialog);
  }
}

export default DemlConfirmDialog;
