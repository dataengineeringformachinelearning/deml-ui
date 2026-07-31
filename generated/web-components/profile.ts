/* AUTO-GENERATED from components/profile/profile.html — do not edit */
export class DemlProfile extends HTMLElement {
  static readonly tagName = "deml-profile";
  static readonly componentName = "profile";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="profile">
      <span class="avatar" aria-hidden="true"><span class="avatar__initials">JD</span></span>
      <div class="profile__text">
        <p class="profile__name">Jane Doe</p>
        <p class="profile__meta">jane@example.com</p>
      </div>
    </div>`;
    }
  }
}

export function defineProfile(): void {
  if (!customElements.get(DemlProfile.tagName)) {
    customElements.define(DemlProfile.tagName, DemlProfile);
  }
}

export default DemlProfile;
