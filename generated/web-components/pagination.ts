/* AUTO-GENERATED from components/pagination/pagination.html — do not edit */
export class DemlPagination extends HTMLElement {
  static readonly tagName = "deml-pagination";
  static readonly componentName = "pagination";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<nav class="pagination" aria-label="Pagination">
      <button type="button" class="pagination__prev" aria-label="Previous page">Previous</button>
      <ul class="pagination__pages">
        <li><button type="button" aria-current="page">1</button></li>
        <li><button type="button">2</button></li>
        <li><button type="button">3</button></li>
      </ul>
      <button type="button" class="pagination__next" aria-label="Next page">Next</button>
    </nav>`;
    }
  }
}

export function definePagination(): void {
  if (!customElements.get(DemlPagination.tagName)) {
    customElements.define(DemlPagination.tagName, DemlPagination);
  }
}

export default DemlPagination;
