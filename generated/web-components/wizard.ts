/* AUTO-GENERATED from components/wizard/wizard.html — do not edit */
export class DemlWizard extends HTMLElement {
  static readonly tagName = "deml-wizard";
  static readonly componentName = "wizard";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="wizard" role="dialog" aria-labelledby="wizard-title">
      <header class="wizard__header">
        <h3 id="wizard-title">Setup wizard</h3>
        <ol class="wizard__steps">
          <li aria-current="step">Account</li>
          <li>Preferences</li>
          <li>Confirm</li>
        </ol>
      </header>
      <div class="wizard__body">
        <p>Step content goes here.</p>
      </div>
      <footer class="wizard__footer">
        <button type="button">Back</button>
        <button type="button">Next</button>
      </footer>
    </div>`;
    }
  }
}

export function defineWizard(): void {
  if (!customElements.get(DemlWizard.tagName)) {
    customElements.define(DemlWizard.tagName, DemlWizard);
  }
}

export default DemlWizard;
