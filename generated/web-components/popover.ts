/* AUTO-GENERATED from components/popover/popover.html — do not edit */
export class DemlPopover extends HTMLElement {
  static readonly tagName = "deml-popover";
  static readonly componentName = "popover";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="popover">
      <button type="button" class="popover__trigger" aria-expanded="false" aria-controls="popover-panel">Open popover</button>
      <div id="popover-panel" class="popover__panel" role="dialog" aria-label="Popover" hidden>
        <p>Popover content for contextual actions.</p>
        <button type="button" class="button">Got it</button>
      </div>
    </div>`;
    }
  }
}

export function definePopover(): void {
  if (!customElements.get(DemlPopover.tagName)) {
    customElements.define(DemlPopover.tagName, DemlPopover);
  }
}

export default DemlPopover;
