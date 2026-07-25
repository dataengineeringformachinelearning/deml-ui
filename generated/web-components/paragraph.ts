/* AUTO-GENERATED from components/paragraph/paragraph.html — do not edit */
export class DemlParagraph extends HTMLElement {
  static readonly tagName = "deml-paragraph";
  static readonly componentName = "paragraph";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<p>
      A paragraph with
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank" rel="noopener noreferrer">a link</a>,
      <em>emphasis</em>,
      <strong>strong</strong>,
      <small>small</small>,
      <s>strikethrough</s>,
      <u>underline</u>,
      <mark>highlighted</mark>,
      <b>bold</b>,
      <i>italic</i>,
      <abbr title="HyperText Markup Language">HTML</abbr>,
      <cite>Cited Title</cite>,
      <q cite="https://example.com">a short quotation</q>,
      <dfn>definition</dfn>,
      <code>inline code</code>,
      <var>x</var>,
      <samp>sample output</samp>,
      <kbd>Ctrl</kbd>+<kbd>C</kbd>,
      H<sub>2</sub>O,
      E=mc<sup>2</sup>,
      <data value="123">one hundred twenty-three</data>,
      and a soft wrap opportunity: supercalifragilisticexpiali<wbr>docious.
    </p>`;
    }
  }
}

export function defineParagraph(): void {
  if (!customElements.get(DemlParagraph.tagName)) {
    customElements.define(DemlParagraph.tagName, DemlParagraph);
  }
}

export default DemlParagraph;
