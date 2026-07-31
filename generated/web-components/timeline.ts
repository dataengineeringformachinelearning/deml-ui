/* AUTO-GENERATED from components/timeline/timeline.html — do not edit */
export class DemlTimeline extends HTMLElement {
  static readonly tagName = "deml-timeline";
  static readonly componentName = "timeline";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<ol class="timeline">
      <li class="timeline__item">
        <time datetime="2026-07-01">Jul 1</time>
        <p class="timeline__title">Created</p>
        <p class="timeline__description">Resource was created.</p>
      </li>
      <li class="timeline__item">
        <time datetime="2026-07-15">Jul 15</time>
        <p class="timeline__title">Updated</p>
        <p class="timeline__description">Configuration changed.</p>
      </li>
    </ol>`;
    }
  }
}

export function defineTimeline(): void {
  if (!customElements.get(DemlTimeline.tagName)) {
    customElements.define(DemlTimeline.tagName, DemlTimeline);
  }
}

export default DemlTimeline;
