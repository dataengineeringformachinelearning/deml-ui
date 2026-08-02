/* AUTO-GENERATED from components/form-panel/form-panel.html — do not edit */
export class DemlFormPanel extends HTMLElement {
  static readonly tagName = "deml-form-panel";
  static readonly componentName = "form-panel";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<form class="form-panel"><label class="field"><span class="field__label">Email</span><input class="input-text" type="email" /></label><button class="button button--primary" type="submit">Submit</button></form>`;
    }
  }
}

export function defineFormPanel(): void {
  if (!customElements.get(DemlFormPanel.tagName)) {
    customElements.define(DemlFormPanel.tagName, DemlFormPanel);
  }
}

export default DemlFormPanel;
