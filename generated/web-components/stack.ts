/* AUTO-GENERATED from components/stack/stack.html — do not edit */
export class DemlStack extends HTMLElement {
  static readonly tagName = "deml-stack";
  static readonly componentName = "stack";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="stack">
      <div>Stack item one</div>
      <div>Stack item two</div>
      <div>Stack item three</div>
    </div>`;
    }
  }
}

export function defineStack(): void {
  if (!customElements.get(DemlStack.tagName)) {
    customElements.define(DemlStack.tagName, DemlStack);
  }
}

export default DemlStack;
