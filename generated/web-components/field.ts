/* AUTO-GENERATED from components/field/field.html — do not edit */
export class DemlField extends HTMLElement {
  static readonly tagName = "deml-field";
  static readonly componentName = "field";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="field" role="group" aria-labelledby="field-label">
      <label class="field__label-wrap" for="field-input">
        <span class="field__label" id="field-label">Field label <span class="field__required" aria-hidden="true">*</span></span>
        <input id="field-input" class="field__control" type="text" name="field" required aria-describedby="field-desc" />
      </label>
      <p class="field__description" id="field-desc">Helper text for the control.</p>
    </div>`;
    }
  }
}

export function defineField(): void {
  if (!customElements.get(DemlField.tagName)) {
    customElements.define(DemlField.tagName, DemlField);
  }
}

export default DemlField;
