/* AUTO-GENERATED from components/file-upload/file-upload.html — do not edit */
export class DemlFileUpload extends HTMLElement {
  static readonly tagName = "deml-file-upload";
  static readonly componentName = "file-upload";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<div class="file-upload">
      <label class="file-upload__dropzone" for="file-upload-input">
        <span class="file-upload__title">Drop files here</span>
        <span class="file-upload__hint">or click to browse</span>
        <input id="file-upload-input" class="file-upload__input" type="file" multiple />
      </label>
      <ul class="file-upload__list" aria-label="Selected files"></ul>
    </div>`;
    }
  }
}

export function defineFileUpload(): void {
  if (!customElements.get(DemlFileUpload.tagName)) {
    customElements.define(DemlFileUpload.tagName, DemlFileUpload);
  }
}

export default DemlFileUpload;
