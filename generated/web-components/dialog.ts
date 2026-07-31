/* AUTO-GENERATED from components/dialog/dialog.html — do not edit */
export class DemlDialog extends HTMLElement {
  static readonly tagName = "deml-dialog";
  static readonly componentName = "dialog";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<button type="button" class="button" data-deml-open-dialog>Open dialog</button>
    <dialog class="dialog" id="demo-dialog">
      <form method="dialog">
        <h3>Dialog</h3>
        <p>Native modal dialog for focused tasks.</p>
        <div class="cluster">
          <button type="submit" class="button" value="cancel">Close</button>
          <button type="submit" class="button" data-variant="primary" value="confirm">Confirm</button>
        </div>
      </form>
    </dialog>`;
    }
  }
}

export function defineDialog(): void {
  if (!customElements.get(DemlDialog.tagName)) {
    customElements.define(DemlDialog.tagName, DemlDialog);
  }
}

export default DemlDialog;
