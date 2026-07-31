/* AUTO-GENERATED from components/card/card.html — do not edit */
export class DemlCard extends HTMLElement {
  static readonly tagName = "deml-card";
  static readonly componentName = "card";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<article class="card">
      <header class="card__header">
        <h3 class="card__title">Card title</h3>
        <p class="card__description">Optional supporting text.</p>
      </header>
      <div class="card__body">
        <p>Card body content.</p>
      </div>
      <footer class="card__footer">
        <button type="button" class="button">Action</button>
      </footer>
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
