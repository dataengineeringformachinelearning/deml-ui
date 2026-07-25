/* AUTO-GENERATED from components/progress/progress.html — do not edit */
export class DemlProgress extends HTMLElement {
  static readonly tagName = "deml-progress";
  static readonly componentName = "progress";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="progress-field">Progress</label>
    <progress id="progress-field" value="70" max="100">70%</progress>`;
    }
  }
}

export function defineProgress(): void {
  if (!customElements.get(DemlProgress.tagName)) {
    customElements.define(DemlProgress.tagName, DemlProgress);
  }
}

export default DemlProgress;
