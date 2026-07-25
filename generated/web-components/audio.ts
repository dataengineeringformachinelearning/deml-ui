/* AUTO-GENERATED from components/audio/audio.html — do not edit */
export class DemlAudio extends HTMLElement {
  static readonly tagName = "deml-audio";
  static readonly componentName = "audio";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<audio controls preload="none">
      <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
      <track kind="captions" src="" srclang="en" label="English">
      Your browser does not support the audio element.
    </audio>`;
    }
  }
}

export function defineAudio(): void {
  if (!customElements.get(DemlAudio.tagName)) {
    customElements.define(DemlAudio.tagName, DemlAudio);
  }
}

export default DemlAudio;
