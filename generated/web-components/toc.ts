/* AUTO-GENERATED from components/toc/toc.html — do not edit */
export class DemlToc extends HTMLElement {
  static readonly tagName = "deml-toc";
  static readonly componentName = "toc";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<nav class="toc" aria-label="Contents">
      <h2 class="toc__heading">Contents</h2>
      <div class="toc__group">
        <h3 class="toc__group-title">Part I</h3>
        <ol class="toc__list">
          <li>
            <a class="toc__item" href="#">
              <span class="toc__num">1</span>
              <span class="toc__label">Getting started</span>
            </a>
          </li>
          <li>
            <a class="toc__item" href="#">
              <span class="toc__num">2</span>
              <span class="toc__label">Keep the codebase clean</span>
            </a>
          </li>
        </ol>
      </div>
    </nav>`;
    }
  }
}

export function defineToc(): void {
  if (!customElements.get(DemlToc.tagName)) {
    customElements.define(DemlToc.tagName, DemlToc);
  }
}

export default DemlToc;
