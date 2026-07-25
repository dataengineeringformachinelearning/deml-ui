/* AUTO-GENERATED from components/input-image/input-image.html — do not edit */
export class DemlInputImage extends HTMLElement {
  static readonly tagName = "deml-input-image";
  static readonly componentName = "input-image";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<input type="image" src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Image submit" width="32" height="32">`;
    }
  }
}

export function defineInputImage(): void {
  if (!customElements.get(DemlInputImage.tagName)) {
    customElements.define(DemlInputImage.tagName, DemlInputImage);
  }
}

export default DemlInputImage;
