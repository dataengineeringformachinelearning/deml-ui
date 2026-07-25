/* AUTO-GENERATED from components/radio-team/radio-team.html — do not edit */
export class DemlRadioTeam extends HTMLElement {
  static readonly tagName = "deml-radio-team";
  static readonly componentName = "radio-team";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label><input type="radio" name="radio-team" value="team"> Team</label>`;
    }
  }
}

export function defineRadioTeam(): void {
  if (!customElements.get(DemlRadioTeam.tagName)) {
    customElements.define(DemlRadioTeam.tagName, DemlRadioTeam);
  }
}

export default DemlRadioTeam;
