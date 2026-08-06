/* AUTO-GENERATED from components/article/article.html — do not edit */
export class DemlArticle extends HTMLElement {
  static readonly tagName = "deml-article";
  static readonly componentName = "article";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<article class="article">
      <div class="article-body">
        <h2>Section title</h2>
        <p>Body copy for long-form reading — paragraphs, lists, and code.</p>
        <ul>
          <li>First point</li>
          <li>Second point</li>
        </ul>
        <pre><code>npm run build</code></pre>
      </div>
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
