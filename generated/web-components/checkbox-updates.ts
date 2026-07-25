/* AUTO-GENERATED from components/checkbox-updates/checkbox-updates.html — do not edit */
export class DemlCheckboxUpdates extends HTMLElement {
  static readonly tagName = "deml-checkbox-updates";
  static readonly componentName = "checkbox-updates";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label><input type="checkbox" name="features" value="updates" checked> Updates</label>`;
    }
  }
}

export function defineCheckboxUpdates(): void {
  if (!customElements.get(DemlCheckboxUpdates.tagName)) {
    customElements.define(DemlCheckboxUpdates.tagName, DemlCheckboxUpdates);
  }
}

export default DemlCheckboxUpdates;
