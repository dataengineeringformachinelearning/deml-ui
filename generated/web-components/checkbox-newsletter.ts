/* AUTO-GENERATED from components/checkbox-newsletter/checkbox-newsletter.html — do not edit */
export class DemlCheckboxNewsletter extends HTMLElement {
  static readonly tagName = "deml-checkbox-newsletter";
  static readonly componentName = "checkbox-newsletter";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label><input type="checkbox" name="features" value="news"> Newsletter</label>`;
    }
  }
}

export function defineCheckboxNewsletter(): void {
  if (!customElements.get(DemlCheckboxNewsletter.tagName)) {
    customElements.define(DemlCheckboxNewsletter.tagName, DemlCheckboxNewsletter);
  }
}

export default DemlCheckboxNewsletter;
