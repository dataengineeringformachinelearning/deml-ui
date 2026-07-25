/* AUTO-GENERATED from components/unordered-list/unordered-list.html — do not edit */
export class DemlUnorderedList extends HTMLElement {
  static readonly tagName = "deml-unordered-list";
  static readonly componentName = "unordered-list";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<ul>
      <li>List item 1</li>
      <li>List item 2
        <ul>
          <li>Nested item</li>
        </ul>
      </li>
      <li>List item 3</li>
    </ul>`;
    }
  }
}

export function defineUnorderedList(): void {
  if (!customElements.get(DemlUnorderedList.tagName)) {
    customElements.define(DemlUnorderedList.tagName, DemlUnorderedList);
  }
}

export default DemlUnorderedList;
