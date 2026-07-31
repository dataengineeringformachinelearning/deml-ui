/* AUTO-GENERATED from components/callout/callout.html — do not edit */
export class DemlCallout extends HTMLElement {
  static readonly tagName = "deml-callout";
  static readonly componentName = "callout";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<aside class="callout" role="status" data-tone="info">
      <div class="callout__body">
        <p class="callout__heading">Callout heading</p>
        <p class="callout__text">Highlighted message for the user.</p>
      </div>
      <button type="button" class="callout__close" aria-label="Dismiss">×</button>
    </aside>`;
    }
  }
}

export function defineCallout(): void {
  if (!customElements.get(DemlCallout.tagName)) {
    customElements.define(DemlCallout.tagName, DemlCallout);
  }
}

export default DemlCallout;
