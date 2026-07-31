/* AUTO-GENERATED from components/switch/switch.html — do not edit */
export class DemlSwitch extends HTMLElement {
  static readonly tagName = "deml-switch";
  static readonly componentName = "switch";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label class="switch">
      <span class="switch__track">
        <input type="checkbox" role="switch" name="switch-demo" aria-checked="false" />
        <span class="switch__thumb" aria-hidden="true"></span>
      </span>
      <span class="switch__content">
        <span class="switch__label">Enable notifications</span>
        <span class="switch__description">Receive product updates by email.</span>
      </span>
    </label>`;
    }
  }
}

export function defineSwitch(): void {
  if (!customElements.get(DemlSwitch.tagName)) {
    customElements.define(DemlSwitch.tagName, DemlSwitch);
  }
}

export default DemlSwitch;
