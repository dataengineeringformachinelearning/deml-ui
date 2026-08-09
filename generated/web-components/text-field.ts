/* AUTO-GENERATED from components/text-field/text-field.html — do not edit */
export class DemlTextField extends HTMLElement {
  static readonly tagName = "deml-text-field";
  static readonly componentName = "text-field";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label class="text-field">
      <span class="text-field__label">Name</span>
      <input class="text-field__control" type="text" name="name" value="Ada Lovelace" autocomplete="name" />
      <span class="text-field__hint">Shown on your public profile.</span>
    </label>
    <label class="text-field">
      <span class="text-field__label">Email</span>
      <input class="text-field__control" type="email" name="email" placeholder="you@example.com" />
    </label>
    <label class="text-field" data-invalid="true">
      <span class="text-field__label">Slug</span>
      <input
        class="text-field__control"
        type="text"
        name="slug"
        id="demo-slug"
        value="Bad Slug"
        aria-invalid="true"
        aria-describedby="demo-slug-error demo-slug-hint"
      />
      <span class="text-field__hint" id="demo-slug-hint">Lowercase letters and hyphens.</span>
      <span class="text-field__error" id="demo-slug-error" role="alert">Use lowercase letters and hyphens.</span>
    </label>
    <label class="text-field">
      <span class="text-field__label">Locked</span>
      <input class="text-field__control" type="text" value="Read only" disabled />
    </label>`;
    }
  }
}

export function defineTextField(): void {
  if (!customElements.get(DemlTextField.tagName)) {
    customElements.define(DemlTextField.tagName, DemlTextField);
  }
}

export default DemlTextField;
