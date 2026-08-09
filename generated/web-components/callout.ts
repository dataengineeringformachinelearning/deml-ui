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
        <p class="callout__heading">Info</p>
        <p class="callout__text">Highlighted message for the user.</p>
      </div>
      <button type="button" class="callout__close" aria-label="Dismiss">×</button>
    </aside>
    <aside class="callout" role="status" data-tone="success">
      <div class="callout__body">
        <p class="callout__heading">Success</p>
        <p class="callout__text">Changes saved.</p>
      </div>
    </aside>
    <aside class="callout" role="status" data-tone="warning">
      <div class="callout__body">
        <p class="callout__heading">Warning</p>
        <p class="callout__text">You are offline — edits will queue.</p>
      </div>
    </aside>
    <aside class="callout" role="alert" data-tone="danger">
      <div class="callout__body">
        <p class="callout__heading">Danger</p>
        <p class="callout__text">This action cannot be undone.</p>
      </div>
    </aside>
    <aside class="callout" role="status" data-tone="neutral">
      <div class="callout__body">
        <p class="callout__heading">Neutral</p>
        <p class="callout__text">Quiet continuity note.</p>
      </div>
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
