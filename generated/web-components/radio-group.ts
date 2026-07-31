/* AUTO-GENERATED from components/radio-group/radio-group.html — do not edit */
export class DemlRadioGroup extends HTMLElement {
  static readonly tagName = "deml-radio-group";
  static readonly componentName = "radio-group";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<fieldset class="radio-group">
      <legend class="radio-group__legend">Plan</legend>
      <label class="radio-group__option"><input type="radio" name="plan" value="free" /> Free</label>
      <label class="radio-group__option"><input type="radio" name="plan" value="pro" checked /> Pro</label>
      <label class="radio-group__option"><input type="radio" name="plan" value="team" /> Team</label>
    </fieldset>`;
    }
  }
}

export function defineRadioGroup(): void {
  if (!customElements.get(DemlRadioGroup.tagName)) {
    customElements.define(DemlRadioGroup.tagName, DemlRadioGroup);
  }
}

export default DemlRadioGroup;
