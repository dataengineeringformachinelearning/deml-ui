/* AUTO-GENERATED from components/video/video.html — do not edit */
export class DemlVideo extends HTMLElement {
  static readonly tagName = "deml-video";
  static readonly componentName = "video";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<video controls width="320" height="180" preload="metadata" poster="">
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
      <track kind="captions" src="" srclang="en" label="English">
      Your browser does not support the video element.
    </video>`;
    }
  }
}

export function defineVideo(): void {
  if (!customElements.get(DemlVideo.tagName)) {
    customElements.define(DemlVideo.tagName, DemlVideo);
  }
}

export default DemlVideo;
