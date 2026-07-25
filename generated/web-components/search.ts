/* AUTO-GENERATED from components/search/search.html — do not edit */
export class DemlSearch extends HTMLElement {
  static readonly tagName = "deml-search";
  static readonly componentName = "search";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<search>
      <form role="search" action="#" method="get">
        <label for="site-search">Search</label>
        <input id="site-search" type="search" name="q" placeholder="Search this page">
        <button type="submit">Go</button>
      </form>
    </search>`;
    }
  }
}

export function defineSearch(): void {
  if (!customElements.get(DemlSearch.tagName)) {
    customElements.define(DemlSearch.tagName, DemlSearch);
  }
}

export default DemlSearch;
