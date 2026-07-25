/* AUTO-GENERATED from components/article/article.html — do not edit */
export class DemlArticle extends HTMLElement {
  static readonly tagName = "deml-article";
  static readonly componentName = "article";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<article>
      <header>
        <h3>Article title</h3>
        <p><time datetime="2026-07-25">July 25, 2026</time></p>
      </header>
      <p>This <code>&lt;article&gt;</code> is a self-contained composition with <code>&lt;header&gt;</code> and <code>&lt;footer&gt;</code>.</p>
      <footer>
        <address>
          Written by <a href="mailto:example@example.com">Example Author</a><br>
          123 Demo Street, Example City
        </address>
      </footer>
    </article>`;
    }
  }
}

export function defineArticle(): void {
  if (!customElements.get(DemlArticle.tagName)) {
    customElements.define(DemlArticle.tagName, DemlArticle);
  }
}

export default DemlArticle;
