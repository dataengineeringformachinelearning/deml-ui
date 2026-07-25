/* AUTO-GENERATED from components/image-map/image-map.html — do not edit */
export class DemlImageMap extends HTMLElement {
  static readonly tagName = "deml-image-map";
  static readonly componentName = "image-map";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<img
      src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      alt="Clickable regions"
      usemap="#logo-map"
      width="272"
      height="92">
    <map name="logo-map">
      <area
        shape="rect"
        coords="0,0,136,92"
        href="https://www.google.com"
        alt="Left half">
      <area
        shape="rect"
        coords="136,0,272,92"
        href="https://developer.mozilla.org"
        alt="Right half">
    </map>`;
    }
  }
}

export function defineImageMap(): void {
  if (!customElements.get(DemlImageMap.tagName)) {
    customElements.define(DemlImageMap.tagName, DemlImageMap);
  }
}

export default DemlImageMap;
