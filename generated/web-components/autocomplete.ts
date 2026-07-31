/* AUTO-GENERATED from components/autocomplete/autocomplete.html — do not edit */
export class DemlAutocomplete extends HTMLElement {
  static readonly tagName = "deml-autocomplete";
  static readonly componentName = "autocomplete";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="autocomplete">
      <label for="autocomplete-input">Fruit</label>
      <input id="autocomplete-input" type="text" name="fruit" autocomplete="off" aria-autocomplete="list" aria-controls="autocomplete-list" aria-expanded="true" />
      <ul id="autocomplete-list" class="autocomplete__list" role="listbox">
        <li role="option" aria-selected="true">Apple</li>
        <li role="option">Apricot</li>
        <li role="option">Avocado</li>
      </ul>
    </div>`;
    }
  }
}

export function defineAutocomplete(): void {
  if (!customElements.get(DemlAutocomplete.tagName)) {
    customElements.define(DemlAutocomplete.tagName, DemlAutocomplete);
  }
}

export default DemlAutocomplete;
