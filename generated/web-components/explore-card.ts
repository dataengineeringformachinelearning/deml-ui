/* AUTO-GENERATED from components/explore-card/explore-card.html — do not edit */
export class DemlExploreCard extends HTMLElement {
  static readonly tagName = "deml-explore-card";
  static readonly componentName = "explore-card";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<article class="explore-card" data-status="operational">
      <header class="explore-card__header">
        <div class="explore-card__meta">
          <span class="status-pill" data-status="up">Operational</span>
          <span class="explore-card__tag">Public Status Page</span>
        </div>
        <h3 class="explore-card__title">Platform Status</h3>
        <p class="explore-card__lede">Live service health for the DEML control plane.</p>
      </header>
      <ul class="explore-card__metrics" role="list">
        <li class="explore-card__metric">
          <span class="explore-card__metric-label">Cumulative SLA</span>
          <span class="explore-card__metric-value">99.98%</span>
          <span class="explore-card__metric-meta">Based on real telemetry</span>
        </li>
        <li class="explore-card__metric">
          <span class="explore-card__metric-label">P99 Latency</span>
          <span class="explore-card__metric-value">42ms</span>
          <span class="explore-card__metric-meta">Last 24h</span>
        </li>
        <li class="explore-card__metric">
          <span class="explore-card__metric-label">Spike Risk</span>
          <span class="explore-card__metric-value">12.00</span>
          <span class="explore-card__metric-meta">Dynamic Temporal Forecasting</span>
        </li>
        <li class="explore-card__metric">
          <span class="explore-card__metric-label">Threat Anomaly</span>
          <span class="explore-card__metric-value">0.40%</span>
          <span class="explore-card__metric-meta">Active</span>
        </li>
      </ul>
      <div class="explore-card__uptime">
        <div class="explore-card__uptime-head">
          <span class="explore-card__uptime-label">Uptime</span>
          <span class="explore-card__uptime-value">99.9%</span>
        </div>
        <div class="explore-card__uptime-track" aria-hidden="true">
          <span class="explore-card__uptime-seg" data-status="up"></span>
          <span class="explore-card__uptime-seg" data-status="up"></span>
          <span class="explore-card__uptime-seg" data-status="partial"></span>
          <span class="explore-card__uptime-seg" data-status="up"></span>
          <span class="explore-card__uptime-seg" data-status="up"></span>
        </div>
        <p class="explore-card__uptime-summary">No current issues</p>
      </div>
      <footer class="explore-card__footer">
        <a class="button button--primary button--pill" href="#">View status</a>
      </footer>
    </article>`;
    }
  }
}

export function defineExploreCard(): void {
  if (!customElements.get(DemlExploreCard.tagName)) {
    customElements.define(DemlExploreCard.tagName, DemlExploreCard);
  }
}

export default DemlExploreCard;
