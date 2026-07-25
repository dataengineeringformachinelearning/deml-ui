/* AUTO-GENERATED from components/image/image.html — do not edit */
export class DemlImage extends HTMLElement {
  static readonly tagName = "deml-image";
  static readonly componentName = "image";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<figure>
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="Google logo"
        width="272"
        height="92">
      <figcaption>An image inside a figure with a caption.</figcaption>
    </figure>`;
    }
  }
}

export function defineImage(): void {
  if (!customElements.get(DemlImage.tagName)) {
    customElements.define(DemlImage.tagName, DemlImage);
  }
}

export default DemlImage;
