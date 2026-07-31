/* AUTO-GENERATED from components/app-footer/app-footer.html — do not edit */
export class DemlAppFooter extends HTMLElement {
  static readonly tagName = "deml-app-footer";
  static readonly componentName = "app-footer";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<footer class="app-footer">
      <p class="app-footer__copy">© Product</p>
      <nav class="app-footer__nav" aria-label="Footer">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </nav>
    </footer>`;
    }
  }
}

export function defineAppFooter(): void {
  if (!customElements.get(DemlAppFooter.tagName)) {
    customElements.define(DemlAppFooter.tagName, DemlAppFooter);
  }
}

export default DemlAppFooter;
