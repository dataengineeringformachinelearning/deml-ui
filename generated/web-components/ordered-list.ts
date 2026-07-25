/* AUTO-GENERATED from components/ordered-list/ordered-list.html — do not edit */
export class DemlOrderedList extends HTMLElement {
  static readonly tagName = "deml-ordered-list";
  static readonly componentName = "ordered-list";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<ol>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ol>`;
    }
  }
}

export function defineOrderedList(): void {
  if (!customElements.get(DemlOrderedList.tagName)) {
    customElements.define(DemlOrderedList.tagName, DemlOrderedList);
  }
}

export default DemlOrderedList;
