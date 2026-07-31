/* AUTO-GENERATED from components/activity-list/activity-list.html — do not edit */
export class DemlActivityList extends HTMLElement {
  static readonly tagName = "deml-activity-list";
  static readonly componentName = "activity-list";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<ul class="activity-list" aria-label="Recent activity">
      <li class="activity-list__item">
        <time datetime="2026-07-30T12:00:00Z">12:00</time>
        <p class="activity-list__title">Deploy completed</p>
        <p class="activity-list__meta">production</p>
      </li>
      <li class="activity-list__item">
        <time datetime="2026-07-30T11:40:00Z">11:40</time>
        <p class="activity-list__title">Config updated</p>
        <p class="activity-list__meta">settings</p>
      </li>
    </ul>`;
    }
  }
}

export function defineActivityList(): void {
  if (!customElements.get(DemlActivityList.tagName)) {
    customElements.define(DemlActivityList.tagName, DemlActivityList);
  }
}

export default DemlActivityList;
