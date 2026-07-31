/* AUTO-GENERATED from components/skeleton/skeleton.html — do not edit */
export class DemlSkeleton extends HTMLElement {
  static readonly tagName = "deml-skeleton";
  static readonly componentName = "skeleton";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="skeleton" aria-hidden="true">
      <div class="skeleton__line skeleton__line--short"></div>
      <div class="skeleton__line skeleton__line--long"></div>
      <div class="skeleton__line skeleton__line--medium"></div>
    </div>`;
    }
  }
}

export function defineSkeleton(): void {
  if (!customElements.get(DemlSkeleton.tagName)) {
    customElements.define(DemlSkeleton.tagName, DemlSkeleton);
  }
}

export default DemlSkeleton;
