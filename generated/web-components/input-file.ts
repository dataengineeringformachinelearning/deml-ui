/* AUTO-GENERATED from components/input-file/input-file.html — do not edit */
export class DemlInputFile extends HTMLElement {
  static readonly tagName = "deml-input-file";
  static readonly componentName = "input-file";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<label for="input-file-field">File</label>
    <input id="input-file-field" name="file" type="file" accept="image/*,.pdf">`;
    }
  }
}

export function defineInputFile(): void {
  if (!customElements.get(DemlInputFile.tagName)) {
    customElements.define(DemlInputFile.tagName, DemlInputFile);
  }
}

export default DemlInputFile;
