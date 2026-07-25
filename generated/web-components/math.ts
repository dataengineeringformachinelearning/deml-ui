/* AUTO-GENERATED from components/math/math.html — do not edit */
export class DemlMath extends HTMLElement {
  static readonly tagName = "deml-math";
  static readonly componentName = "math";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<math display="block">
      <mrow>
        <mi>a</mi>
        <mo>²</mo>
        <mo>+</mo>
        <mi>b</mi>
        <mo>²</mo>
        <mo>=</mo>
        <mi>c</mi>
        <mo>²</mo>
      </mrow>
    </math>`;
    }
  }
}

export function defineMath(): void {
  if (!customElements.get(DemlMath.tagName)) {
    customElements.define(DemlMath.tagName, DemlMath);
  }
}

export default DemlMath;
