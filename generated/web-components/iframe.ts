/* AUTO-GENERATED from components/iframe/iframe.html — do not edit */
export class DemlIframe extends HTMLElement {
  static readonly tagName = "deml-iframe";
  static readonly componentName = "iframe";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<iframe
      title="Example embed"
      src="https://example.com"
      width="100%"
      height="160"
      loading="lazy"></iframe>`;
    }
  }
}

export function defineIframe(): void {
  if (!customElements.get(DemlIframe.tagName)) {
    customElements.define(DemlIframe.tagName, DemlIframe);
  }
}

export default DemlIframe;
