/* AUTO-GENERATED from components/description-list/description-list.html — do not edit */
export class DemlDescriptionList extends HTMLElement {
  static readonly tagName = "deml-description-list";
  static readonly componentName = "description-list";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<dl>
      <dt>Term</dt>
      <dd>Definition of the term.</dd>
      <dt>Another term</dt>
      <dd>Another definition.</dd>
    </dl>`;
    }
  }
}

export function defineDescriptionList(): void {
  if (!customElements.get(DemlDescriptionList.tagName)) {
    customElements.define(DemlDescriptionList.tagName, DemlDescriptionList);
  }
}

export default DemlDescriptionList;
