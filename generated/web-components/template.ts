/* AUTO-GENERATED from components/template/template.html — do not edit */
export class DemlTemplate extends HTMLElement {
  static readonly tagName = "deml-template";
  static readonly componentName = "template";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<template id="card-template">
      <article class="templated-card">
        <h3></h3>
        <p></p>
      </article>
    </template>
    <div id="template-mount">`;
    }
  }
}

export function defineTemplate(): void {
  if (!customElements.get(DemlTemplate.tagName)) {
    customElements.define(DemlTemplate.tagName, DemlTemplate);
  }
}

export default DemlTemplate;
