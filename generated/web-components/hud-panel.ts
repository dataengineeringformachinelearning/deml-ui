/* AUTO-GENERATED from components/hud-panel/hud-panel.html — do not edit */
export class DemlHudPanel extends HTMLElement {
  static readonly tagName = "deml-hud-panel";
  static readonly componentName = "hud-panel";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<section class="hud-panel" aria-labelledby="hud-panel-title">
      <header class="hud-panel__header">
        <h3 id="hud-panel-title">HUD panel</h3>
      </header>
      <div class="hud-panel__body">
        <p>Dashboard panel body.</p>
      </div>
    </section>`;
    }
  }
}

export function defineHudPanel(): void {
  if (!customElements.get(DemlHudPanel.tagName)) {
    customElements.define(DemlHudPanel.tagName, DemlHudPanel);
  }
}

export default DemlHudPanel;
