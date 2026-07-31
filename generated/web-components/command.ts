/* AUTO-GENERATED from components/command/command.html — do not edit */
export class DemlCommand extends HTMLElement {
  static readonly tagName = "deml-command";
  static readonly componentName = "command";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="command" role="dialog" aria-modal="true" aria-label="Command palette">
      <input class="command__input" type="search" placeholder="Type a command…" aria-controls="command-list" />
      <ul id="command-list" class="command__list" role="listbox">
        <li role="option" aria-selected="true">Go to dashboard</li>
        <li role="option">Open settings</li>
        <li role="option">Sign out</li>
      </ul>
    </div>`;
    }
  }
}

export function defineCommand(): void {
  if (!customElements.get(DemlCommand.tagName)) {
    customElements.define(DemlCommand.tagName, DemlCommand);
  }
}

export default DemlCommand;
