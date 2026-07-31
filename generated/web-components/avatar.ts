/* AUTO-GENERATED from components/avatar/avatar.html — do not edit */
export class DemlAvatar extends HTMLElement {
  static readonly tagName = "deml-avatar";
  static readonly componentName = "avatar";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<span class="avatar" aria-label="Ada Lovelace">
      <span class="avatar__initials" aria-hidden="true">AL</span>
    </span>
    <span class="avatar" aria-label="User photo">
      <img class="avatar__image" src="" alt="" width="40" height="40" />
    </span>`;
    }
  }
}

export function defineAvatar(): void {
  if (!customElements.get(DemlAvatar.tagName)) {
    customElements.define(DemlAvatar.tagName, DemlAvatar);
  }
}

export default DemlAvatar;
