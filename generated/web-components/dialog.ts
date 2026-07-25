/* AUTO-GENERATED from components/dialog/dialog.html — do not edit */
export class DemlDialog extends HTMLElement {
  static readonly tagName = "deml-dialog";
  static readonly componentName = "dialog";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<button type="button" id="open-dialog">Open dialog</button>
    <dialog id="demo-dialog">
      <form method="dialog">
        <h3>Dialog</h3>
        <p>Native modal dialog element.</p>
        <button value="cancel">Close</button>
        <button value="confirm">Confirm</button>
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
