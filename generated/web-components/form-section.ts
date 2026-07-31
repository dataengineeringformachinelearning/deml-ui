/* AUTO-GENERATED from components/form-section/form-section.html — do not edit */
export class DemlFormSection extends HTMLElement {
  static readonly tagName = "deml-form-section";
  static readonly componentName = "form-section";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<section class="form-section">
      <header class="form-section__header">
        <h3 class="form-section__title">Account</h3>
        <p class="form-section__description">Basic profile settings.</p>
      </header>
      <div class="form-section__body">
        <label>Name <input type="text" name="name" /></label>
        <label>Email <input type="email" name="email" /></label>
      </div>
    </section>`;
    }
  }
}

export function defineFormSection(): void {
  if (!customElements.get(DemlFormSection.tagName)) {
    customElements.define(DemlFormSection.tagName, DemlFormSection);
  }
}

export default DemlFormSection;
