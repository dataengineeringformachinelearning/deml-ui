/* AUTO-GENERATED from components/property-filter/property-filter.html — do not edit */
export class DemlPropertyFilter extends HTMLElement {
  static readonly tagName = "deml-property-filter";
  static readonly componentName = "property-filter";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="property-filter">
      <label for="property-filter-input">Filter</label>
      <div class="property-filter__control">
        <ul class="property-filter__tokens" aria-label="Active filters">
          <li class="property-filter__token">status = active <button type="button" aria-label="Remove">×</button></li>
        </ul>
        <input id="property-filter-input" type="search" placeholder="Filter properties…" />
      </div>
    </div>`;
    }
  }
}

export function definePropertyFilter(): void {
  if (!customElements.get(DemlPropertyFilter.tagName)) {
    customElements.define(DemlPropertyFilter.tagName, DemlPropertyFilter);
  }
}

export default DemlPropertyFilter;
