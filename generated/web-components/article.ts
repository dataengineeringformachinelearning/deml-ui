/* AUTO-GENERATED from components/article/article.html — do not edit */
export class DemlArticle extends HTMLElement {
  static readonly tagName = "deml-article";
  static readonly componentName = "article";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<article class="article"><h1>Article title</h1><p>Body copy.</p></article>`;
    }
  }
}

export function defineArticle(): void {
  if (!customElements.get(DemlArticle.tagName)) {
    customElements.define(DemlArticle.tagName, DemlArticle);
  }
}

export default DemlArticle;
