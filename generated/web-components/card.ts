/* AUTO-GENERATED from components/card/card.html — do not edit */
export class DemlCard extends HTMLElement {
  static readonly tagName = "deml-card";
  static readonly componentName = "card";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<article class="card" data-visual="olive">
      <div class="card-copy">
        <p class="card-meta">Feature</p>
        <h3 class="card-heading">Card title</h3>
        <p class="card-subtext">Optional supporting text for the elevated cream module.</p>
        <div class="card-actions">
          <div class="button-group" data-layout="row" role="group">
            <button type="button" class="button button--primary button--pill">Action</button>
          </div>
        </div>
      </div>
      <div class="card-media has-visual" aria-hidden="true"></div>
    </article>`;
    }
  }
}

export function defineCard(): void {
  if (!customElements.get(DemlCard.tagName)) {
    customElements.define(DemlCard.tagName, DemlCard);
  }
}

export default DemlCard;
