/* AUTO-GENERATED from components/form-grid/form-grid.html — do not edit */
export class DemlFormGrid extends HTMLElement {
  static readonly tagName = "deml-form-grid";
  static readonly componentName = "form-grid";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="form-grid">
      <label>First name <input type="text" name="first" /></label>
      <label>Last name <input type="text" name="last" /></label>
      <label>Email <input type="email" name="email" /></label>
      <label>Company <input type="text" name="company" /></label>
    </div>`;
    }
  }
}

export function defineFormGrid(): void {
  if (!customElements.get(DemlFormGrid.tagName)) {
    customElements.define(DemlFormGrid.tagName, DemlFormGrid);
  }
}

export default DemlFormGrid;
