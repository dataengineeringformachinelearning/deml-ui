/* AUTO-GENERATED from components/meter/meter.html — do not edit */
export class DemlMeter extends HTMLElement {
  static readonly tagName = "deml-meter";
  static readonly componentName = "meter";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="meter-field">Meter</label>
    <meter id="meter-field" min="0" max="100" low="30" high="70" optimum="80" value="65">65</meter>`;
    }
  }
}

export function defineMeter(): void {
  if (!customElements.get(DemlMeter.tagName)) {
    customElements.define(DemlMeter.tagName, DemlMeter);
  }
}

export default DemlMeter;
