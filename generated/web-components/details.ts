/* AUTO-GENERATED from components/details/details.html — do not edit */
export class DemlDetails extends HTMLElement {
  static readonly tagName = "deml-details";
  static readonly componentName = "details";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<details open>
      <summary>Details / summary (open)</summary>
      <p>Expandable disclosure content.</p>
    </details>`;
    }
  }
}

export function defineDetails(): void {
  if (!customElements.get(DemlDetails.tagName)) {
    customElements.define(DemlDetails.tagName, DemlDetails);
  }
}

export default DemlDetails;
