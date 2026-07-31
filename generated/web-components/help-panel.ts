/* AUTO-GENERATED from components/help-panel/help-panel.html — do not edit */
export class DemlHelpPanel extends HTMLElement {
  static readonly tagName = "deml-help-panel";
  static readonly componentName = "help-panel";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<aside class="help-panel" aria-labelledby="help-panel-title">
      <h3 id="help-panel-title">Help</h3>
      <p>Contextual guidance for this page.</p>
      <a href="#">Learn more</a>
    </aside>`;
    }
  }
}

export function defineHelpPanel(): void {
  if (!customElements.get(DemlHelpPanel.tagName)) {
    customElements.define(DemlHelpPanel.tagName, DemlHelpPanel);
  }
}

export default DemlHelpPanel;
