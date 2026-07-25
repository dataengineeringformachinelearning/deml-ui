/* AUTO-GENERATED from components/picture/picture.html — do not edit */
export class DemlPicture extends HTMLElement {
  static readonly tagName = "deml-picture";
  static readonly componentName = "picture";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<picture>
      <source
        media="(min-width: 600px)"
        srcset="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png">
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="Responsive Google logo">
    </picture>`;
    }
  }
}

export function definePicture(): void {
  if (!customElements.get(DemlPicture.tagName)) {
    customElements.define(DemlPicture.tagName, DemlPicture);
  }
}

export default DemlPicture;
