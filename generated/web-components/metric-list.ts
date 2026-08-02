/* AUTO-GENERATED from components/metric-list/metric-list.html — do not edit */
export class DemlMetricList extends HTMLElement {
  static readonly tagName = "deml-metric-list";
  static readonly componentName = "metric-list";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<ul class="metric-list"><li class="metric-list__item"><span>Metric</span><strong>12</strong></li></ul>`;
    }
  }
}

export function defineMetricList(): void {
  if (!customElements.get(DemlMetricList.tagName)) {
    customElements.define(DemlMetricList.tagName, DemlMetricList);
  }
}

export default DemlMetricList;
