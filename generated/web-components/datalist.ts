/* AUTO-GENERATED from components/datalist/datalist.html — do not edit */
export class DemlDatalist extends HTMLElement {
  static readonly tagName = "deml-datalist";
  static readonly componentName = "datalist";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="datalist-field">Browser</label>
    <input id="datalist-field" name="browser" list="browsers-list" placeholder="Pick or type">
    <datalist id="browsers-list">
      <option value="Chrome"></option>
      <option value="Firefox"></option>
      <option value="Safari"></option>
      <option value="Edge"></option>
    </datalist>`;
    }
  }
}

export function defineDatalist(): void {
  if (!customElements.get(DemlDatalist.tagName)) {
    customElements.define(DemlDatalist.tagName, DemlDatalist);
  }
}

export default DemlDatalist;
