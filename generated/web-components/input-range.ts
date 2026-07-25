/* AUTO-GENERATED from components/input-range/input-range.html — do not edit */
export class DemlInputRange extends HTMLElement {
  static readonly tagName = "deml-input-range";
  static readonly componentName = "input-range";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="input-range-field">Range</label>
    <input id="input-range-field" name="range" type="range" min="0" max="100" value="40">`;
    }
  }
}

export function defineInputRange(): void {
  if (!customElements.get(DemlInputRange.tagName)) {
    customElements.define(DemlInputRange.tagName, DemlInputRange);
  }
}

export default DemlInputRange;
