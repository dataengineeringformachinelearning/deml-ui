/* AUTO-GENERATED from components/input-search/input-search.html — do not edit */
export class DemlInputSearch extends HTMLElement {
  static readonly tagName = "deml-input-search";
  static readonly componentName = "input-search";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="input-search-field">Search</label>
    <input id="input-search-field" name="search" type="search" placeholder="Search…">`;
    }
  }
}

export function defineInputSearch(): void {
  if (!customElements.get(DemlInputSearch.tagName)) {
    customElements.define(DemlInputSearch.tagName, DemlInputSearch);
  }
}

export default DemlInputSearch;
