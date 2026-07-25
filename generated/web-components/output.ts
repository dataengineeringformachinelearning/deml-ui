/* AUTO-GENERATED from components/output/output.html — do not edit */
export class DemlOutput extends HTMLElement {
  static readonly tagName = "deml-output";
  static readonly componentName = "output";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="output-a">A</label>
    <input id="output-a" type="number" value="2">
    <label for="output-b">B</label>
    <input id="output-b" type="number" value="3">
    <output id="output-sum" name="sum" for="output-a output-b">5</output>`;
    }
  }
}

export function defineOutput(): void {
  if (!customElements.get(DemlOutput.tagName)) {
    customElements.define(DemlOutput.tagName, DemlOutput);
  }
}

export default DemlOutput;
